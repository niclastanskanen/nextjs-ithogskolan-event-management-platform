"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  PartyPopper,
  Send,
  Ticket,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import type { EventDetails } from "@/types/event";
import { formatDate } from "@/lib/utils";
import RSVPDialog from "./RSVPDialog";
import { useState } from "react";

interface EventDetailsProps {
  event: EventDetails;
}

const EventDetails = ({ event }: EventDetailsProps) => {
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
      </div>
      <Card>
        <CardHeader className="p-0">
          <div className="relative h-[400px] w-full">
            <Image
              src={event.image || "/placeholder-event.jpg"}
              alt={event.title}
              fill
              className="object-cover rounded-t-lg"
              priority
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {formatDate(event.date)}
              </span>
              {event.startTime && (
                <span className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {event.startTime}
                </span>
              )}
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </span>
            </div>
          </div>
          {event.priceRanges && event.priceRanges.length > 0 && (
            <div className="bg-muted p-4 rounded-lg">
              <h2 className="font-semibold mb-2 flex items-center">
                <Ticket className="mr-2 h-4 w-4" />
                Ticket Prices
              </h2>
              <div className="space-y-2">
                {event.priceRanges.map((price, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{price.type || "Standard"}</span>
                    <span>
                      {price.currency} {price.min} - {price.max}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-2">About this Event</h2>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
          {event.venue && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Venue Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">{event.venue.name}</h3>
                  {event.venue.address && (
                    <address className="not-italic text-muted-foreground">
                      {event.venue.address.line1}
                      {event.venue.address.line2 && <br />}
                      {event.venue.address.line2}
                      <br />
                      {event.venue.address.city}, {event.venue.address.state}{" "}
                      {event.venue.address.postalCode}
                      <br />
                      {event.venue.address.country}
                    </address>
                  )}
                </div>
                {(event.venue.generalInfo || event.venue.parkingInfo) && (
                  <div className="space-y-2">
                    {event.venue.generalInfo && (
                      <div>
                        <h3 className="font-medium">General Information</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.venue.generalInfo}
                        </p>
                      </div>
                    )}
                    {event.venue.parkingInfo && (
                      <div>
                        <h3 className="font-medium">Parking Information</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.venue.parkingInfo}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="space-y-4">
            {event.pleaseNote && (
              <div className="flex gap-2">
                <Info className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <p className="text-sm">{event.pleaseNote}</p>
              </div>
            )}
            {event.ageRestrictions && (
              <div className="flex gap-2">
                <User className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">
                  Age Restriction: {event.ageRestrictions}
                </p>
              </div>
            )}
            {event.accessibility && (
              <div className="flex gap-2">
                <PartyPopper className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{event.accessibility}</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-4">
          <Button
            className="flex-1"
            onClick={() => window.open(event.ticketingInfo.url, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Buy Tickets
          </Button>
          <Button onClick={() => setShowRSVP(true)} className="flex-1">
            <Send className="mr-2 h-4 w-4" />
            RSVP Now
          </Button>
          {event.seatmap && (
            <Button
              variant="outline"
              onClick={() => window.open(event.seatmap, "_blank")}
            >
              View Seating Chart
            </Button>
          )}
        </CardFooter>
      </Card>

      <RSVPDialog
        open={showRSVP}
        onOpenChange={setShowRSVP}
        eventId={event.id}
        eventTitle={event.title}
      />
    </div>
  );
};

export default EventDetails;
