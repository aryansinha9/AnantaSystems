import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Ananta Systems",
    description: "Privacy Policy for Ananta Systems.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-6 container mx-auto text-left max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">Privacy Policy</h1>
                <p className="text-gray-400 mb-12 border-l-4 border-accent pl-4">
                    Last Updated: 28 February 2026<br />
                    ABN: 12 300 501 601
                </p>

                <div className="space-y-10 text-gray-300 leading-relaxed font-light">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="mb-4">This Privacy Policy describes how Ananta Systems (we, us, or our) collects, uses, stores, and protects personal information in connection with the web development, design, and technology services we provide to our clients (Client) and, where applicable, the end-users of websites and applications we build on their behalf (End-User).</p>
                        <p className="mb-4">Ananta Systems is a sole trader business operating in Sydney, New South Wales, Australia. We are committed to handling all personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
                        <p>By engaging our services or using any website or application we develop, you agree to the practices described in this Privacy Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Scope of This Policy</h2>
                        <p className="mb-4">This Privacy Policy applies to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Personal information provided directly to us by Clients engaging our web development, design, or maintenance services.</li>
                            <li>Information processed through websites, web applications, and digital systems we build or maintain on behalf of Clients.</li>
                            <li>Any interactions with our own business website or communication channels.</li>
                        </ul>
                        <p>This policy does not apply to third-party websites, services, or platforms that we may link to or integrate with. Those services are governed by their own privacy policies.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect</h2>
                        <h3 className="text-xl font-medium text-white mb-3 mt-6">3.1 Client Information</h3>
                        <p className="mb-4">When a Client engages our services, we may collect the following personal information:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Full name and business name</li>
                            <li>Email address and phone number</li>
                            <li>Business address and billing information</li>
                            <li>ABN or other business identifiers</li>
                            <li>Project requirements, briefs, and any content or materials provided to us</li>
                            <li>Login credentials or access details shared for the purpose of completing work (e.g. hosting accounts, CMS access)</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mb-3">3.2 End-User Information (via Client Websites)</h3>
                        <p className="mb-4">Where we build or maintain websites that collect data from End-Users on behalf of Clients, such data may include:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Names and contact details submitted via contact or enquiry forms</li>
                            <li>Email addresses submitted via newsletter subscription forms</li>
                            <li>Account registration details (if applicable)</li>
                            <li>Booking or appointment information (where booking systems are integrated)</li>
                            <li>Payment information processed through third-party gateways such as Stripe or PayPal</li>
                            <li>Usage data collected via analytics tools such as Google Analytics</li>
                            <li>Data submitted through any other forms or interactive elements on the website</li>
                        </ul>
                        <p className="mb-6">We act as a Data Processor in relation to End-User data. The Client remains the Data Controller and is responsible for ensuring their own compliance with applicable privacy laws in relation to their End-Users.</p>

                        <h3 className="text-xl font-medium text-white mb-3">3.3 Automatically Collected Information</h3>
                        <p className="mb-4">When you interact with websites or applications we operate or maintain, we or our third-party tools may automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>IP addresses and browser/device information</li>
                            <li>Pages visited, time spent on pages, and referral sources</li>
                            <li>Cookies and similar tracking technologies (see Section 9)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Information</h2>
                        <p className="mb-4">We use the personal information we collect for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>To provide, manage, and deliver our web development and design services to Clients</li>
                            <li>To communicate with Clients regarding project progress, invoicing, and support</li>
                            <li>To enable the functionality of websites and applications we build (e.g. processing form submissions, sending notification emails via Resend, managing database records via Supabase)</li>
                            <li>To process or facilitate payments through third-party payment gateways</li>
                            <li>To monitor website performance and improve user experience via analytics tools</li>
                            <li>To maintain the security and integrity of the systems we build and manage</li>
                            <li>To comply with our legal obligations and enforce our agreements</li>
                            <li>To provide AI-powered features where integrated (e.g. chatbots or automated responses), using third-party AI service providers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. How We Store and Protect Information</h2>
                        <p className="mb-4">We take the security of personal information seriously and implement a range of technical and organisational measures to protect it, including:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Use of HTTPS encryption across all websites and applications we develop</li>
                            <li>Secure cloud database storage via Supabase, with access controls and encrypted connections</li>
                            <li>Cloudflare protection for DDoS mitigation, web application firewall, and traffic security</li>
                            <li>Password protection and access control practices for all systems</li>
                            <li>Regular backups with restricted access</li>
                        </ul>
                        <p>Despite these measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security and are not liable for unauthorised access resulting from circumstances beyond our reasonable control, including third-party breaches, Client-side security failures, or unforeseen vulnerabilities.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
                        <p className="mb-4">In the course of building and operating websites and applications, we may engage the following categories of third-party service providers:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong className="text-white font-medium">Cloud Hosting & Infrastructure:</strong> Cloudflare (CDN, security, DNS)</li>
                            <li><strong className="text-white font-medium">Database & Backend Services:</strong> Supabase (cloud database hosting and authentication)</li>
                            <li><strong className="text-white font-medium">Payment Gateways:</strong> Stripe and/or PayPal (for processing transactions on Client websites)</li>
                            <li><strong className="text-white font-medium">Email Delivery:</strong> Resend (for transactional email delivery such as form notifications and booking confirmations)</li>
                            <li><strong className="text-white font-medium">Analytics:</strong> Google Analytics (for website traffic and usage analysis)</li>
                            <li><strong className="text-white font-medium">Artificial Intelligence:</strong> Third-party AI platforms (for AI-powered features such as chatbots or automated messaging)</li>
                        </ul>
                        <p className="mb-4">These third parties may collect, process, or store personal information in accordance with their own privacy policies. We encourage Clients and End-Users to review those policies. We are not responsible for the privacy practices, data breaches, service outages, or security incidents of any third-party provider.</p>
                        <p>We do not authorise any third-party provider to use personal information for any purpose other than providing the specific service they are engaged to perform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Data Sharing and Disclosure</h2>
                        <p className="mb-4">We do not sell, rent, or trade personal information to any third party.</p>
                        <p className="mb-4">We may share personal information only in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>With third-party service providers as described in Section 6, solely to the extent necessary to operate and deliver our services</li>
                            <li>Where required by law, a court order, or a lawful request from a government authority or regulatory body</li>
                            <li>In connection with a business transfer, merger, acquisition, or sale of assets, where personal information may be transferred as part of that transaction</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Artificial Intelligence Features</h2>
                        <p className="mb-4">Where AI-powered features are integrated into websites or applications we build (such as chatbots, automated response systems, or content generation tools), the following applies:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Data including user messages and business information may be transmitted to third-party AI service providers (such as OpenAI) to generate responses</li>
                            <li>We configure such integrations to prevent End-User data from being used to train third-party public AI models, where such configuration is available</li>
                            <li>AI-generated outputs may occasionally be inaccurate, incomplete, or unexpected. We are not liable for any loss or damage arising from reliance on AI-generated content</li>
                            <li>Clients are responsible for clearly disclosing to their End-Users when AI tools are in use on their platforms</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Cookies and Tracking Technologies</h2>
                        <p className="mb-4">Websites and applications we develop may use cookies and similar tracking technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Enable core website functionality and user sessions</li>
                            <li>Collect analytics data via Google Analytics to understand how visitors interact with the site</li>
                            <li>Remember user preferences and settings</li>
                        </ul>
                        <p>Users can control or disable cookies through their browser settings. Disabling certain cookies may affect the functionality of the website. Where required by law, cookie consent notices will be implemented on Client websites.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Data Retention</h2>
                        <p className="mb-4">We retain personal information only for as long as is necessary for the purposes described in this policy:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Client information is retained for the duration of the engagement and for a reasonable period thereafter (generally up to 7 years) for accounting, legal, and tax compliance purposes</li>
                            <li>Project files, backups, and associated data may be retained for up to 12 months following project completion, after which they will be securely deleted unless otherwise agreed</li>
                            <li>End-User data collected through Client websites is retained in accordance with the Client&apos;s own data retention practices, as we act only as a Data Processor in that context</li>
                        </ul>
                        <p>When personal information is no longer required, we will take reasonable steps to securely delete or de-identify it.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Client Responsibilities</h2>
                        <p className="mb-4">Clients who engage our services acknowledge and agree to the following:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>All personal information and content provided to us must be accurate, lawful, and provided with any necessary consents</li>
                            <li>Clients are responsible for ensuring their own websites and digital platforms comply with applicable privacy laws, including the Australian Privacy Principles, and any other relevant legislation applicable to their End-Users</li>
                            <li>Clients must implement and maintain appropriate security practices on their side, including strong passwords, timely software updates, and recommended security measures</li>
                            <li>Clients must ensure their End-Users are appropriately informed about how their data is collected and used, including through the publication of their own privacy policy</li>
                            <li>Clients are responsible for all content (including images, text, and third-party materials) provided to us for use in their website, and must hold all necessary rights or licences for such content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Security Disclaimer and Limitation of Liability</h2>
                        <p className="mb-4">We implement industry-standard security practices; however, we expressly disclaim liability for the following:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Hacking, unauthorised access, or data breaches affecting Client or End-User data, particularly where resulting from third-party vulnerabilities or Client-side security failures</li>
                            <li>Spam, phishing emails, or malicious content generated through or targeting forms and email systems on Client websites</li>
                            <li>Outages, data loss, or security incidents caused by third-party hosting providers, databases, payment gateways, or AI platforms</li>
                            <li>Failed transactions, double bookings, or errors arising from third-party payment or booking system integrations</li>
                            <li>Loss of data resulting from the actions or omissions of the Client or their End-Users</li>
                        </ul>
                        <p>Our liability in connection with any privacy or data-related matter is limited to the maximum extent permitted by applicable Australian law.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Data Breach Response</h2>
                        <p className="mb-4">In the event we become aware of a data breach affecting personal information we hold, we will take the following steps:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Assess the breach and contain it as quickly as reasonably practicable</li>
                            <li>Notify affected Clients promptly where required</li>
                            <li>Where required by the Notifiable Data Breaches (NDB) scheme under the Privacy Act 1988, notify the Office of the Australian Information Commissioner (OAIC) and affected individuals</li>
                        </ul>
                        <p>Clients are responsible for managing their own breach notification obligations in relation to their End-Users.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. Your Privacy Rights</h2>
                        <p className="mb-4">Under the Australian Privacy Act 1988 and the Australian Privacy Principles, you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Request access to the personal information we hold about you</li>
                            <li>Request correction of any inaccurate, incomplete, or out-of-date information</li>
                            <li>Request that we delete your information, subject to any legal retention obligations</li>
                            <li>Withdraw consent to our processing of your personal information (where processing is based on consent)</li>
                            <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.oaic.gov.au</a> if you believe we have breached the APPs</li>
                        </ul>
                        <p>To exercise any of these rights, please contact us using the details in Section 16.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">15. Children&apos;s Privacy</h2>
                        <p>Our services are directed at businesses and adults. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have inadvertently collected information from a minor, we will take prompt steps to delete that information. If you believe we may hold information about a child, please contact us immediately.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">16. International Data Transfers</h2>
                        <p className="mb-4">Some of the third-party services we use (including Supabase, Cloudflare, Stripe, Resend, Google Analytics, and AI platforms) may store or process data in countries outside of Australia, including the United States. We take reasonable steps to ensure that such transfers occur in compliance with the Australian Privacy Act and that appropriate data protection safeguards are in place.</p>
                        <p>By engaging our services, Clients acknowledge that their information and the information of their End-Users may be transferred to and processed in countries outside Australia.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">17. Updates to This Policy</h2>
                        <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our services, legal obligations, or third-party integrations. The updated version will be indicated by a revised &quot;Last Updated&quot; date at the top of this document.</p>
                        <p>We encourage Clients to review this policy periodically. Continued engagement with our services following any update constitutes acceptance of the revised policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">18. Contact Us</h2>
                        <p className="mb-4">If you have any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal information, please contact us:</p>
                        <div className="bg-[#111111] border border-white/10 p-6 rounded-lg max-w-md">
                            <ul className="space-y-3">
                                <li><strong className="text-white font-medium">Business Name:</strong> Ananta Systems</li>
                                <li><strong className="text-white font-medium">Contact Person:</strong> Aryan Sinha</li>
                                <li><strong className="text-white font-medium">Email:</strong> <a href="mailto:aryan@anantasystems.com.au" className="text-accent hover:underline">aryan@anantasystems.com.au</a></li>
                                <li><strong className="text-white font-medium">Phone:</strong> <a href="tel:0491021526" className="text-accent hover:underline">0491 021 526</a></li>
                                <li><strong className="text-white font-medium">Location:</strong> Sydney, New South Wales, Australia</li>
                                <li><strong className="text-white font-medium">ABN:</strong> 12 300 501 601</li>
                            </ul>
                        </div>
                        <p className="mt-6">We will endeavour to respond to all privacy-related enquiries within a reasonable timeframe and in accordance with our obligations under Australian law.</p>
                    </section>

                </div>
            </section>

            <Footer />
        </main>
    )
}
