// app/terms/page.tsx

import Image from "next/image";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header style={{ borderBottomWidth: '0px' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6">
          <a
            href="/"
            className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full transition-all active:scale-[0.97] active:opacity-90"
            style={{
              boxShadow: '0 4px 80px rgba(0, 0, 0, 0.06), 0 2px 20px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.04)'
            }}
            aria-label="Back to home"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L6 10L12 16"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-medium mb-4" style={{ color: '#222' }}>
          Terms of Service
        </h1>
        <p className="text-base mb-12" style={{ color: '#808080' }}>
          Last updated: December 12, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">

          <section>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              These Terms of Service (&quot;Terms&quot;) apply to the Eaves mobile application and related services
              (the &quot;Application&quot; or &quot;Service&quot;), provided by Eaves AB (&quot;Eaves,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;Service Provider&quot;).
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              By downloading, accessing, or using the Application, you agree to be bound by these Terms.
              If you do not agree, you must not use the Application.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              The Application stores and processes personal data that you have provided to the Service Provider
              in order to provide the Service. It is your responsibility to maintain the security of your phone
              and access to the Application. The Service Provider strongly advises against jailbreaking or
              rooting your phone, which involves removing software restrictions and limitations imposed by the
              official operating system of your device. Such actions could expose your phone to malware,
              viruses, malicious programs, compromise your phone&apos;s security features, and may result in
              the Application not functioning correctly or at all.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Please note that the Application utilizes third-party services that have their own Terms and
              Conditions. Below are the links to the Terms and Conditions of the third-party service providers
              used by the Application:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>
                <a href="https://firebase.google.com/terms/analytics" className="underline" style={{ color: '#0978B3' }}>
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/terms/crashlytics" className="underline" style={{ color: '#0978B3' }}>
                  Firebase Crashlytics
                </a>
              </li>
              <li>
                <a href="https://www.revenuecat.com/terms" className="underline" style={{ color: '#0978B3' }}>
                  RevenueCat
                </a>
              </li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Please be aware that the Service Provider does not assume responsibility for certain aspects.
              Some functions of the Application require an active internet connection, which can be Wi-Fi or
              provided by your mobile network provider. The Service Provider cannot be held responsible if the
              Application does not function at full capacity due to lack of access to Wi-Fi or if you have
              exhausted your data allowance.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              If you are using the application outside of a Wi-Fi area, please be aware that your mobile
              network provider&apos;s agreement terms still apply. Consequently, you may incur charges from
              your mobile provider for data usage during the connection to the application, or other
              third-party charges. By using the application, you accept responsibility for any such charges,
              including roaming data charges if you use the application outside of your home territory
              (i.e., region or country) without disabling data roaming. If you are not the bill payer for
              the device on which you are using the application, they assume that you have obtained
              permission from the bill payer.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Similarly, the Service Provider cannot always assume responsibility for your usage of the
              application. For instance, it is your responsibility to ensure that your device remains
              charged. If your device runs out of battery and you are unable to access the Service, the
              Service Provider cannot be held responsible.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              In terms of the Service Provider&apos;s responsibility for your use of the application, it
              is important to note that while they strive to ensure that it is updated and accurate at all
              times, they do rely on third parties to provide information to them so that they can make it
              available to you. The Service Provider accepts no liability for any loss, direct or indirect,
              that you experience as a result of relying entirely on this functionality of the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              1. Nature of the Service
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves is an informational and educational platform that provides access to financial data,
              market analysis, and publicly available information regarding securities and institutional investors.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: '#444' }}>
              Eaves does not provide:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Investment advice</li>
              <li>Personalized recommendations</li>
              <li>Brokerage or trade execution services</li>
              <li>Portfolio management</li>
              <li>Custody of funds or financial instruments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              2. No Investment Advice
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              All content provided through Eaves is general, impersonal, and educational in nature.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: '#444' }}>
              Nothing on the Service constitutes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Investment advice</li>
              <li>Financial, legal, or tax advice</li>
              <li>A recommendation or solicitation to buy, sell, or hold any security</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves does not consider your individual financial circumstances, objectives, or risk tolerance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              3. No Advisory or Fiduciary Relationship
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Use of Eaves does not create an investment adviser–client relationship, fiduciary duty, or any
              other advisory relationship between you and Eaves.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You are solely responsible for any investment decisions you make based on information obtained
              through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              4. Regulatory Status
            </h2>
            <p className="leading-relaxed mb-3" style={{ color: '#444' }}>
              Eaves is not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>An investment firm</li>
              <li>An investment adviser</li>
              <li>A broker-dealer</li>
              <li>A portfolio manager</li>
              <li>A credit institution</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves is not registered with, licensed by, or supervised by the Swedish Financial Supervisory
              Authority (Finansinspektionen), the European Securities and Markets Authority (ESMA), the U.S.
              Securities and Exchange Commission (SEC), or any other financial regulatory authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              5. Third-Party Information
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves displays information derived from publicly available sources, including regulatory filings
              and disclosures by third parties.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: '#444' }}>
              Such information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>May be delayed, incomplete, or inaccurate</li>
              <li>Reflects historical data only</li>
              <li>May not represent current positions or full exposure</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves does not verify, audit, or guarantee the accuracy or completeness of third-party data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              6. Performance Information
            </h2>
            <p className="leading-relaxed mb-3" style={{ color: '#444' }}>
              Any performance-related information shown on the Service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Is based on historical or reconstructed data</li>
              <li>Does not represent actual investor results</li>
              <li>Does not account for fees, taxes, transaction costs, or execution timing</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Past performance is not a reliable indicator of future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              7. No Trade Execution or Copy Trading
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves does not facilitate trade execution, automated trading, or copying of trades.
              Any attempt to replicate strategies or transactions shown on the platform is done solely
              at your own discretion and risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              8. Risks of Investing
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Investing in financial markets involves risk, including the potential loss of all or part of
              your investment. Securities may be volatile, illiquid, or unsuitable for certain investors.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You should consult a qualified financial professional before making investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              9. Intellectual Property
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Unauthorized copying, modification, distribution, or reverse-engineering of the Application,
              any part of the Application, or Eaves&apos; trademarks is strictly prohibited.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              All trademarks, copyrights, database rights, and other intellectual property rights related
              to the Application remain the exclusive property of Eaves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              10. Use of the Application &amp; Device Responsibility
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              The Application stores and processes personal data in accordance with our Privacy Policy.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You are responsible for maintaining the security of your device and access to the Application.
              Jailbreaking or rooting your device is strongly discouraged, as it may compromise security
              and cause the Application to malfunction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              11. Third-Party Services
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              The Application may use third-party services that have their own terms and conditions,
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Google Analytics for Firebase</li>
              <li>Firebase Crashlytics</li>
              <li>RevenueCat</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves is not responsible for the operation or content of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              12. Internet, Data, and Charges
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Some features of the Application require an active internet connection. Eaves is not
              responsible for lack of functionality due to network issues or exhausted data allowances.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You are responsible for any data or roaming charges incurred through use of the Application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              13. Artificial Intelligence
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              The Application may incorporate Artificial Intelligence (AI) technologies to provide certain
              features or functionality.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              By using the Application, you acknowledge that AI may be used to process data and deliver
              outputs. Eaves uses AI in compliance with applicable laws and without providing personalized
              investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              14. Updates, Modifications, and Termination
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves may update, modify, or discontinue the Application or any part of the Service at any
              time without notice.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You agree to accept updates when offered. If the Service is terminated, all rights granted
              to you under these Terms will cease and you must stop using the Application and delete it
              from your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              15. Limitation of Liability
            </h2>
            <p className="leading-relaxed mb-3" style={{ color: '#444' }}>
              To the maximum extent permitted by law, Eaves shall not be liable for any direct or indirect
              loss or damage arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Use of or reliance on the Service</li>
              <li>Inaccuracies or omissions in content</li>
              <li>Inability to access the Application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              16. Jurisdiction &amp; Compliance
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Use of the Service may be subject to local laws and regulations. You are responsible for
              ensuring that your use of the Application complies with applicable laws in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              17. Changes to These Terms
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves may update these Terms from time to time. Continued use of the Application after
              changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              18. Contact
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="my-8 bg-neutral-100 p-8 rounded-2xl">
              <p className="text-2xl font-medium mb-3" style={{ color: '#222' }}>Eaves AB</p>
              <p className="text-base" style={{ color: '#444' }}>
                Email:{" "}
                <a href="mailto:johan@eaves.ai" className="underline" style={{ color: '#0978B3' }}>
                  johan@eaves.ai
                </a>
              </p>
            </div>
          </section>

        </div>
      </main>

