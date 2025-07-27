import type { Metadata } from "next";
import { Logo } from "@/components/shared/Logo";

export const metadata: Metadata = {
  title: "Policy & Terms of Service",
  description: "Read the Policies, Terms, and Conditions for Adbhut Travel. This agreement governs your use of our website and travel services.",
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`py-4 ${className}`}>{children}</div>
);

const Question = ({ number, text, hindiText, children }: { number?: string, text: string, hindiText: string, children?: React.ReactNode }) => (
    <div className="mt-4">
        <p className="font-semibold">{number ? `Q ${number}. ` : ''}{text} ({hindiText}) ?</p>
        <div className="mt-2 space-y-2">{children}</div>
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
                
                {/* Page 1 Content Starts Here */}
                <Section>
                    <p className="text-center text-muted-foreground">
                        By "Adbhut Travel And Event Pvt Ltd" before giving you our service, we have some terms and conditions, you are requested to read them carefully and if you accept these terms and conditions, only then we will be able to serve you.
                        <br />
                        "अद्भुत ट्रैवल एंड इवेंट प्राइवेट लिमिटेड" के द्वारा, आपको अपनी सर्विस देने के लिए हमारी कुछ नियम और शर्तें हैं, आपसे अनुरोध है की इन्हे धयानपूर्व पढ़े और यदि आप इन नियमों और शर्तों को स्वीकार करते हैं, तो ही हम आपको अपनी सेवा दे पाएंगे।
                    </p>
                </Section>

                <div className="text-center bg-primary/10 py-2">
                    <h1 className="font-headline text-2xl font-bold">Terms & Conditions (नियम एवं शर्तें)</h1>
                </div>

                <ol className="list-decimal list-outside space-y-4 pl-6 text-muted-foreground">
                    <li>The visa will be decided by the embassy, if your visa is refused, we will not be responsible. (वीज़ा का निर्णय दूतावास द्वारा दिया जाएगा, यदि आपका वीज़ा रद्द होता है, तो ज़िम्मेदारी हमारी नहीं होगी।)</li>
                    <li>Visa fee and our service fee will not be refunded in case of visa rejection. (वीज़ा अस्वीकृति के मामले में वीज़ा शुल्क और हमारी सेवा शुल्क वापस नहीं किया जाएगा।)</li>
                    <li>The documents provided by you are genuine, no fraud or forgery has been done by any party, If any fraud is found in them then it will be your responsibility and legal action will be taken against you. (आपके द्वारा उपलब्ध कराए गए दस्तावेज वास्तविक हैं, किसी भी पक्ष द्वारा कोई धोखाधड़ी या जालसाजी नहीं की गई है, यदि उनमें कोई धोखाधड़ी पाई जाती है तो इसकी जिम्मेदारी आपकी होगी और आपके खिलाफ कानूनी कार्रवाई की जाएगी।)</li>
                    <li><span className="font-bold text-foreground">Very important:</span> When applying for a visa, please keep in mind that if you have booked a travel services such Tour Package/Flight/Hotel etc before the visa decision, and if your visa gets refused, the risk of trail expenses will be your own. (<span className="font-bold text-foreground">बहुत महत्वपूर्ण:</span> वीजा के लिए आवेदन करते समय, कृपया ध्यान रखें कि यदि आपने वीजा निर्णय से पहले यात्रा पैकेज जैसे टूर पैकेज / फ्लाइट / होटल आदि की बुकिंग की है, और यदि आपका वीसा रद्द हो जाता है, तो खर्च का जोखिम आपका खुद का होगा।)</li>
                    <li>If a person going to international or domestic destination has any problem like illness or any problem, then we will not have any responsibility. (अगर अंतरराष्ट्रीय या घरेलू गंतव्य पर जाने वाले व्यक्ति को कोई समस्या जैसे बीमारी या कोई समस्या होती है, तो किसी भी तरह की जिम्मेदारी हमारी नहीं होगी।)</li>
                    <li>We have provided you with a travel service and if you have the remaining amount, we have the right to cancel your existing booking. (हमने आपको एक यात्रा सेवा प्रदान की है और यदि आपके द्वारा राशि शेष है, तो हमें आपकी मौजूदा बुकिंग रद्द करने का अधिकार है।)</li>
                    <li>If you are booking travel services for any other person, then it will be your duty to tell him about this term and condition. (अगर आप किसी अन्य व्यक्ति के लिए हमसे ट्रैवल सर्विसेज बुक करवा रहे हैं तो उसको इस टर्म एंड कंडीशन के बारे में बताना आपका फर्ज होगा।)</li>
                </ol>

                <Question number="1" text="You are taking this service for yourself or for someone else" hindiText="आप यह सर्विस खुद के लिए ले रहे हैं या किसी और के लिए">
                    <p>A. For Myself (मेरे लिए) __________________________</p>
                    <p>B. If for Someone else, What is your relationship with traveler (अगर किसी और के लिए, तो यात्री के साथ आपका क्या संबंध है)?</p>
                    <p>Answer for B: __________________________</p>
                </Question>

                <Question number="2" text="Is there any legal case or lawsuit pending against the applicant or his/her accompaniment" hindiText="क्या आवेदक या उसके साथी के विरुद्ध कोई कानूनी मामला या वाद लंबित है">
                    <p>A. No (नहीं) __________________________</p>
                    <p>B. If Yes, Please explain on below (यदि हां, तो कृपया नीचे बताएं)</p>
                    <p>Answer for B: __________________________</p>
                </Question>
                
                 <div className="flex justify-between items-end mt-12 pt-12 text-sm">
                    <p>Signature (हस्ताक्षर): __________________________</p>
                    <p>Place: __________________________</p>
                    <p>Date: __________________________</p>
                </div>
                {/* Page 1 Content Ends Here */}


                <hr className="my-12 border-dashed" />


                {/* Page 2 Content Starts Here */}
                <Section>
                    <Question number="3" text="Do you confirm that the documents you have submitted to us are genuine" hindiText="क्या आप इस बात की पुष्टि करते हैं कि आपके द्वारा हमें प्रस्तुत किए गए दस्तावेज वास्तविक हैं">
                         <div className="flex gap-16 mt-2">
                            <span>A. Yes (हाँ) _________</span>
                            <span>B. No (नहीं) _________</span>
                        </div>
                    </Question>
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
                    <Question number="4" text="Have you given your original passport or any other original documents to Adbhut Travel And Event Pvt Ltd or its staff?" hindiText="क्या आपने अपना मूल पासपोर्ट या कोई अन्य मूल दस्तावेज अद्भुत ट्रैवल एंड इवेंट प्राइवेट लिमिटेड या उसके कर्मचारियों को दिया है">
                        <div className="flex gap-16 mt-2">
                            <span>A. Yes (हाँ) _________</span>
                            <span>B. No (नहीं) _________</span>
                        </div>
                    </Question>
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

                <div className="flex justify-between items-end mt-12 pt-12 text-sm">
                    <p>Signature (हस्ताक्षर): __________________________</p>
                    <p>Place: __________________________</p>
                    <p>Date: __________________________</p>
                </div>
                 {/* Page 2 Content Ends Here */}

            </div>
        </div>
    </div>
  );
}
