import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy & Terms of Service",
  description: "Read the Policies, Terms, and Conditions for Adbhut Travel. This agreement governs your use of our website and travel services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <h1 className="font-headline">Policy & Terms of Service</h1>
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="font-headline">1. Agreement to Terms</h2>
            <p>By accessing our website and using our services, you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2 className="font-headline">2. Privacy Policy</h2>
            <p>We are committed to protecting your privacy. This section explains how we collect, use, and disclose your personal data.</p>
            <h3>Types of Data Collected</h3>
            <p>While using our Service, especially when booking a trip or requesting information, we may ask you to provide us with personally identifiable information, including but not limited to: Full Name, Email, Phone Number, Passport Details (for international travel), and Payment Information. This information is necessary to facilitate your travel arrangements.</p>
            <h3>Use of Data</h3>
            <p>Your data is used to plan and manage your travel arrangements, process payments, communicate with you about your booking, and improve our services. We only share your data with third-party suppliers (e.g., airlines, hotels) as necessary to fulfill your booking.</p>
            <h3>Security of Data</h3>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.</p>
            
            <h2 className="font-headline">3. Our Role as a Travel Agent</h2>
            <p>Adbhut Travel And Event Pvt. Ltd. acts as a travel agent. We arrange travel services on your behalf with third-party suppliers such as airlines, hotels, cruise lines, and tour operators. When you make a booking, your contract is directly with these suppliers, and their terms and conditions apply.</p>

            <h2 className="font-headline">4. Bookings, Payments, and Cancellations</h2>
            <p><strong>Bookings:</strong> All bookings are subject to availability and confirmation by the third-party supplier.</p>
            <p><strong>Payments:</strong> Payment schedules will be communicated at the time of booking. Failure to pay on time may result in cancellation.</p>
            <p><strong>Cancellations and Amendments:</strong> If you wish to cancel or amend your booking, you must notify us in writing. Cancellation and amendment charges from third-party suppliers will apply, in addition to any service fees charged by Adbhut Travel. We strongly recommend comprehensive travel insurance.</p>

            <h2 className="font-headline">5. User Responsibilities</h2>
            <p>It is your responsibility to ensure that all travel documents are in order, including but not limited to:</p>
            <ul>
                <li><strong>Passports:</strong> Must be valid for at least 6 months beyond your intended return date.</li>
                <li><strong>Visas:</strong> You are responsible for ensuring you have the correct visas for all countries you are visiting or transiting through.</li>
                <li><strong>Health & Vaccinations:</strong> You must check and comply with any required vaccinations and health precautions for your destination.</li>
            </ul>
            
            <h2 className="font-headline">6. Limitation of Liability</h2>
            <p>As an agent for third-party suppliers, we are not liable for any act, omission, or default of these suppliers. Our liability to you for any losses shall not exceed the total amount paid by you for the specific travel services in question.</p>

            <h2 className="font-headline">7. Governing Law</h2>
            <p>These Terms shall be governed by the laws of India, and the courts of Haryana shall have exclusive jurisdiction over any dispute.</p>
            
            <h2 className="font-headline">8. Changes to These Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by updating the "last updated" date on this page.</p>

            <h2 className="font-headline">9. Contact Us</h2>
            <p>If you have any questions about these policies, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
        </div>
    </div>
  );
}
