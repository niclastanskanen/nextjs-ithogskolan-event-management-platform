"use client";

import Image from "next/image";
import { Calendar, ExternalLink, MapPin, Ticket } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Event } from "@/types/event";
import { formatDate } from "@/lib/utils";

interface EventItemProps {
  event: Event;
}
const EventItem = ({
  event: { image, title, date, location, description, priceRange, url },
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
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(date)}
            </span>
            <span className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {location}
            </span>
            {priceRange && (
              <span className="flex items-center">
                <Ticket className="mr-2 h-4 w-4" />
                {`${priceRange.currency} ${priceRange.min}-${priceRange.max}`}
              </span>
            )}
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-4">
        {url ? (
          <Button className="flex-1" onClick={() => window.open(url, "_blank")}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Buy Tickets
          </Button>
        ) : (
          <Button className="flex-1">RSVP Now</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventItem;
