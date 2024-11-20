"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CalendarView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [date, setDate] = useState<Date | undefined>(
    searchParams.get("date") ? new Date(searchParams.get("date")!) : new Date()
  );

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);

    if (newDate) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("date", newDate.toISOString().split("T")[0]);
      router.push(`/?${params.toString()}`);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Calendar</CardTitle>
        <CardDescription>Browse events by date</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
};

export default CalendarView;
