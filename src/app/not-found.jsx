import Link from "next/link";
import { FaLightbulb } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50 dark:bg-slate-900 px-4">

      <div className="max-w-2xl text-center">

        <div className="flex justify-center">

          <div className="h-24 w-24 rounded-full bg-cyan-100 dark:bg-slate-800 flex items-center justify-center shadow-lg">

            <FaLightbulb className="text-5xl text-cyan-700" />

          </div>

        </div>

        <h1 className="mt-8 text-7xl md:text-8xl font-extrabold text-cyan-700">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Idea Not Found
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-7">
          Looks like the page you are searching for has drifted away from the
          Idea Vault. The idea may have been removed, renamed, or never existed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Back To Home
          </Link>

          

        </div>

        <div className="mt-12 text-sm text-slate-500 dark:text-slate-400">
          Error Code: 404 • Page Not Found
        </div>

      </div>

    </div>
  );
}