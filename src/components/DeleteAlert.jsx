"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteAlert({ idea }) {

    const { _id, title } = idea;

    const handleDelete = async () => {

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            if (data) {
                toast.success('Idea deleted successfully!');
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
                            <AlertDialog.Heading>Delete idea permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{title}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline" className={'text-cyan-800 border-cyan-800'}>
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Idea
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}