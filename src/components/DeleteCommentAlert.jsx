"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteCommentAlert({ comment }) {

    const { _id } = comment;

    const handleDeleteComment = async () => {

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            if (data) {
                toast.success('Comment deleted successfully!');
                window.location.reload();
            }

            

            
    };

    return (
        <AlertDialog>
            <Button variant="danger" className="rounded-md w-full" >Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 ">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete comment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete this comment and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline" className={'text-cyan-800 border-cyan-800'}>
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteComment} slot="close" variant="danger">
                                Delete Comment
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}