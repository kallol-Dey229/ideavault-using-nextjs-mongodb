"use client";

import { Button, Form, Input, Label, Modal, Surface, TextArea, Select, ListBox } from "@heroui/react";
import toast from "react-hot-toast";
import { FaEdit, FaRegEdit } from "react-icons/fa";


export function EditModal({ idea }) {

    const { _id, title, shortDescription, estimatedBudget, targetAudience, imageURL, category, detailedDescription, problemStatement, proposedSolution, tags } = idea;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const idea = Object.fromEntries(formData.entries());


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idea)
        })

        const data = await res.json();

        if (data.modifiedCount > 0) {
            window.location.reload();
            toast.success('Idea updated successfully!');
        } 
        


    }
//
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
                            <Modal.Heading className="text-xl md:text-2xl font-bold text-cyan-800">Edit Idea</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-cyan-900">
                                Edit your idea details and update it to the community!
                            </p>
                        </Modal.Header>
                        <Modal.Body className="">
                            <Surface variant="default">
                                <Form onSubmit={handleSubmit} className="flex mx-auto flex-col gap-4 mt-10 shadow-xl p-5 rounded-md">

                                    <div className="flex flex-col gap-1">
                                        <Label>Idea Title</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={title} name="title" placeholder="Write your title" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Short Description</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={shortDescription} name="shortDescription" placeholder="Write a short description" type="text" required />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label>Detailed Description</Label>
                                        <TextArea className={'border-cyan-100 border-2'} defaultValue={detailedDescription} name="detailedDescription" required></TextArea>
                                    </div>

                                    <div className="flex flex-col gap-1">

                                        <Select defaultValue={category} name="category" className="w-[256px]" placeholder="Select Category" required>
                                            <Label>Category</Label>
                                            <Select.Trigger className={' border-cyan-100 border-2'}>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox className={' border-cyan-100 border-2'}>
                                                    <ListBox.Item className="hover:bg-cyan-600 hover:text-white" id="tech" textValue="Tech">
                                                        Tech
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item className="hover:bg-cyan-600 hover:text-white" id="health" textValue="Health">
                                                        Health
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item className="hover:bg-cyan-600 hover:text-white" id="ai" textValue="AI">
                                                        AI
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item className="hover:bg-cyan-600 hover:text-white" id="education" textValue="Education">
                                                        Education
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>

                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>




                                    <div className="flex flex-col gap-1">
                                        <Label>tags(optional)</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={tags} name="tags" placeholder="tags" type="text" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label>ImageURL</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={imageURL} name="imageURL" placeholder="Image URL" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Estimated Budget (optional)</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={estimatedBudget} name="estimatedBudget" placeholder="Budget" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Target Audience</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={targetAudience} name="targetAudience" placeholder="Audience" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Problem Statement</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={problemStatement} name="problemStatement" placeholder="Write Problem Statement" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Proposed Solution</Label>
                                        <Input className={'border-cyan-100 border-2'} defaultValue={proposedSolution} name="proposedSolution" placeholder="Write Proposed Solution" type="text" required />
                                    </div>

                                    <Modal.Footer>
                                        <Button slot="close" variant="outline" className={'rounded-sm bg-transparent text-cyan-800 border border-cyan-800 flex items-center justify-center gap-2'}>
                                            Cancel
                                        </Button>
                                        <Button slot="close" className={'bg-cyan-800 rounded-sm'} type="submit">
                                            Update Idea
                                        </Button>
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