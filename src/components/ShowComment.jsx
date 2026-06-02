'use client'

import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { EditCommentModal } from "./EditCommentModal";
import { authClient } from "@/lib/auth-client";
import { DeleteCommentAlert } from "./DeleteCommentAlert";

const ShowComment = ({ ideaId }) => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const [comments, setComments] = useState([]);

    useEffect(() => {

    const loadComments = async () => {

        const { data: tokenData } =
        await authClient.token();

        const res = await fetch(

            `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${ideaId}`,

            {
                headers: {
                    Authorization:
                    `Bearer ${tokenData.token}`
                }
            }

        );

        const data = await res.json();

        setComments(data);

    }

    loadComments();

}, [ideaId]);

    return (

        <div className="space-y-4">

            {

                comments.map(comment => {

                    const validImage =

                        comment?.userImage &&
                        (
                            comment.userImage.startsWith("http://") ||

                            comment.userImage.startsWith("https://")
                        );

                    return (

                        <div key={comment._id} className="rounded-2xl bg-cyan-50 shadow-md p-4">

                            <div className="flex justify-between">
                                <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white font-semibold overflow-hidden">

                                    {

                                        validImage ?

                                            <Image
                                                src={comment.userImage}
                                                alt={comment.userName}
                                                width={40}
                                                height={40}
                                                className="h-10 w-10 rounded-full object-cover"
                                            />

                                            :

                                            comment?.userName?.charAt(0)

                                    }

                                </div>

                                <div>

                                    <h3 className="font-semibold text-gray-700">

                                        {comment.userName}

                                    </h3>

                                </div>

                            </div>
                            {user?.id === comment.userId && (
                                <div className="flex gap-2 flex-col items-center md:flex-row">
                                    <EditCommentModal comment={comment} />
                                    <DeleteCommentAlert comment={comment} />
                                </div>
                            )}
                            </div>

                            <p className="mt-3 text-gray-600 ml-13">

                                {comment.comment}

                            </p>

                        </div>

                    );

                })

            }

        </div>

    );
};

export default ShowComment;