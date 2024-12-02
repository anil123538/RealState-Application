import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function SellerplanFAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  const faqQueAns = [
      {
          question: "What will the Relationship Manager do?",
          ans: "The relationship manager will handle all enquiries on call and will filter tenants meeting your requirements, so that you can peacefully work & enjoy quality time with friends and family, while your relationship manager is out there searching for an ideal tenant."
      },
      {
          question: "What will happen in case of Social Media Marketing?",
          ans: "Our expert marketing team will design promotional ads for your property and it will be posted through our NESTATE Social media channels like Facebook, which have 250 thousand+ active followers."
      },
      {
          question: "How will my property get promoted?",
          ans: "By subscribing to our subscription you will boost your NESTATE rank and your property will be listed higher on the property listing page."
      },
      {
          question: "Are there any hidden charges?",
          ans: "There are no hidden charges. No extra amount will be charged for the above mentioned services, and you save thousands on brokerage."
      },
      {
        question: "How will I get faster closures?",
        ans: "Your RM will find tenants for you from our 1 million+ monthly active users. He will shortlist tenants based on your requirement and you just have to select your ideal tenant."
    },
  
  ];


  return (
    <>
      <div className='ms-8 me-8 ownerplanFAQ'>
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

export default SellerplanFAQ
