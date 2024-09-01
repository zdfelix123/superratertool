"use client";
import { useState, useEffect } from "react";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/extension/multi-select";
import { Cell } from "../common/constants";
import { formatDate } from "../common/utils";

interface RosterMultiselectProps {
  column: Cell;
  rowNumber: number;
  onInputChange: Function;
}

const RosterMultiselect = ({ column, rowNumber, onInputChange}: RosterMultiselectProps) => {
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    setValue((column.value || "").split(","));
  }, [column.value]);

  const handleTextChange = async (currentValue: string[]) => {
    setValue(currentValue);
    if (!column.columnNum) {
      return;
    }
    onInputChange(
      {
        range: `Sheet1!${column.columnNum}${1 + (column.rowNum||0)}`,
        value: currentValue.join(",")
      }
    );
  };

  return (
    <div>
      {column.disabled ? (
        <div>{value.join(", ")}</div>
      ) : (
        <MultiSelector
          values={value}
          onValuesChange={handleTextChange}
          loop={false}
        >
          <MultiSelectorTrigger>
            <MultiSelectorInput placeholder={column.placeHolder} />
          </MultiSelectorTrigger>
          <MultiSelectorContent>
            <MultiSelectorList>
              {(column.options || []).map((option, i) => (
                <MultiSelectorItem key={i} value={option.value}>
                  {option.label}
                </MultiSelectorItem>
              ))}
            </MultiSelectorList>
          </MultiSelectorContent>
        </MultiSelector>
      )}
    </div>
  );
};

export default RosterMultiselect;
