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
            Instant Currency Conversion:
          </p>
          <p>
            <span>
              Nexus Pro streamlines the process of converting USD or Euro into
              US/EU or EU/US tokens and vice versa. Enjoy near-instant currency
              conversion, reducing the time it takes for your business to
              respond to dynamic market conditions.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Low to No Fees:
          </p>
          <p>
            <span>
              Minimize the financial impact on your business operations with
              Nexus Pro's low to no fees structure. Our platform is designed to
              enhance your cost-effectiveness, allowing you to allocate
              resources strategically.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Global Financial Reach:
          </p>
          <p>
            <span>
              Expand your business's financial reach globally. Nexus Pro's US/EU
              and EU/US tokens facilitate efficient cross-border transactions,
              enabling your enterprise to engage in international trade with
              reduced friction.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Tailored for Enterprises:
          </p>
          <p>
            <span>
              Nexus Pro understands the unique requirements of enterprises. Our
              platform is tailored to accommodate the scale and complexity of
              business transactions, offering you a robust ecosystem that
              supports your growth objectives.
            </span>
          </p>
        </div>
      </div>
      <br />
      <span className="w-full mt-5 text-4xl font-bold text-center text-blue-500">
        How It Works for Businesses:
      </span>
      <div className="text-[#263238] text-xl flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Create Your Business Account:
          </p>
          <p>
            <span>
              Seamlessly onboard your business onto the Nexus Pro Ecosystem by
              creating a dedicated business account. Our user-friendly
              onboarding process ensures a quick and straightforward setup.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Initiate Currency Conversion:
          </p>
          <p>
            <span>
              Utilize Nexus Pro to convert USD or Euro into US/EU or EU/US
              tokens and vice versa. The platform's intuitive interface ensures
              a user-friendly experience for businesses of all sizes.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Efficient Cross-Border Transactions:
          </p>
          <p>
            <span>
              Leverage the power of Nexus Pro's tokens for efficient
              cross-border transactions. Simplify international trade, reduce
              currency conversion complexities, and optimize your business's
              global financial operations.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Benefit from a Cost-Efficient Ecosystem:
          </p>
          <p>
            <span>
              Nexus Pro's low to no fees model ensures that your business
              benefits from a cost-efficient financial ecosystem. Allocate your
              resources strategically and enhance your bottom line.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
