"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, Modal, Surface } from "@heroui/react";
import toast from "react-hot-toast";
import { FaRegCircleUser } from "react-icons/fa6";

export function EditProfileModal({ user }) {



    const handleUpdateProfile = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const updatedUser = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.updateUser({

            name: updatedUser.name,
            email: updatedUser.email,
            image: updatedUser.image,

        });

        if (data) {

            toast.success("Profile updated successfully");
            
        }

        if (error) {
            toast.error(error.message);
        }

    };

    return (
        <Modal>
            <Button className="rounded-sm bg-cyan-600 text-white px-8">

                Edit Profile

            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md shadow-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header className="text-center">
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaRegCircleUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className="text-xl md:text-2xl font-bold text-cyan-800">Edit Profile</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-cyan-700">
                                Update your information
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={handleUpdateProfile} className="flex mx-auto flex-col gap-4 mt-10 shadow-xl p-5 rounded-md">

                                    <div className="flex flex-col gap-1">
                                        <Label>Name</Label>
                                        <Input defaultValue={user?.name} className={' border-cyan-100 border-2'} name="name" placeholder="Write Your Name" type="text" required />
                                    </div>
                                    

                                    <div className="flex flex-col gap-1">
                                        <Label>Image Url</Label>
                                        <Input defaultValue={user?.image} className={' border-cyan-100 border-2'} name="imageUrl" placeholder="Enter Your Image URL" type="text" required />
                                    </div>

                                    <Modal.Footer>
                                        <Button slot="close" className={'rounded-sm bg-transparent text-cyan-800 border border-cyan-800 flex items-center justify-center gap-2'}>
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit" className={'rounded-sm bg-cyan-700 flex items-center justify-center gap-2'}> Update</Button>
                                    </Modal.Footer>

                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}