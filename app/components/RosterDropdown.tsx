"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Column, Cell} from "../common/constants";
import { formatDate } from "../common/utils";

interface RosterDropDownProps {
  column: Cell;
  rowNumber: number;
  onBaseProjectChange?: Function;
  onNameChange?: Function;
  onInputChange:Function;
  activeproject?:boolean;
}

const RosterDropdown = ({
  column,
  rowNumber,
  onBaseProjectChange,
  onNameChange,
  onInputChange,
  activeproject
}: RosterDropDownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(column.value || "");
  useEffect(() => {
    setValue(column.value || "");
  }, [column.value]);

  const handleTextChange = async (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    if (onBaseProjectChange) {
      onBaseProjectChange(currentValue === value ? "" : currentValue);
    }
    if (onNameChange) {
      onNameChange(currentValue === value ? "" : currentValue);
    }
    setOpen(false);
    if (!column.columnNum) {
      return;
    }
    if (rowNumber < 1) return;
    if (activeproject){
      onInputChange({
        range: `Sheet2!${column.columnNum}${column.rowNum || 0}`,
        value: currentValue,
        col: column.columnNum,
        column
      });
      return;

    }
    onInputChange({
      range: `Sheet1!${column.columnNum}${1 + (column.rowNum||0)}`,
      value: currentValue,
      col: column.columnNum,
      column
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={column.disabled}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[${column.width ? column.width : "200px"}] justify-between`}
        >
          {value
            ? (column.options || []).find((o) => o.value === value)?.label
            : column.placeHolder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`w-[${column.width ? "230px" : "200px"}] p-0`}>
        <Command>
          <CommandInput placeholder={column.placeHolder} />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {(column.options || []).map((o) => (
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
  );
};

export default RosterDropdown;
