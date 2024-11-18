import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "@/components/ui/calendar";

const DatePicker = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Pick a date</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-9" align="start">
        <Calendar mode="single" initialFocus />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
