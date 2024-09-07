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
import { ADD_SUPERRATEROW_MAP, Record, ValueRange} from "../common/constants";
import TableEntry from "./TableEntry";

const Addrow = () => {
  const [updates, setUpdates] = useState({} as Record);
  const save = () => {};
  const handleInputChange = (vr: ValueRange) => {
    console.log("vr", vr);
    const prev = JSON.parse(JSON.stringify(updates));
    prev[vr.range] = vr;
    console.log("prev", prev);
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
            <DialogTitle className="font-medium leading-none">Roster</DialogTitle>
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
          <Button onClick={save} className="bg-blue-100 mr-8 w-28">
            Save
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Addrow;
