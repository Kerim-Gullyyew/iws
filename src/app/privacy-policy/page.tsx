"use client";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="container pt-9 pb-14">
      <p className="font-bold">IWS Online School Privacy and GDPR Policy</p>
      <p>Approved by: SLT</p>
      <p>Date: 01.08.2024</p>
      <p>Next review due by: 01.08.2025</p>
      <p className="font-bold">1. Aims</p>
      <p>
        {
          "IWS Online School aims to ensure that all personal data collected about staff, pupils, parents, governors, visitors, and other individuals is collected, stored, and processed in accordance with UK data protection law. This policy applies to all personal data, regardless of whether it is in paper or electronic format."
        }
      </p>
      <p className="font-bold">2. Legislation and Guidance </p>
      <p>This policy meets the requirements of:</p>
      <ul className="list-disc list-inside">
        <li>UK General Data Protection Regulation (UK GDPR)</li>
        <li>Data Protection Act 2018 (DPA 2018)</li>
        <li>Protection of Freedoms Act 2012 (biometric data use)</li>
        <li>Education (Pupil Information) (England) Regulations 2005</li>
      </ul>
      <p className="font-bold">3. Definitions</p>
      <ul className="list-disc list-inside">
        <li>
          Personal Data: Information relating to an identified or identifiable
          individual.
        </li>
        <li>
          Special Categories of Personal Data: Sensitive data needing extra
          protection, such as racial or ethnic origin, political opinions,
          religious beliefs, trade union membership, genetics, health, sex life,
          or sexual orientation.
        </li>
        <li>
          Processing: Any operation performed on personal data, automated or
          manual.
        </li>
        <li>
          Data Subject: The individual whose personal data is held or processed.
        </li>
        <li>
          Data Controller: An organisation that determines the purposes and
          means of processing personal data.
        </li>
        <li>
          Data Processor: A person or body that processes personal data on
          behalf of the data controller.
        </li>
        <li>
          {
            "Personal Data Breach: A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data."
          }
        </li>
      </ul>
      <p className="font-bold">4. The Data Controller</p>
      <p>
        IWS Online School processes personal data relating to parents, pupils,
        staff, governors, visitors, and others, and is a data controller. The
        school is registered with the ICO and has paid its data protection fee.
      </p>
      <p className="font-bold">5. Roles and Responsibilities</p>
      <p>
        This policy applies to all staff and external parties working on our
        behalf. Non-compliance may lead to disciplinary action.
      </p>
      <p>
        5.1 Governing Board The governing board ensures compliance with data
        protection obligations
      </p>
      <p>
        5.2 Data Protection Officer (DPO) The DPO oversees the implementation of
        this policy, monitors compliance, and reports to the governing board.
        Contact: Nida Khan, dpo@iwschool.co.uk.
      </p>
      <p>
        5.3 Headteacher The headteacher represents the data controller on a
        day-to-day basis.
      </p>
      <p>5.4 All Staff Staff are responsible for:</p>
      <ul className="list-disc list-inside">
        <li>
          Collecting, storing, and processing personal data according to this
          policy.
        </li>
        <li>Informing the school of any changes to their personal data.</li>
        <li>Contacting the DPO for guidance on data protection matters.</li>
      </ul>
      <p className="font-bold">6. Data Protection Principles</p>
      <p>Personal data must be:</p>
      <ul className="list-disc list-inside">
        <li>Processed lawfully, fairly, and transparently.</li>
        <li>Collected for specified, explicit, and legitimate purposes.</li>
        <li>Adequate, relevant, and limited to what is necessary.</li>
        <li>Accurate and kept up-to-date.</li>
        <li>Kept no longer than necessary.</li>
        <li>Processed securely.</li>
      </ul>
      <p className="font-bold">7. Collecting Personal Data </p>
      <p>
        {
          "7.1 Types of Information Collected IWS Online School collects personal information from pupils and their parents during the admissions process and throughout the provision of educational services. This may also include data from previous schools, social services, local authorities, and the Department for Education (DfE)."
        }
      </p>
      <p>
        {
          "7.2 Categories of Personal Data Collected We collect the following types of personal information:"
        }
      </p>
      <ul className="list-disc list-inside">
        <li>
          Contact details (name, email address, postal address, telephone
          number)
        </li>
        <li>Date of birth</li>
        <li>
          Characteristics (ethnic background, additional educational needs)
        </li>
        <li>Identification proof</li>
        <li>Financial information (bank details)</li>
        <li>Academic records (test and examination results)</li>
        <li>Support details (plans and support providers)</li>
        <li>Behavioural records</li>
        <li>Attendance records</li>
        <li>Safeguarding information</li>
        <li>Health information</li>
        <li>References from previous schools or education providers</li>
        <li>References given to future schools or education providers</li>
        <li>Correspondence between the school and pupils/parents</li>
      </ul>
      <p>
        7.3 Lawfulness, Fairness, and Transparency We process personal data
        under the following legal bases:
      </p>
      <ul className="list-disc list-inside">
        <li>
          To fulfil a contract with the individual or take steps at their
          request before entering a contract
        </li>
        <li>To comply with a legal obligation</li>
        <li>
          To protect the vital interests of the individual or another person
        </li>
        <li>
          To perform a task carried out in the public interest or in the
          exercise of official authority
        </li>
        <li>
          {
            "For legitimate interests pursued by the school or a third party, provided these are not overridden by the individual's rights and freedoms"
          }
        </li>
        <li>{"With the individual's consent"}</li>
      </ul>
      <p className="font-bold">8. Sharing Personal Data</p>
      <p>
        We share personal data only when necessary and with appropriate
        safeguards:
      </p>
      <ul className="list-disc list-inside">
        <li>With our staff and teachers to administer education</li>
        <li>
          With third parties providing services to the school (e.g., IT
          services)
        </li>
        <li>With regulatory bodies (e.g., OFSTED, ISI)</li>
        <li>With government authorities (e.g., DfE, HMRC)</li>
        <li>In emergency situations (e.g., with emergency services)</li>
        <li>With other educational institutions (e.g., examination boards)</li>
      </ul>
      <p>We ensure all third parties comply with UK data protection law.</p>
      <p className="font-bold">9. Subject Access Requests and Other Rights</p>
      <p>Individuals have the right to:</p>
      <ul className="list-disc list-inside">
        <li>Access their personal data</li>
        <li>Rectify inaccurate data</li>
        <li>Erase data</li>
        <li>Restrict processing</li>
        <li>Object to processing</li>
        <li>Data portability</li>
        <li>Withdraw consent</li>
        <li>Complain to the ICO</li>
      </ul>
      <p>
        Requests should be submitted to the DPO. Staff must forward any received
        requests to the DPO immediately.
      </p>
      <p className="font-bold">
        10. Parental Requests to See the Educational Record{" "}
      </p>
      <p>
        {
          "Parents have the right to access their child's educational record. Requests should be made in writing and will be processed within 15 school days."
        }
      </p>
      <p className="font-bold">11. Photographs and Videos</p>
      <p>
        We obtain written consent for taking and using photographs and videos of
        pupils for communication, marketing, and promotional materials. Consent
        can be withdrawn at any time.
      </p>
      <p className="font-bold">12. Data Protection by Design and Default</p>
      <p>
        We integrate data protection into all processing activities, including
        appointing a qualified DPO, conducting data protection impact
        assessments, training staff, and maintaining records of processing
        activities.
      </p>
      <p className="font-bold">13. Data Security and Storage of Records</p>
      <p>
        We protect personal data against unauthorised access, alteration, and
        destruction. Data is stored in end-to-end encrypted software (SIMS) with
        strong passwords. Personal data shared with third parties is secured and
        protected.
      </p>
      <p className="font-bold">14. Disposal of Records</p>
      <p>
        Personal data no longer needed is disposed of securely. Inaccurate or
        out-of-date data is also disposed of securely, following the school’s
        record retention schedule.
      </p>
      <p className="font-bold">15. Personal Data Breaches</p>
      <p>
        The DPO documents and manages data breaches, reporting to the ICO within
        72 hours if required.
      </p>
      <p className="font-bold">Contact Details for ICO:</p>
      <p>Website: ICO Website</p>
      <p>Telephone: 0303 123 1113 or +44 1625 545 700</p>
      <p>Email: casework@ico.org.uk</p>
      <p>
        {
          "Postal Address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom"
        }
      </p>
      <p className="font-bold">16. Training</p>
      <p>
        All staff and governors receive data protection training during
        induction and ongoing professional development.
      </p>
      <p className="font-bold">17. Monitoring Arrangements</p>
      <p>
        The DPO monitors compliance with this policy and reviews it annually.
      </p>
      <p className="font-bold">18. Contact Us</p>
      <p>
        If you have any questions about this Privacy and GDPR Policy, please
        contact us:
      </p>
      <ul className="list-disc list-inside">
        <li>Email: dpo@iwschool.co.uk</li>
        <li>
          Postal Address: IWS Online School, East Wing Turkey Court, Turkey
          Mill, Maidstone, England, ME14 5PP
        </li>
      </ul>
      <p className="font-bold  pt-6">Termination and Refund Policy</p>
      <p>
        {
          "At IWS Online School, we strive to provide a transparent and fair approach to our refund policy, ensuring clarity and confidence for our students and their families. We understand that circumstances may change, and we aim to accommodate these changes while maintaining the integrity of our educational services. The following policy outlines the terms and conditions regarding refunds, cancellations, and payments. Our goal is to ensure that all financial transactions are handled with the utmost professionalism and respect for our students and their educational journey with us."
        }
      </p>
      <p className="font-bold">Termination</p>
      <ul className="list-disc list-inside">
        <li className="font-bold">Termination by IWS:</li>

        <li className="pl-14">
          {
            "IWS reserves the right to terminate this Agreement immediately by providing written notice to the Customer in the event of non-payment, material breach of the Agreement, or other specified reasons."
          }
        </li>
        <li className="font-bold">Termination by the Customer:</li>
        <li className="pl-14">Only the official Parent or Guardian may terminate this Agreement.</li>
        <li className="pl-14">{"The Customer may terminate this Agreement by providing written notice to IWS at least three (3) months prior to the intended termination date. Such notice must be sent either by email to the official email address of IWS or by 1st class signed-for post to the official postal address of IWS."}</li>
        <li className="pl-14">{"Upon termination by the Customer, all outstanding payments must be settled. The Customer is obligated to pay the fees for the three-month notice period following the issuance of the termination notice."}</li>
        <li className="pl-14">{"Any paid deposit will be refunded after all outstanding payments have been made and the termination process is complete."}</li>
        <li className="pl-14">No refunds will be provided for any fees already paid upon termination by the Customer.</li>
      </ul>
      <p className="font-bold">Cancellation</p>
      <ul className="list-disc list-inside">
        <li>Lessons missed by the student will be recorded and made available for later access.</li>
        <li>If IWS cancels a lesson, it will either provide a substitute lesson or make the lesson available as a recorded session.</li>
        <li>No refunds will be issued for cancelled lessons.</li>
      </ul>
      <p className="font-bold">Refund</p>
      <ul className="list-disc list-inside">
        <li>No refunds will be issued for cancelled lessons.</li>
        <li>Any paid deposit will be refunded after all outstanding payments have been made and the termination process is complete.</li>
        <li>No refunds will be provided for any fees already paid upon termination by the Customer.</li>
      </ul>
      <p className="font-bold">Payment</p>
      <ul className="list-disc list-inside">
        <li>Fees shall be paid as agreed, either in full or in instalments, as selected by the Customer on the enrolment form.</li>
        <li>{"If the instalment payment option is selected, an initial payment comprising the first instalment, a deposit equal to 10% of the total fees, and the non-refundable registration fee of £200 is required before the commencement of services. This deposit is non-refundable. For upfront payments, no deposit is required."}</li>
        <li>All payments shall be made via bank transfer or by debit/credit card, which may incur a 3% processing fee.</li>
        <li>Charges include VAT at the prevailing rate.</li>
        <li>{"Overdue payments will incur interest at 4% above the Bank of England's base rate."}</li>
        <li>The enrolment form can be submitted only if the payment is successfully checked out.</li>
      </ul>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default page;
