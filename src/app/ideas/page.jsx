import IdeasContainer from "@/components/IdeasContainer";
//
const IdeasPage = async () => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/idea`,
        {
            cache: "no-store",
        }
    );

    const ideas = await res.json();

    return (
        <IdeasContainer ideas={ideas || []} />
    );

};

export default IdeasPage;