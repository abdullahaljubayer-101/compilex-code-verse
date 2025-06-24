
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-compliex-dark-lighter rounded-lg p-8 border border-compliex-gray-dark space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using ComplieX's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily use ComplieX's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you create an account with us, you are responsible for:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Maintaining the confidentiality of your account and password</li>
                <li>• Restricting access to your computer and account</li>
                <li>• Accepting responsibility for all activities under your account</li>
                <li>• Providing accurate and truthful information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use the service to:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Violate any applicable laws or regulations</li>
                <li>• Transmit harmful or malicious code</li>
                <li>• Interfere with or disrupt the service</li>
                <li>• Attempt to gain unauthorized access to any part of the service</li>
                <li>• Share solutions or engage in academic dishonesty</li>
                <li>• Harass, abuse, or harm other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Content Ownership</h2>
              <p className="text-gray-300 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property of ComplieX and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User-Generated Content</h2>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of any code or content you submit to our platform. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall ComplieX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@compliex.com.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
