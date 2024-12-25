import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../style/postproperty.css'

function PostPropertyFAQ() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqQueAns = [
        {
            question: "Is it free to Post home for rent on NoBroker's List Your Property page?",
            ans: "Yes, it's entirely free to create and manage property listings for both sale and rent on NoBroker. Online property selling and renting is easier than ever using NoBroker–India’s best plot and home selling website."
        },
        {
            question: "Why should I use NoBroker to advertise my home rental?",
            ans: "NoBroker is the fastest way to rent out your home without Brokerage. It offers an easy listing process, and maximum visibility, and only connects you with genuine, verified tenants, speeding up the rental process."
        },
        {
            question: "Can I advertise both residential and commercial properties on NoBroker's List Your Property page?",
            ans: "Yes, you can list both residential and commercial properties for sale or rent on NoBroker's platform, expanding your options for property transactions."
        },
        {
            question: "How does NoBroker ensure the security of my property listings and interactions with potential tenants or buyers?",
            ans: "NoBroker prioritises your security by verifying interactions and ensuring that only genuine tenants or buyers can contact you. You have full control over your listings and can update them as needed to attract the right audience."
        },
        {
            question: "Can I receive extra support from NoBroker for Renting or selling my flat online?",
            ans: "Yes, NoBroker can provide a dedicated relationship manager for smoother negotiations when renting or selling properties, ensuring a simpler and faster process."
        }
    ];

    return (
        <>

            <div className="postPropertyfaq ms-4 pt-3 pb-2">
                <h3 className="fs-5 pb-2" style={{ color: "#464949" }}><strong>Frequenty asked questions</strong></h3>
                <p style={{ color: "#464949", fontSize: "14px" }}>If you are looking to rent or sell your individual house, flat, or commercial property the first thing you need to do is decide how to find a buyer or tenant. Now, you can’t always depend on your immediate contacts to help you get the job done, you need to cast a wider net, to get more options and to get better offers.</p>

                <p className="" style={{ color: "#464949", fontSize: "14px" }}>Here are a few frequently asked questions and answers about house rent, house selling, commercial property rent and commercial property selling. This should give you an idea as to how simple the process is, and what you need to be aware of.</p>


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

        </>
    )
}

export default PostPropertyFAQ
