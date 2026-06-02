import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="bg-cyan-950 text-white mt-10 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-4">

            IDEAVAULT

          </h2>

          <p className="text-gray-300 leading-7 text-sm md:text-base">

            Discover, share and explore innovative ideas with the community.

          </p>

        </div>



        <div>

          <h3 className="text-xl font-semibold text-cyan-300 mb-5">Platform</h3>

          <div className="flex flex-col gap-3 text-gray-300">

            <Link href="/">Home</Link>

            <Link href="/ideas">Ideas</Link>

            <Link href="/addIdeas">Add Ideas</Link>

            <Link href="/myIdeas">My Ideas</Link>

          </div>

        </div>



        <div>

          <h3 className="text-xl font-semibold text-cyan-300 mb-5">Contact</h3>

          <div className="space-y-4 text-gray-300 flex flex-col justify-center items-center md:items-start">

            <div className="flex gap-3">
              <FaEnvelope className="text-cyan-400" />info@ideavault.com
            </div>

            <div className="flex gap-3">
              <FaPhone className="text-cyan-400" />+8801908064940
            </div>

            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />Dhaka,Bangladesh
            </div>

            <div className="flex gap-4 pt-4">

              <a className="bg-cyan-800 p-3 rounded-full">
                <FaFacebookF />
              </a>

              <a className="bg-cyan-800 p-3 rounded-full">
                <FaTwitter />
              </a>

              <a className="bg-cyan-800 p-3 rounded-full">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-cyan-800 py-5 text-center text-gray-400 text-sm">

        © 2026 IDEAVAULT. All Rights Reserved.

      </div>

    </footer>

  );

};

export default Footer;