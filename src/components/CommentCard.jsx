'use client';

import { Button, Form } from "@heroui/react";
import toast from "react-hot-toast";
import ShowComment from "./ShowComment";
import { authClient } from "@/lib/auth-client";


const CommentCard = ({ ideaId, ideaTitle }) => {

    const { data: session } = authClient.useSession();

    const user = session?.user;


    const OnSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const comment = {

            ideaId,

            ideaTitle,

            comment: formData.get("comment"),

            userId: user?.id,

            userName: user?.name,

            userImage: user?.image || "",

            createdAt: new Date()

        };

        const { data: tokenData } = await authClient.token();


        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/comment`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenData.token}`
                },

                body: JSON.stringify(comment)
            }
        );

        const data = await res.json();

        if (data.insertedId) {

            toast.success("Comment added!");

            e.target.reset();
            window.location.reload();

        }

    };

    return (
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-cyan-50 p-6 shadow-lg">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-gray-700">
                    Comments
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Share your feedback and suggestions
                </p>

            </div>

            <ShowComment ideaId={ideaId} />

            <Form onSubmit={OnSubmit} className="mt-8">

                <textarea name="comment"
                    placeholder="Write your comment..."
                    className="min-h-32 w-full rounded-2xl border-2 border-cyan-600 bg-cyan-50 p-4 outline-none focus:border-cyan-400"
                />

                <Button type="submit" className="mt-4 rounded-sm bg-cyan-500 px-6 py-3 text-white transition hover:bg-cyan-600">
                    Add Comment
                </Button>

            </Form>

        </div>
    );
};

export default CommentCard;