{/* Footer */}
      <footer className="py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-24 relative w-full rounded-3xl overflow-hidden">
            <Image
              src="/logo-placeholder-header.svg"
              alt="Logo"
              width={4000}
              height={40}
              className="object-cover"
            />
          </div>

          {/* Legal info — ABL 28 kap. 5 § + GDPR */}
          <div className="mb-6 flex flex-wrap gap-x-6 gap-y-1">
            <span className="text-s text-[#808080]">Eaves AB</span>
            <span className="text-s text-[#808080]">5595464107</span>
            <span className="text-s text-[#808080]">Stockholm</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#808080]">© 2025 Eaves AB. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="/terms" className="text-sm text-[#808080] transition-colors footer-link">Terms</a>
              <a href="/privacy" className="text-sm text-[#808080] transition-colors footer-link">Privacy</a>
              <a href="https://www.threads.com/@joineaves" target="_blank" rel="noopener noreferrer" className="text-sm text-[#808080] transition-colors footer-link">Threads</a>
              <a href="https://www.tiktok.com/@eaves.ai?lang=en" target="_blank" rel="noopener noreferrer" className="text-sm text-[#808080] transition-colors footer-link">TikTok</a>
              <a href="https://x.com/Eaves_App" target="_blank" rel="noopener noreferrer" className="text-sm text-[#808080] transition-colors footer-link">X (Twitter)</a>
              <a href="mailto:johan@eaves.ai" className="text-sm text-[#808080] transition-colors footer-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}