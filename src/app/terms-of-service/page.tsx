import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Adbhut Travel. This agreement governs your use of our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <h1 className="font-headline">Terms of Service</h1>
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="font-headline">1. Agreement to Terms</h2>
            <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2 className="font-headline">2. Services</h2>
            <p>Adbhut Travel provides travel planning, booking services, and related products. All bookings are subject to the terms and conditions of the respective third-party providers (e.g., airlines, hotels, tour operators).</p>

            <h2 className="font-headline">3. User Responsibilities</h2>
            <p>You agree to provide accurate, current, and complete information as may be prompted by any registration forms on the site. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
            
            <h2 className="font-headline">4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Adbhut Travel And Event Pvt. Ltd. and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Adbhut Travel.</p>
            
            <h2 className="font-headline">5. Limitation of Liability</h2>
            <p>In no event shall Adbhut Travel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2 className="font-headline">6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
            
            <h2 className="font-headline">7. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2 className="font-headline">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us.</p>
        </div>
    </div>
  );
}
