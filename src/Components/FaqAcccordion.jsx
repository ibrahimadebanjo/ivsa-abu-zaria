import React, { useState } from "react";

const faqs = [
  {
    question: "What are the benefits of joining IVSA?",
    answer:
      "You get global networking opportunities, access to international exchanges, congresses, and scholarship programs.",
  },
  {
    question: "Is IVSA different from NAVMS?",
    answer:
      "Yes. IVSA is a voluntary global organization, while NAVMS membership is automatic for all Nigerian vet students.",
  },
  {
    question: "Does IVSA Nigeria receive external funding?",
    answer:
      "Not currently. We rely on member dues, sponsorships, and donations to run our programs and projects.",
  },
  {
    question: "Do ExCos get special benefits?",
    answer:
      "No. IVSA Nigeria executives are volunteers who coordinate activities and represent members nationally and globally.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <span className="text-gray-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer Section */}
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqAccordion;
