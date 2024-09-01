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
import { Column } from "../common/constants";
import { formatDate } from "../common/utils";

interface RosterMultiselectProps {
  column: Column;
  rowNumber: number;
}

const RosterMultiselect = ({ column, rowNumber }: RosterMultiselectProps) => {
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    setValue((column.value || "").split(","));
  }, [column.value]);

  const handleTextChange = async (currentValue: string[]) => {
    console.log("current value", currentValue);
    setValue(currentValue);
    if (!column.columnNum) {
      return;
    }
    const req1 = new Request(
      `/api/roster?range=${column.columnNum}${rowNumber}`
    );
    const req2 = new Request(`/api/roster?range=AI${rowNumber}`);
    const response1 = await fetch(req1, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentValue.join(",")),
    });

    const response2 = await fetch(req2, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        `Field: ${column.label}, Date:${formatDate(new Date(Date.now()))}`
      ),
    });

    return response1;
  };

  return (
    <div>
      {column.disabled ? (
        <div>{value}</div>
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
