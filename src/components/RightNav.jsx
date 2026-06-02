"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";

export function RightNav() {

    const { data: session } = authClient.useSession();
    const user = session?.user;


    const handleLogout = async () => {
        await authClient.signOut();
    }

    return (
        <Dropdown>

            <Button className="rounded-full w-10 h-10" aria-label="Menu" variant="outline">
                <Avatar>
                    <Avatar.Image referrerPolicy="no-referrer" alt="user image" src={user?.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
            </Button>

            <Dropdown.Popover className={'rounded-md'}>

                <Dropdown.Menu>

                    <Dropdown.Item id="profile" textValue="Profile">
                        <Link href="/profile" className="block w-full">
                            Profile
                        </Link>
                    </Dropdown.Item>

                    {user ? <>
                        <Dropdown.Item id="login" textValue="Logout">
                            <button variant="outline" onClick={handleLogout} className="w-full text-left text-red-800">
                                Logout
                            </button>
                        </Dropdown.Item>
                    </> : <>
                        <Dropdown.Item id="login" textValue="Login">
                            <Link href="/login" className="block w-full">
                                Login
                            </Link>
                        </Dropdown.Item>
                    </>}

                </Dropdown.Menu>

            </Dropdown.Popover>

        </Dropdown>
    );
}



