import { MdArrowRight } from "react-icons/md";

export function NewProject({ children }) {
  return (
    <>
      <div className="border relative w-full border-[#4880FF] rounded-lg  p-10 text-[#2C2C2C80]">
        <ul className="flex justify-between">
          <li>PRO. Details</li>
          <li>PRO. Study </li>
          <li>Create Post</li>
          <li>Posts</li>
          <li>Schedule</li>
          <li>Save</li>
        </ul>
        <div className="mt-10 h-[650px]">{children}</div>
        <div className=" absolute right-16 bottom-5 mx-auto">
          <button className="text-[#1B0942] flex items-center gap-3 bg-[#D9D9D9] px-10 py-2 rounded-full font-[500] ml-auto ">
            <MdArrowRight />
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export function ProDetails() {
  return (
    <>
      <form
        className="flex  my-[5rem]  [&>div>input]:text-black focus:[&>div>input]:border-[#5C73DB]  focus:[&>div>input]:border-none focus:[&>div>input]:outline-none focus:[&>div>input]:outline-[#5C73DB] [&>div>label]:text-black [&>div]:flex  [&>div>input]:bg-[#D9D9D9] [&>div>input]:font-bold [&>div>input]:text-center [&>div>input]:rounded-md [&>div>input]:py-[5px]  [&>div>input]:placeholder:text-black [&>div]:flex-col justify-center gap-20   "
        action=""
      >
        <div className=" gap-[4.5rem]">
          <label htmlFor="Country">Country</label>
          <label htmlFor="City">City</label>
          <label htmlFor="District">District</label>
        </div>
        <div className="gap-[3.5rem]">
          <input id="Country" type="text" name="" placeholder="Select" />
          <input id="City" type="text" placeholder="Select" />
          <input id="District" type="text" placeholder="Select" />
        </div>
      </form>

      <div className="mx-auto  mb-10 w-fit">
        <div className="mb-3">
          <p className="text-black">Tell us more about this project</p>
        </div>
        <div>
          <textarea
            className="w-[565px] h-[220px] bg-[#D9D9D9] py-[24px] px-[23px]"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </>
  );
}

export function ProStudy() {
  return (
    <div className="w-[577px] overflow-y-auto  scrollbar  h-[616px] mx-auto">
      <ul className="[&>li]:px-8  [&>li]:bg-[#F8F8F8] [&>li>div>textarea]:text-[14px] [&>li>div>textarea]:leading-[19.1px] [&>li>div>textarea]:tracking-[-0.05px] [&>li>div>textarea]: [&>li>div>textarea]:font-bold   [&>li]:py-1 [&>li]:flex [&>li]:flex-col [&>li]:gap-5 [&>li>div]:flex [&>li>div]:justify-between   [&>li>div>textarea]:h-[152px] [&>li>div>textarea]:bg-[#F8F8F8] [&>li>h2]:text-center [&>li>h2]:text-[24px] [&>li>h2]:font-bold [&>li>h2]:text-black  [&>li]:h-[267px]  [&>li]:w-full [&>li]:mb-2 [&>li>div>textarea]:w-full ">
        <li>
          <h2>Study Case</h2>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <p>15/8/2024</p>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
          </div>
        </li>
        <li>
          <h2>Target Audience</h2>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <p>15/8/2024</p>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
          </div>
        </li>
        <li>
          <h2>Pros & Cons</h2>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <p>15/8/2024</p>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export function Posts() {
  return (
    <div className="w-[577px] overflow-y-auto  scrollbar  h-full mx-auto">
      <ul className="[&>li]:px-8 [&>li]:h-[288px] [&>li>div]:gap-5 [&>li>div]:justify-end   [&>li]:bg-[#F8F8F8] [&>li>div>textarea]:text-[14px] [&>li>div>textarea]:leading-[19.1px]  [&>li>div>textarea]:tracking-[-0.05px] [&>li>div>textarea]: [&>li>div>textarea]:font-bold   [&>li]:py-1 [&>li]:flex [&>li]:flex-col [&>li]:gap-5 [&>li>div]:flex    [&>li>div>textarea]:h-[152px] [&>li>div>textarea]:bg-[#F8F8F8] [&>li>h2]:text-center [&>li>h2]:text-[24px] [&>li>h2]:font-bold [&>li>h2]:text-black  [&>li]:pt-[2.25rem] [&>li]:w-full [&>li]:mb-2 [&>li>div>textarea]:w-full ">
        <li>
          <div></div>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
            <div>
              <img src="/icons/Image.png" alt="" />
            </div>
            <div>
              <img src="/icons/Icon (1).png" alt="" />
            </div>
            <p>15/8/2024</p>
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
            <div>
              <img src="/icons/Image.png" alt="" />
            </div>
            <div>
              <img src="/icons/Icon (1).png" alt="" />
            </div>
            <p>15/8/2024</p>
          </div>
        </li>
        <li>
          <div></div>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
            <div>
              <img src="/icons/Image.png" alt="" />
            </div>
            <div>
              <img src="/icons/Icon (1).png" alt="" />
            </div>
            <p>15/8/2024</p>
          </div>
        </li>
      </ul>
      <div className="fixed z-20  hidden  flex justify-center inset-0 items-center">
        <div className="fixed -z-10  inset-0 opacity-50 bg-black"></div>

        <div className="bg-white scrollbar p-7 overflow-auto h-full w-[1104px]">
          <h2 className="text-black font-bold text-[20px] text-center">
            EDIT POST
          </h2>
          <div className="flex gap-3 ">
            <div className="w-1/2">
              <h2 className="mb-3 text-black font-bold text-[20px]  text-center">
                IMAGE
              </h2>
              <img
                src="/images/login.png"
                className=" w-[516px] rounded-md h-[516px] object-cover"
                alt=""
              />

              <h3 className="text-center my-3 font-[400] text-black">
                Accounts
              </h3>
              <div className="border-[#5C73DB] flex gap-5  border p-4 rounded-md">
                <img src="/icons/c.png" className="object-cover" alt="" />
                <img
                  src="/icons/Social Icons.png"
                  className="object-cover"
                  alt=""
                />
                <img
                  src="/icons/Social Icons (1).png"
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className=" w-1/2">
              <h2 className="mb-3 text-black font-bold text-[20px] text-center">
                CONTENT
              </h2>

              <p className="border-[#F4F4F5] text-gray-900 p-4 font-bold rounded-md border text-[14px] leading-[19.1px] -tracking-[0.05px] ">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
                aliquam et; malesuada imperdiet potenti gravida. Egestas nam
                porttitor natoque accumsan cursus tempus fusce mauris accumsan.
                Pellentesque taciti facilisis ut eu morbi habitant. Dictorttitor
                natoque accumsan cursus tempus fusce mauris accumsan.
                Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
                nisl massa parturient malesuada. Commodo facilisi nostra tempor
                torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
                pellentesque fames dolor tempus. Ipsuorttitor natoque accumsan
                cursus tempus fusce mauris accumsan. Pellentesque taciti
                facilisis ut eu morbi habitant. Dictum quam nisl massa
                parturient malesuada. Commodo facilisi nostra tempor torquent,
                pharetra ut dis amet. Dui a netus suscipit; vivamus pellentesque
                fames dolor tempus. Ipsuum quam nisl massa parturient malesuada.
                Commodo facilisi nostra tempor torquent, pharetra ut dis amet.
                Dui a netus suscipit; vivamus pellentesque fames dolor tempus.
                Ipsum conubia mollis consequat vestibulum curabitur magnis
                lacinia.{" "}
                <span className="text-[#075697]">
                  {" "}
                  #realestate #Takamol_Advanced #compound
                </span>
              </p>
            </div>
          </div>
          <div className="[&>button]:p-[16px] ml-auto [&>button]:w-[200px] [&>button]:rounded-md w-fit">
            <button className="bg-[#D4D4D8] mr-5  text-black">Cancel</button>
            <button className="bg-[#4763E4] text-white">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreatePost() {
  return (
    <div className="w-[588px] mx-auto">
      <ul className="text-black [&>li]:justify-between [&>li]:flex ">
        <li>
          <p className="text">Create</p>
          <div className="[&>div]:rounded-md  [&>div]:justify-center [&>div]:items-center flex [&>div]:flex  [&>div]:h-[37px] [&>div]:w-[180px] ">
            <div className="bg-[#D9D9D9]">Text</div>
            <div className="bg-[#7452AC]">Text & Images</div>
          </div>
        </li>
        <li className="flex-col mb-10 gap-2">
          <p>Text prompt</p>
          <textarea
            className="h-[167px] rounded-md bg-[#D9D9D9] w-full"
            name=""
            id=""
          ></textarea>
        </li>
        <li className="flex-col gap-2">
          <p>Image Keywords</p>
          <textarea
            className="h-[167px] rounded-md bg-[#D9D9D9] w-full"
            name=""
            id=""
          ></textarea>
        </li>
        <li className="flex-col gap-2">
          <p>Accounts</p>
          <div className="h-[68px]  rounded-md bg-[#D9D9D9] w-full">
            <img src="/icons/" alt="" />
            <img src="/icons/" alt="" />
            <img src="/icons/" alt="" />
          </div>
        </li>
        <li className="[&>div>div]:h-[37px]  text-center [&>div>div]:rounded-md [&>div>div]:w-[180px] [&>div>div]:bg-[#D9D9D9] ">
          <div>
            <p>No. of posts</p>
            <div></div>
          </div>
          <div>
            <p>Content Length</p>
            <div></div>
          </div>
          <div>
            <p>Tone</p>
            <div></div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export function Projects() {
  return <div className="w-[841px] overflow-x-auto scrollbar ">
  <ul className="[&>li>div]:w-[400px] [&>li>div>textarea]:h-[140px] [&>li>div]:justify-end [&>li>div>img]:w-full [&>li>div>img]:h-[350px] h-[600px] [&>li]:px-8 gap-2 [&>li]:rounded-md   w-[896px]   flex [&>li>div]:gap-5   [&>li]:bg-[#F8F8F8] [&>li>div>textarea]:text-[14px] [&>li>div>textarea]:leading-[19.1px]  [&>li>div>textarea]:tracking-[-0.05px] [&>li>div>textarea]: [&>li>div>textarea]:font-bold   [&>li]:py-1 [&>li]:flex [&>li]:flex-col [&>li]:gap-5 [&>li>div]:flex   [&>li>div>textarea]:bg-[#F8F8F8] [&>li>h2]:text-center [&>li>h2]:text-[24px] [&>li>h2]:font-bold [&>li>h2]:text-black  [&>li]:pt-[2.25rem]  [&>li]:mb-2 [&>li>div>textarea]:w-full ">
        <li>
          <div>
            <img src="/images/login.png" className=" object-cover" alt="" />
          </div>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
            <div>
              <img src="/icons/Image.png" alt="" />
            </div>
            <div>
              <img src="/icons/Icon (1).png" alt="" />
            </div>
            <p>15/8/2024</p>
          </div>
        </li>
        <li>
        <div>
            <img src="/images/login.png" className=" object-cover" alt="" />
          </div>
          <div className="h-[500px]">
            <textarea name="" id="" className="  text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
            <div>
              <img src="/icons/Image.png" alt="" />
            </div>
            <div>
              <img src="/icons/Icon (1).png" alt="" />
            </div>
            <p>15/8/2024</p>
          </div>
        </li>
        <li>
        <div>
            <img src="/images/login.png" className=" object-cover" alt="" />
          </div>
          <div>
            <textarea name="" id="" className="text-black scrollbar">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Quam elit
              aliquam et; malesuada imperdiet potenti gravida. Egestas nam
              porttitor natoque accumsan cursus tempus fusce mauris accumsan.
              Pellentesque taciti facilisis ut eu morbi habitant. Dictum quam
              nisl massa parturient malesuada. Commodo facilisi nostra tempor
              torquent, pharetra ut dis amet. Dui a netus suscipit; vivamus
              pellentesque fames dolor tempus. Ipsum conubia mollis consequat
              vestibulum curabitur magnis lacinia. #realestate #Takamol_Advanced
              #compound
            </textarea>
          </div>
          <div>
            <div>
              <img src="/icons/Icon.png" alt="" />
            </div>
            <div>
              <img src="/icons/Image.png" alt="" />
            </div>
            <div>
              <img src="/icons/Icon (1).png" alt="" />
            </div>
            <p>15/8/2024</p>
          </div>
        </li>
      </ul>
      </div>
}


export function MyProjects() {
  return(<></>)
}



// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// export default function BasicDateCalendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar />
//     </LocalizationProvider>
//   );
// }