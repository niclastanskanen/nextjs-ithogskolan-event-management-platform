import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getEventDetails } from "@/lib/api";
import EventDetails from "@/components/EventDetails";
import LoadingSpinner from "@/components/LoadingSpinner";

interface EventPageProps {
  params: {
    id: string;
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEventDetails(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <EventDetails event={event} />
      </Suspense>
    </div>
  );
}
