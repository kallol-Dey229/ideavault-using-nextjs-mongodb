import Banner from "@/components/Banner";
import { FaLightbulb, FaUsers, FaComments } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import IdeaCard from "@/components/IdeaCard";


export default async function Home() {

 

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/idea`,
        {
            cache: "no-store",

        }
    );

    const ideas = await res.json();


  return (

    <div className=" min-h-screen overflow-x-hidden">

      <Banner />

      <div className="px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32 py-8">

        <h2 className='text-2xl md:text-3xl font-bold text-cyan-800 text-center mt-10 md:mt-20'>
          Top Ideas
        </h2>

        <p className="mt-2 text-cyan-700 text-center text-sm md:text-base">
          Share your ideas and inspire others
        </p>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            ideas.slice(0,4).map((idea)=>(
              <IdeaCard
                key={idea._id}
                idea={idea}
              />
            ))
          }
        </div>



        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 text-center mt-16 md:mt-24">
          Featured Ideas
        </h2>

        <p className="mt-2 text-cyan-700 text-center text-sm md:text-base">
          Discover creative ideas shared by the community
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className=" p-5 md:p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg md:text-xl text-cyan-700">
              Smart Education App
            </h3>

            <p className="mt-3 text-slate-600 text-sm md:text-base">
              AI based learning platform for students.
            </p>
          </div>

          <div className=" p-5 md:p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg md:text-xl text-cyan-700">
              Green Energy System
            </h3>

            <p className="mt-3 text-slate-600 text-sm md:text-base">
              Solar powered smart energy solution.
            </p>
          </div>

          <div className=" p-5 md:p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg md:text-xl text-cyan-700">
              Health Tracker
            </h3>

            <p className="mt-3 text-slate-600 text-sm md:text-base">
              Daily health monitoring platform.
            </p>
          </div>

        </div>



        <h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-800 mt-16 md:mt-24">
          Idea Vault In Numbers
        </h2>

        <div className="mt-10  rounded-2xl p-6 md:p-10 shadow-xl">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-700">
                100+
              </h3>

              <p className="mt-2 text-sm md:text-base text-slate-600">
                Ideas Shared
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-700">
                50+
              </h3>

              <p className="mt-2 text-sm md:text-base text-slate-600">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-700">
                200+
              </h3>

              <p className="mt-2 text-sm md:text-base text-slate-600">
                Comments
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-700">
                24/7
              </h3>

              <p className="mt-2 text-sm md:text-base text-slate-600">
                Community
              </p>
            </div>

          </div>

        </div>



        <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 text-center mt-16 md:mt-24">
          Why Idea Vault
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          <div className=" p-6 rounded-2xl shadow-md text-center">
            <FaLightbulb className="mx-auto text-3xl text-cyan-700"/>
            <p className="mt-4">Share Ideas</p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md text-center">
            <FaComments className="mx-auto text-3xl text-cyan-700"/>
            <p className="mt-4">Community Feedback</p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md text-center">
            <FaUsers className="mx-auto text-3xl text-cyan-700"/>
            <p className="mt-4">Connect Users</p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md text-center">
            <BsLightningChargeFill className="mx-auto text-3xl text-cyan-700"/>
            <p className="mt-4">Fast Interaction</p>
          </div>

        </div>

      </div>

    </div>

  );
}