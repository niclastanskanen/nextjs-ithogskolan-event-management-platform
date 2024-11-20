import { Suspense } from "react";

import EventsPageContent from "@/components/EventsPageContent";
import LoadingSpinner from "@/components/LoadingSpinner";

const EventsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <Suspense fallback={<LoadingSpinner />}>
      <EventsPageContent />
    </Suspense>
  </div>
);

export default EventsPage;
