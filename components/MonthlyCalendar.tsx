"use client";

import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";

import { getEvents } from "@/lib/api";
import { Event } from "@/types/event";

import EventItem from "@/components/EventItem";
import LoadingSpinner from "@/components/LoadingSpinner";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MonthlyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [monthEvents, setMonthEvents] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchMonthEvents = async () => {
      const start = startOfMonth(selectedDate);
      const end = endOfMonth(selectedDate);

      try {
        const monthData = await getEvents(
          "",
          start.toISOString().split("T")[0],
          end.toISOString().split("T")[0]
        );
        const eventCounts: Record<string, number> = {};
        monthData.forEach((event) => {
          const date = event.date.split("T")[0];
          eventCounts[date] = (eventCounts[date] || 0) + 1;
        });

        setMonthEvents(eventCounts);
      } catch (error) {
        console.error("Error fetching month events:", error);
      }
    };

    fetchMonthEvents();
  }, [selectedDate]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const dateStr = selectedDate.toISOString().split("T")[0];
        const data = await getEvents("", dateStr, "");
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      }
      setLoading(false);
    };

    fetchEvents();
  }, [selectedDate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Event Calendar</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>
            Events for {format(selectedDate, "MMMM d, yyyy")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <LoadingSpinner />
          ) : events.length > 0 ? (
            <div className="space-y-4">
              {events.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold">No events found</h3>
              <p className="text-muted-foreground">
                Try selecting a different date
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyCalendar;
