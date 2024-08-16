const Content = () => {
  return (
    <div
      className={` w-full  bg-white overflow-hidden relative -mt-5 flex justify-center flex-col gap-5 py-10`}
    >
      <div
        className="absolute w-[1500px] h-[1500px] rounded-full -top-[500px] -left-[500px] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(17, 154, 222, 0.182) 1%, rgba(87,87,168,0) 100%)'
        }}
      />
      <span className="w-full mt-5 text-4xl font-bold text-center text-blue-500">
        Key Personal Benefits:
      </span>
      <div className="text-[#263238] text-xl flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Personalized Financial Solutions:
          </p>
          <p>
            <span>
              Nexus Pro understands that personal finance is unique. Whether
              you're an individual, a private investor, or a trader, our
              platform offers personalized financial solutions that align with
              your goals.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Easy Currency Conversion:
          </p>
          <p>
            <span>
              Convert USD or Euro into US/EU or EU/US tokens effortlessly. Nexus
              Pro simplifies currency conversion, allowing you to navigate the
              global financial landscape with ease. Or crypto currency, ETH,
              WETH , USDT , USDC , WBTC.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Near-Instant Transactions:
          </p>
          <p>
            <span>
              Experience the convenience of near-instant transactions. Nexus Pro
              ensures that your financial activities happen swiftly, providing
              you with the flexibility to respond to market dynamics promptly.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            No/Low Fees Model:
          </p>
          <p>
            <span>
              Keep more of your assets with Nexus Pro's no/low fees model.
              Whether you're converting currencies or engaging in other
              financial activities, our platform prioritizes cost-effectiveness
              for personal users.
            </span>
          </p>
        </div>
      </div>
      <br />
      <span className="w-full mt-5 text-4xl font-bold text-center text-blue-500">
        How It Works for Individuals, Private Investors, and Traders:
      </span>
      <div className="text-[#263238] text-xl flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Create Your Personal Account:
          </p>
          <p>
            <span>
              Begin your Nexus Pro journey by creating a personal account. Our
              user-friendly onboarding process ensures that you can start
              utilizing the platform quickly.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Access Easy Currency Conversion:
          </p>
          <div className="flex flex-col gap-5">
            <span>
              Utilize Nexus Pro for seamless currency conversion between USD,
              Euro, US/EU, and EU/US tokens.
            </span>
            <span>
              Our platform's accessibility ensures that you have the tools you
              need for your financial activities.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Swift Financial Transactions:
          </p>
          <p>
            <span>
              Enjoy the speed of near-instant transactions. Nexus Pro is
              designed to cater to the fast-paced nature of personal finance,
              ensuring that your transactions happen when you need them.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Benefit from Cost-Efficiency:
          </p>
          <p>
            <span>
              Nexus Pro's no/low fees model contributes to cost-efficiency for
              personal users. Whether you're a private investor or a trader, our
              platform allows you to maximize the value of your financial
              activities.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
