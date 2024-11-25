"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import EventCategories from "@/components/EventCategories";
import EventList from "@/components/EventList";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "./LoadingSpinner";

const EventsPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const handleCategoryChange = (newCategory: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newCategory) {
      params.set("category", newCategory);
    } else {
      params.delete("category");
    }
    router.push(`/events?${params.toString()}`);
  };

  return (
    <section className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Browse Events
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Discover upcoming events and find your next experience
        </p>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <EventCategories
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <EventList
          searchParams={{
            q: searchParams.get("q") || "",
            date: searchParams.get("date") || "",
            category: category,
          }}
        />
      </Suspense>
    </section>
  );
};

export default EventsPageContent;
