"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Modal, Surface, TextArea, Select, ListBox } from "@heroui/react";
import toast from "react-hot-toast";
import { FaEdit, FaRegEdit } from "react-icons/fa";


export function EditCommentModal({ comment }) {

    const { _id, comment: initialComment } = comment;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const comment = Object.fromEntries(formData.entries());


        const { data: tokenData } = await authClient.token();


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(comment)
        })

        const data = await res.json();

        if (data.modifiedCount > 0) {
            toast.success('Comment updated successfully!');
            window.location.reload();
        }

        if (data.modifiedCount === 0) {
            toast.error('Failed to update comment. Please try again.');
        }

    }

    return (
        <Modal>

            <Button size="xs" variant="outline" className={'hover:bg-cyan-200 rounded-md w-full text-black'}><FaRegEdit size={'xs'} />Edit</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:min-w-xl shadow-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header className="text-center">
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className="text-xl md:text-2xl font-bold text-cyan-800">Edit Comment</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-cyan-900">
                                Edit your comment and update it to the community!
                            </p>
                        </Modal.Header>
                        <Modal.Body className="">
                            <Surface variant="default">
                                <Form onSubmit={handleSubmit} className="mt-8">

                                    <textarea defaultValue={initialComment} name="comment"
                                        placeholder="Write your comment..."
                                        className="min-h-32 w-full rounded-2xl border-2 border-cyan-600 p-4 outline-none focus:border-cyan-400"
                                    />

                                    <Button type="submit" className="mt-4 rounded-sm bg-cyan-500 px-6 py-3 text-white transition hover:bg-cyan-600">
                                        Update Comment
                                    </Button>

                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}