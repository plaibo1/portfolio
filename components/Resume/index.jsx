import Link from "next/link";
import React from "react";

export const ResumeBlock = ({ title = null, children }) => {
  return (
    <div className="flex flex-col md:flex-row mb-16">
      {title && (
        <h2 className="text-base font-semibold text-slate-400 min-w-[150px] mb-5 md:mb-0">
          {title}
        </h2>
      )}

      <div>{children}</div>
    </div>
  );
};

export const ResumeTitle = ({ children }) => {
  return (
    <div className="text-2xl font-bold text-slate-800 mb-2 leading-6">
      {children}
    </div>
  );
};

export const ResumeNav = () => {
  return (
    <span className="fixed top-10 left-10 noPrint z-[999]">
      <span className=" backdrop-blur-sm p-4 rounded-lg">
        <Link href="/">
          <a className="px-3 py-1 mb-2 rounded-md font-semibold bg-slate-200 hover:bg-slate-300">
            Назад
          </a>
        </Link>

        <a
          href="/IlyaLyskovCV.pdf"
          download
          className="px-3 ml-4 py-1 mb-2 rounded-md font-semibold bg-indigo-300 hover:bg-indigo-400"
        >
          Сохранить PDF
        </a>
      </span>
    </span>
  );
};
