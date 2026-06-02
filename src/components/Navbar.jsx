'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RightNav } from './RightNav';
import { authClient } from '@/lib/auth-client';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { FcIdea } from 'react-icons/fc';

const Navbar = () => {

    // const { data: session } = authClient.useSession();
    // const user = session?.user;
    const user = {};

    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    return (

        <div className=' py-3 fixed w-full z-10 top-0 left-0 shadow-md'>

            <nav className='max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between relative overflow-x-hidden'>


                <button onClick={() => setOpen(!open)} className='md:hidden text-3xl text-cyan-800'>
                    {
                        open ? <HiX /> : <HiMenu />
                    }
                </button>



                <div className='absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-fit'>

                    <Link href={'/'}>

                        <h1 className='text-2xl flex items-center font-bold text-cyan-800'><FcIdea/>IdeaVault</h1>

                    </Link>

                </div>



                <ul className='hidden md:flex gap-6 items-center'>

                    <li>
                        <Link
                            href={'/'}
                            className={`  ${pathname === '/'
                                && 'border-cyan-800 pb-1 border-b-2'

                                }`}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={'/ideas'}
                            className={` ${pathname === '/ideas'
                                && 'border-cyan-800 pb-1 border-b-2'

                                }`}
                        >
                            Ideas
                        </Link>
                    </li>

                    {user && (

                        <>

                            <li>
                                <Link
                                    href={'/add-ideas'}
                                    className={` ${pathname === '/add-ideas'
                                        && 'border-cyan-800 pb-1 border-b-2'

                                        }`}
                                >
                                    Add Ideas
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={'/my-ideas'}
                                    className={` ${pathname === '/my-ideas'
                                        && 'border-cyan-800 pb-1 border-b-2'
                                        }`}
                                >
                                    My Ideas
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={'/my-interactions'}
                                    className={` ${pathname === '/my-interactions'
                                        && 'border-cyan-800 pb-1 border-b-2'
                                        }`}
                                >
                                    My Interactions
                                </Link>
                            </li>

                        </>

                    )}

                </ul>




                <div className='flex items-center gap-3'>

                    <ThemeToggle />

                    {

                        user ?

                            <RightNav />

                            :

                            <Link
                                href={'/login'}
                                className='bg-cyan-800 text-white px-2 sm:px-4 py-2 rounded-md text-sm sm:text-base'
                            >

                                Login

                            </Link>

                    }

                </div>

            </nav>




            {

                open && (

                    <div className='md:hidden absolute left-0 top-full w-1/3 min-w-40 bg-cyan-50 px-4 py-4 shadow-md z-50'>

                        <ul className='flex flex-col gap-4'>

                            <li>

                                <Link
                                    href={'/'}
                                    className={` ${pathname === '/'
                                        && 'border-cyan-800 pb-1 border-b-2'
                                        }`}>Home
                                </Link>

                            </li>

                            <li>

                                <Link
                                    href={'/ideas'}
                                    className={` ${pathname === '/ideas'
                                        && 'border-cyan-800 pb-1 border-b-2'
                                        }`}>Ideas
                                </Link>

                            </li>

                            {user && (<>

                                <li>

                                    <Link
                                        href={'/add-ideas'}
                                        className={` w-fit ${pathname === '/add-ideas'
                                            && 'border-cyan-800 pb-1 border-b-2'
                                            }`} > Add Ideas
                                    </Link>

                                </li>

                                <li>

                                    <Link
                                        href={'/my-ideas'}
                                        className={` w-fit ${pathname === '/my-ideas'
                                            && 'border-cyan-800 pb-1 border-b-2'
                                            }`} >My Ideas
                                    </Link>

                                </li>

                                <li>

                                    <Link
                                        href={'/my-interactions'}
                                        className={`w-fit ${pathname === '/my-interactions'
                                            && 'border-cyan-800 pb-1 border-b-2'
                                            }`}> My Interactions
                                    </Link>

                                </li>

                            </>

                            )

                            }

                        </ul>

                    </div>

                )

            }

        </div>

    );
};

export default Navbar;