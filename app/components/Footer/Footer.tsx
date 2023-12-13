import Image from "next/image";
import FacebookIcon from "@/public/assets/facebook_icon.svg";
import InstagramIcon from "@/public/assets/insta_icon.svg";
import TwitterIcon from "@/public/assets/twitter_icon.svg";
import GitHubIcon from "@/public/assets/github_icon.svg";

export default function Footer() {
  return (
    <section className="bg-purple-600">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 text-white">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 hover:text-gray-900">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 hover:text-gray-900">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 hover:text-gray-900">
              Team
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 hover:text-gray-900">
              Pricing
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 hover:text-gray-900">
              Terms
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {/* <a href="#" className="text-white hover:text-gray-500">
            <span className="sr-only">Instagram Icon</span>
            <Image
              src={InstagramIcon}
              alt="Instagram Icon"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Image
              src={TwitterIcon}
              alt="Twitter Icon"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Image
              src={FacebookIcon}
              alt="Facebook"
              className="text-white text-xl"
              width={24}
              height={24}
            />
          </a> */}
          <a
            href="https://github.com/M57D30"
            className="text-white hover:text-gray-500"
          >
            <span className="sr-only">GitHubIcon</span>
            <Image
              src={GitHubIcon}
              alt="GitHubIcon"
              className="text-white text-xl"
              width={24}
              height={24}
            />
          </a>
          {/* Other social media icons */}
        </div>
        <hr className="border-2" />
        <p className="mt-8 text-base leading-6 text-center text-white">
          © 2023 KTU M57D30, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
