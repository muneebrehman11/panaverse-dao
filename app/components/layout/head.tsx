

import Logo from "@/app/assets/panaverse-logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/app/components/shared/Wrapper";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white backdrop-blur-md bg-opacity-85">
      <Wrapper>
        <div className="duration-300 max-h-fit flex justify-between py-2 text-black items-center">
          <div>
            <Image
              className="w-32 md:w-40 cursor-pointer"
              src={Logo}
              alt="panaverse logo"
            />
          </div>
          <nav className="relative">
            <ul className="flex space-x-8 font-medium text-sm md:text-base">
              <li className="hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="group relative hover:text-primary flex">
                <Link href="/courses">Courses</Link>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="group-hover:text-primary h-7 w-7 text-gray-700 mt-0.5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
                  </g>
                </svg>

                {/* Dropdown Content */}
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute right-0 top-full pt-4 text-slate-600 bg-white rounded-lg shadow-lg p-4 leading-10 w-72">
                  <ul className="">
                    <li className="hover:text-primary">
                      <Link href="">Web 3.0 and Metaverse Developer</Link>
                    </li>
                    <li className="hover:text-primary">
                      <Link href="">Artificial Intelligence</Link>
                    </li>
                    <li className="hover:text-primary">
                      <Link href="">Cloud-Native Computing</Link>
                    </li>
                    <li className="hover:text-primary">
                      <Link href="">Ambient Computing and IoT</Link>
                    </li>
                    <li className="hover:text-primary">
                      <Link href="">Genomics and Bioinformatics</Link>
                    </li>
                    <li className="hover:text-primary">
                      <Link href=""> Network Programmability and Automation</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}
