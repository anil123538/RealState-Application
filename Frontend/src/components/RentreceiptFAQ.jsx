import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../style/rentReceipt.css'

function RentreceiptFAQ() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqQueAns = [
        {
            question: "What are the legal implications of not having a rent receipt from my landlord?",
            ans: "Not having a rent receipt can jeopardise your ability to prove timely rent payments, potentially leading to wrongful eviction claims. Additionally, in India, lacking such receipts can hinder your eligibility to claim HRA deductions, subsequently increasing your tax liability."
        },
        {
            question: "How does a lease agreement differ from a rent receipt?",
            ans: "A lease agreement is a binding contract detailing the terms of tenancy, whereas a rent receipt serves as evidence of rent paid for a particular period. In essence, while the lease sets out the tenancy's framework and obligations, the rent receipt confirms payment transactions within that framework."
        },
        {
            question: "What are the consequences if I don't submit rent receipt proofs to my company?",
            ans: "Not submitting rent receipt proofs to your company could lead to you missing out on HRA exemptions, resulting in a higher income tax liability. Furthermore, the company might deduct TDS at an elevated rate, affecting your take-home salary. Non-compliance might also invite disciplinary actions from the company, including potential termination."
        },
        {
            question: "Is it common practice to get a receipt for every month's rent?",
            ans: "Yes, obtaining a monthly rent receipt is a widespread practice that benefits both tenants and landlords. These receipts serve as proof of payment, safeguarding against potential disputes, and are essential for tenants seeking to claim House Rent Allowance (HRA) exemptions on their income taxes. The practice is mutually advantageous, enhancing transparency and minimising misunderstandings in landlord-tenant relations."
        },
        {
            question: "Why is the PAN number of my landlord significant for rent receipts?",
            ans: "The PAN number of your landlord is crucial for rent receipts as it's a prerequisite for claiming HRA exemption during income tax filing. This number ensures the Income Tax Department can monitor the landlord's reported rental income and tax compliance. Without the landlord's PAN, you might face challenges in availing of HRA tax benefits."
        },
        {
          question: "What other documents can I use if I don't have a scanned copy of my landlord’s PAN card?",
          ans: "If you don't possess a scanned copy of your landlord's PAN card, you can alternatively submit a copy of the lease agreement, rent receipts, bank statements showcasing rent transfers, or the landlord's Aadhaar card. Additionally, a declaration from the landlord indicating the absence of a PAN number is also acceptable. Always ensure to consult with your employer and provide as much relevant documentation as possible to facilitate the HRA exemption process."
      },
      {
        question: "If my company doesn't allow me to claim HRA, are there other avenues to get tax benefits?",
        ans: "Certainly, if your company doesn't permit HRA claims, you still have options for tax benefits. You can claim deductions on interest paid for housing loans up to Rs. 2 lakhs per annum or for the principal repayment on such loans up to Rs. 1.5 lakhs annually. Deductions are also available for stamp duty and registration charges on house purchases, as well as for house tax paid, subject to necessary documentation. Consulting a tax advisor can guide you through these alternatives effectively."
    },
    {
      question: "What should I do if my previous company had different rent receipt submission guidelines?",
      ans: "Differing rent receipt protocols across companies necessitate a careful review of your current employer's guidelines. Ensure you possess comprehensive rent receipts for the entire financial year and promptly consult your company's HR for any uncertainties."
  },
  {
    question: "How can I convince my landlord to provide a rent receipt if they are hesitant?",
    ans: "To persuade a hesitant landlord to provide a rent receipt, communicate the significance of the receipt for tax benefits like HRA exemption, emphasize its role in preventing future disputes over payments, and suggest creating the receipt yourself for their convenience, requiring only their signature. Always approach the topic respectfully and be persistent in your request."
},
{
  question: "Are there any prorated benefits for claiming HRA if I lived in a rental apartment for only part of the year?",
  ans: "Yes, HRA benefits can be prorated based on the number of months you resided in a rental apartment. To determine the exemption, multiply the annual eligible HRA by the months of stay and then divide by 12."
},
{
  question: "What happens if I miss the deadline for submitting rent receipt proofs to my company?",
  ans: "If you miss the deadline for submitting rent receipt proofs to your company, you may lose out on HRA exemption, potentially leading to higher income tax payments. Additionally, your company might increase TDS deductions, impacting your take-home pay, and it could result in disciplinary actions, including warnings or employment termination. Remember, the specific consequences depend on your company's policies. If you've missed the deadline, reach out to your HR or payroll department promptly; they may offer solutions like late submissions or alternative HRA exemption methods."
},
{
  question: "In the absence of a physical rent receipt, how can I validate the authenticity of a soft copy receipt?",
  ans: "To validate the authenticity of a soft copy rent receipt, you can: 1. Verify the sender's email address, ensuring it matches your landlord's usual communication channel. 2. Cross-check the receipt's details for completeness, including name, address, payment amount, date, and rental period. 3. Be cautious of any signs of tampering or alterations on the soft copy. When in doubt, directly contact your landlord for verification."
}
    ];

    return (
        <>
<div className='ms-28 me-28 Rentreceiptfaq'>
            <div className=" ms-4 pt-3 pb-2 mt-5">
                <h3 className="fs-5 pb-2 text-center" style={{ color: "#464949" }}><strong>Frequenty asked questions</strong></h3>

            </div>
            <hr />

            <div className="" style={{ marginBottom: "90px" }}>
                {faqQueAns.map((data, index) => (
                    <div className="faq-item" key={index}>
                        <div className={`faq-question ${openIndex === index ? 'active' : ''}`} onClick={() => toggleAnswer(index)}>
                            <span>{data.question}</span>
                            <span className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                        {openIndex === index && <div className="faq-answer">{data.ans}</div>}
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default RentreceiptFAQ
