import React from 'react';

const cardStyle = {
  borderRadius: '30px',
  background: '#FFF',
  boxShadow: '0px 1px 20px 1px rgba(228, 229, 233, 0.50)',
};

const IconFreeTime = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none">
    <rect x="0.5" width="100" height="100" rx="16" fill="#F8F8FD" />
    <path d="M50.5997 24C36.2328 24 24.5859 35.5058 24.5859 49.6991C24.5859 63.8924 36.2328 75.3981 50.5997 75.3981" stroke="#B7AEC3" strokeOpacity="0.1" strokeWidth="4" />
    <path d="M50.5996 75.3981C52.2567 75.3981 53.8777 75.2382 55.4467 74.9327C67.1828 72.6466 76.0473 62.2185 76.0473 49.6991C76.0473 35.5058 64.6538 24 50.5996 24" stroke="#1E1A24" strokeWidth="4" strokeLinecap="square" />
    <path d="M61.7527 50.2695C61.7527 43.9614 56.6326 38.8477 50.3168 38.8477C44.0009 38.8477 38.8809 43.9614 38.8809 50.2695C38.8809 56.5775 44.0009 61.6913 50.3168 61.6913C56.6326 61.6913 61.7527 56.5775 61.7527 50.2695Z" fill="#2D2934" />
    <path d="M47 50.8092C47 50.1073 47.1555 49.4757 47.4654 48.9137C47.7754 48.3518 48.1264 47.8669 48.5192 47.4597C48.9115 47.0519 49.2883 46.7241 49.6485 46.4769C50.0088 46.229 50.2381 46.0702 50.3358 46V47.1445C50.3358 47.5111 50.4594 47.8012 50.7069 48.0148C50.9545 48.2278 51.2318 48.3346 51.5389 48.3346C51.683 48.3346 51.8202 48.3083 51.9512 48.2558C52.0821 48.2033 52.205 48.121 52.3205 48.0097L52.5304 47.7984C53.0199 48.1193 53.4115 48.5448 53.706 49.0742C54.0005 49.6041 54.1474 50.1827 54.1474 50.8092C54.1474 51.5224 53.9587 52.1638 53.5802 52.7326C53.2023 53.3014 52.7122 53.7251 52.1107 54.0033C52.2639 53.8342 52.384 53.6418 52.4698 53.4265C52.5561 53.2112 52.599 52.9816 52.599 52.7366C52.599 52.471 52.5487 52.218 52.4481 51.9782C52.3468 51.7377 52.2022 51.523 52.0135 51.3346L50.5737 49.928L49.1465 51.3346C48.9527 51.5282 48.8046 51.7429 48.7022 51.9793C48.5999 52.2157 48.549 52.4682 48.549 52.7366C48.549 52.9816 48.5919 53.2112 48.6782 53.4265C48.764 53.6418 48.8841 53.8342 49.0373 54.0033C48.4358 53.7251 47.9457 53.3014 47.5678 52.7326C47.1893 52.1638 47 51.5224 47 50.8092ZM50.5737 50.9262L51.504 51.836C51.627 51.9588 51.7207 52.0958 51.7865 52.2472C51.8517 52.3985 51.8843 52.5613 51.8843 52.7366C51.8843 53.0918 51.7568 53.3945 51.5017 53.6452C51.2467 53.8959 50.9374 54.0215 50.5737 54.0215C50.2106 54.0215 49.9013 53.8959 49.6463 53.6452C49.3912 53.3945 49.2637 53.0918 49.2637 52.7366C49.2637 52.5693 49.2958 52.4088 49.3592 52.2552C49.4233 52.1015 49.5182 51.9616 49.644 51.836L50.5737 50.9262Z" fill="white" />
  </svg>
);

const IconIntegrate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none">
    <rect x="0.5" width="100" height="100" rx="16" fill="#F8F8FD" />
    <path d="M41.3291 15.5H60.6709C67.0879 15.5 70.2062 15.504 73.6016 16.542C77.2181 17.8434 80.0844 20.7115 81.3857 24.3281H81.3867C82.4948 27.7215 82.5 30.9054 82.5 37.3291V56.6709C82.5 63.0881 82.4951 66.2061 81.457 69.6016C80.1558 73.2174 77.2895 76.0842 73.6738 77.3857C70.2075 78.4949 67.0923 78.5 60.6709 78.5H41.3291C34.9119 78.5 31.7939 78.4951 28.3984 77.457C24.7107 76.085 21.9125 73.2877 20.541 69.5996C19.504 66.2769 19.5 63.1611 19.5 56.6709V37.3291C19.5 30.9139 19.504 27.7956 20.541 24.4014C21.9157 20.7745 24.7198 17.9107 28.4023 16.6123C31.7228 15.5055 34.833 15.5 41.3291 15.5Z" fill="white" stroke="#F9F9F9" />
    <path d="M72.838 34.1993C72.838 29.3638 69.1403 25.666 64.8736 25.666C61.8869 25.666 59.4691 26.6616 57.9758 28.866C56.4825 26.6616 54.0647 25.666 51.5758 25.666C46.7403 25.666 43.0425 29.3638 43.0425 34.1993C43.0425 33.986 43.0425 34.0571 43.0425 34.1993C43.0425 41.3816 49.9403 48.6349 57.9758 51.7638C64.2336 49.7016 72.838 41.3816 72.838 34.1993C72.838 34.0571 72.838 33.986 72.838 34.1993Z" fill="url(#paint0_benefits)" />
    <defs>
      <linearGradient id="paint0_benefits" x1="57.926" y1="25.6841" x2="57.926" y2="51.8087" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF61AD" />
        <stop offset="1" stopColor="#FF2719" />
      </linearGradient>
    </defs>
  </svg>
);

