import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ACTIVEPROJECT_CONFIG } from "../common/constants";

const Addprojectrow = () => {
  const save = () => {};
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Add</Button>
      </PopoverTrigger>
      <PopoverContent className="w-200 overflow-auto">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Active Project</h4>
            <p className="text-sm text-muted-foreground">
              Add an entry for active project
            </p>
          </div>
          <div className="grid gap-2 grid-cols-2">
            {Object.values(ACTIVEPROJECT_CONFIG).filter(row=>row.columnNum).map((row) => (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={row.label}>{row.label}</Label>
                <Input
                  id={row.label}
                  defaultValue="Please enter"
                  className="col-span-2 h-8"
                />
              </div>
            ))}
          </div>
        </div>
        <Button onClick={save} className="bg-blue-100 mr-8">
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default Addprojectrow;
