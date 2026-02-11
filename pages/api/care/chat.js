export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPEN_AI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OpenAI API key is not configured" });
  }

  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    const openaiMessages = [
      {
        role: "system",
        content:
          "You are the Planify Care assistant. Help users with their Planify AI account, billing, scheduling, calendar, to-dos, and product questions. Be friendly, concise, and professional.",
      },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: openaiMessages,
        max_tokens: 512,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const raw = data?.error?.message || "OpenAI request failed";
      const isQuota = response.status === 429 || /quota|billing|usage|limit/i.test(raw);
      const msg = isQuota
        ? "Your AI quota has been reached. Please check your OpenAI plan and billing at platform.openai.com, or try again later."
        : raw;
      return res.status(response.status).json({ error: msg });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return res.status(500).json({ error: "No reply from AI" });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("[Care API]", err);
    return res.status(500).json({
      error: err.message || "Failed to get AI response",
    });
  }
}
