import { useMode } from 'ModeContext';

const ContentBridge = () => {
  const { mode } = useMode();
  return (
    <div className="flex flex-col gap-10 ">
      <div className={`rounded-3xl bg-gray-200 max-w-[1200px] mx-auto w-full`}>
        <span className="flex flex-col items-center justify-center pt-8 pb-4 text-xl text-center text-gray-800 sm:flex-row font-inter md:text-3xl">
          <span className="flex mx-5 font-bold">Last Update:</span> Dec 09, 2023
          - 11:30:08 PM UTC
        </span>
        <div className="w-full py-3 border-b-2 border-gray-400"></div>
        <div className="flex flex-col items-center justify-center gap-4 px-5 py-8 mx-auto text-center text-gray-800 lg:px-14 font-inter md:px-10">
          <div className="md:w-[80%] w-full gap-4 flex flex-col text-start ">
            <span className="text-xl font-bold md:text-3xl font-poppins">
              Revolutionizing Cross-Chain Connectivity: Nexus Pro Dual Tokens
              Disruptive Innovation
            </span>
            <span className="text-lg font-bold md:text-2xl font-poppins">
              Bridging the Ethereum Network to All Other Networks
            </span>
            <p className="">
              Nexus Pro's groundbreaking innovation lies in its ability to
              bridge tokens seamlessly from the Ethereum network to various
              other blockchains and networks. This means that Nexus Pro tokens,
              initially minted on the Ethereum network, can be transferred and
              utilized across different blockchain ecosystems with ease.
            </p>
            <p className="">
              By enabling this cross-chain interoperability, Nexus Pro unlocks a
              world of possibilities for users, businesses, and developers. It
              breaks down the barriers between different blockchain networks,
              allowing for greater flexibility, scalability, and accessibility.
            </p>
            <p>
              Whether it's facilitating decentralized finance (DeFi)
              transactions, powering cross-border payments, or enabling
              interoperability between different blockchain platforms, Nexus
              Pro's bridging technology opens up new avenues for innovation and
              collaboration in the digital asset space.
            </p>
            <p>
              With Nexus Pro, users can harness the full potential of blockchain
              technology without being confined to a single network. This
              seamless bridging capability ensures that Nexus Pro remains at the
              forefront of the evolving blockchain landscape, driving forward
              the adoption and integration of decentralized solutions across the
              global economy.
            </p>
            <div className="items-center justify-center inline w-full font-poppins">
              <div className=" max-w-[1030px] flex flex-col items-center justify-center mx-auto gap-10">
                <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
                  <div className="md:w-[40%] w-full gap-3 text-2xl flex flex-col font-semibold text-white ">
                    <span className="flex items-center justify-center w-full p-5 text-center text-white bg-blue-500 bg-blue rounded-t-xl">
                      US/EU
                    </span>
                    <div className="flex flex-col w-full items-start rounded-b-xl bg-[#263238] p-5 shadow-xl gap-5">
                      <span className="text-blue-500">Local Assets</span>
                      <div className="flex flex-col w-full divide-y divide-blue-500 ">
                        <div className="flex flex-row justify-between w-full py-4 md:flex-col lg:flex-row">
                          <div className="flex flex-col items-start font-medium">
                            <span className="font-semibold text-gray_md">
                              0 USDT
                            </span>
                            <span className=" text-[#9f9f9f] text-lg">
                              TUAVzJ91...2mmBMJev
                            </span>
                          </div>
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Copy.svg'
                              }
                              alt="copy"
                              className="cursor-pointer hover:opacity-70"
                            />
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Share.svg'
                              }
                              alt="share"
                              className="cursor-pointer hover:opacity-70"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-between w-full py-4 md:flex-col lg:flex-row">
                          <div className="flex flex-col items-start font-medium">
                            <span className="font-semibold text-gray_md">
                              0 USDT
                            </span>
                            <span className=" text-[#9f9f9f] text-lg">
                              TUAVzJ91...2mmBMJev
                            </span>
                          </div>
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Copy.svg'
                              }
                              alt="copy"
                              className="cursor-pointer hover:opacity-70"
                            />
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Share.svg'
                              }
                              alt="share"
                              className="cursor-pointer hover:opacity-70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        '/assets/images/Swap-min.png'
                      }
                      alt="swap"
                      className="rotate-90 cursor-pointer hover:opacity-70 md:rotate-0"
                    />
                  </div>
                  <div className="md:w-[40%] w-full gap-3 text-2xl flex flex-col font-semibold text-white ">
                    <span className="flex items-center justify-center w-full p-5 text-center text-white bg-blue-500 bg-blue rounded-t-xl">
                      EU/US
                    </span>
                    <div className="flex flex-col w-full items-start rounded-b-xl bg-[#263238] p-5 shadow-xl gap-5">
                      <span className="text-blue-500">Local Assets</span>
                      <div className="flex flex-col w-full divide-y divide-blue-500 ">
                        <div className="flex flex-row justify-between w-full py-4 md:flex-col lg:flex-row">
                          <div className="flex flex-col items-start font-medium">
                            <span className="font-semibold text-gray_md">
                              0 USDT
                            </span>
                            <span className=" text-[#9f9f9f] text-lg">
                              TUAVzJ91...2mmBMJev
                            </span>
                          </div>
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Copy.svg'
                              }
                              alt="copy"
                              className="cursor-pointer hover:opacity-70"
                            />
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Share.svg'
                              }
                              alt="share"
                              className="cursor-pointer hover:opacity-70"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-between w-full py-4 md:flex-col lg:flex-row">
                          <div className="flex flex-col items-start font-medium">
                            <span className="font-semibold text-gray_md">
                              0 USDT
                            </span>
                            <span className=" text-[#9f9f9f] text-lg">
                              TUAVzJ91...2mmBMJev
                            </span>
                          </div>
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Copy.svg'
                              }
                              alt="copy"
                              className="cursor-pointer hover:opacity-70"
                            />
                            <img
                              loading="lazy"
                              src={
                                process.env.REACT_APP_PUBLIC_URL +
                                '/assets/svg/Share.svg'
                              }
                              alt="share"
                              className="cursor-pointer hover:opacity-70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:w-[50%] w-full mx-auto font-inter">
        <span>
          <b>
            Bridging networks, while offering numerous benefits, also come with
            inherent risks that users and developers need to be aware of. Here
            are some potential risks involved with bridging networks:
          </b>
        </span>

        <span>
          <b>Security Vulnerabilities:</b> Bridging networks can introduce
          security vulnerabilities, as transactions and data are transferred
          between different blockchain platforms. Any weaknesses in the bridging
          protocols or smart contracts could be exploited by malicious actors to
          compromise the integrity of the transactions or steal assets.
        </span>

        <span>
          <b>Interoperability Issues:</b> Bridging networks may encounter
          interoperability issues when interacting with different blockchain
          platforms. Incompatibilities in smart contract standards, consensus
          mechanisms, or transaction formats could result in failed or delayed
          transactions, leading to potential financial losses or disruptions in
          service.
        </span>

        <span>
          <b>Centralization Risks:</b> Some bridging solutions rely on
          centralized entities or custodians to facilitate cross-chain
          transactions. This introduces centralization risks, as these entities
          could become single points of failure or targets for attacks. Users
          may also lose control over their assets when entrusting them to
          centralized intermediaries.
        </span>
      </div>
    </div>
  );
};

export default ContentBridge;
