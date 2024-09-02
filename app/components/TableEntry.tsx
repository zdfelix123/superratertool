"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Cell, QuestionType, Badge } from "../common/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RosterDropdown from "./RosterDropdown";
import RosterDatepicker from "./RosterDatepicker";
import RosterMultiselect from "./RosterMultiselect";
import { BsPersonBadge } from "react-icons/bs";
import { formatDate } from "../common/utils";
interface TableEntryProps {
  column: Cell;
  rowNumber: number;
  onBaseProjectChange?: Function;
  onInputChange: Function;
  activeproject?: boolean;
}

const TableEntry = ({
  column,
  rowNumber,
  onBaseProjectChange,
  onInputChange,
  activeproject,
}: TableEntryProps) => {
  const [value, setValue] = useState(column.value);
  const [error, setError] = useState("");
  useEffect(() => {
    setValue(column.value);
  }, [column.value]);

  const validateEmail = (email: string, domain: string) => {
    email = email.trim().toLowerCase();
    return email.endsWith(domain);
  };

  const handleTextChange = async (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setError("");
    setValue(e.target.value);
    if (!!column.validation) {
      if (column.validation.type === "email") {
        if (!validateEmail(e.target.value, column.validation.regex)) {
          setError(
            `Invalid Email Address, Should End With ${column.validation.regex} `
          );
          return;
        }
      }
    }
    if (!column.columnNum) {
      return;
    }
    if (activeproject) {
      onInputChange({
        range: `Sheet2!${column.columnNum}${column.rowNum || 0}`,
        value: e.target.value,
      });
      return;
    }
    onInputChange({
      range: `Sheet1!${column.columnNum}${1 + (column.rowNum || 0)}`,
      value: e.target.value,
    });
  };

  return (
    <div className="mt-8">
      {column.type == QuestionType.INPUT && (
        <div>
          <Input
            id="name"
            value={value}
            onChange={(e) => handleTextChange(e)}
            disabled={column.disabled}
          />
          {error && <div className="text-sm text-red-500">{error}</div>}
        </div>
      )}
      {column.type == QuestionType.TEXTAREA && (
        <div>
          <Label htmlFor="name">{column.label}</Label>
          <Textarea
            id="name"
            placeholder={column.placeHolder}
            value={value}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      )}
      {column.type == QuestionType.SELECTOR && (
        <div>
          <RosterDropdown
            column={column}
            rowNumber={column.rowNum || 0}
            onBaseProjectChange={onBaseProjectChange}
            onInputChange={onInputChange}
            activeproject={activeproject}
          ></RosterDropdown>
        </div>
      )}
      {column.type == QuestionType.DATEPICKER && (
        <div>
          <RosterDatepicker
            column={column}
            rowNumber={column.rowNum || 0}
            onInputChange={onInputChange}
            activeproject={activeproject}
          ></RosterDatepicker>
        </div>
      )}
      {column.type == QuestionType.MULTISELECT && (
        <div>
          <RosterMultiselect
            column={column}
            rowNumber={column.rowNum || 0}
            onInputChange={onInputChange}
            activeproject={activeproject}
          ></RosterMultiselect>
        </div>
      )}
    </div>
  );
};

export default TableEntry;
