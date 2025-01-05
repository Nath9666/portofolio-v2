import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ReservationCalendar() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="space-y-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            disabled={(date) =>
              date < new Date() || date > addDays(new Date(), 30)
            }
          />
        </PopoverContent>
      </Popover>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a time" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="09:00">09:00 AM</SelectItem>
          <SelectItem value="10:00">10:00 AM</SelectItem>
          <SelectItem value="11:00">11:00 AM</SelectItem>
          <SelectItem value="12:00">12:00 PM</SelectItem>
          <SelectItem value="13:00">01:00 PM</SelectItem>
          <SelectItem value="14:00">02:00 PM</SelectItem>
          <SelectItem value="15:00">03:00 PM</SelectItem>
          <SelectItem value="16:00">04:00 PM</SelectItem>
          <SelectItem value="17:00">05:00 PM</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-full bg-blue-600 hover:bg-blue-700">
        Confirm Reservation
      </Button>
    </div>
  );
}
