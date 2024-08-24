"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Column } from "../common/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
interface QuestionProps {
    column: Column;
    rowNumber: number;
}

const Question = ({ column, rowNumber }: QuestionProps) => {
    const [value, setValue] = useState(column.value);
    useEffect(() => {
        setValue(column.value);
    }, [column.value]);

    const handleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log("text changed");
        // if (!column.columnNum) {
        //     return;
        // }
        // const req = new Request(
        //     `/api/roster?range=${column.columnNum}${rowNumber}`
        // );
        // const response = await fetch(req, {
        //     method: "PUT",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(e.target.value),
        // });

        // return response;
    };

    return (
        <div>
            <Label htmlFor="name">{column.label}</Label>
            <Input id="name" placeholder={column.placeHolder} value={value} onChange={(e) => handleTextChange(e)} />
        </div>
    );
};

export default Question;