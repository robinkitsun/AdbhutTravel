import type { Metadata } from "next";
import { Logo } from "@/components/shared/Logo";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Policies, Terms, and Conditions for Adbhut Travel. This agreement governs your use of our website and travel services.",
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`py-4 ${className}`}>{children}</div>
);

const Question = ({ number, text, hindiText }: { number: number, text: string, hindiText: string }) => (
    <div>
        <p className="font-semibold">Q {number}. {text} ({hindiText}) ?</p>
        <div className="flex gap-16 mt-2">
            <span>A. Yes (हाँ) _________</span>
            <span>B. No (नहीं) _________</span>
        </div>
    </div>
);

const DetailRow = ({ label, hindiLabel }: { label: string, hindiLabel: string }) => (
     <div className="grid md:grid-cols-3 border-b">
        <div className="font-semibold p-3 bg-gray-50 border-r">
            {label} <span className="text-muted-foreground">({hindiLabel})</span>
        </div>
        <div className="md:col-span-2 p-3 min-h-[4rem]"></div>
    </div>
);


export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-8">
                <Logo />
            </div>
            
            <div className="border p-4 sm:p-6 md:p-8 space-y-6 bg-card text-card-foreground shadow-lg rounded-lg">
                <Section>
                    <Question number={3} text="Do you confirm that the documents you have submitted to us are genuine" hindiText="क्या आप इस बात की पुष्टि करते हैं कि आपके द्वारा हमें प्रस्तुत किए गए दस्तावेज वास्तविक हैं" />
                </Section>
                
                <Section className="border-t border-b py-4">
                    <h2 className="font-bold text-lg mb-2">Must Read: (अवश्य पढ़ेंः)</h2>
                    <p className="text-muted-foreground">
                        Please pay attention that <span className="font-bold text-foreground">Adbhut Travel And Event Pvt Ltd</span> or its staff never demands any original passport. (कृपया ध्यान दें कि "<span className="font-bold text-foreground">अद्भुत ट्रैवल एंड इवेंट प्राइवेट लिमिटेड</span>" या इसके कर्मचारी कभी भी किसी से मूल पासपोर्ट की मांग नहीं करते हैं।)
                    </p>
                    <p className="mt-2 text-muted-foreground">
                        Nor do we keep anyone's passport with us. Please do not ask <span className="font-bold text-foreground">Adbhut Travel And Event Pvt Ltd</span> or any of its staff to submit your old or new passport. Your passport is not our responsibility. (न ही हम किसी का पासपोर्ट अपने पास रखते हैं। कृपया '<span className="font-bold text-foreground">अद्भुत ट्रैवल एंड इवेंट प्राइवेट लिमिटेड</span>" या इसके किसी भी कर्मचारी से अपना पुराना या नया पासपोर्ट जमा करने के लिए न कहें। आपका पासपोर्ट हमारी जिम्मेदारी नहीं है।)
                    </p>
                </Section>

                <Section>
                    <Question number={4} text="Have you given your original passport or any other original documents to Adbhut Travel And Event Pvt Ltd or its staff?" hindiText="क्या आपने अपना मूल पासपोर्ट या कोई अन्य मूल दस्तावेज अद्भुत ट्रैवल एंड इवेंट प्राइवेट लिमिटेड या उसके कर्मचारियों को दिया है" />
                </Section>

                <div className="border rounded-lg overflow-hidden">
                    <h2 className="text-lg font-bold p-3 bg-gray-100 text-center">Details of the traveler who will travel (यात्रा करने वाले यात्री का विवरण)</h2>
                    <div className="border-t">
                        <DetailRow label="Passenger and passport details" hindiLabel="यात्री का विवरण और पासपोर्ट डिटेल"/>
                        <DetailRow label="Description of travel service" hindiLabel="ट्रैवल सर्विस इसका विवरण"/>
                        <DetailRow label="Total fee per person including service charge (in Indian Rupees)" hindiLabel="सेवा शुल्क सहित कुल प्रति व्यक्ति शुल्क (भारतीय रुपये में)"/>
                    </div>
                </div>

                <Section className="border-t pt-6">
                    <p className="font-semibold">I hereby certify that I have read the complete terms and conditions and we accept these terms and conditions and if any of my statements is false then legal action should be taken against me. (मैं प्रमाणित करता/करती हु कि मैंने पूरे नियम और शर्तें पढ़ ली हैं और में इन नियम और शर्तें को स्वीकार करता /करती हु और अगर मेरा कोई भी बयान झूठा साबित होता है तो मेरे खिलाफ कानूनी कार्रवाई की जानी चाहिए।)</p>
                    <div className="flex gap-16 mt-2">
                        <span>A. Yes (हाँ) _________</span>
                        <span>B. No (नहीं) _________</span>
                    </div>
                </Section>

                <div className="border rounded-lg overflow-hidden mt-6">
                     <DetailRow label="Name" hindiLabel=""/>
                     <DetailRow label="Mobile Number" hindiLabel=""/>
                     <DetailRow label="Aadhar Card Number / Any other Govt Id" hindiLabel=""/>
                     <DetailRow label="Current Address" hindiLabel=""/>
                     <DetailRow label="Signature" hindiLabel="हस्ताक्षर"/>
                </div>

                <div className="flex justify-between items-end mt-12 pt-12">
                    <p>Signature (हस्ताक्षर): __________________________</p>
                    <p>Place: __________________________</p>
                    <p>Date: __________________________</p>
                </div>

            </div>
        </div>
    </div>
  );
}
