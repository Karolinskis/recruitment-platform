import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import LogoIcon from "@/public/assets/work.svg";
import Image from "next/image";
import { cookies } from "next/headers";

export default function Navigation() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/">
            <div className="mx-0 py-0">
              <Image
                className="mx-0 px-0"
                src={LogoIcon} // Replace with your actual logo path
                width={200} // Adjust width as needed
                height={100} // Adjust height as needed
                alt="Logo"
              />
            </div>
          </Link>
        </div>

        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Dropdown{" "}
                {/* <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg> */}
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dropdown
                      {/* <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg> */}
                    </button>
                    <div
                      id="doubleDropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
