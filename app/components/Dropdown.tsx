"use client";

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { ChangeEvent,useEffect, useState } from "react";
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Column } from "../common/constants";

interface DropDownProps {
    column: Column;
    rowNumber: number;
  }

const Dropdown = ({ column, rowNumber}: DropDownProps) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(column.value ||"")
    useEffect(() => {
        setValue(column.value ||"");
    }, [column.value]);

    const handleTextChange = async (currentValue:string) => {
        setValue(currentValue === value ? "" : currentValue)
        setOpen(false)
        if (!column.columnNum) {
            return;
        }
        const req = new Request(
            `/api/roster?range=${column.columnNum}${rowNumber}`
        );
        const response = await fetch(req, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currentValue),
        });

        return response;
    };
   
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? (column.options||[]).find((o) => o.value === value)?.label
              : "Select option..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search option..." />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {(column.options||[]).map((o) => (
                  <CommandItem
                    key={o.value}
                    value={o.value}
                    onSelect={(currentValue) => handleTextChange(currentValue)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === o.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {o.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
}

export default Dropdown