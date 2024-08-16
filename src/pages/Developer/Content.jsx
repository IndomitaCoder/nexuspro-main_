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
        Key Developer Advantages:
      </span>
      <div className="text-[#263238] text-xl flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Seamless Integration:
          </p>
          <p>
            <span>
              Nexus Pro offers developers a seamless integration process,
              allowing you to incorporate our powerful features into your
              applications effortlessly. Enhance the functionality of your apps
              with our user-friendly APIs and SDKs.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Coming soon - Versatile API and SDK Options:
          </p>
          <p>
            <span>
              Leverage our versatile APIs and SDKs to tailor your applications
              to the specific needs of your user base. Nexus Pro provides
              developers with a range of tools to create diverse and engaging
              user experiences.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Web3 Experiences:
          </p>
          <p>
            <span>
              Fuel the future of Web3 experiences with Nexus Pro. Whether you're
              enhancing decentralized finance (DeFi) applications, building
              blockchain-based solutions, or exploring innovative financial
              technologies, our platform is your gateway to the next frontier.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 bg-gradient-to-b rounded-xl from-white shadow-lg to-blue-50 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Multi-Chain Compatibility:
          </p>
          <p>
            <span>
              Nexus Pro goes beyond boundaries with multi-chain compatibility.
              Developers can integrate our platform into projects on Ethereum
              and several other chains, ensuring flexibility and accessibility
              for a diverse range of users.
            </span>
          </p>
        </div>
      </div>
      <br />
      <span className="w-full mt-5 text-4xl font-bold text-center text-blue-500">
        How Developers Can Get Started:
      </span>
      <div className="text-[#263238] text-xl flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Access Developer Resources:
          </p>
          <p>
            <span>
              Explore the Nexus Pro developer resources to access documentation,
              APIs, and SDKs. Our developer-friendly materials are designed to
              facilitate a smooth integration process.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Choose Your Integration Approach:
          </p>
          <p>
            <span>
              Whether you're enhancing an existing app or building a new Web3
              experience, Nexus Pro allows you to choose the integration
              approach that suits your project requirements. Customize your
              applications with the power of Nexus Pro.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Build Innovative Solutions:
          </p>
          <p>
            <span>
              Nexus Pro opens the door to innovation. Developers can build
              applications that redefine digital finance, offering users a
              secure, efficient, and feature-rich environment for their
              financial activities.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start w-[90%] sm:w-[45%] my-3 pt-10  font-inter pb-16 rounded-xl shadow-lg  bg-gray-100 px-10 text-start gap-3">
          <p className="my-3 text-2xl font-bold font-poppins">
            Explore Multi-Chain Opportunities:
          </p>
          <p>
            <span>
              Take advantage of Nexus Pro's multi-chain compatibility. Explore
              opportunities on Ethereum and various other chains, ensuring that
              your applications are accessible to a broad user base.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
