import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

function Footer() {
  return (
    <div className="px-10 py-10 bg-black text-white  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3  text-center sm:gap-x-2 gap-y-10">
        <div className="hidden md:block mx-auto">
          <div>
            <img className=" inline-block" src="logo.png" alt="Logo" />
            <span className="mx-5 font-bold text-2xl">GREEN CONNECT</span>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-5 items-center mx-auto mt-6 ">
            <img width={100} src="Companies/Hsbc_small.png" alt="Hsbc_small" />
            <img
              width={100}
              src="Companies/Atlassian_small.png"
              alt="Atlassian_small"
            />
            <img
              width={100}
              src="Companies/Salesforce_small.png"
              alt="Salesforce_small"
            />
            <img
              width={100}
              src="Companies/Hundai_small.png"
              alt="Hundai_small"
            />
            <img
              width={100}
              src="Companies/Cotton_Country_small.png"
              alt="Cotton_Country_small"
            />
            <img width={100} src="Companies/D.png" alt="D" />
          </div>
        </div>
        <div className="flex flex-col text-sm justify-center text-centre lg:mt-4 lg:text-left gap-y-2 lg:ml-20 lg:mb-auto">
          <h3 className="text-lg font-semibold">QUICK LINKS</h3>
          <span className="cursor-pointer">Terms And Services</span>
          <span className="cursor-pointer">Refund and Return Policy</span>
          <span className="cursor-pointer">Carrers</span>
          <span className="cursor-pointer">Fund Raising And Disclosures</span>
          <select
            className="w-fit  lg:mx-0 mx-auto  lg:text-left text-black mt-5"
            name="Language"
            id="Language"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Russian">Russian</option>
            <option value="Arabic">Arabic</option>
          </select>

          <h2 className="mt-8">CONNECT</h2>
          <p>Online : Contact Us</p>
          <p>Call : 123456789X</p>
          <p className="text-balance">
            145 Pine Haven Shores Rd #1000D Shelburne, Vermont, 05482, India
          </p>
        </div>
        <div className="md:w-full lg:mt-3.5 ">
          <form className="flex flex-col gap-y-5  leading-9">
            <p className="text-xl">Contact Us</p>
            <input
              className="bg-slate-800 text-slate-200 rounded-md px-2 leading-5"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-slate-800 text-slate-200 rounded-md px-2 leading-5 "
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="bg-slate-800 text-slate-200 rounded-md px-2 "
              type="text"
              rows={3}
              placeholder="Your Message "
            />
            <button
              className="block mx-auto hover:scale-105  bg-green-800 w-fit py-1 text-xl lg:text-2xl font-semibold rounded-xl px-3 lg:mt-8"
              type="submit"
            >
              Submit
            </button>
          </form>

          <div className="flex mt-8 mx-auto gap-5 text-center text-xs justify-center">
            <Instagram className="text-xs hover:text-green-500 hover:-translate-y-3 hover:ease-in-out hover:duration-500 cursor-pointer" />
            <Facebook className="text-xs   hover:text-green-500 hover:-translate-y-3 hover:ease-in-out hover:duration-300  cursor-pointer" />
            <Twitter className="text-xs  hover:text-green-500 hover:-translate-y-3 hover:ease-in-out hover:duration-300  cursor-pointer" />
            <Linkedin className="text-xs   hover:text-green-500 hover:-translate-y-3 hover:ease-in-out hover:duration-300  cursor-pointer" />
            <Youtube className="text-xs   hover:text-green-500 hover:-translate-y-3 hover:ease-in-out hover:duration-300  cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
