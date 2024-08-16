import { useMode } from 'ModeContext';
import DropDown from 'components/DropDown';
import { useState } from 'react';

const data = [
  {
    question: 'What is Nexus Pro ? ',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        Nexus Pro: Redefining Digital Finance with Stability and Innovation
        Nexus Pro is an advanced blockchain-based financial ecosystem that
        introduces a new era of stability and innovation in the digital finance
        landscape. It offers a range of financial tools, services, and tokens
        designed to bridge the gap between traditional finance and the evolving
        world of cryptocurrencies. At the heart of Nexus Pro are its flagship
        stablecoins, namely US/EU and EU/US, which are meticulously crafted to
        provide users with a secure and reliable store of value.
        <p className="pt-2 pb-3 text-lg italic font-bold text-gray-900">
          Key Features of Nexus Pro:
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          1. Stability in a Volatile Environment:
        </p>
        Nexus Pro prioritizes stability, a crucial factor in the unpredictable
        realm of cryptocurrencies. Its stablecoins, US/EU and EU/US, are
        anchored in major fiat currencies – the US Dollar and Euro. This
        pegging, maintained through smart contracts, ensures a 1:1 ratio,
        mitigating the volatility often associated with traditional
        cryptocurrencies.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. Innovative Financial Tools:
        </p>
        Innovation is woven into the fabric of Nexus Pro. From transparent
        blockchain technology to user-friendly platforms, Nexus Pro is committed
        to staying ahead of the curve. It introduces advanced financial tools,
        including bonds and future contracts, to enhance the ecosystem's
        resilience and provide users with a spectrum of financial instruments.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Global Accessibility and Connectivity:
        </p>
        Nexus Pro operates on a peer-to-peer (P2P) network, allowing users to
        have direct control over their funds. This decentralized approach
        ensures secure and efficient transactions, enabling users to pay, lend,
        transfer, swap, and trade seamlessly. The platform is accessible
        globally, fostering financial inclusion and connectivity without
        geographical limitations.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Decentralized Wallet with Advanced Security:
        </p>
        Nexus Pro offers a decentralized wallet that allows users to manage
        their assets securely. The wallet incorporates advanced security
        measures, providing users with a safe and user-friendly interface to
        interact with their digital assets. It also lays the groundwork for
        future integration with banking services.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Diverse Reserve Management:
        </p>
        The stability of Nexus Pro is reinforced by a diverse reserve management
        strategy. Reserves include major fiat currencies, cryptocurrencies like
        BTC and ETH, stablecoins such as USDT and USDC, as well as conservative
        financial instruments like bonds and future contracts. This diversified
        approach contributes to the platform's resilience.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          6. Developer-Friendly Ecosystem:
        </p>
        Nexus Pro encourages innovation by offering developers robust APIs and
        SDKs. Developers can seamlessly integrate Nexus Pro into existing
        applications or build new Web3 experiences, contributing to the
        advancement of the broader blockchain and financial technology
        landscape.
        <p className="pt-2 pb-3 text-lg italic font-bold text-gray-900">
          Join Nexus Pro: Where Stability Meets Innovation in Digital Finance
        </p>
        Whether you are a seasoned investor, a business seeking efficient
        financial solutions, a developer driving innovation, or an individual
        navigating the digital finance landscape, Nexus Pro invites you to join
        its community. Embark on a journey where stability meets innovation,
        redefining your digital finance experience with Nexus Pro.
      </div>
    )
  },
  {
    question: 'What are the new tokens EU/US or US/EU ?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        {' '}
        The new tokens EU/US and US/EU, introduced by Nexus Pro, represent a
        novel approach to stablecoins in the digital finance space. These tokens
        are designed to provide users with a stable and reliable store of value,
        combining elements of both traditional fiat currencies and
        cryptocurrencies. Let's delve into the specifics of each token:
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          1. EU/US Token:
        </p>
        The EU/US token is a stablecoin pegged to the Euro (EU) and the US
        Dollar (US). It maintains a 1:1 ratio with these major fiat currencies,
        ensuring that the value of one EU/US token is equivalent to one Euro and
        one US Dollar. This stable pegging is enforced through smart contracts,
        adding a layer of stability to the token.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. US/EU Token:
        </p>
        Conversely, the US/EU token is another stablecoin introduced by Nexus
        Pro, pegged to the US Dollar (US) and the Euro (EU). Similar to the
        EU/US token, the US/EU token maintains a fixed 1:1 ratio with the US
        Dollar and Euro. The smart contracts governing the token supply
        dynamically adjust to uphold this stable peg.
        <p className="pt-2 pb-3 text-lg italic font-bold text-gray-900">
          Key Features of EU/US and US/EU Tokens:
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Stability Through Fiat Pegging:
        </p>
        Both tokens, EU/US and US/EU, prioritize stability by pegging their
        value to major fiat currencies. This pegging is crucial for users who
        seek a digital asset with less volatility compared to traditional
        cryptocurrencies.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Blockchain-Based Transparency:
        </p>
        The tokens operate on a blockchain, providing transparency and
        immutability to all transactions. Users can verify the token supply,
        transactions, and reserves through the decentralized ledger, ensuring
        accountability.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Flexible Integration and Usage:
        </p>
        EU/US and US/EU tokens can be seamlessly integrated into various
        applications and financial services. Whether for cross-border
        transactions, payments, or as a stable store of value, these tokens
        offer flexibility in usage.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          6. Reserve Backing for Stability:
        </p>
        To reinforce the stability of EU/US and US/EU tokens, Nexus Pro
        maintains reserves in major fiat currencies, cryptocurrencies,
        stablecoins, and other financial instruments. These reserves contribute
        to the security and robustness of the stablecoin ecosystem.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          7. P2P Network Connectivity:
        </p>
        Both tokens are connected to a peer-to-peer (P2P) network, allowing
        users to have direct control over their funds. The decentralized nature
        of the P2P network ensures secure, efficient, and direct transactions
        between users without the need for intermediaries. By introducing EU/US
        and US/EU tokens, Nexus Pro aims to provide users with a unique and
        stable digital financial experience, combining the strengths of fiat
        currencies and blockchain technology. These stablecoins offer a bridge
        between the traditional financial world and the innovations of the
        cryptocurrency space.
      </div>
    )
  },
  {
    question:
      'How are Nexus Pro Tokens EU/US and US/EU different from a CBDC (central bank digital currency)?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        Nexus Pro Tokens, represented by stablecoins such as EU/US and US/EU,
        differ from Central Bank Digital Currencies (CBDCs) in several key
        aspects. Here's a comparison to highlight the distinctions:
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          1. Issuing Authority:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens:</span>
          Issued by the Nexus Pro, which operates on decentralized blockchain
          technology. The issuance and management are governed by smart
          contracts and decentralized consensus mechanisms.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">CBDC:</span> Issued and
          regulated directly by a central bank or government authority. CBDCs
          are typically considered as the digital representation of a country's
          official curreDecentralization:ncy.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens:</span>
          Operate in a decentralized manner, utilizing blockchain technology to
          enable peer-to-peer transactions without the need for intermediaries.
          Users have control over their funds within the P2P network.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">CBDC:</span> Can be
          centralized or decentralized, depending on the design chosen by the
          issuing central bank. Some CBDCs may be implemented on decentralized
          ledgers, while others may follow a more centralized model.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. Backing Mechanism:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens:</span>
          Backed by reserves that may include major fiat currencies,
          cryptocurrencies, stablecoins,Bonds, Future contracts and other
          financial instruments. The backing is designed to ensure stability and
          maintain a 1:1 peg with traditional fiat currencies.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">CBDC:</span>a Backed by the
          full faith nd credit of the issuing central bank or government. The
          value is tied to the official national currency, and the backing is
          essentially the same as that of physical banknotes and coins.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Private Sector Involvement:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens:</span>
          Developed and managed by private entities(DAO), emphasizing innovation
          and flexibility in the digital finance space. Nexus Pro Tokens are
          designed to enhance financial services through decentralized
          technology.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">CBDC:</span> Typically
          involves the central bank and government authorities. The design and
          implementation may prioritize stability and control over the monetary
          system, addressing specific economic and policy objectives.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Global Accessibility:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens:</span>
          Accessible globally, fostering a borderless digital financial
          ecosystem. Users can engage in cross-border transactions and benefit
          from the decentralized and P2P nature of the network. CBDC: Accessible
          within the jurisdiction of the issuing central bank or government. The
          usage and acceptance of CBDCs may be subject to national regulatory
          frameworks.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Innovation and Integration:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens:</span>
          Encourage innovation in the digital finance space, providing
          developers with APIs and SDKs for integration into various
          applications and Web3 experiences.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">CBDC:</span> Focus on
          integrating digital currency into the existing financial system, often
          with the goal of modernizing payment systems and maintaining monetary
          policy objectives. While both Nexus Pro Tokens and CBDCs aim to
          leverage digital technology for financial transactions, the
          differences lie in their issuance, decentralization, backing
          mechanisms, and overall approach to fostering innovation in the
          financial landscape.
        </p>
      </div>
    )
  },
  {
    question:
      'How is Nexus Pro Tokens EU/US and US/EU different from stable tokens like USDT or USDC ?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        Nexus Pro Tokens, specifically EU/US and US/EU, differ from stablecoins
        like USDT (Tether) or USDC (USD Coin) in several key aspects. Here's a
        comparison to highlight the distinctions:
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          1. Algorithmic Stability vs Fiat-Collateralized:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">
            Nexus Pro Tokens (EU/US, US/EU):
          </span>
          These tokens employ algorithmic stability mechanisms, often using
          smart contracts to maintain a 1:1 peg with major fiat currencies (Euro
          and US Dollar in one pair/token or versa). The stability is
          algorithmically managed without direct fiat collateral, providing a
          decentralized approach. USDT, USDC: These stablecoins are typically
          backed by actual fiat currency reserves held in a custodial account.
          Each token is issued based on the equivalent amount of fiat currency
          held in reserve, creating a direct 1:1 collateralization.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. Reserve Composition:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens: </span>
          Backed by a diverse reserve composition that may include major fiat
          currencies, cryptocurrencies (BTC, ETH), stablecoins, bonds, and
          future contracts. This diversified approach aims to enhance stability
          and security.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">USDT, USDC: </span>Backed
          directly by fiat currency reserves, primarily held in banks. The
          reserve composition is usually limited to the corresponding fiat
          currency and might involve regulatory compliance checks.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Decentralization and Peer-to-Peer Network:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens: </span>
          Operate on a decentralized blockchain, allowing for peer-to-peer
          transactions without the need for intermediaries. Users have direct
          control over their funds within the P2P network.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">USDT, USDC:</span>
          Typically operate on centralized platforms, and transactions may
          involve intermediaries. Users depend on the custodial entity to manage
          and verify the fiat reserves.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Innovation and Developer-Friendly:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens: </span>
          Nexus Pro encourages innovation by offering developers robust APIs and
          SDKs for integration into various applications and Web3 experiences.
          It aims to contribute to the broader blockchain and financial
          technology landscape.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">USDT, USDC: </span>While
          widely used, these stablecoins may not offer the same level of
          innovation or direct integration options for developers compared to a
          platform like Nexus Pro.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Global Accessibility and Cross-Border Transactions:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens: </span>
          Accessible globally, fostering a borderless digital financial
          ecosystem. Users can engage in cross-border transactions seamlessly
          through the P2P network.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">USDT, USDC: </span>
          Accessible globally but subject to regulatory constraints and the
          policies of the custodial entity. Cross-border transactions may
          involve traditional banking channels.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          6. Stability Mechanism:
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Tokens: </span>
          Rely on algorithmic stability mechanisms governed by smart contracts
          to dynamically adjust the token supply and maintain stability.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">USDT, USDC: </span>
          Stability is maintained through the direct backing of fiat currency
          reserves, and the value of each token is tied to the equivalent amount
          of fiat currency held. In summary, Nexus Pro Tokens (EU/US and US/EU)
          differentiate themselves by utilizing algorithmic stability, diverse
          reserve management, decentralization, and a focus on fostering
          innovation. In contrast, stablecoins like USDT and USDC rely on direct
          fiat collateralization and may operate on centralized platforms. The
          choice between them depends on factors such as preference for
          decentralization, reserve composition, and specific use cases.
        </p>
      </div>
    )
  },
  {
    question: 'How to open a new account in Nexus Pro ?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        Look for a "Sign Up" or "Register"button on the website's homepage.
        Click on it to begin the registration process.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          1. Provide Personal Information:
        </p>
        Fill in the required information, which typically includes your full
        name, email address,Phone number and a secure password. Some platforms
        might also request additional details for identity verification.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. Verify Email or phone number:
        </p>
        After submitting the registration form, you may need to verify your
        email address or phone number by clicking on a confirmation link sent to
        the email or phone number that you provided. Enhance the security of
        your account by enabling two-factor authentication. This usually
        involves connecting your account to a 2FA app on your mobile device.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Deposit Funds:
        </p>
        Once your account is verified, you can deposit funds into your Nexus Pro
        account. The available deposit methods may include bank transfers,
        credit/debit cards, or cryptocurrency deposits.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Explore the Platform:
        </p>
        Familiarize yourself with the platform's user interface, trading
        features, and any additional services offered. Different platforms may
        have varying functionalities.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Start Trading:
        </p>
        If you're interested in trading digital assets, you can explore the
        available trading pairs, place orders, and monitor market movements.
        Remember that security is paramount when dealing with cryptocurrency
        platforms. Be cautious of phishing attempts and ensure that you are
        using the official website. Additionally, only use secure networks, and
        keep your login credentials and private keys confidential. Since Nexus
        Pro is a hypothetical platform created in our conversation, please refer
        to official documentation or customer support channels for accurate and
        up-to-date information if such a platform exists in the future.
      </div>
    )
  },
  {
    question: 'How to login with google or twitter(X) to Nexus Pro ?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          <p className="inline">
            1. Click on
            <span className="font-extrabold text-blue">"Sign In" </span>
            or <span className="font-extrabold text-blue">"Log In":</span>
          </p>
        </p>
        <p className="inline">
          Look for the
          <span className="font-extrabold text-blue">"Sign In" </span>or
          <span className="font-extrabold text-blue">"Log In" </span>button on
          the homepage. Click on it to initiate the login process.
        </p>
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. Select Social Media Option:
        </p>
        <p className="inline">
          On the login page, you may see options such as{' '}
          <span className="font-extrabold text-blue">"Login with Google" </span>
          or
          <span className="font-extrabold text-blue">
            "Login with Twitter(X) ."{' '}
          </span>
        </p>
        Click on the preferred option.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Authorization:
        </p>
        If you choose to log in with Google or Twitter(X), you'll be redirected
        to the respective social media platform's login page. Enter your
        credentials and authorize Nexus Pro to access the necessary information.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Account Linking (First Time):
        </p>
        If it's your first time using the social media login option on Nexus
        Pro, you may need to link your social media account with your Nexus Pro
        account. Follow the on-screen instructions to complete this process.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Consent and Permissions:
        </p>
        Grant the necessary permissions and consent for Nexus Pro to access
        basic profile information. This is a standard procedure to link your
        social media account securely.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          6. Two-Factor Authentication (Optional):
        </p>
        Consider enabling two-factor authentication (2FA) for an additional
        layer of security, even if you log in with Google or Twitter(X).
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          7. Access Nexus Pro Dashboard:
        </p>
        Once the authentication is successful, you should be redirected back to
        Nexus Pro, and you'll have access to your account dashboard. By
        providing the option to log in with Google or Twitter(X), Nexus Pro can
        offer users a convenient and streamlined onboarding experience,
        leveraging the authentication mechanisms of well-established social
        media platforms. Remember to follow best security practices and keep
        your accounts secure, especially when using social media logins.
      </div>
    )
  },
  {
    question: 'What does it mean for Nexus Pro to be “minted” or “burned”?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        In the context of cryptocurrencies, the terms "minting" and "burning"
        refer to the creation and destruction of tokens, respectively. Let's
        explore what these terms mean for Nexus Pro:
        <p className="inline">
          <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
            1. Minting:
          </p>
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Definition:</span> Minting
          is the process of creating or generating new tokens. It is often
          associated with the introduction of additional tokens into
          circulation.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Context:</span>{' '}
          In the case of Nexus Pro, minting might involve the creation of new
          stablecoins (such as EU/US or US/EU) to meet demand or maintain the
          peg with fiat currencies. This process could be algorithmically
          controlled within the smart contracts governing the stablecoins.
        </p>
        <p className="inline">
          <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
            2. Burning:
          </p>
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Definition:</span> Burning,
          on the other hand, is the process of permanently removing or
          destroying tokens from circulation. This can be done for various
          reasons, including controlling the token supply or managing the
          stability of the cryptocurrency.
        </p>
        <p className="inline">
          <span className="font-extrabold text-blue">Nexus Pro Context:</span>{' '}
          Burning in Nexus Pro could involve the destruction of stablecoins to
          adjust the total supply. For instance, if there is an excess of stable
          coins in circulation and the peg needs to be maintained, a certain
          amount of stablecoins might be burned to reduce the supply or was
          related to some illegal or scam activity. These processes are common
          in algorithmic stablecoins, where the goal is to keep the value of the
          stablecoin closely pegged to the value of a specific asset, such as a
          fiat currency. The minting and burning mechanisms help regulate the
          supply of stablecoins to maintain stability. It's important to note
          that the exact implementation of minting and burning in Nexus Pro
          would depend on the platform's design, smart contract protocols, and
          the algorithms used to manage the stability of the stablecoins. Users
          and investors should refer to Nexus Pro's documentation or official
          communications for precise details on how minting and burning are
          implemented on the platform.
        </p>
      </div>
    )
  },
  {
    question:
      'How can I convert fiat currency to nexus pro tokens EU/US or US/EU?',
    answer: (
      <div className="flex flex-col items-start text-base font-normal text-left font-inter">
        converting fiat currency to Nexus Pro tokens like EU/US or US/EU
        typically involves a series of steps, and the specific process may vary
        based on the design and features of the Nexus Pro platform. Here is a
        general guide on how you might convert fiat currency to Nexus Pro
        tokens:
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          1. Create an Account:
        </p>
        Start by creating an account on the Nexus Pro platform. This usually
        involves providing your email, creating a password, and completing any
        necessary identity verification procedures.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          2. Complete KYC Verification (For Wire transfer or Bank Deposits/
          Large
        </p>
        amounts): Many cryptocurrency platforms, especially those dealing with
        fiat conversions, require users to undergo Know Your Customer (KYC)
        verification. Submit the required identification documents to comply
        with regulatory standards.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          3. Log In to Your Nexus Pro Account:
        </p>
        Log in to your Nexus Pro account using your credentials.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          4. Deposit Fiat Currency:
        </p>
        Deposit the fiat currency you want to convert into Nexus Pro tokens.
        Platforms may offer various deposit options such as bank transfers,
        credit/debit card payments, or other payment methods.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          5. Navigate to the Trading Section:
        </p>
        Once your fiat funds are deposited, navigate to the trading section of
        the Nexus Pro platform.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          6. Select the Trading Pair:
        </p>
        Choose the trading pair that corresponds to the Nexus Pro token you want
        to acquire. For example, if you want EU/US tokens, you might select the
        EU/US trading pair.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          7. Place an Order:
        </p>
        Decide on the type of order you want to place. Market orders are
        executed at the current market price, while limit orders allow you to
        set a specific price at which you want your order to be executed.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          8. Execute the Trade:
        </p>
        Once you've placed your order, execute the trade. The platform will
        match your order with available sellers, and the trade will be
        completed.
        <p className="pt-1 pb-0 text-lg font-semibold text-gray-800 md:pt-3 md:pb-1">
          9. Confirmation and Token Allocation:
        </p>
        After the trade is completed, you should see the corresponding amount of
        Nexus Pro tokens (EU/US or US/EU) in your wallet / account balance. It's
        essential to note that the specific steps and features may vary
        depending on the Nexus Pro platform's user interface and
        functionalities. Additionally, always follow best security practices,
        such as enabling two-factor authentication and ensuring that you are
        using the official Nexus Pro website.
      </div>
    )
  }
];

const FAQ = () => {
  const { mode } = useMode();
  const [opened, setopened] = useState(null);
  return (
    <div
      className={`py-16  transition-all ${mode ? ' bg-black_md' : 'bg-white'}`}
    >
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center max-w-[1300px] gap-5">
        <span className="text-[#263238] text-5xl font-bold my-6">
          FAQ - Help Center
        </span>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div
            className={`flex flex-col gap-5 md:px-16 px-3 text-xl font-bold  transition-all text-left lg:px-3`}
          >
            {data.map((d, i) => {
              return (
                <DropDown
                  title={d?.question}
                  key={i}
                  body={d?.answer}
                  open={opened === i}
                  setOpen={() => {
                    opened === i ? setopened(null) : setopened(i);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
