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
  activeproject?:boolean;
}

const RosterMultiselect = ({ column, rowNumber, onInputChange, activeproject}: RosterMultiselectProps) => {
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    setValue((column.value || "").split(","));
  }, [column.value]);

  const handleTextChange = async (currentValue: string[]) => {
    setValue(currentValue);
    if (!column.columnNum) {
      return;
    }
    if (activeproject) {
      onInputChange({
        range: `Sheet2!${column.columnNum}${column.rowNum || 0}`,
        value: currentValue.join(","),
        col: column.columnNum,
        column
      });
      return;
    }
    onInputChange(
      {
        range: `Sheet1!${column.columnNum}${1 + (column.rowNum||0)}`,
        value: currentValue.join(","),
        col: column.columnNum,
        column
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
