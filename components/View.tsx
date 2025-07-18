// components/View.tsx (Alternative - blocking approach)
import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id });

    // Increment view count synchronously (blocks response)
    try {
        await writeClient
            .patch(id)
            .set({ views: totalViews + 1 })
            .commit();
    } catch (error) {
        console.error("Failed to increment view count:", error);
    }

    return (
        <div className="view-container">
            <div className="absolute -top-2 -left-2">
                <Ping />
            </div>
            <p className="view-text">
                <span className="font-black">Views: {totalViews + 1}</span>
            </p>
        </div>
    );
};

export default View;
