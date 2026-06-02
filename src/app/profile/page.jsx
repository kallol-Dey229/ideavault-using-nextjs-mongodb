'use client'

import { EditProfileModal } from "@/components/EditProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const MyProfilePage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (

        <div className="min-h-screen  py-10 px-4">

            <div className="mx-auto max-w-4xl rounded-md  shadow-lg overflow-hidden">

                {/* Header */}

                <div className="bg-cyan-700 h-36 relative">

                    <h2 className="text-3xl text-center pt-8 font-bold text-cyan-600 drop-shadow-7xl">Welcome {user?.name}</h2>

                    <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">

                        <Avatar className="h-32 w-32 border-4 border-white shadow-lg">

                            <Avatar.Image
                                referrerPolicy="no-referrer"
                                src={user?.image}
                                alt={user?.name}
                            />

                            <Avatar.Fallback className="text-3xl">
                                {user?.name?.charAt(0)}
                            </Avatar.Fallback>

                        </Avatar>

                    </div>

                </div>

                {/* Content */}

                <div className="pt-20 pb-10 px-8">

                    <div className="text-center">

                        <h1 className="text-3xl font-bold text-cyan-800">
                            {user?.name}
                        </h1>

                        <p className="mt-2 text-slate-500">
                            {user?.email}
                        </p>

                    </div>

                    <div className="mt-10 grid md:grid-cols-2 gap-6">

                        <div className="rounded-2xl p-6">

                            <h3 className="text-lg font-semibold text-cyan-700 mb-4">
                                Profile Information
                            </h3>

                            <div className="space-y-3 text-slate-600">

                                <p>
                                    <span className="font-semibold">
                                        Name:
                                    </span>{" "}
                                    {user?.name}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Email:
                                    </span>{" "}
                                    {user?.email}
                                </p>

                            </div>

                        </div>



                        <div className="rounded-2xl p-6">

                            <h3 className="text-lg font-semibold text-cyan-700 mb-4">
                                Account Status
                            </h3>

                            <div className="space-y-3 text-slate-600">

                                <p>

                                    <span className="font-semibold">
                                        Status:
                                    </span>{" "}

                                    <span className="text-green-600">
                                        Active
                                    </span>

                                </p>

                                <p>

                                    <span className="font-semibold">
                                        Role:
                                    </span>{" "}

                                    User

                                </p>

                            </div>

                        </div>

                    </div>



                    <div className="mt-8 flex justify-center">

                        <EditProfileModal user={user} />

                    </div>

                </div>

            </div>

        </div>

    );
};

export default MyProfilePage;