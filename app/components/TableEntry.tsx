"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Cell, QuestionType, Badge } from "../common/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Dropdown from "./Dropdown";
import Datepicker from "./Datepicker";
import Multiselect from "./Multiselect";
import { BsPersonBadge } from "react-icons/bs";
import { formatDate } from "../common/utils";
interface TableEntryProps {
  column: Cell;
  rowNumber: number;
  onBaseProjectChange?: Function;
}

const TableEntry = ({ column, rowNumber, onBaseProjectChange }: TableEntryProps) => {
  const [value, setValue] = useState(column.value);
  const [error,setError] =useState('');
  useEffect(() => {
    setValue(column.value);
  }, [column.value]);

  const validateEmail=(email:string, domain:string)=>{ 
    email = email.trim().toLowerCase();
    return email.endsWith(domain);
  }

  const handleTextChange = async (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setError('');
    setValue(e.target.value);
    if (!!column.validation){
      if (column.validation.type === 'email'){
        if (!validateEmail(e.target.value, column.validation.regex)){
          setError(`Invalid Email Address, Should End With ${column.validation.regex} `);
          return;
        }
      }
    }
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
      body: JSON.stringify(e.target.value),
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
    <div className="mt-8">
      {column.type == QuestionType.INPUT && (
        <div>
          <Input
            id="name"
            value={value}
            onChange={(e) => handleTextChange(e)}
          />
          {error && (<div className='text-sm text-red-500'>{error}</div>)}
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
          <div className="text-sm font-medium">{column.label}</div>
          <Dropdown column={column} rowNumber={rowNumber} onBaseProjectChange={onBaseProjectChange}></Dropdown>
        </div>
      )}
      {column.type == QuestionType.DATEPICKER && (
        <div>
          <div className="text-sm font-medium">{column.label}</div>
          <Datepicker column={column} rowNumber={rowNumber}></Datepicker>
        </div>
      )}
      {column.type == QuestionType.MULTISELECT && (
        <div>
          <div className="text-sm font-medium">{column.label}</div>
          <Multiselect column={column} rowNumber={rowNumber}></Multiselect>
        </div>
      )}
    </div>
  );
};

export default TableEntry;
