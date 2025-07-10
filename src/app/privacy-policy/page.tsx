import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for Adbhut Travel. Understand how we collect, use, and protect your personal data in relation to our travel services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <h1 className="font-headline">Privacy Policy</h1>
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>Adbhut Travel And Event Pvt. Ltd. ("us", "we", or "our") operates the Adbhut Travel website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.</p>
            
            <h2 className="font-headline">1. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>While using our Service, especially when booking a trip or requesting a quote, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This information is necessary to facilitate your travel arrangements. Personally identifiable information may include, but is not limited to:</p>
            <ul>
                <li>Full Name (as it appears on your government-issued ID/passport)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing Address, State, Province, ZIP/Postal code, City</li>
                <li>Passport details (for international travel and visa assistance)</li>
                <li>Date of birth</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Dietary requirements and health information (where applicable for your safety and comfort)</li>
                <li>Cookies and Usage Data</li>
            </ul>

            <h2 className="font-headline">2. Use of Data</h2>
            <p>Adbhut Travel uses the collected data for various purposes directly related to our travel services:</p>
            <ul>
                <li>To plan, book, and manage your travel arrangements, including flights, hotels, tours, and transport.</li>
                <li>To process payments for our services.</li>
                <li>To provide you with your travel itinerary and any relevant documentation.</li>
                <li>To communicate with you about your booking and to notify you about changes to our Service.</li>
                <li>To provide customer care and support before, during, and after your trip.</li>
                <li>To provide analysis or valuable information so that we can improve our Service offerings.</li>
                <li>To detect, prevent and address technical issues.</li>
            </ul>

            <h2 className="font-headline">3. Sharing Data with Third Parties</h2>
            <p>To provide our services, we must share your Personal Data with third-party suppliers who fulfill your travel bookings. This includes airlines, hotels, tour operators, transport companies, and other travel service providers. We only provide these suppliers with the information necessary to complete your booking. These suppliers have their own privacy policies, and we encourage you to review them.</p>

            <h2 className="font-headline">4. Security of Data</h2>
            <p>The security of your data is important to us. We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. However, remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            
            <h2 className="font-headline">5. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy.</p>
            
            <h2 className="font-headline">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-primary underline">contact us</Link>.</p>
        </div>
    </div>
  );
}
