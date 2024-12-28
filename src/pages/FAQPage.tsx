import React from 'react';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve Edmonton and surrounding areas including St. Albert, Sherwood Park, Leduc, Spruce Grove, and more. Contact us for specific location inquiries.'
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-3 weeks in advance, especially during peak moving season (May-September). However, we can often accommodate last-minute moves as well.'
  },
  {
    question: 'Are you insured?',
    answer: 'Yes, we are fully licensed and insured. We provide basic insurance coverage with all moves and offer additional coverage options for valuable items.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and e-transfers.'
  },
  {
    question: 'Do you provide packing supplies?',
    answer: 'Yes, we offer a full range of packing supplies including boxes, tape, bubble wrap, and specialized containers. These can be purchased separately or included in our full-service packages.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand plans can change. Cancellations made 48 hours or more before the scheduled move are fully refundable. Less than 48 hours notice may incur a small fee.'
  }
];

export function FAQPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our moving services
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}