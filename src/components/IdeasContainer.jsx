'use client';

import { useState } from "react";
import IdeaCard from "@/components/IdeaCard";

const IdeasContainer = ({ ideas = [] }) => {

    const [searchText, setSearchText] = useState("");
    const [filteredIdeas, setFilteredIdeas] = useState(ideas);

    const handleSearch = () => {

        const result = ideas.filter((idea) =>

            idea.title?.toLowerCase().includes(searchText.toLowerCase()) ||

            idea.category?.toLowerCase().includes(searchText.toLowerCase()) ||

            idea.targetAudience?.toLowerCase().includes(searchText.toLowerCase()) ||

            idea.shortDescription?.toLowerCase().includes(searchText.toLowerCase())

        );

        setFilteredIdeas(result);
    };

    const handleReset = () => {
        setSearchText("");
        setFilteredIdeas(ideas);
    };

    return (

        <div className="mx-5 mt-10">

            {/* Search Section */}

            <div className="flex flex-col md:flex-row gap-3 justify-center items-center mb-10">

                <input
                    type="text"
                    placeholder="Search ideas..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full md:w-96 px-4 py-3 border border-cyan-300 rounded-lg outline-none focus:border-cyan-600"
                />

                <button
                    onClick={handleSearch}
                    className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition cursor-pointer"
                >
                    Search
                </button>

                <button
                    onClick={handleReset}
                    className="bg-slate-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-slate-600 transition"
                >
                    Reset
                </button>

            </div>

            {/* Results */}

            {
                filteredIdeas.length === 0 ? (

                    <p className="text-center text-xl text-red-500">
                        No ideas found
                    </p>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                        {
                            filteredIdeas.map((idea) => (

                                <IdeaCard
                                    key={idea._id}
                                    idea={idea}
                                />

                            ))
                        }

                    </div>

                )
            }

        </div>
    );
};

export default IdeasContainer;