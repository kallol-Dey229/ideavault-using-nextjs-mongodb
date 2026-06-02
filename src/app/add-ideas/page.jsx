'use client'

import { authClient } from "@/lib/auth-client";
import { Form, Input, Label, TextArea, Select, ListBox, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { GiDeadEye } from "react-icons/gi";

const AddIdeasPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const idea = Object.fromEntries(formData.entries());


        idea.userId = user?.id;
        idea.userName = user?.name;
        idea.userImage = user?.image;


        const {data:tokenData} = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenData?.token}`
            
            },
            body: JSON.stringify(idea)
        })

        const data = await res.json();

        if (data) {
            toast.success('Idea added successfully!');
            redirect('/ideas');
        }

    }
    return (
        <div className="mt-10">
            <h2 className="text-cyan-800 text-center font-bold text-xl md:text-3xl ">Add Your Idea</h2>
            <Form onSubmit={handleSubmit} className="flex mx-auto md:max-w-3xl md:min-w-2xl flex-col gap-4 mt-5 shadow-xl p-5 rounded-md">

                <div className="flex flex-col gap-1">
                    <Label>Idea Title</Label>
                    <Input className={' border-cyan-100 border-2'} name="title" placeholder="Write your title" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Short Description</Label>
                    <Input className={' border-cyan-100 border-2'} name="shortDescription" placeholder="Write a short description" type="text" required />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>Detailed Description</Label>
                    <TextArea className={' border-cyan-100 border-2'} name="detailedDescription" required></TextArea>
                </div>

                <div className="flex flex-col gap-1">

                    <Select name="category" className="w-[256px]" placeholder="Select Category" required>
                        <Label>Category</Label>
                        <Select.Trigger className={'border-cyan-100 border-2'}>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox className={' border-cyan-100 border-2'}>
                                <ListBox.Item id="tech" textValue="Tech">
                                    Tech
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="health" textValue="Health">
                                    Health
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="ai" textValue="AI">
                                    AI
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="education" textValue="Education">
                                    Education
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>




                <div className="flex flex-col gap-1">
                    <Label>tags(optional)</Label>
                    <Input className={'border-cyan-100 border-2'} name="tags" placeholder="tags" type="text" />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>ImageURL</Label>
                    <Input className={'border-cyan-100 border-2'} name="imageURL" placeholder="Image URL" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Estimated Budget (optional)</Label>
                    <Input className={'border-cyan-100 border-2'} name="estimatedBudget" placeholder="Budget" type="text" />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Target Audience</Label>
                    <Input className={'border-cyan-100 border-2'} name="targetAudience" placeholder="Audience" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Problem Statement</Label>
                    <Input className={'border-cyan-100 border-2'} name="problemStatement" placeholder="Write Problem Statement" type="text" required />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Proposed Solution</Label>
                    <Input className={'border-cyan-100 border-2'} name="proposedSolution" placeholder="Write Proposed Solution" type="text" required />
                </div>

                <Button type="submit" className={'w-full rounded-sm bg-cyan-700 flex items-center justify-center gap-2'}> <GiDeadEye /> Add Idea</Button>
            </Form>
        </div>
    );
};

export default AddIdeasPage;