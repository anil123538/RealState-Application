import { Fragment } from "react";

const Faqs = () => {
  const content = [
    {
      question: "How secure is NESTATE Pay?",
      answer:
        "Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. NESTATE Pay does not store any of your financial information.",
    },
    {
      question: "How secure is NESTATE Pay?",
      answer:
        "Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. NESTATE Pay does not store any of your financial information.",
    },
    {
      question: "How secure is NESTATE Pay?",
      answer:
        "Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. NESTATE Pay does not store any of your financial information.",
    },
    {
      question: "How secure is NESTATE Pay?",
      answer:
        "Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. NESTATE Pay does not store any of your financial information.",
    },
    {
      question: "How secure is NESTATE Pay?",
      answer:
        "Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. NESTATE Pay does not store any of your financial information.",
    },
  ];
  return (
    <div className="space-y-4 md:w-9/12 w-11/12 py-5">
      {content.map((cont, index) => {
        const { question, answer } = cont;
        return (
          <Fragment key={index}>
            <hr />
            <details
              className="group [&_summary::-webkit-details-marker]:hidden w-full"
              close
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <div className="flex items-center gap-2">
                  <div className="bg-red w-8 h-8 grid place-items-center rounded-full">
                    <span className="text-white">?</span>
                  </div>
                  <h2 className="font-medium text-sm">{question}</h2>
                </div>

                <span className="text-gray text-xs group-open:hidden">
                  show
                </span>
                <span className="text-blue font-semibold text-xs hidden group-open:inline">
                  hide
                </span>
              </summary>

              <p className="mt-4 px-6 leading-relaxed text-gray font-light bg-slate-50 py-2 text-sm">
                {answer}
              </p>
            </details>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Faqs;
