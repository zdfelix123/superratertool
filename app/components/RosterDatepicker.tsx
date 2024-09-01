"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cell} from "../common/constants";
import { formatDate, validateDate } from "../common/utils";

interface RosterDatepickerProps {
  column: Cell;
  rowNumber: number;
  onInputChange: Function;
}

const RosterDatepicker = ({
  column,
  onInputChange,
}: RosterDatepickerProps) => {
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    const date = validateDate(column.value || "");
    setDate(new Date(date));
  }, [column.value]);

  const handleDateChange = async (value: Date | undefined) => {
    if (!value) return;
    setDate(value);
    if (!column.columnNum) {
      return;
    }
    onInputChange({
      range: `Sheet1!${column.columnNum}${1 + (column.rowNum || 0)}`,
      value: formatDate(value),
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={column.disabled}
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default RosterDatepicker;
