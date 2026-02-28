import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Ananta Systems",
    description: "Terms of Service for Ananta Systems.",
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-6 container mx-auto text-left max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">Terms of Service</h1>
                <p className="text-gray-400 mb-12 border-l-4 border-accent pl-4">
                    Last Updated: 28 February 2026<br />
                    ABN: 12 300 501 601
                </p>

                <div className="space-y-10 text-gray-300 leading-relaxed font-light">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="mb-4">These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between Ananta Systems (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and the person or entity (&quot;Client&quot;) engaging our web development, design, maintenance, and related technology services (&quot;Services&quot;).</p>
                        <p className="mb-4">By signing a contract, paying a deposit or invoice, or otherwise engaging our Services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not engage or continue to use our Services.</p>
                        <p>These Terms apply to all projects and engagements unless superseded by a separate written agreement signed by both parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                        <p className="mb-4">For the purposes of these Terms, the following definitions apply:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong className="text-white font-medium">&quot;Client&quot;</strong> means the individual, business, or entity engaging Ananta Systems to perform the Services.</li>
                            <li><strong className="text-white font-medium">&quot;End-User&quot;</strong> means any person who visits, interacts with, or uses a website or application built or maintained by Ananta Systems on behalf of the Client.</li>
                            <li><strong className="text-white font-medium">&quot;Services&quot;</strong> means all work performed by Ananta Systems, including but not limited to website design, development, hosting setup, domain configuration, form and booking integrations, payment gateway integrations, AI tool integrations, analytics setup, security configuration, and ongoing maintenance.</li>
                            <li><strong className="text-white font-medium">&quot;Deliverables&quot;</strong> means the completed website, web application, source code, design assets, or any other output produced as part of the Services.</li>
                            <li><strong className="text-white font-medium">&quot;Third-Party Services&quot;</strong> means external platforms and tools that may be integrated into a project, including but not limited to Supabase, Cloudflare, Stripe, PayPal, Resend, Google Analytics, and AI platforms.</li>
                            <li><strong className="text-white font-medium">&quot;Intellectual Property&quot;</strong> or <strong className="text-white font-medium">&quot;IP&quot;</strong> means all source code, design templates, graphics, written content, and other creative works developed in connection with the Services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Scope of Services</h2>
                        <p className="mb-4">Ananta Systems provides a range of web development and digital services. Unless expressly stated in writing, the following are included within the scope of a standard project:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Website design and front-end development</li>
                            <li>Back-end development and database configuration (e.g. using Supabase)</li>
                            <li>Hosting setup recommendations and configuration guidance</li>
                            <li>Domain setup and DNS configuration guidance</li>
                            <li>Integration of contact forms, enquiry forms, and email notification systems (e.g. via Resend)</li>
                            <li>Integration of booking systems and appointment scheduling tools</li>
                            <li>Payment gateway integration (e.g. Stripe, PayPal)</li>
                            <li>Security configuration including SSL/HTTPS, Cloudflare protection, and basic backup setup</li>
                            <li>Analytics setup (e.g. Google Analytics)</li>
                            <li>AI tool or chatbot integration where specifically agreed</li>
                        </ul>

                        <p className="mb-4">The following are NOT included in the Services unless separately agreed and confirmed in writing:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Ongoing content creation, copywriting, or SEO services</li>
                            <li>Ongoing marketing, advertising management, or social media management</li>
                            <li>Graphic design beyond the scope of the agreed website</li>
                            <li>Photography, videography, or procurement of licensed media</li>
                            <li>Compliance advice (legal, tax, accessibility, or privacy law)</li>
                            <li>Any work outside the agreed project scope, which will be subject to additional fees</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Client Obligations</h2>
                        <p className="mb-4">The Client agrees to the following obligations throughout the engagement:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Provide accurate, complete, and lawful information, content, images, and materials required for the project in a timely manner</li>
                            <li>Review and approve Deliverables within agreed timelines; unreasonable delays may result in project timeline adjustments at our discretion</li>
                            <li>Respond promptly to requests for feedback, approvals, or clarification</li>
                            <li>Ensure that all content and materials provided are owned by the Client, properly licensed, or otherwise lawfully available for use</li>
                            <li>Follow our recommended security practices, including using strong passwords, enabling two-factor authentication where available, and maintaining regular backups</li>
                            <li>Not interfere with, reverse-engineer, or modify any Deliverables during the development phase without prior written consent</li>
                            <li>Ensure their own compliance with all applicable laws, including privacy laws, in relation to End-Users of their website</li>
                            <li>Promptly notify us of any suspected security incidents, breaches, or unauthorised access affecting their website or related systems</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>

                        <h3 className="text-xl font-medium text-white mb-3 mt-6">5.1 Fee Structure</h3>
                        <p className="mb-6">Fees for each project will be agreed upon in writing prior to commencement. Projects may be structured as a fixed-price engagement, milestone-based payments, or an hourly rate, as specified in the project proposal or invoice.</p>

                        <h3 className="text-xl font-medium text-white mb-3">5.2 Deposit</h3>
                        <p className="mb-6">A deposit of between 30% and 50% of the total project fee is required before work commences, unless otherwise agreed in writing. The deposit is non-refundable and confirms the Client&apos;s commitment to the project.</p>

                        <h3 className="text-xl font-medium text-white mb-3">5.3 Payment Methods</h3>
                        <p className="mb-6">We accept payment via bank transfer (EFT), and where available, via payment gateway (e.g. Stripe). All amounts are in Australian Dollars (AUD) and are exclusive of GST unless otherwise stated.</p>

                        <h3 className="text-xl font-medium text-white mb-3">5.4 Non-Refundable Payments</h3>
                        <p className="mb-6">All payments made are non-refundable once the corresponding work or milestone has been delivered or commenced, as applicable. This includes the initial deposit and all subsequent milestone payments.</p>

                        <h3 className="text-xl font-medium text-white mb-3">5.5 Late Payments</h3>
                        <p className="mb-4">Invoices are due within the timeframe specified on the invoice. If payment is not received by the due date:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>We reserve the right to suspend all work on the project until payment is received</li>
                            <li>Interest may be charged on overdue amounts at a rate of 10% per annum, calculated daily</li>
                            <li>We reserve the right to recover any reasonable costs incurred in collecting overdue amounts, including legal or debt collection fees</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>

                        <h3 className="text-xl font-medium text-white mb-3 mt-6">6.1 Ownership Prior to Full Payment</h3>
                        <p className="mb-6">All source code, design assets, templates, and Deliverables created by Ananta Systems remain the exclusive property of Ananta Systems until full payment of all outstanding fees has been received.</p>

                        <h3 className="text-xl font-medium text-white mb-3">6.2 Transfer of IP on Full Payment</h3>
                        <p className="mb-6">Upon receipt of full payment, Ananta Systems assigns to the Client all intellectual property rights in the custom code and design assets created specifically for that Client&apos;s project, excluding any reusable frameworks, libraries, or templates that form part of our general development toolkit (which are licensed to the Client on a non-exclusive basis).</p>

                        <h3 className="text-xl font-medium text-white mb-3">6.3 Client Content</h3>
                        <p className="mb-6">The Client retains all intellectual property rights in content, images, text, and materials provided to us. The Client warrants that they hold all necessary rights, licences, and permissions for any content supplied, and indemnifies Ananta Systems against any claim arising from the use of such content.</p>

                        <h3 className="text-xl font-medium text-white mb-3">6.4 Restrictions</h3>
                        <p>The Client must not copy, resell, redistribute, or sub-licence any templates, frameworks, or code developed by Ananta Systems without express prior written consent. Breach of this clause constitutes a material breach of these Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Revisions and Change Requests</h2>
                        <p className="mb-4">The number of included revisions will be specified in the project proposal or scope of work. Where no specific number is stated, a maximum of two rounds of revisions are included in the quoted price.</p>
                        <p className="mb-4">Additional revisions or changes that fall outside the agreed project scope will be billed at our standard hourly rate, which will be communicated to the Client before additional work commences.</p>
                        <p>Significant scope changes requested by the Client may require a revised project timeline and updated pricing. We will confirm any such adjustments in writing before proceeding.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
                        <p className="mb-4">In delivering the Services, we may integrate, configure, or recommend the following categories of Third-Party Services:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Cloud infrastructure and CDN: Cloudflare</li>
                            <li>Database and backend services: Supabase</li>
                            <li>Payment gateways: Stripe, PayPal</li>
                            <li>Email delivery services: Resend</li>
                            <li>Analytics platforms: Google Analytics</li>
                            <li>Artificial intelligence platforms and APIs</li>
                            <li>Domain registrars, hosting providers, and CMS platforms as required</li>
                        </ul>
                        <p className="mb-4">Ananta Systems is not responsible for the performance, availability, security, pricing changes, policy updates, or discontinuation of any Third-Party Service. The Client acknowledges that their use of Third-Party Services is governed by those providers&apos; own terms and conditions, and that Ananta Systems has no control over third-party platforms once integrated.</p>
                        <p>We are not liable for any loss, damage, failed transactions, data breaches, or service outages caused by or attributable to Third-Party Services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. AI Integration Disclaimer</h2>
                        <p className="mb-4">Where AI-powered features are integrated into a project (such as chatbots, automated messaging, content generation, or recommendation engines), the following applies:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>AI-generated outputs may occasionally be inaccurate, incomplete, inappropriate, or unexpected. Ananta Systems does not warrant the accuracy or reliability of any AI-generated content.</li>
                            <li>Ananta Systems is not liable for any loss, damage, reputational harm, or legal liability arising from AI-generated outputs, errors, or unintended behaviours.</li>
                            <li>The Client is responsible for monitoring, reviewing, and moderating any AI tool deployed on their platform and for ensuring compliance with applicable laws.</li>
                            <li>The Client must not use any AI tool integrated into their website in a way that is unlawful, deceptive, harmful, or in breach of the terms of the relevant AI service provider.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Maintenance and Support</h2>
                        <p className="mb-4">Ongoing maintenance and support services are not included in a standard project unless explicitly agreed in writing as a separate maintenance arrangement.</p>
                        <p className="mb-4">Where maintenance is provided, the following applies:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Security updates, plugin updates, and backups will be applied on a best-efforts basis. We do not guarantee that all updates will be applied immediately or that the website will remain completely free from vulnerabilities.</li>
                            <li>We strongly recommend that Clients maintain their own independent backups of their website and data.</li>
                            <li>Ananta Systems is not liable for data loss, downtime, or security incidents arising from a failure to perform maintenance, whether or not a maintenance arrangement is in place.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
                        <p className="mb-4">To the maximum extent permitted by applicable Australian law, Ananta Systems is not liable for any of the following, whether arising in contract, tort, or otherwise:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Hacking, malware, unauthorised access, or data breaches affecting the Client&apos;s website, systems, or data</li>
                            <li>Spam, phishing emails, or malicious activity generated through or targeting forms, email systems, or automated tools on the Client&apos;s website</li>
                            <li>Downtime, outages, or service interruptions of the Client&apos;s website or any Third-Party Service</li>
                            <li>Loss or corruption of data, including backups lost due to Client actions, hosting failures, or third-party incidents</li>
                            <li>Failed or erroneous transactions, double bookings, or errors arising from payment gateway or booking system integrations</li>
                            <li>Loss of revenue, loss of profits, loss of business, or any indirect or consequential loss arising from the use of the Services or Deliverables</li>
                            <li>Inaccuracies, errors, or unintended outputs generated by AI tools or analytics integrations</li>
                            <li>Any reliance by the Client or their End-Users on information, content, or recommendations provided through the website</li>
                        </ul>
                        <p>Where liability cannot be excluded by law, our total liability to the Client for any claim arising in connection with the Services is limited to the total amount paid by the Client to Ananta Systems for the specific project to which the claim relates.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Client Warranties</h2>
                        <p className="mb-4">By engaging our Services, the Client warrants and represents that:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>All content, images, text, data, and materials provided to Ananta Systems are owned by the Client or are used with appropriate licence or permission, and do not infringe the intellectual property rights of any third party</li>
                            <li>The Client has the legal right to collect, store, and process personal data from End-Users in accordance with the Australian Privacy Act 1988 and any other applicable privacy laws</li>
                            <li>The Client will follow our recommended security practices and take reasonable steps to maintain the security of their website and systems</li>
                            <li>The Client will not use the Deliverables for any unlawful, fraudulent, or harmful purpose</li>
                            <li>All information provided to Ananta Systems in connection with the project is accurate and complete to the best of the Client&apos;s knowledge</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Data Handling and Privacy</h2>
                        <p className="mb-4">Our collection and handling of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference and can be found at anantasystems.com.au/privacy-policy.</p>
                        <p className="mb-4">By engaging our Services, the Client agrees to our data handling practices as described in the Privacy Policy. The Client acknowledges that:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Ananta Systems acts as a Data Processor in relation to any End-User personal data collected through websites we build or maintain</li>
                            <li>The Client is the Data Controller and is solely responsible for ensuring their own compliance with the Australian Privacy Act 1988 and any other applicable privacy legislation in relation to their End-Users</li>
                            <li>The Client must maintain and publish their own privacy policy on their website and ensure End-Users are adequately informed about how their data is collected and used</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. Warranty Disclaimer</h2>
                        <p className="mb-4">All Deliverables and Services are provided &quot;as is&quot; and &quot;as available.&quot; Ananta Systems makes no guarantee, representation, or warranty, express or implied, as to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Specific traffic levels, search engine rankings, or conversion rates achieved through the website</li>
                            <li>Continuous, uninterrupted, or error-free operation of the website</li>
                            <li>Absolute security or protection from hacking, malware, or unauthorised access</li>
                            <li>The accuracy, completeness, or reliability of AI-generated or analytics-generated outputs</li>
                            <li>The compatibility of the website with all devices, browsers, or future software updates</li>
                            <li>The performance or reliability of any Third-Party Service integrated into the project</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">15. Refunds and Cancellations</h2>

                        <h3 className="text-xl font-medium text-white mb-3 mt-6">15.1 Cancellation by the Client</h3>
                        <p className="mb-4">If the Client wishes to terminate the engagement before project completion, the Client must notify Ananta Systems in writing. The following applies:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>All payments made up to the point of cancellation are non-refundable</li>
                            <li>If work has been completed beyond what has been paid for, the Client remains liable for fees for all work completed up to the date of cancellation, which will be invoiced accordingly</li>
                            <li>Any Deliverables remain the property of Ananta Systems until all outstanding fees are paid in full</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mb-3">15.2 Cancellation by Ananta Systems</h3>
                        <p className="mb-4">Ananta Systems reserves the right to terminate an engagement in circumstances including, but not limited to, non-payment, Client misconduct, or a fundamental breakdown in the working relationship. In such circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>We will provide reasonable notice where practicable</li>
                            <li>Any unused portion of fees paid in advance for work not yet commenced will be refunded</li>
                            <li>Fees for all work completed to the point of termination remain payable</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">16. Force Majeure</h2>
                        <p className="mb-4">Ananta Systems is not liable for any delay or failure to perform our obligations under these Terms where such delay or failure arises from circumstances beyond our reasonable control, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Natural disasters, floods, fires, or extreme weather events</li>
                            <li>Power outages or internet service disruptions</li>
                            <li>Outages, API changes, or discontinuation of Third-Party Services</li>
                            <li>Government actions, legislation, or regulatory requirements</li>
                            <li>Pandemic, public health emergencies, or other unforeseen events</li>
                        </ul>
                        <p>In such circumstances, we will notify the Client as soon as reasonably practicable and will use reasonable efforts to resume performance.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">17. Indemnification</h2>
                        <p className="mb-4">The Client agrees to indemnify, defend, and hold harmless Ananta Systems, its contractors, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>The Client&apos;s breach of these Terms</li>
                            <li>Any content, materials, or data provided by the Client that infringes the intellectual property or other rights of a third party</li>
                            <li>The Client&apos;s failure to comply with applicable laws, including privacy legislation</li>
                            <li>Any claim by an End-User arising from the Client&apos;s website, its content, or its operation</li>
                            <li>The Client&apos;s misuse of any AI tool, payment system, or Third-Party Service integrated into their website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">18. Termination</h2>
                        <p className="mb-4">Either party may terminate the engagement by providing written notice. Upon termination:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>All outstanding fees for work completed to the date of termination become immediately due and payable</li>
                            <li>Ananta Systems will cease all work on the project</li>
                            <li>Access credentials, files, or assets held by Ananta Systems will be returned to the Client upon receipt of all outstanding payments</li>
                            <li>Clauses relating to intellectual property, limitation of liability, indemnification, and governing law survive termination</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">19. Governing Law and Dispute Resolution</h2>
                        <p className="mb-4">These Terms are governed by the laws of New South Wales, Australia. The parties irrevocably submit to the exclusive jurisdiction of the courts of New South Wales for any dispute arising in connection with these Terms.</p>
                        <p>Before initiating formal legal proceedings, both parties agree to attempt to resolve any dispute through good faith negotiation for a period of at least 30 days from written notice of the dispute. If the dispute is not resolved through negotiation, either party may pursue mediation or legal proceedings through the appropriate courts.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">20. Acceptance of Terms</h2>
                        <p className="mb-4">The Client agrees to and accepts these Terms by any of the following actions:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Signing a project contract or statement of work that references these Terms</li>
                            <li>Paying a deposit or invoice issued by Ananta Systems</li>
                            <li>Clicking an &apos;I agree&apos; button or otherwise accepting terms through an e-signature or online platform</li>
                            <li>Continuing to engage our Services after being provided with these Terms</li>
                        </ul>
                        <p>These Terms, together with any project proposal, statement of work, or invoice, constitute the entire agreement between the parties in relation to the Services and supersede all prior discussions, representations, or agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">21. Updates to These Terms</h2>
                        <p className="mb-4">Ananta Systems reserves the right to update or modify these Terms at any time. The updated version will be indicated by a revised Last Updated date. Updated Terms apply to new projects commencing after the date of the update and do not apply retrospectively to projects already underway, unless agreed in writing by both parties.</p>
                        <p>We encourage Clients to review these Terms periodically. Continued engagement with our Services following any update constitutes acceptance of the revised Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">22. Miscellaneous</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong className="text-white font-medium">Severability:</strong> If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision will be severed and the remaining Terms will continue in full force and effect.</li>
                            <li><strong className="text-white font-medium">No Waiver:</strong> Our failure to enforce any provision of these Terms does not constitute a waiver of that right.</li>
                            <li><strong className="text-white font-medium">No Partnership:</strong> Nothing in these Terms creates a joint venture, partnership, employment, or agency relationship between Ananta Systems and the Client.</li>
                            <li><strong className="text-white font-medium">Entire Agreement:</strong> These Terms, together with any project proposal or invoice, constitute the entire agreement between the parties and supersede all prior agreements and understandings.</li>
                            <li><strong className="text-white font-medium">Electronic Communications:</strong> The parties agree that communications via email and other electronic means are valid and legally binding.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">23. Contact Us</h2>
                        <p className="mb-4">For any questions, concerns, or notices relating to these Terms, please contact us:</p>
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
                        <p className="mt-6">We will endeavour to respond to all enquiries within a reasonable timeframe.</p>
                    </section>

                </div>
            </section>

            <Footer />
        </main>
    )
}
