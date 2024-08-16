import ButtonWhite from 'components/Input/Button_white';
import Button from 'components/Input/Button_dark';
import { DialogCustom } from 'components/Dialog';
import { useState } from 'react';

const data = [
  {
    button: 'Stable & Regulated',
    icon: '/assets/svg/Layer_1.svg',
    header: 'Stable & Regulated',
    body: (
      <div className="relative flex flex-col justify-center w-full gap-5 px-5 -mt-5 overflow-hidden text-base text-black bg-white">
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Nexus Pro: Pioneering Stability in Digital Finance, Your Trusted
          Gateway for crypto and forex markets.
        </span>
        <span>
          At Nexus Pro, we redefine the standards of stability and reliability
          in the digital finance landscape. Our platform is not just about
          transactions; it's about building a secure and regulated environment
          for users seeking stability in the volatile world of cryptocurrencies.
        </span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Stability & Regulation</p>
            <p className="mb-3 text-xl font-bold">
              Navigating the Crypto Terrain with Assurance
            </p>
            <p>
              <span>
                In an industry known for its inherent volatility, Nexus Pro
                stands as a beacon of stability. Our commitment to regulatory
                compliance sets us apart, providing users with the assurance
                that their digital assets are secured within a framework that
                prioritizes transparency and accountability.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Introducing US/EU and EU/US
            </p>
            <p className="mb-3 text-xl font-bold">
              Empowering Your Financial Journey
            </p>
            <p>
              <span>
                Central to our mission are the innovative stable tokens US/EU
                and EU/US. These tokens redefine stability, anchored in major
                fiat currencies, namely the US Dollar and the Euro. Holders of
                these tokens not only experience a secure store of value but
                also gain access to a range of benefits that enhance their
                financial journey.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Unlocking Benefits for Users
            </p>
            <p className="mb-3 text-xl font-bold">
              Seamless Transactions, Reduced Fees, and Global Connectivity
            </p>
            <p>
              <span>
                As a Nexus Pro user, you'll experience a host of benefits. Our
                stable tokens facilitate seamless global transactions, ensuring
                your assets are transferable with minimal fuss. Reduced fees
                make your financial activities more cost-effective, whether
                you're an individual, investor, or business. Furthermore, our
                platform ensures global connectivity, allowing you to engage in
                cross-border transactions effortlessly.
              </span>
            </p>
          </div>
        </div>
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Nexus Pro: Elevating Stability, Redefining Digital Finance
        </span>
        <span>
          In a world of uncertainties, Nexus Pro stands as a stable and
          regulated haven, empowering users with innovative solutions and a
          commitment to financial security. Join us in redefining your financial
          journey – where stability meets innovation. Discover the benefits,
          explore the possibilities, and experience the future of digital
          finance with Nexus Pro.
        </span>
      </div>
    )
  },
  {
    button: 'Instant Settlement',
    icon: '/assets/svg/Layer_2.svg',
    header: 'Instant Settlement with Nexus Pro',
    body: (
      <div className="relative flex flex-col justify-center w-full gap-5 px-5 -mt-5 overflow-hidden text-base text-black bg-white">
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Instant Settlement with Nexus Pro
        </span>
        <span>
          At Nexus Pro, we understand the value of time in the fast-paced world
          of digital finance. That's why we're proud to offer Instant Settlement
          – a feature designed to provide you with immediate and seamless
          transaction finality.
        </span>
        <span className="text-lg font-bold ">Key Features:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Speed of Transactions:</p>
            <p>
              <span>
                Enjoy the benefits of instantaneous settlement, ensuring that
                your transactions are confirmed and finalized in the blink of an
                eye. No more waiting for extended confirmation times; with Nexus
                Pro, your assets are at your disposal promptly.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Enhanced User Experience:</p>
            <p>
              <span>
                Instant Settlement contributes to an enhanced user experience by
                minimizing the time between initiating a transaction and its
                completion. This feature is particularly advantageous for those
                who value efficiency and responsiveness in their financial
                activities.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Reduced Counterparty Risk:
            </p>
            <p>
              <span>
                With instant settlement, the risk of counterparty default is
                significantly reduced. This feature adds an extra layer of
                security, assuring you that once a transaction is initiated, it
                is swiftly and irrevocably settled.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Optimized for Global Transactions:
            </p>
            <p>
              <span>
                Instant Settlement contributes to an enhanced user experience by
                minimizing the time between initiating a transaction and its
                completion. This feature is particularly advantageous for those
                who value efficiency and responsiveness in their financial
                activities.
              </span>
            </p>
          </div>
        </div>
        <span className="text-lg font-bold ">How It Works:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Initiate Your Transaction:
            </p>
            <p>
              <span>
                Simply initiate your transaction on the Nexus Pro platform,
                whether it's a payment, trade, or any other financial activity.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Swift Confirmation:</p>
            <p>
              <span>
                Witness the magic of instant settlement as your transaction is
                promptly confirmed, providing you with the assurance that your
                assets are settled and ready for use.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Real-Time Accessibility:</p>
            <p>
              <span>
                Experience the real-time accessibility of your settled assets.
                No delays, no uncertainties – just immediate access to your
                digital finances.
              </span>
            </p>
          </div>
        </div>
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Join Nexus Pro for Swift and Secure Financial Transactions
        </span>
        <span>
          In a world where time is of the essence, Nexus Pro's Instant
          Settlement sets a new standard for efficiency and reliability in
          digital finance. Join us and experience the power of instant
          settlement, where your financial activities are settled in an instant,
          empowering you with greater control and accessibility.
        </span>
      </div>
    )
  },
  {
    button: 'Near-Zero Cost',
    icon: '/assets/svg/Layer_3.svg',
    header: 'Near-Zero Cost',
    body: (
      <div className="relative flex flex-col justify-center w-full gap-5 px-5 -mt-5 overflow-hidden text-base text-black bg-white">
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Near-Zero Cost Transactions with Nexus Pro
        </span>
        <span>
          At Nexus Pro, we believe in providing a financial ecosystem that not
          only prioritizes efficiency but also minimizes the financial burden on
          our users. Enter Near-Zero Cost Transactions – a feature designed to
          make your digital financial activities cost-effective and accessible.
        </span>
        <span className="text-lg font-bold ">Key Advantages:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Cost-Efficiency:</p>
            <p>
              <span>
                Enjoy the benefits of cost-efficient transactions, where fees
                are kept near-zero. Nexus Pro aims to provide you with a
                platform where the cost of engaging in financial activities is
                minimal, contributing to overall savings.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Enhanced Affordability:</p>
            <p>
              <span>
                Near-Zero Cost Transactions enhance the affordability of your
                financial interactions. Whether you're making payments, trading,
                or engaging in any other transaction, our platform ensures that
                your financial activities are budget-friendly.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Optimized for Everyday Use:
            </p>
            <p>
              <span>
                This feature is not just for occasional transactions; it's
                optimized for everyday use. Conduct your digital financial
                activities without the worry of high transaction costs, making
                Nexus Pro a practical choice for daily transactions.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Transparency in Pricing or charges / fees :
            </p>
            <p>
              <span>
                Nexus Pro prioritizes transparency in pricing. Our near-zero
                cost approach ensures that you have clarity on the fees
                associated with your transactions, allowing you to make informed
                decisions.
              </span>
            </p>
          </div>
        </div>
        <span className="text-lg font-bold ">How It Works:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Initiate Your Transaction:
            </p>
            <p>
              <span>
                Simply initiate your transaction on the Nexus Pro platform,
                whether it's a payment, trade, or any other financial activity.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Minimal Transaction Fees:</p>
            <p>
              <span>
                Experience the near-zero cost advantage as your transaction
                incurs minimal fees. This ensures that a significant portion of
                your funds remains intact, providing you with better value for
                your financial activities.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Affordable Financial Interactions:
            </p>
            <p>
              <span>
                Conduct your financial interactions with confidence, knowing
                that the cost of engagement is optimized for affordability.
                Whether you're an individual or a business, our near-zero cost
                approach caters to your financial needs.
              </span>
            </p>
          </div>
        </div>
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Join Nexus Pro for Affordable and Transparent Transactions
        </span>
        <span>
          In a digital era where every penny counts, Nexus Pro's Near-Zero Cost
          Transactions redefine affordability and transparency in digital
          finance. Join us and experience the freedom of conducting your
          financial activities with minimal costs, empowering you to make the
          most of your digital assets.
        </span>
      </div>
    )
  },
  {
    button: 'open, Global Access',
    icon: '/assets/svg/Layer_4.svg',
    header: 'Open, Global Access',
    body: (
      <div className="relative flex flex-col justify-center w-full gap-5 px-5 -mt-5 overflow-hidden text-base text-black bg-white">
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Open, Global Access with Nexus Pro
        </span>
        <span>
          Nexus Pro breaks down barriers, offering you an open, global financial
          landscape where accessibility knows no bounds. We're dedicated to
          providing users with a platform that transcends geographical
          limitations, ensuring that your digital financial activities are not
          confined by borders.
        </span>
        <span className="text-lg font-bold ">Key Advantages:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Universal Accessibility:</p>
            <p>
              <span>
                Enjoy the freedom of universal accessibility. Nexus Pro is
                designed to cater to users from every corner of the globe,
                making it easy for individuals and businesses to engage in
                digital finance irrespective of their location.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Cross-Border Transactions:
            </p>
            <p>
              <span>
                Say goodbye to the complexities of cross-border transactions.
                Nexus Pro facilitates seamless global transactions, allowing you
                to send, receive, and transact with digital assets effortlessly,
                regardless of the distance between you and your counterparty.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">24/7 Availability:</p>
            <p>
              <span>
                Nexus Pro operates in a realm where time zones don't dictate
                your financial activities. With 24/7 availability, our platform
                ensures that you have unrestricted access to your digital assets
                whenever you need them.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Accessible to All:</p>
            <p>
              <span>
                Whether you're an experienced investor, a frequent traveler, or
                someone new to digital finance, Nexus Pro is accessible to all.
                Our user-friendly interface and inclusive design make digital
                financial activities straightforward and enjoyable.
              </span>
            </p>
          </div>
        </div>
        <span className="text-lg font-bold ">How It Works:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Create Your Account:</p>
            <p>
              <span>
                Open your Nexus Pro account effortlessly. Our user-friendly
                onboarding process ensures that you can join our global
                financial community in just a few simple steps.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Access Anytime, Anywhere:</p>
            <p>
              <span>
                Enjoy the freedom of accessing your Nexus Pro account anytime,
                anywhere. Whether you're at home, in transit, or at the office,
                our platform is designed to be at your fingertips whenever you
                need it.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Engage in Global Transactions:
            </p>
            <p>
              <span>
                Seamlessly engage in global transactions without worrying about
                borders or limitations. Nexus Pro connects you to a world of
                financial possibilities, fostering a truly open and
                interconnected digital finance ecosystem.
              </span>
            </p>
          </div>
        </div>
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Join Nexus Pro for Unrestricted Financial Exploration
        </span>
        <span>
          In a world that thrives on connectivity, Nexus Pro is your gateway to
          open, global access in digital finance. Join us and experience the
          freedom to transact, invest, and explore financial opportunities
          without boundaries. Your financial journey is open, and the world is
          at your fingertips with Nexus Pro.
        </span>
      </div>
    )
  },
  {
    button: 'Widely Used',
    icon: '/assets/svg/Layer_5.svg',
    header: 'Widely Used',
    body: (
      <div className="relative flex flex-col justify-center w-full gap-5 px-5 -mt-5 overflow-hidden text-base text-black bg-white">
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Widely Used Nexus Pro Tokens: EU/US and US/EU
        </span>
        <span>
          Nexus Pro introduces two powerful tokens that have become widely used
          and recognized in the digital finance space – EU/US and US/EU. These
          tokens represent a dynamic fusion of crypto and fiat, offering users a
          stable and versatile medium for various financial activities.
        </span>
        <span className="text-lg font-bold ">Key Advantages:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Stability in Transactions:
            </p>
            <p>
              <span>
                EU/US and US/EU tokens are crafted for stability, anchored in
                major fiat currencies. Users benefit from a secure store of
                value, minimizing the volatility often associated with
                traditional cryptocurrencies.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Versatility in Use:</p>
            <p>
              <span>
                Widely used across various financial scenarios, these tokens
                offer versatility. Whether you're making cross-border payments,
                engaging in international trade, or simply seeking a stable
                investment, EU/US and US/EU tokens are designed to meet your
                diverse financial needs.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Global Recognition:</p>
            <p>
              <span>
                These tokens have gained global recognition for their stability
                and innovative approach to digital finance. Widely used by
                investors, businesses, and individuals, EU/US and US/EU tokens
                have become synonymous with reliability in the digital asset
                realm.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[45%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">
              Efficient Cross-Border Transactions:
            </p>
            <p>
              <span>
                With wide adoption comes efficiency in cross-border
                transactions. Businesses leverage these tokens for seamless
                international trade, while individuals find them instrumental in
                simplifying their financial interactions across different
                regions.
              </span>
            </p>
          </div>
        </div>
        <span className="text-lg font-bold ">How It Works:</span>
        <div className="text-[#263238] flex sm:flex-row flex-col sm:items-stretch items-center flex-wrap justify-center text-center w-full z-20 max-w-[1200px] mx-auto gap-5">
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Hold for Stability:</p>
            <p>
              <span>
                Hold EU/US or US/EU tokens for stability in your digital
                portfolio. These tokens serve as a secure bridge between
                traditional fiat and the evolving world of cryptocurrencies.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Transact with Ease:</p>
            <p>
              <span>
                Enjoy the ease of transacting with widely recognized tokens.
                Whether you're sending funds globally or conducting local
                transactions, EU/US and US/EU tokens provide a straightforward
                and efficient medium.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start sm:w-[30%] w-full px-10 pt-10 pb-16 my-3 bg-gray-100 shadow-lg rounded-xl text-start">
            <p className="font-bold text-blue-500">Invest with Confidence:</p>
            <p>
              <span>
                Investors appreciate the confidence that comes with holding
                widely used tokens. EU/US and US/EU tokens represent a solid
                investment choice, offering stability and reliability in the
                ever-changing landscape of digital assets.
              </span>
            </p>
          </div>
        </div>
        <span className="w-full mt-5 text-2xl font-bold text-black">
          Join the Widely Recognized Nexus Pro Community
        </span>
        <span>
          As EU/US and US/EU tokens continue to gain prominence, Nexus Pro
          invites you to join our community and experience the advantages of
          holding widely recognized tokens. Whether you're a seasoned investor,
          a business professional, or an individual navigating the digital
          finance world, EU/US and US/EU tokens are your keys to stability and
          versatility.
        </span>
      </div>
    )
  }
];

const NexusProToken = ({ setSelectedPage }) => {
  const [openDialog, setopenDialog] = useState(false);
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <div className="flex flex-col items-center w-full px-0 pb-0 text-white sm:pb-10 sm:px-14">
      <div className="">
        <DialogCustom
          body={data[selectedTab]?.body}
          header={data[selectedTab]?.header}
          isOpen={openDialog}
          setOpen={setopenDialog}
        />
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row max-w-[1200px] sm:px-0 px-5">
        <div className="flex flex-col w-full gap-6 md:w-1/2">
          <span className="py-3 text-3xl font-bold sm:leading-[55px] text-white sm:text-5xl">
            <p className="text-[#0088CD] uppercase">Join Nexus Pro</p>
            Redefine Your Digital Finance Journey Today
          </span>
          <div
            className={` text-[18px] flex flex-col gap-3 transition-all font-inter`}
          >
            <p>
              Ready to explore a new dimension of stability with USD/EURO and
              EURO/USD? Join the Nexus Pro community and embark on a journey
              where innovation, reliability, and security converge. Whether
              you're a seasoned investor or a newcomer, Nexus Pro stablecoins
              are here to redefine your digital financial experience.
            </p>
          </div>
          <span className={` font-semibold text-xl italic`}>
            “ Nexus Pro - Elevating Stability, Innovating Digital Finance. ”
          </span>
          <div className="flex flex-wrap gap-8 mt-5 mb-14">
            <Button
              label="Create Account"
              dark
              onClickHandle={() => {
                window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?page=signup`;
              }}
            />
            <ButtonWhite
              label="Nexus Pro Tokens"
              onClickHandle={() => {
                setSelectedPage('nexusprocoin');
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={`flex w-full flex-wrap sm:items-stretch items-center h-full mx-auto justify-evenly sm:gap-0 gap-3 max-w-[1300px] text-center sm:bg-opacity-0 bg-[#263238]`}
      >
        {data?.map((d, i) => (
          <button
            className="md:w-[18%] w-[40%] h-auto my-3 transition-all flex flex-col p-5 justify-center items-center gap-3 cursor-pointer hover:opacity-70 border-[#0088CD] border-2 rounded-2xl bg-gradient-to-r from-[#0088CD00] to-[#0088CD33] backdrop-blur-md"
            key={i}
            onClick={() => {
              setselectedTab(i);
              setopenDialog(true);
            }}
          >
            <img
              loading="lazy"
              src={process.env.REACT_APP_PUBLIC_URL + d?.icon}
              alt="layer"
              className="cursor-pointer w-[70px] h-[70px]"
            />
            <span>{d?.button}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NexusProToken;
