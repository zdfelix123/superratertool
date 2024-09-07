import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SUPERRATEROW_MAP, Cell } from "../common/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { ADD_SUPERRATEROW_MAP, Record, ValueRange } from "../common/constants";
import TableEntry from "./TableEntry";
import { titleToNumber } from "../common/utils";

interface AddrowProps {
  rowNumber: number;
}

const Addrow = ({ rowNumber }: AddrowProps) => {
  const [updates, setUpdates] = useState({} as Record);
  const save = () => {
    if (!Object.keys(updates).length) {
      return;
    }
    const updateValues = new Array(40).fill('');
    updateValues[0] = rowNumber + 3;
    Object.values(updates).forEach(v=>{
      const index = titleToNumber(v.col||'A');
      updateValues[index-2] = v.value;
    });
    const postData = async () => {
      const req = new Request(`/api/roster?range=Sheet1!B:B`);
      const response = await fetch(req, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateValues),
      });
      return response;
    };
    postData();
  };
  const handleInputChange = (vr: ValueRange) => {
    const prev = JSON.parse(JSON.stringify(updates));
    prev[vr.range] = vr;
    setUpdates(prev);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="overflow-auto bg-white w-11/12 max-h-full">
        <div className="grid gap-4">
          <DialogHeader className="space-y-2 bg-sky-600 text-white p-6">
            <DialogTitle className="font-medium leading-none">
              Roster
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Add an entry for super rater roster
            </p>
          </DialogHeader>
          <div className="grid gap-2 grid-cols-2 p-6">
            {Object.values(ADD_SUPERRATEROW_MAP)
              .filter((c) => c.columnNum)
              .map((c) => (
                <div
                  key={(c as Cell).columnNum}
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <Label htmlFor={(c as Cell).label}>{(c as Cell).label}</Label>
                  <div className="capitalize min-w-40 mr-4">
                    <TableEntry
                      column={c as Cell}
                      rowNumber={0}
                      onInputChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <DialogClose asChild>
          <Button onClick={save} className="bg-blue-100 mr-8 w-28 ml-6 mb-4">
            Save
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Addrow;
