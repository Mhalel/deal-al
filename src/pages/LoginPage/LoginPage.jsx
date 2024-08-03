import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook, FaApple } from "react-icons/fa";
import { P, H2, H2Gray } from "../../Hooks/textLang/TextLang";
import { useLang } from "../../Hooks/LangContext";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const { lang, setLang } = useLang();
  function changeLang() {
    if (lang === "ar") {
      setLang("en");
    } else {
      setLang("ar");
    }
  }
  return (
    <div className={`flex [&>*]:w-full md:[&>*]:w-1/2 `}>
      <picture className=" lg:h-fit md:block hidden md:h-[700px] ">
        <img src="/images/login.png" className="h-full object-cover" alt="" />
      </picture>
      <div className="flex flex-col  justify-center items-center">
        <div className="mb-10">
          <img src="/images/Takaml.png" className="object-cover" alt="" />
        </div>

        <form
          className="gap-4 flex flex-col [&>div>label]:mb-1  px-10 w-full sm:px-0 sm:w-[370px] [&>div]:flex-col [&>div>input]:focus:outline-[#5C73DB] [&>div]:flex [&>div>input]:rounded-[8.89px]  [&>div>input]:focus:border-[#5C73DB] [&>div]:w-full [&>div>input]:border-[#E4E4E7]  [&>div>input]:border [&>div>input]:px-2 [&>div>input]:py-2  [&>div>input]:text-[#9FA6B2] [&>div>input]:placeholder:bg-transparent "
          action=""
        >
          <div>
            <label htmlFor="Email">
              <P en="Email" ar="بريد إلكتروني" />
            </label>
            <input
              className={`${
                lang === "ar"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
              } focus:border-none focus:outline-[#5C73DB]`}
              type="email"
              name="Email"
              id="Email"
              placeholder={`${lang === "ar" ? "اسم المستخدم" : "User Name"}`}
            />
          </div>
          <div>
            <label htmlFor="Password">
              <P ar="كلمه السر" en="Password" />
            </label>
            <input
              className={`${
                lang === "ar"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
              } focus:border-none focus:outline-[0.2px] focus:outline-[#5C73DB]`}
              type="password"
              name="Password"
              id="Password"
              placeholder={`${lang === "ar" ? "كلمه السر" : "Password"}`}
            />
          </div>
          <button className="mb-5 mx-auto">
            <Link to="*">
              <P ar="هل نسيت كلمة السر ؟" en="Forgot password ?" />
            </Link>
          </button>
          <Link to="*">
            <button
              className={`bg-[#4763E4] ${
                lang === "ar" ? "flex-row-reverse" : "flex-row"
              } mx-auto justify-center flex mb-6 text-white items-center rounded-lg p-4  w-[350px] gap-1`}
            >
              <P ar="تسجيل الدخول" en="login" />
              <FaArrowRight
                className={`${lang === "ar" ? "-scale-100" : "scale-100"}`}
              />
            </button>
          </Link>
        </form>

        <div className="px-2 button ">
          <div className="text-xl [&>button]:font-bold  [&>button]:w-[350px] [&>button]:gap-3 [&>button]:mb-3">
            <button
              className={`bg-[#1877F2]   flex text-white items-center  p-4 rounded-lg w-full ${
                lang === "ar"
                  ? "flex-row-reverse text-right"
                  : "flex-row text-left"
              }`}
            >
              <FaFacebook />
              <H2 ar="الدخول بالفيسبوك" en="Sign In with Facebook" />
            </button>

            <button
              className={`bg-white  shadow-lg flex text-[#0000008A] items-center  p-4 rounded-lg w-full ${
                lang === "ar"
                  ? "flex-row-reverse text-right"
                  : "flex-row text-left"
              }`}
            >
              <img src="/images/googlelogo.png" alt="" />
              <H2 ar="الدخول بجوجل" en="Sign In with Google" />
            </button>
            <button
              className={`${
                lang === "ar"
                  ? "flex-row-reverse text-right"
                  : "flex-row text-left"
              } bg-black shadow-lg flex text-white items-center  p-4 rounded-lg w-full`}
            >
              <FaApple />
              <H2 ar="Apple تسجيل الدخول ب " en="Sign In with Apple"></H2>
            </button>
          </div>
          <div
            className={`${
              lang === "ar"
                ? "flex-row-reverse text-right"
                : "flex-row text-left"
            } gap-1 mx-auto w-fit flex`}
          >
            <P ar="ليس لديك حساب؟" en="Don’t have an account ?" />
            <span className="text-[#5C73DB]">
              <Link to="*">
                <P ar="إنشاء حساب" en="Create account" />
              </Link>
            </span>
          </div>
        </div>

        <div
          className="absolute flex justify-center items-center cursor-pointer bg-black text-white top-1 right-4  px-3 py-1  rounded-full"
          onClick={() => {
            changeLang();
          }}
        >
          {lang === "ar" ? "ع" : "en"}
        </div>
      </div>
    </div>
  );
}
