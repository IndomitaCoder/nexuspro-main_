const HowAreIssued = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 bg-white">
      <span
        className={`text-[#263238] text-5xl font-extrabold px-5 text-center`}
      >
        Here's how Nexus Pro tokens work:
      </span>
      <div className={` w-full relative  bg-white overflow-hidden -mt-5 mb-8`}>
        <section className="w-full py-10 overflow-hidden text-[#263238] max-w-[1500px] mx-auto">
          <div className="relative flex flex-row flex-wrap items-stretch justify-center w-full gap-1 text-lg ">
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">Creation</p>
              <p className="text-lg font-inter">
                Nexus Pro tokens are created and deployed on blockchain networks
                using smart contracts (ETH Network/Multichain). These contracts
                define the parameters and functionalities of the tokens,
                including their supply, issuance mechanisms, and dual-pair
                characteristics.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Dual-Pair Mechanism
              </p>
              <p className="text-lg font-inter">
                Each Nexus Pro token represents a pair of major fiat currencies,
                such as USD/EUR (<b>US/EU</b>) or EUR/USD (<b>EU/US</b>). This
                dual-pair mechanism allows users to access both currency pairs
                within a single digital asset, providing enhanced flexibility
                and versatility.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Blockchain Transactions
              </p>
              <p className="text-lg font-inter">
                Transactions involving Nexus Pro tokens are recorded on
                blockchain networks, ensuring transparency, security, and
                immutability. Users can transfer, trade, or hold Nexus Pro
                tokens just like any other digital asset.
              </p>
            </div>

            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">Storage</p>
              <p className="text-lg font-inter">
                Nexus Pro tokens can be stored in compatible cryptocurrency
                wallets, which provide secure storage and management of digital
                assets. Users have full control over their tokens and can access
                them using private keys or other authentication methods.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Trading and Usage
              </p>
              <p className="text-lg font-inter">
                Nexus Pro tokens can be traded on cryptocurrency exchanges or
                used for various purposes, including investments, remittances,
                cross-border transactions, and hedging against currency
                fluctuations. They offer a convenient way to diversify
                portfolios and engage in both traditional and crypto financial
                activities.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Smart Contract Functio nality
              </p>
              <p className="text-lg font-inter">
                Nexus Pro tokens may incorporate additional functionalities
                through smart contracts, such as staking, lending, borrowing, or
                participating in decentralized finance (DeFi) protocols. These
                smart contracts enable automated and trustless execution of
                various financial operations.
              </p>
            </div>
          </div>
        </section>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-10 bg-[#0088CD] rounded-2xl text-white py-8 sm:px-8 px-5 max-w-[800px] w-[95%] mx-auto">
          <div className="w-24 h-24">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/white_logo-min.png'
              }
              alt="wing"
              className="w-full h-full "
            />
          </div>
          <span className="w-full text-lg text-center text-white font-inter sm:text-start">
            Overall, Nexus Pro tokens represent an innovative approach to
            bridging the gap between fiat currencies and cryptocurrencies,
            offering users the best of both worlds in terms of stability,
            liquidity, and functionality.
          </span>
        </div>
      </div>
      <div
        className={` w-full  bg-white overflow-hidden relative -mt-5 flex justify-center flex-col gap-5 py-10`}
      >
        <div
          className="absolute w-[1000px] h-[2000px] rounded-full -top-[500px] -left-[500px] blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(17, 154, 222, 0.182) 1%, rgba(87,87,168,0) 100%)'
          }}
        />
        <span className="text-[#263238] text-4xl font-extrabold text-center w-full">
          How are NexusPro tokens Issued?
        </span>
        <div className="text-[#263238] text-xl flex flex-col items-center text-center w-full">
          <span className="font-bold ">
            Nexus Pro tokens are issued through a process called token minting. 
          </span>
          <span>Here's how it works:</span>
        </div>
        <section className="w-full py-10 overflow-hidden text-[#263238] max-w-[1500px] mx-auto">
          <div className="relative flex flex-row flex-wrap items-stretch justify-center w-full gap-1 ">
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Smart Contract Creation
              </p>
              <p className="text-lg font-inter">
                Nexus Pro tokens are created and deployed on blockchain networks
                through smart contracts. These smart contracts define the rules
                and parameters governing the issuance, supply, and functionality
                of the tokens.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Initial Minting
              </p>
              <p className="text-lg font-inter">
                The initial supply of Nexus Pro tokens is generated through the
                minting process. Minting involves the creation of new tokens
                according to the specifications outlined in the smart contract.
                The total supply of tokens is determined at the outset and can
                vary depending on the design of the token.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Minting Criteria
              </p>
              <p className="text-lg font-inter">
                The criteria for minting new Nexus Pro tokens may vary depending
                on the specific factors such as demand from users, market
                conditions, or predetermined issuance schedules. Some tokens may
                have fixed supplies, while others may allow for dynamic minting
                based on predefined rules.
              </p>
            </div>

            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Authorized Parties
              </p>
              <p className="text-lg font-inter">
                Minting new Nexus Pro tokens typically requires authorization
                from designated parties, such as the project developers, token
                issuers, or governance mechanisms. These authorized parties
                oversee the minting process to ensure compliance with the
                token's rules and objectives.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Blockchain Transactions
              </p>
              <p className="text-lg font-inter">
                Once minted, Nexus Pro tokens are recorded as transactions on
                the blockchain network. These transactions are transparent,
                immutable, and accessible to all network participants. Minting
                transactions are typically visible on blockchain explorers,
                allowing users to verify the creation of new tokens.
              </p>
            </div>
            <div className="flex flex-col items-start md:w-[28%] w-[95%] my-3 py-5 px-5 text-start gap-3">
              <p className="my-3 text-2xl font-bold font-poppins">
                Distribution
              </p>
              <p className="text-lg font-inter">
                After minting, Nexus Pro tokens may be distributed to CEX, DEX
                various stakeholders, including investors, users, liquidity
                providers, or ecosystem participants. The distribution process
                may involve token pre-sales, incentives, or other mechanisms to
                allocate tokens to the intended recipients.
              </p>
            </div>
          </div>
        </section>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-10 bg-[#0088CD] rounded-2xl text-white py-8 sm:px-8 px-5 max-w-[800px] w-[95%] mx-auto">
          <div className="w-24 h-24">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/white_logo-min.png'
              }
              alt="wing"
              className="w-full h-full "
            />
          </div>
          <span className="text-lg text-white w-[80%] font-inter sm:text-start text-center">
            Overall, the issuance of Nexus Pro tokens through minting follows a
            transparent and decentralized process governed by smart contracts
            and blockchain technology. This process ensures the integrity,
            security, and fairness of token creation, contributing to the
            credibility and trustworthiness of the project.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowAreIssued;
