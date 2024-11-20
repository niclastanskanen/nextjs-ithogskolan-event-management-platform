import { Suspense } from "react";

import EventList from "@/components/EventList";
import LoadingSpinner from "@/components/LoadingSpinner";
import SearchBar from "@/components/SearchBar";

export default function EventsPage({
  searchParams,
}: {
  searchParams: { q?: string; date?: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Browse Events
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Discover upcoming events and find your next experience
          </p>
        </div>
        <SearchBar />
        <Suspense fallback={<LoadingSpinner />}>
          <EventList searchParams={searchParams} />
        </Suspense>
      </section>
    </div>
  );
}
