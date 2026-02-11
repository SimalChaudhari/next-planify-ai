import Head from "next/head";
import Landing from "@/components/landing/Landing";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Planify AI - AI Daily Planner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Landing />
    </>
  );
}
