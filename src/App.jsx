// import { H1 } from "./Hooks/textLang/TextLang"
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import Error404 from "./layout/Error404";
import { H2, H2Gray, P } from "./Hooks/textLang/TextLang";
import SideNav from "./components/SideNav";
import { MdArrowRight } from "react-icons/md";
import {
  ProDetails,
  NewProject,
  ProStudy,
  Posts,
  CreatePost,
  Projects,
} from "./pages/newProject/Newproject";
import { Dashboard, DashBoadrdAllProjects } from "./pages/dashboard/Dashboard";
import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="font-sans">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </Router>

      {/* <DashBoadrdAllProjects /> */}

      {/* <div className="flex gap-5 w-11/12 mt-10 mx-auto">
        
        <SideNav />
        <div>
          <section>
          <div className="text-[#2C2C2C] font-bold text-[32px] leading-[40px]">
            Dashboard
          </div>
          <div className="flex [&>div]:bg-white gap-4 [&>div]:rounded-lg [&>div]:w-fit ">
            <div className="">
              <img src="/images/DailyProgress.png" alt="" />
            </div>
            <div>
              <img src="/images/Charts.png" alt="" />
            </div>
            <div>
              <img src="/images/shutterstock_502875937.png" alt="" />
            </div>
          </div>
          </section>
          <section>
            <div className="text-[#2C2C2C] font-bold text-[32px] mb-2 ">
            Latest Projects
            </div>
            <div className="flex  justify-around text-[#A1A1AA]">
              <p>Project Name</p>
              <p>Case Study</p>
              <p>Target Audience</p>
              <p>No. Posts</p>
            </div>
            <div>
            <div className="flex py-4  my-3 bg-[#F4F4F5] justify-around ">
              <p>Riyadh Heights</p>
              <p><TiTick /></p>
              <p><TiTick /></p>
              <p>8</p>
            </div>
            <div className="bg-[#F4F4F5] w-11/12 mx-auto h-[2px]"/>
            </div>
            <div>
            <div className="flex py-4  my-3 bg-[#F4F4F5] justify-around ">
              <p>Riyadh Heights</p>
              <p><TiTick /></p>
              <p><TiTick /></p>
              <p>8</p>
            </div>
            <div className="bg-[#F4F4F5] w-11/12 mx-auto h-[2px]"/>
            </div>
            <div className="text-end flex items-center justify-end gap-5 mt-5">
              <p>See More</p>
              <div>
                <img src="/icons/Icon (2).png" alt="" />
              </div>
            </div>
          </section>
        </div>
        <div>
          

        </div>
        </div>
        <SideNav /> */}
      {/* <div className="flex gap-3 w-full mx-5  mt-8">
          <SideNav />
          <NewProject >
            
            <Projects />

          </NewProject>
        </div> */}
    </div>
  );
}
