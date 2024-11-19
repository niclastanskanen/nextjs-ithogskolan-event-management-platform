import axios from "axios";

import { Event } from "@/types/event";

if (!process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY) {
  throw new Error("NEXT_PUBLIC_TICKETMASTER_API_KEY is not defined");
}

const api = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2",
  params: {
    apikey: process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY,
  },
});

export async function getEvents(): Promise<Event[]> {
  try {
    const { data } = await api.get("/events.json", {
      params: {
        size: 20, // Number of events to return
        sort: "date,asc",
      },
    });

    if (!data._embedded?.events) {
      return [];
    }

    return data._embedded.events.map((event: any) => ({
      id: event.id,
      title: event.name,
      description:
        event.description || event.info || "No description available",
      date: event.dates.start.dateTime || event.dates.start.localDate,
      location: event._embedded?.venues?.[0]?.name || "Location TBA",
      image: event.images?.[0]?.url,
      organizer: {
        name: event.promoter?.name || "Ticketmaster",
      },
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error(
          "Invalid API key. Please check your Ticketmaster API key."
        );
      }
      if (error.response?.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      throw new Error(`Failed to fetch events: ${error.message}`);
    }
    throw error;
  }
}
