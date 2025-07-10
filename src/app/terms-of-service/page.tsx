import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Adbhut Travel. This agreement governs your use of our website and travel services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <h1 className="font-headline">Terms of Service</h1>
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="font-headline">1. Agreement to Terms</h2>
            <p>By accessing our website and using our services, you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2 className="font-headline">2. Our Role as an Agent</h2>
            <p>Adbhut Travel And Event Pvt. Ltd. acts as a travel agent. We arrange travel services on your behalf with third-party suppliers such as airlines, hotels, cruise lines, tour operators, and other travel providers. When you make a booking with us, you are entering into a contract directly with these third-party suppliers. We are not a co-vendor of such services and your booking will be subject to the terms and conditions of that supplier, which may limit or exclude their liability to you.</p>

            <h2 className="font-headline">3. Bookings, Payments, and Cancellations</h2>
            <p><strong>Bookings:</strong> All bookings are subject to availability and confirmation by the third-party supplier. A booking is considered confirmed only after we have received the required deposit or full payment and have issued a confirmation invoice.</p>
            <p><strong>Payments:</strong> Payment schedules will be communicated to you at the time of booking. Failure to make payments on time may result in the cancellation of your booking.</p>
            <p><strong>Cancellations and Amendments:</strong> If you wish to cancel or amend your booking, you must notify us in writing. Cancellation and amendment charges will apply, as per the policies of the third-party suppliers, in addition to any service fees charged by Adbhut Travel. We recommend purchasing comprehensive travel insurance to cover potential cancellation costs.</p>

            <h2 className="font-headline">4. User Responsibilities</h2>
            <p>It is your responsibility to ensure that all travel documents are in order, including but not limited to:</p>
            <ul>
                <li><strong>Passports:</strong> Passports must be valid for at least 6 months beyond your intended return date.</li>
                <li><strong>Visas:</strong> You must ensure you have the correct visas for all countries you are visiting or transiting through. We can provide assistance, but the ultimate responsibility lies with you.</li>
                <li><strong>Health & Vaccinations:</strong> You should check for any required vaccinations and health precautions for your destination.</li>
            </ul>
            <p>You agree to provide accurate, current, and complete information as required for your travel bookings.</p>
            
            <h2 className="font-headline">5. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Adbhut Travel And Event Pvt. Ltd. and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Adbhut Travel.</p>
            
            <h2 className="font-headline">6. Limitation of Liability</h2>
            <p>As we act as an agent for third-party suppliers, we have no liability for any act, omission, or default of these suppliers. We are not liable for any personal injury, property damage, or other loss, accident, delay, inconvenience, or irregularity which may be occasioned by reason of any wrongful or negligent acts or omissions on the part of any of the suppliers.</p>
            <p>Our liability to you for any losses shall not exceed the total amount paid by you for the specific travel services in question.</p>

            <h2 className="font-headline">7. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, and the courts of Haryana shall have exclusive jurisdiction over any dispute arising out of your use of our service.</p>
            
            <h2 className="font-headline">8. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes by updating the "last updated" date on this page.</p>

            <h2 className="font-headline">9. Contact Us</h2>
            <p>If you have any questions about these Terms, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
        </div>
    </div>
  );
}
