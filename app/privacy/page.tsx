// app/privacy/page.tsx

import Image from "next/image";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-base mb-12" style={{ color: '#808080' }}>
          Last updated: February 16, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Introduction
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Eaves AB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our mobile application and website (collectively, the &quot;Service&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Account Information
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              When you create an account, we collect information from your chosen sign-in provider:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Email address (from Apple Sign-In or Google Sign-In)</li>
              <li>Name (from your sign-in provider or as provided during onboarding)</li>
              <li>Profile picture (if you upload one)</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We do not store passwords. Authentication is handled entirely by Apple or Google through their 
              respective sign-in services.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Usage Data
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We automatically collect certain information when you use our Service:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>App interactions (screens viewed, investors and stocks browsed, features used, search queries)</li>
              <li>Device information (device type, operating system, app version)</li>
              <li>Technical data (session duration, app performance metrics)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              AI-Generated Content
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              When you use our AI-powered trade analysis feature, we process:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Trade context data (investor name, stock information, trade details)</li>
              <li>The generated analysis text and cited sources</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              This data is sent to OpenAI for processing and the results are stored in our database associated 
              with your account.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Subscription Data
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              If you subscribe to Eaves Pro, your purchase is processed through the App Store (Apple) or Google Play. 
              We use RevenueCat to manage subscription status and entitlements. We do not have access to your payment 
              card details.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Local Device Storage
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We store the following data locally on your device to provide a seamless experience:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Authentication tokens</li>
              <li>Recent search history</li>
              <li>App preferences (theme, notification settings)</li>
              <li>Feature flag settings</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              This data stays on your device and is not transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We use the collected information for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Providing and maintaining the Service</li>
              <li>Generating AI-powered trade analyses</li>
              <li>Managing your subscription and account</li>
              <li>Sending newsletters and investment insights (if subscribed)</li>
              <li>Analyzing app usage to improve functionality (via anonymized analytics)</li>
              <li>Sending push notifications (if enabled)</li>
              <li>Detecting and preventing fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Data Sharing and Disclosure
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We share your information with the following service providers, each of which processes data only 
              as necessary to provide their service:
            </p>
            
            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Analytics and Product Improvement
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>PostHog</strong> — Product analytics and feature flags. Data is processed in the EU 
              (eu.i.posthog.com). Collects app usage events, device type, and app version.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Authentication
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Firebase Authentication (Google)</strong> — Manages sign-in via Apple and Google. 
              Processes your email, name, and authentication tokens.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              AI Services
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>OpenAI</strong> — Processes trade data to generate AI-powered analyses. Trade context 
              and prompts are sent to OpenAI&apos;s API; responses are stored in our database.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Subscription Management
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>RevenueCat</strong> — Manages in-app subscriptions and purchase verification. 
              Receives your user identifier and purchase receipts.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Image Storage
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Firebase Storage (Google)</strong> — Stores profile pictures and app images.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Hosting and Infrastructure
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Hetzner</strong> — Cloud server hosting in Europe where our backend and database are hosted.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Email Communications
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Beehiiv</strong> — Email newsletter service. If you subscribe to our newsletter, 
              your email address is shared with Beehiiv for delivery.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              App Distribution
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Expo (EAS)</strong> — Provides over-the-air app updates. Receives device and app 
              version information.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Financial Data
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Financial Modeling Prep (FMP)</strong> — Provides institutional trade and stock data 
              displayed in the app. No user personal data is shared with this service.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: '#222' }}>
              Legal Requirements
            </h3>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We may disclose your information if required by law or in response to valid legal requests from 
              public authorities.
            </p>

            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Data Security
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Encryption in transit using HTTPS/TLS</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Authentication via trusted providers (Apple, Google)</li>
              <li>Access controls on all server endpoints</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Your Rights and Choices
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information via your profile settings</li>
              <li><strong>Deletion:</strong> Delete your account and all associated data directly in the app 
              (Settings &gt; Delete Account)</li>
              <li><strong>Analytics opt-out:</strong> Manage analytics preferences in the app settings</li>
              <li><strong>Data portability:</strong> Request your data in a portable format</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              To exercise these rights, contact us at{" "}
              <a href="mailto:johan@eaves.ai" className="underline" style={{ color: '#0978B3' }}>
                johan@eaves.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Account Deletion
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              You can delete your account directly from the app. When you delete your account, we permanently remove:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Your user profile and personal information</li>
              <li>All followed investors and topics</li>
              <li>All AI-generated trade analyses</li>
              <li>Your Firebase authentication account</li>
            </ul>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              This process is immediate and irreversible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Data Retention
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We retain your personal information for as long as your account is active. When you delete your 
              account, all data is removed immediately, except where we are legally required to retain it.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Analytics data is retained according to PostHog&apos;s data retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Our Service is not intended for users under the age of 18. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, please contact 
              us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              International Data Transfers
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              Your data is primarily processed in the European Union:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#444' }}>
              <li>Our backend servers are hosted in Europe (Hetzner)</li>
              <li>Analytics data is processed in the EU (PostHog EU instance)</li>
              <li>Authentication data is processed by Google (Firebase) and may be transferred internationally 
              in accordance with Google&apos;s data processing terms</li>
              <li>AI analysis data is processed by OpenAI in accordance with their data processing agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy and updating the &quot;Last updated&quot; date. Continued use of the Service after 
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4" style={{ color: '#222' }}>
              18. Contact
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: '#444' }}>
If you have questions or concerns about this Privacy Policy, please contact us:

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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#808080' }}>
              © 2025 Eaves AB. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.threads.com/@joineaves" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm transition-colors footer-link" 
                style={{ color: '#808080' }}
              >
                Threads
              </a>
                            <a 
                href="https://www.tiktok.com/@eaves.ai?lang=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm transition-colors footer-link" 
                style={{ color: '#808080' }}
              >
                TikTok
              </a>
                            <a 
                href="https://x.com/Eaves_App" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm transition-colors footer-link" 
                style={{ color: '#808080' }}
              >
                X (Twitter)
              </a>
              <a 
                href="mailto:johan@eaves.ai" 
                className="text-sm transition-colors footer-link" 
                style={{ color: '#808080' }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}