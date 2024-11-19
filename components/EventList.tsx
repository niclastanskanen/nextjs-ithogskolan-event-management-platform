import { getEvents } from "@/lib/api";
import EventItem from "./EventItem";

const EventList = async () => {
  const events = await getEvents();

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
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
