import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "Read the Cancellation and Refund Policy for Adbhut Travel. Understand the terms for cancelling or modifying your booking.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
            <h1 className="font-headline">Cancellation & Refund Policy</h1>
            <p className="lead">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>At Adbhut Travel, we understand that plans can change. We have crafted our cancellation and refund policy to be as fair as possible while accounting for the commitments we make to our third-party suppliers (airlines, hotels, tour operators, etc.). We encourage you to read this policy carefully before booking.</p>

            <h2 className="font-headline">1. How to Cancel Your Booking</h2>
            <p>All cancellation requests must be submitted in writing to our official email address: <Link href="mailto:info@adbhuttravel.in">info@adbhuttravel.in</Link>. Verbal cancellations will not be accepted. Please include your booking reference number and the reason for cancellation to help us process your request promptly.</p>

            <h2 className="font-headline">2. Cancellation Charges</h2>
            <p>When you cancel a booking, you may be subject to cancellation charges from two sources:</p>
            <ol>
                <li><strong>Third-Party Supplier Charges:</strong> Airlines, hotels, cruise lines, and other partners have their own cancellation policies. Many bookings, especially those for discounted flights or peak-season travel, are non-refundable or carry substantial cancellation penalties. These charges are outside of our control.</li>
                <li><strong>Adbhut Travel's Service Fee:</strong> For the professional services rendered in planning, booking, and managing your travel, Adbhut Travel charges a service fee. This fee is non-refundable in the event of a cancellation as it covers the work already performed by our team.</li>
            </ol>
            <p>The total cancellation charge will be the sum of the fees from the third-party supplier and our non-refundable service fee.</p>

            <h2 className="font-headline">3. Refund Process</h2>
            <p>Any potential refund is dependent on the amount we are able to recover from our third-party suppliers. </p>
            <ul>
                <li>Upon receiving your written cancellation request, we will liaise with our suppliers to determine the total refundable amount based on their policies.</li>
                <li>Your refund will be the total amount recovered from the supplier, minus our non-refundable service fee.</li>
                <li>Refunds will be processed back to the original mode of payment within 15-30 business days from the date we receive the funds from the supplier. Please note that some suppliers can take several weeks or months to process refunds.</li>
                <li>No refund will be provided for any unused services, including hotel nights, flights, or tours, once the trip has commenced.</li>
            </ul>

            <h2 className="font-headline">4. Non-Refundable Services</h2>
            <p>Please be aware that certain services are typically non-refundable. These include, but are not limited to:</p>
            <ul>
                <li>Special promotional airfares or hotel rates.</li>
                <li>Bookings made for travel during peak periods, such as holidays and festivals.</li>
                <li>Cruise bookings, which are subject to strict penalties from the cruise line.</li>
                <li>Visa application fees.</li>
            </ul>

            <h2 className="font-headline">5. Amendments to Bookings</h2>
            <p>If you wish to amend your booking (e.g., change dates or names), we will do our best to accommodate your request. However, any amendments are subject to the terms and conditions of our suppliers and may incur additional charges.</p>

            <h2 className="font-headline">6. Travel Insurance</h2>
            <p>We strongly and unequivocally recommend that you purchase comprehensive travel insurance at the time of booking. A good travel insurance policy can protect you from financial loss in the event of unforeseen circumstances that may lead to cancellation, such as medical emergencies, trip interruptions, or other covered events.</p>

            <h2 className="font-headline">7. Contact Us</h2>
            <p>If you have any questions about our Cancellation & Refund Policy, please <Link href="/contact" className="text-primary underline">contact us</Link> before making a booking.</p>
        </div>
    </div>
  );
}
