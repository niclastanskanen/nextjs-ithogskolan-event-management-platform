"use client";

import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Event } from "@/types/event";

interface EventItemProps {
  event: Event;
}
const EventItem = ({
  event: { image, title, date, location, attendees, description },
}: EventItemProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={
              image ||
              "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
            }
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>
              <Calendar className="mr-2 h-4 w-4" />
              {date}
            </span>
            <span className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {location}
            </span>
            <span className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              {attendees} attending
            </span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">RSVP Now</Button>
      </CardFooter>
    </Card>
  );
};

export default EventItem;
