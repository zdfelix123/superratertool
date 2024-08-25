"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Column } from "../common/constants";
import { formatDate, validateDate } from "../common/utils";

interface DatepickerProps {
    column: Column;
    rowNumber: number;
}

const Datepicker = ({ column, rowNumber }: DatepickerProps) => {
    const [date, setDate] = useState<Date>()
    useEffect(() => {
        const date = validateDate(column.value || "");
        setDate(new Date(date));
    }, [column.value]);

    const handleDateChange = async (value: Date|undefined) => {
        if (!value) return;
        setDate(value)
        if (!column.columnNum) {
            return;
        }
        const req1 = new Request(
            `/api/roster?range=${column.columnNum}${rowNumber}`
        );
        const req2 = new Request(
            `/api/roster?range=AI${rowNumber}`
          );
        const response1 = await fetch(req1, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formatDate(value)),
        });
        const response2 = await fetch(req2, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(`Field: ${column.label}, Date:${ formatDate(new Date(Date.now()))}`),
          });

        return response1;
    };
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
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
    )
}

export default Datepicker