import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const IdeaCard = ({ idea }) => {
    const { _id, title, shortDescription, estimatedBudget, targetAudience, imageURL, category } = idea;
 
    return (
        <div className="group overflow-hidden rounded-3xl border border-cyan-100 bg-cyan-50 shadow-sm transition-shadow duration-300 hover:shadow-lg">

            <div className="relative h-44 overflow-hidden">

                <Image
                    src={imageURL}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>

                <div className="absolute top-3 right-3 rounded-full bg-cyan-100/95 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-sm">
                    ${estimatedBudget}
                </div>

                <div className="absolute bottom-3 left-3 rounded-full bg-cyan-100/95 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-sm">
                    {category}
                </div>

            </div>

            <div className="p-4 space-y-4">

                <div>
                    <h2 className="line-clamp-1 text-lg font-bold text-slate-800">
                        {title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                        {shortDescription}
                    </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-3">

                    <div className="flex items-center justify-between gap-4">

                        <div className="min-w-0">
                            <p className="text-xs uppercase tracking-wide text-slate-500">
                                Audience
                            </p>

                            <p className="truncate text-sm font-medium text-cyan-700">
                                {targetAudience}
                            </p>
                        </div>

                        <div className="h-8 w-px bg-cyan-200"></div>

                        <div>
                            <p className="text-xs uppercase tracking-wide text-slate-500">
                                Budget
                            </p>

                            <p className="text-sm font-semibold text-cyan-700">
                                ${estimatedBudget}
                            </p>
                        </div>

                    </div>

                </div>

                <Link href={`/ideas/${_id}`}>
                    <Button className="w-full rounded-xl bg-cyan-500 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-cyan-600 transition">
                        View Idea
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default IdeaCard;