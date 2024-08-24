"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Column, QuestionType, Badge } from "../common/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Dropdown from "./Dropdown";
import Datepicker from "./Datepicker";
import { BsPersonBadge } from "react-icons/bs";
interface QuestionProps {
  column: Column;
  rowNumber: number;
}

const Question = ({ column, rowNumber }: QuestionProps) => {
  const [value, setValue] = useState(column.value);
  useEffect(() => {
    setValue(column.value);
  }, [column.value]);

  const handleTextChange = async (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
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
      body: JSON.stringify(e.target.value),
    });

    return response;
  };

  return (
    <div className="mt-8">
      {column.type == QuestionType.INPUT && (
        <div>
          <div className="flex flex-row">
            <Label htmlFor="name">{column.label}</Label>
            <div>
              {column.badge === Badge.NEW_ROLE && (
                <div className="flex flex-row ml-4">
                  <BsPersonBadge color="green" />
                  <div className="text-green-400 text-sm">New</div>
                </div>
              )}
              {column.badge === Badge.NEWBIE && (
                <div className="flex flex-row ml-4">
                  <BsPersonBadge color="pink"/>
                  <div className="text-pink-400 text-sm">Newbie</div>
                </div>
              )}
            </div>
          </div>
          <Input
            id="name"
            placeholder={column.placeHolder}
            value={value}
            onChange={(e) => handleTextChange(e)}
          />
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
          <div>{column.label}</div>
          <Dropdown column={column} rowNumber={rowNumber}></Dropdown>
        </div>
      )}
      {column.type == QuestionType.DATEPICKER && (
        <div>
          <div>{column.label}</div>
          <Datepicker column={column} rowNumber={rowNumber}></Datepicker>
        </div>
      )}
    </div>
  );
};

export default Question;
