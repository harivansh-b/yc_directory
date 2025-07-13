import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import UserStartups from "../../../../components/UserStartups";
import { Suspense } from "react";
import { StartupCardSkeleton } from "../../../../components/StartupCard";

export const experimental_ppr = true;

interface Params {
    id: string;
}

const Page = async ({ params }: { params: Params }) => {
    const { id } = params;
    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
    if (!user) return notFound();

    const imageUrl = user.image ?? "/placeholder-user.png"; // fallback if missing

    return (
        <section className="profile_container">
            <div className="profile_card">
                <div className="profile_title">
                    <h3 className="text-24-black uppercase text-center line-clamp-1">
                        {user.name}
                    </h3>
                </div>

                <div className="flex justify-center mt-4">
                    <Image
                        src={imageUrl}
                        alt={user.name}
                        width={220}
                        height={220}
                        className="profile_image rounded-full object-cover"
                        priority
                        placeholder="blur"
                        blurDataURL="/blur-placeholder.png" // add a tiny base64 or small blur image if desired
                    />
                </div>

                <p className="text-30-extrabold mt-7 text-center">
                    @{user?.username}
                </p>
                <p className="mt-1 text-center text-14-normal">{user?.bio}</p>
            </div>

            <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
                <p className="text-30-bold">
                    {session?.id === id ? "Your" : "All"} Startups
                </p>
                <ul className="card_grid-sm">
                    <Suspense fallback={<StartupCardSkeleton />}>
                        <UserStartups id={id} />
                    </Suspense>
                </ul>
            </div>
        </section>
    );
};

export default Page;
