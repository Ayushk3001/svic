'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-slate-200 last:border-b-0">
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-300 ease-out hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 sm:px-5"
            >
              <span className="text-sm font-black leading-6 text-slate-950 sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-teal-700 transition-transform duration-300 ease-out ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 text-sm font-semibold leading-7 text-slate-600 sm:px-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
