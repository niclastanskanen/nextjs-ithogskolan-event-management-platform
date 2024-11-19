"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Calendar, Moon, PlusCircle, Sun } from "lucide-react";

import CreateEventDialog from "./CreateEventDialog";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-8">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <span className="font-bold">EventHub</span>
          </Link>
        </div>
        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Browse Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/calendar" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Calendar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button onClick={() => setShowCreateEvent(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Event
          </Button>
          <CreateEventDialog
            open={showCreateEvent}
            onOpenChange={setShowCreateEvent}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
