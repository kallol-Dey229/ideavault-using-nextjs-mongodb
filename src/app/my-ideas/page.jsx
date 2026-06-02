'use client'

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import MyIdeaCard from "@/components/MyIdeaCard";

const MyIdeasCard = () => {

    const { data:session } = authClient.useSession();

    const user = session?.user;

    const [ideas,setIdeas] = useState([]);

    

    useEffect(()=>{

    const loadIdeas = async()=>{

        if(user?.id){

            const {data:tokenData} = await authClient.token();

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${user.id}`,{
                    headers:{
                        Authorization:
                        `Bearer ${tokenData.token}`
                    }
                }

            );

            const data = await res.json();

            setIdeas(data);

        }

    }

    loadIdeas();

},[user]);

    return (

        <div className="mt-10 ">

            <h2 className="mb-8 text-3xl font-bold text-cyan-700 text-center">
                My Ideas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">

                {
                    ideas.map(
                        idea=>(
                            <MyIdeaCard
                              key={idea._id}
                              idea={idea}
                            />
                        )
                    )
                }

            </div>

        </div>

    );
};

export default MyIdeasCard;