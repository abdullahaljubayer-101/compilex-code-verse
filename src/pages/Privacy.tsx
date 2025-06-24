
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-compliex-dark-lighter rounded-lg p-8 border border-compliex-gray-dark space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                ComplieX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-compliex-red mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support. This may include your name, email address, username, and other information you choose to provide.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-compliex-red mb-2">Usage Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information about how you use our services, including your coding activity, problem-solving progress, and interaction with our platform features.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-compliex-red mb-2">Technical Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We automatically collect certain technical information, including your IP address, browser type, operating system, and device information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• To provide, maintain, and improve our services</li>
                <li>• To process transactions and send related information</li>
                <li>• To send technical notices, updates, and support messages</li>
                <li>• To respond to your comments, questions, and customer service requests</li>
                <li>• To personalize your learning experience</li>
                <li>• To monitor and analyze trends and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and safety</li>
                <li>• With service providers who assist us in operating our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your account and data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@compliex.com or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
