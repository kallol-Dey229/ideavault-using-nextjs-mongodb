'use client';

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterPage = () => {

    const OnSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());


        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.photoURL
        });

        if(data){
            redirect('/login');
        }
        if(error){
            toast.error("Registration failed: " + error.message);
        }
    }


    const handleGoogleSignIn = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
        };

    return (
        <div className="min-h-screen bg-cyan-50 flex items-center justify-center px-4">

            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg border border-t-cyan-600 border-t-5 mt-10">

                <div className="text-center">

                    <h1 className="text-3xl font-bold text-cyan-800">
                        Create an Account
                    </h1>

                    <p className="mt-2 text-sm text-cyan-700">
                        Register for continue to Idea Vault
                    </p>

                </div>

                <Form className="mt-8 space-y-5" onSubmit={OnSubmit}>

                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >

                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                            Name
                        </Label>

                        <Input
                            placeholder="Enter your name"
                            className="w-full rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white"
                        />

                        <FieldError />

                    </TextField>



                    <TextField
                        isRequired
                        name="photoURL"
                        type="text"
                    >

                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                            Photo URL
                        </Label>

                        <Input
                            placeholder="Enter photo URL"
                            className="w-full rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white"
                        />

                        <FieldError />

                    </TextField>



                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {

                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >

                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                            Email
                        </Label>

                        <Input
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white"
                        />

                        <FieldError />

                    </TextField>



                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {

                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }


                            return null;
                        }}
                    >

                        <Label className="mb-2 block text-sm font-medium text-slate-700">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter password"
                            className="w-full rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3 outline-none transition focus:border-cyan-400 focus:bg-white"
                        />

                        <Description className="text-xs text-slate-500">
                            Must be at least 8 characters
                        </Description>

                        <FieldError />

                    </TextField>



                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-slate-600">

                            <input
                                required
                                type="checkbox"
                                className="accent-cyan-500"
                            />

                            Remember me

                        </label>

                        <button
                            type="button"
                            className="text-cyan-600 hover:text-cyan-700"
                        >
                            Forgot password?
                        </button>

                    </div>



                    <Button
                        type="submit"
                        className="w-full rounded-sm bg-cyan-600 py-3 font-medium text-white transition hover:bg-cyan-700 shadow-xl"
                    >
                        Register
                    </Button>



                    <div className="flex justify-center items-center gap-3">

                        <Separator className="w-30" />

                        <div className="whitespace-nowrap text-cyan-700">
                            Or signup with
                        </div>

                        <Separator className="w-30" />

                    </div>



                    <div>

                        <Button
                            onClick={handleGoogleSignIn}
                            variant="outline"
                            className="w-full rounded-sm font-bold p-3 text-cyan-700"
                        >

                            <FcGoogle />

                            Signup With Google

                        </Button>

                    </div>

                </Form>

                <div className="mt-6 text-center text-sm text-slate-500">

                    Already have an account?

                    <Link href={'/login'}>
                        <button className="ml-1 font-medium text-cyan-600 hover:text-cyan-700 hover:cursor-pointer">
                            Login
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default RegisterPage;