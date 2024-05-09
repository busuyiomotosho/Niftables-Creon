"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  children: React.ReactNode;
  title: string;
  icon: string;
  iconActive: string;
  id: string;
  active?: boolean;
};

const Accordion = ({
  children,
  title,
  icon,
  iconActive,
  id,
  active = false,
}: Props) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="flex space-x-5">
        <div>
          {accordionOpen ? (
            <Image src={iconActive} alt="Icon" width={400} height={456} />
          ) : (
            <Image src={icon} alt="Icon" width={400} height={456} />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <button
              className="flex justify-between w-full text-left font-semibold py-2"
              onClick={(e) => {
                e.preventDefault();
                setAccordionOpen(!accordionOpen);
              }}
              aria-expanded={accordionOpen}
              aria-controls={`accordion-text-${id}`}
            >
              <span
                id={`accordion-title-${id}`}
                className="text-lg md:text-2xl font-satoshi-medium max-w-60 hover:text-blue-500"
              >
                {title}
              </span>
              {accordionOpen ? (
                <IoIosArrowDown
                  className={`transform origin-center rotate-180 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
              ) : (
                <IoIosArrowUp
                  className={`transform origin-center rotate-180 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                  }`}
                />
              )}
            </button>
          </div>
          <div
            id={`accordion-text-${id}`}
            role="region"
            aria-labelledby={`accordion-title-${id}`}
            className={`grid text-base md:text-lg font-satoshi-regular overflow-hidden transition-all duration-300 ease-in-out ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-3">{children}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-2 border-0 bg-gray-900" />
    </div>
  );
};

export default Accordion;
