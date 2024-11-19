import { Suspense } from "react";

import { getEvents } from "@/lib/api";

import EventItem from "./EventItem";
import LoadingSpinner from "./LoadingSpinner";

interface EventListProps {
  searchParams: { q?: string; date?: string };
}

const EventList = async ({ searchParams }: EventListProps) => {
  const { q = "", date = "" } = searchParams;
  const events = await getEvents(q, date);

  if (!events.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold">No events found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or create a new event.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <Suspense key={event.id} fallback={<LoadingSpinner />}>
          <EventItem key={event.id} event={event} />
        </Suspense>
      ))}
    </div>
  );
};

export default EventList;
