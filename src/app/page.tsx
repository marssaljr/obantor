import {
  Clipboard,
  FunnelSimple,
  PencilSimpleLine,
  Pulse,
  CaretDown,
  CirclesFour,
  CalendarDots,
  Package,
  SketchLogo,
  Bell,
  MagnifyingGlass,
  QuestionMark,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-zinc-900 flex flex-row h-screen w-screen bg-gradient-to-br from-[#FEFDFD] via-[#F7FBF5] to-[#FEFDFD]">
      <div className="p-1 gap-4 w-48 h-full bg-[#3C715E] text-white flex flex-col items-center">
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-row px-4 py-4 gap-2 justify-start w-full items-center">
            <SketchLogo size={20} color="#FFE193" />
            <h1 className="font-bold text-1xl text-white">obantor</h1>
          </div>
          <div className="border-b w-full flex flex-col gap-2 py-4 px-1">
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Clipboard size={20} />{" "}
                <p className="text-xs font-bold">Tasks</p>
              </div>
              <p className="text-xs font-bold">12</p>
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Pulse size={20} />
                <p className="text-xs font-bold">Activities</p>
              </div>
              <CaretDown size={10} />{" "}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-1 py-4">
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <CirclesFour size={20} />
                <p className="text-xs font-bold">Dashboard</p>
              </div>
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <CalendarDots size={20} />
                <p className="text-xs font-bold">Schedule</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-1 py-4">
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Package size={20} />
                <p className="text-xs font-bold">Products</p>
              </div>
              <CaretDown size={10} />{" "}
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Package size={20} />
                <p className="text-xs font-bold">Report</p>
              </div>
              <CaretDown size={10} />{" "}
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Package size={20} />
                <p className="text-xs font-bold">Note</p>
              </div>
              <CaretDown size={10} />{" "}
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Package size={20} />
                <p className="text-xs font-bold">Team</p>
              </div>
              <CaretDown size={10} />{" "}
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <Package size={20} />
                <p className="text-xs font-bold">Clients</p>
              </div>
              <CaretDown size={10} />{" "}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-1 py-4">
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <CirclesFour size={20} />
                <p className="text-xs font-bold">Settings</p>
              </div>
            </div>
            <div className="p-2 rounded-r-md w-full flex flex-row justify-between hover:bg-[#FFE193] hover:text-[#274F46] items-center">
              <div className="flex flex-row gap-2 items-center">
                <CalendarDots size={20} />
                <p className="text-xs font-bold">Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t w-full flex flex-row gap-2 pt-2 items-center">
          <Image
            className="rounded-full p-2"
            width={48}
            height={48}
            alt="person"
            src="https://randomuser.me/api/portraits/lego/3.jpg"
          />
          <div className="flex flex-col">
            <p className="font-bold text-[8px]">Andrew Simon</p>
            <p className="font-thin text-[8px]">andrew@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="border-b py-4 px-4 flex flex-row gap-24 w-full justify-between">
          <div className="flex flex-col px-2 w-80">
            <p className="text-xs text-zinc-400">Welcome,</p>
            <p className="text-xs text-zinc-900 font-bold">Andrew Simon</p>
          </div>
          <div className="w-full shadow-md flex flex-row gap-2 rounded-full border px-2 py-1 bg-white items-center">
            <MagnifyingGlass size={26} className="text-zinc-400" />
            <input
              className="border-none w-full bg-none"
              placeholder="Search here..."
            />
          </div>
          <div className="flex flex-row px-2 items-center justify-end gap-2">
            <button className="p-2 rounded-full border bg-white">
              <Bell size={20} className="text-zinc-400" />
            </button>
            <button className="p-2 rounded-full border bg-white">
              <QuestionMark size={20} className="text-zinc-400" />
            </button>
          </div>
        </div>
        <div className="py-4 px-8 gap-4 flex flex-col">
          <div className="border rounded-md p-2 flex flex-row gap-2">
            <div className="flex flex-col border-r gap-2 px-2 w-80">
              <p className="font-bold">April</p>
              <p className="text-xs">Today is Saturday, April 6th, 2024</p>
            </div>
            <div className="flex flex-row justify-between w-full px-8 items-center">
              <p className="font-bold">Board -</p>
              <p className="flex flex-row items-center gap-2 text-xs">
                Daily Tasks <CaretDown size={10} />{" "}
              </p>
              <div className="flex flex-row gap-2">
                <button className="text-xs flex flex-row items-center gap-2 bg-none font-bold border rounded-md px-2 py-1">
                  <FunnelSimple
                    size={28}
                    className="bg-white p-1 rounded-full border text-zinc-400"
                  />
                  Filters
                </button>
                <button className="text-xs flex flex-row items-center gap-2 bg-none font-bold border rounded-md px-2 py-1">
                  <PencilSimpleLine
                    className="bg-white p-1 rounded-full border text-zinc-400"
                    size={28}
                  />
                  Create task
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="border rounded-md p-4 gap-2 flex flex-col items-center w-64">
              <div className="flex flex-row gap-2 justify-center items-center">
                <div className="rounded-full w-2 h-2 bg-red-400"></div>
                <div className="text-xs font-bold">To Do List</div>
              </div>
              <div className="w-full">
                <button className="w-full h-8 flex justify-center items-center border rounded-md p-4 bg-white">
                  +
                </button>
              </div>
              <div className="bg-white shadow-md rounded-md p-4 w-full flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2 text-white">
                    <button className="py-1 px-4 text-xs bg-[#3D91F7] rounded-full">
                      Data
                    </button>
                    <button className="py-1 px-4 text-xs bg-[#DF81F7] rounded-full">
                      Analysis
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold w-full text-sm">
                    Data Presentation Of IMW
                  </p>
                  <p className="text-xs text-zinc-500">
                    IMW* Official Site - Empower your teams. Take your project
                    data management skills to the next level. Concept to...
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
