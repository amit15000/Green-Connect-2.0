import "./index.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { CarouselCustomNavigation } from "../../Components/Main";

function Home() {
  return (
    <>
      <div className="h-full w-screen   max-w-screen-2xl mx-auto flex flex-col gap-10">
        <Navbar />
        <section className="md:mt-20 mt-16 relative">
          <CarouselCustomNavigation />
          <div className=" xl:absolute xl:inset-0  h-fit  ">
            <div className="flex flex-col gap-y-5 text-black mx-auto text-center text-balance mt-3 bg-green-100 xl:bg-transparent bg-opacity-50 py-7">
              <h3 className="font-medium xl:text-white xl:drop-shadow-[1px_2px_2px_rgba(0,0,0,1)]">
                &rdquo;BE THE CHANGE — PLANT A TREE AND GROW A GREENER
                WORLD.&rdquo;
              </h3>
              <h1 className="text-3xl font-amit xl:text-white xl:drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] xl:text-4xl">
                PLANT TREES FOR A SUSTAINABLE FUTURE
              </h1>
              <h2 className="font-semibold xl:text-white xl:drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] ">
                PLANT TREES FOR IMPACT
              </h2>
              <div>
                <a
                  className=" lg:text-2xl mt-1 inline-flex text- items-center justify-center rounded-xl bg-green-800 bg-opacity-75 hover:bg-opacity-100 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60"
                  href="#"
                >
                  PLANT TREES
                </a>
                {/* <marquee direction="right" className="w-full">
                <img src="/plant.png" className="size-10" alt="Plant" />
              </marquee> */}
              </div>
            </div>
          </div>
        </section>
        {/* Attract */}
        <section className="mt-8">
          <div className="flex flex-col items-center w-full gap-5">
            <h2 className="font-bold text-2xl bg-green-100 bg-opacity-50 w-full text-center py-2 hover:bg-opacity-100">
              MAKE AN IMPACT WITH
            </h2>
            <div className=" px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-flow-col  items-center lg:gap-20 ">
              <img
                src="/Companies/Cotton Country.png"
                className="cursor-pointer hover:scale-90"
                alt="Cotton Country"
              />
              <img
                src="/Companies/Salesforce.png"
                alt="Salesforce"
                className="cursor-pointer hover:scale-90"
              />
              <img
                src="/Companies/Hsbc.png"
                alt="Hsbc"
                className="cursor-pointer hover:scale-90"
              />
              <img
                src="/Companies/Hundai.png"
                alt="Hundai"
                className="cursor-pointer hover:scale-90"
              />
              <img
                src="/Companies/Atlassian.png"
                alt="Atlassian"
                className="cursor-pointer hover:scale-90"
              />
              <img
                src="/Companies/D.png"
                alt="Atlassian"
                className="cursor-pointer hover:scale-90"
              />
            </div>
          </div>
        </section>

        {/* Plant Tress */}
        <section className="mt-8 mb-5">
          <div className="flex flex-col items-center mx-auto select-none text-center  w-full gap-5 ">
            <h2 className="font-bold text-emerald-800 text-2xl"></h2>
            <h2 className="font-bold text-2xl bg-green-100 bg-opacity-50 w-full text-center py-2 hover:bg-opacity-100">
              PLANT TREES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 items-center lg:gap-20 gap-y-3 lg:gap-x-52 px-7">
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Uttrakhand.png" alt="Uttrakhand" />
                <span className="font-semibold lg:text-xl">Uttrakhand</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Uttar Pradesh.png" alt="Uttar Pradesh" />
                <span className="font-semibold lg:text-xl">Uttar Pradesh</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Rajasthan.png" alt="Rajasthan" />
                <span className="font-semibold lg:text-xl">Rajasthan</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Punjab.png" alt="Punjab" />
                <span className="font-semibold lg:text-xl">Punjab</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Bihar.png" alt="Bihar" />
                <span className="font-semibold lg:text-xl ">Bihar</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Gujarat.png" alt="Gujarat" />
                <span className="font-semibold lg:text-xl ">Gujarat</span>
              </div>
            </div>
          </div>
        </section>
        {/* Sustainanility For Business */}
        <section>
          <div className="relative">
            <img
              src="Backgrounds/Sustainability.png"
              alt="Sustainability"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 ">
              <div className=" flex h-full justify-center text-white  flex-col text-center  md:gap-9 lg:gap-16  px-10 text-balance tracking-tight">
                <h1 className=" text-balance drop-shadow-[0_2px_2px_rgba(0,0,0,1)]  font-extrabold text-xl leading-5 sm:text-3xl md:text-5xl lg:text-7xl ">
                  SUSTAINABILITY FOR BUSINESS
                </h1>
                <p className="text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-2xl lg:text-3xl font-bold">
                  MAKE A REAL IMPACT AND IMPROVE YOUR COMPANY&apos;S
                  SUSTAINABILITY INITIATIVES FOR 2024
                </p>
                <div>
                  <a
                    className=" lg:text-3xl mt-2 inline-flex text- items-center justify-center rounded-xl bg-green-600 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform duration-200 ease-in-out hover:scale-110"
                    href="#"
                  >
                    Become a Business Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TOGETHER PLANTING A FOREST */}
        <section>
          <div className="relative">
            <img
              className="opacity-70"
              src="Backgrounds/Together.png"
              alt="Sustainability"
            />

            <div className="absolute inset-0  text-white">
              <div className="flex h-full justify-center  flex-col text-center gap-1 md:gap-9 lg:gap-16  px-10 text-balance tracking-tight">
                <h1 className=" text-balance drop-shadow-[0_2px_2px_rgba(0,0,0,1)]  font-extrabold  leading-6 text-xl sm:text-3xl md:text-5xl lg:text-7xl ">
                  TOGETHER PLANTING A FOREST
                </h1>
                <p className="text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-2xl lg:text-3xl font-semibold">
                  WE MAKE IT SIMPLE FOR EVERYONE TO PLANT TREES
                </p>
                <div>
                  <a
                    className=" lg:text-3xl mt-1 inline-flex text- items-center justify-center rounded-xl bg-green-600 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform  ease-in-out hover:scale-110"
                    href="#"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section>
          <div className="grid grid-cols-1 mx-auto align-middle  items-center lg:grid-cols-3 gap-2  p-10 gap-y-10 ">
            <div className="work relative mx-auto">
              <img
                className="opacity-70"
                src="Activities/act1.png"
                width={600}
                height={700}
                alt=""
              />
              <div className="absolute inset-0 pt-[330px] ">
                <h1 className=" text-center text-white my-auto font-extrabold text-2xl">
                  <div className="layer">Individual</div>
                </h1>
              </div>
            </div>
            <div className="work relative mx-auto">
              <img
                className="opacity-70 "
                src="Activities/act2.png"
                width={600}
                height={700}
                alt=""
              />
              <div className="absolute inset-0 pt-[330px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-2xl">
                  <div className="layer ">BUSINESSES</div>
                </h1>
              </div>
            </div>

            <div className="work relative mx-auto">
              <img
                className="opacity-70"
                src="Activities/act3.png"
                width={600}
                height={700}
                alt=""
              />
              <div className="absolute inset-0 pt-[330px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-2xl">
                  <div className="layer">SCHOOLS</div>
                </h1>
              </div>
            </div>
          </div>
          {/* Ministry of Government */}
          <div className="mx-auto text-center px-5 select-none ">
            <img className="mx-auto " src="moe.png" alt="" />
            <p className="text-balance tracking-tight leading-5 text-sm md:text-md lg:text-2xl">
              We work with amazing reforestation partners around the country
              that need your support to help get trees in the ground.
            </p>
            <div>
              <a
                className="mt-8 inline-flex items-center justify-center cursor-pointer rounded-xl bg-green-800 py-3 px-6 text-base font-medium text-white shadow-xl shadow-green-200/50 transition-transform duration-200 ease-in-out hover:scale-110"
                href="#"
              >
                LEARN MORE ABOUT OUR PATNERSHIP
              </a>
            </div>
          </div>
        </section>

        {/* Reforestation */}
        <section>
          <div className="relative">
            <img
              className="opacity-90"
              src="Backgrounds/Trees.png"
              alt="Sustainability"
            />

            <div className="absolute inset-0  text-white">
              <div className="flex h-full justify-center flex-col text-center gap-3 md:gap-9 lg:gap-16  px-10 text-balance tracking-tight">
                <h1 className="  text-balance drop-shadow-[-3px_0px_10px_rgba(1,1,1,1)]  font-extrabold  leading-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl ">
                  REFORESTATION
                </h1>
                <p className="text-md drop-shadow-[0_3px_4px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl lg:text-3xl font-semibold">
                  PLANTING TREES ACROSS THE COUNTRY
                </p>
                <div className="flex mx-auto gap-x-4">
                  <a
                    className="lg:text-2xl md:text-2xl mt-1 inline-flex text- items-center justify-center rounded-xl bg-green-700 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform duration-200 ease-in-out hover:scale-110"
                    href="#"
                  >
                    WHY TREES
                  </a>
                  <a
                    className="lg:text-2xl md:text-2xl mt-1 inline-flex text- items-center justify-center rounded-xl bg-green-700 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform duration-200 ease-in-out hover:scale-110"
                    href="#"
                  >
                    PLANT TREES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 25000 in one day */}
        <section>
          <div className="relative">
            <img
              className="opacity-70"
              src="Backgrounds/oneday.png"
              alt="Sustainability"
            />

            <div className="absolute inset-0  text-white">
              <div className="flex h-full justify-center flex-col text-center gap-2 md:gap-9 lg:gap-16 px-10 text-balance tracking-tight">
                <h1 className=" text-balance drop-shadow-[0_2px_2px_rgba(0,0,0,1)] font-extrabold  leading-6 text-xl sm:text-3xl md:text-5xl lg:text-7xl ">
                  TREE PLANTING
                </h1>
                <p className="text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-2xl lg:text-3xl font-semibold">
                  25,000+ PLANTED IN 1 DAY
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Interactive Map */}
        <section>
          <div className="relative">
            <img className="opacity-70" src="Backgrounds/Map.png" alt="Map" />

            <div className="absolute inset-0  text-white">
              <div className="flex h-full justify-center flex-col text-center gap-2 md:gap-9 lg:gap-16  px-10 text-balance tracking-tight">
                <h1 className=" text-balance drop-shadow-[0_2px_2px_rgba(0,0,0,1)]   font-extrabold  leading-6 text-xl sm:text-3xl md:text-5xl lg:text-7xl ">
                  INTERACTIVE MAP
                </h1>
                <p className="text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-2xl lg:text-3xl font-semibold">
                  SEE THE STATES PLANTED BY OUR TEAM
                </p>
                <div>
                  <a
                    className="lg:text-3xl md:text-2xl mt-1 inline-flex text- items-center justify-center rounded-xl bg-green-800 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform duration-200 ease-in-out hover:scale-110"
                    href="#"
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