const IconLoseWeight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100" fill="none">
    <rect x="0.5" width="100" height="100" rx="16" fill="#F8F8FD" />
    <path d="M44.598 47.3389L41.7133 44.9956V46.5424H40.3087C39.8759 46.5424 39.5249 46.8928 39.5249 47.3256C39.5249 47.7584 39.8753 48.1094 40.3087 48.1094H41.7133V49.6828L44.598 47.3389Z" fill="#1E1A24" />
    <path d="M50.6287 29.791C53.3324 29.791 55.5242 27.5992 55.5242 24.8955C55.5242 22.1918 53.3324 20 50.6287 20C47.925 20 45.7332 22.1918 45.7332 24.8955C45.7332 27.5992 47.925 29.791 50.6287 29.791Z" fill="#1E1A24" />
    <path d="M68.3774 47.0403L58.6798 31.7452C58.2795 31.1139 57.578 30.7896 56.8801 30.8407H44.8002C44.1034 30.7896 43.402 31.1139 43.0011 31.7452L33.3046 47.0403C32.7256 47.9541 32.9965 49.1643 33.9097 49.7433C34.2352 49.9493 34.5984 50.0479 34.9564 50.0479C35.605 50.0479 36.2397 49.7259 36.6122 49.1376L44.2705 37.0584C44.4991 36.9841 44.7393 37.0648 44.8867 37.562C47.7527 47.2376 44.9592 50.1576 44.8843 54.2211C44.8472 56.2523 44.8809 77.2558 44.8809 77.2558C44.8809 78.7701 46.1114 80 47.6251 80C49.1428 80 50.3705 78.7701 50.3705 77.2558L50.3728 54.2316H51.3063L51.3081 77.2558C51.3081 78.7701 52.5363 80 54.0535 80C55.5677 80 56.7983 78.7701 56.7983 77.2558C56.7983 77.2558 56.8325 56.2523 56.7942 54.2211C56.7199 50.1582 53.9264 47.2376 56.7925 37.562C56.9393 37.0648 57.1794 36.9841 57.4086 37.0584L65.0669 49.1376C65.44 49.7259 66.0741 50.0479 66.7228 50.0479C67.0813 50.0479 67.4445 49.9493 67.77 49.7433C68.6855 49.1638 68.9559 47.9535 68.3774 47.0403Z" fill="#1E1A24" />
    <path d="M61.3762 46.5424H59.9716V44.9956L57.0869 47.3389L59.9716 49.6828V48.1094H61.3762C61.8084 48.1094 62.16 47.759 62.16 47.3256C62.16 46.8922 61.8084 46.5424 61.3762 46.5424Z" fill="#1E1A24" />
  </svg>
);

const BenefitsSection = () => {
  return (
    <div className="relative">
      <p className="text-center text-lg text-[#262626] font-normal mb-20">
        Planify AI is the most advanced calorie tracker.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col p-8 rounded-3xl bg-white" style={cardStyle}>
          <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
            <IconFreeTime />
          </div>
          <h3 className="text-xl font-bold mb-4">Free up your time</h3>
          <p className="text-sm text-gray-700">
            Planify AI automatically calculates your calories, protein, carbs, and
            fat. You can also add your own foods and recipes. So no need to
            calculate calories manually.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col p-8 rounded-3xl bg-white" style={cardStyle}>
          <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
            <IconIntegrate />
          </div>
          <h3 className="text-xl font-bold mb-4">
            Integrate with your favorite fitness products
          </h3>
          <p className="text-sm text-gray-700">
            Planify AI integrates with your favorite fitness products. So you can
            track your calories, protein, carbs, fat AND exercises.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col p-8 rounded-3xl bg-white" style={cardStyle}>
          <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
            <IconLoseWeight />
          </div>
          <h3 className="text-xl font-bold mb-4">Lose weight effortlessly</h3>
          <p className="text-sm text-gray-700">
            Snap a photo with Planify AI, and your phone's depth sensor calculates
            food volume. Our AI then analyzes and breaks down your meal to
            determine calories, protein, carbs, and fat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;