import { TiTick } from "react-icons/ti";
import SideNav from "../../components/SideNav";

export function Dashboard() {
  return (
    <div className="flex gap-5 w-11/12 mt-10 mx-auto">
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
              <p>
                <TiTick />
              </p>
              <p>
                <TiTick />
              </p>
              <p>8</p>
            </div>
            <div className="bg-[#F4F4F5] w-11/12 mx-auto h-[2px]" />
          </div>

          <div>
            <div className="flex py-4  my-3 bg-[#F4F4F5] justify-around ">
              <p>Riyadh Heights</p>
              <p>
                <TiTick />
              </p>
              <p>
                <TiTick />
              </p>
              <p>8</p>
            </div>
            <div className="bg-[#F4F4F5] w-11/12 mx-auto h-[2px]" />
          </div>
          <div className="text-end flex items-center justify-end gap-5 mt-5">
            <p>See More</p>
            <div>
              <img src="/icons/Icon (2).png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function DashBoadrdAllProjects() {
  const arr = [
    {
      Pprojectname:"Riyadh Heights",
      casestudy:true,
      targetaudience:true,
      numberposts:"7",
    },
    {
      Pprojectname:"Riyadh Heights",
      casestudy:true,
      targetaudience:true,
      numberposts:"7",
    },
    {
      Pprojectname:"Riyadh Heights",
      casestudy:true,
      targetaudience:true,
      numberposts:"7",
    },
    {
      Pprojectname:"Riyadh Heights",
      casestudy:true,
      targetaudience:true,
      numberposts:"7",
    },
    {
      Pprojectname:"Riyadh Heights",
      casestudy:true,
      targetaudience:true,
      numberposts:"7",
    },
    {
      Pprojectname:"Jeddah Gardens",
      casestudy:true,
      targetaudience:true,
      numberposts:"6",
    },
    {
      Pprojectname:"Dammam Oasis",
      casestudy:true,
      targetaudience:true,
      numberposts:"8",
    },
    {
      Pprojectname:"Mecca Vista",
      casestudy:true,
      targetaudience:true,
      numberposts:"8",
    },
    {
      Pprojectname:"Mecca Vista",
      casestudy:true,
      targetaudience:true,
      numberposts:"9",
    },
    {
      Pprojectname:"Mecca Vista",
      casestudy:true,
      targetaudience:true,
      numberposts:"9",
    },
    {
      Pprojectname:"Mecca Vista",
      casestudy:true,
      targetaudience:true,
      numberposts:"9",
    },
    {
      Pprojectname:"Mecca Vista",
      casestudy:true,
      targetaudience:true,
      numberposts:"9",
    },
    {
      Pprojectname:"Mecca Vista",
      casestudy:true,
      targetaudience:true,
      numberposts:"9",
    },
  ]
  return <div className="flex gap-5 w-11/12 mt-10 mx-auto">
    <SideNav />
    <div className="w-full">

    
    <div className="text-[#2C2C2C] font-bold text-[32px] mb-2 ">
      Projects
          </div>
          <div className="w-full mb-3 rounded-md border flex px-2 py-2 gap-4 items-center border-[#4763E480]">
              <div>
                <img src="/icons/Frame 82.png" alt="" />
              </div>
              <div className="w-full"><input type="search" className="w-full focus:border-none  focus:outline-none" placeholder="Search Projects" /></div>
          </div>
          <div className="flex  justify-around text-[#A1A1AA]">
            <p>Project Name</p>
            <p>Case Study</p>
            <p>Target Audience</p>
            <p>No. Posts</p>
          </div >
          <div className="overflow-auto scrollbar h-[700px]">          
          {
            arr.map(e=>{
              return <ProjectsListData Pprojectname={e.Pprojectname} casestudy={e.casestudy} numberposts={e.numberposts} targetaudience={e.targetaudience} />
            })
          }
          </div>
          </div>
  </div>;
}


export function ProjectsListData ({Pprojectname,casestudy,targetaudience,numberposts}) {
  return   <div>
  <div className="flex py-4  my-3 bg-[#F4F4F5] justify-around ">
    <p>{Pprojectname}</p>
    <p>
      {
        casestudy?(<TiTick />):(null)
      }
    </p>
    <p>
    {
        targetaudience?(<TiTick />):(null)
      }
    </p>
    <p>{numberposts}</p>
  </div>
  <div className="bg-[#F4F4F5] w-11/12 mx-auto h-[2px]" />
</div>
}
