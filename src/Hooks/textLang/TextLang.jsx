import { useLang } from "../LangContext";

export const H2 = ({ ar = "", en = "", className }) => {
  const { lang } = useLang("ar");
  return (
    
      <h2
        className={`text-xl flex font-bold  ${className} ${
          lang === "ar" ? "justify-end text-right" : "justify-start text-left"
        } `}
      >
        {lang === "ar" ? ar : en}
      </h2>
    
  );
};


export const P = ({ ar = "", en = "", className }) => {
  const { lang } = useLang("ar");
  return (
      <p
        className={`flex  ${className} ${
          lang === "ar" ? "justify-end text-right" : "justify-start text-left"
        } `}
      >
        {lang === "ar" ? ar : en}
      </p>
  );
};

export const H2Gray = ({ ar = "", en = "", className }) => {
  const { lang } = useLang("ar");
  return (
    <div>
      <div
        className={`flex text-[#0000008A] ${className} ${
          lang === "ar" ? "justify-end text-right" : "justify-start text-left"
        } `}
      >
        {lang === "ar" ? ar : en}
      </div>
    </div>
  );
};
