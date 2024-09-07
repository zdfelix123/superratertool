import React, { ChangeEvent, useState } from "react";
import {
  ActiveProjectRow,
  ACTIVEPROJECT_CONFIG,
  Cell,
  ACTIVEPROJECT_TABLEHEADER,
  Column,
} from "../common/constants";
import TableEntry from "./TableEntry";
import {
  getRowNumberFromId,
  convertActiveProjectRowToArray,
} from "../common/utils";

interface Projectdatagrid {
  data: ActiveProjectRow[];
  onCheckBoxChange: Function;
  onInputChange: Function;
  activeproject?: boolean;
}

const Projectdatagrid = ({
  data,
  onCheckBoxChange,
  onInputChange,
  activeproject,
}: Projectdatagrid) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [topchecked, setTopchecked] = useState(false);
  const handleCheckBox = (
    e: ChangeEvent<HTMLInputElement>,
    rowNum: number,
    row: ActiveProjectRow
  ) => {
    row.isChecked = !row.isChecked;
    if (e.target.checked) {
      const set = new Set(selectedRows);
      set.add(rowNum + 6);
      onCheckBoxChange(Array.from(set));
      setSelectedRows(set);
    } else {
      const set = new Set(selectedRows);
      set.delete(rowNum + 6);
      onCheckBoxChange(Array.from(set));
      setSelectedRows(set);
    }
  };
  const handleTopCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setTopchecked(!topchecked);
    if (e.target.checked) {
      const set = new Set();
      data.forEach((r) => {
        r.isChecked = true;
        set.add(getRowNumberFromId(r.id) + 6);
      });
      onCheckBoxChange(Array.from(set));
      setSelectedRows(set);
    } else {
      data.forEach((r) => (r.isChecked = false));
      onCheckBoxChange([]);
      setSelectedRows(new Set());
    }
  };
  return (
    <div>
      {data && (
        <table className="mt-6">
          <thead>
            <tr className="bg-sky-600 text-white">
              {ACTIVEPROJECT_TABLEHEADER.map((c: string, index) => (
                <th key={index} className="capitalize text-left">
                  {index === 0 && (<input
                    type="checkbox"
                    className="mt-4 ml-8"
                    checked={topchecked}
                    onChange={(e) => handleTopCheckBox(e)}
                  ></input>)}
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={row.id} className={i % 2 === 0 ? "bg-zinc-200" : ""}>
                {convertActiveProjectRowToArray(row).map((col, j) => (
                  <td key={(col as Cell).columnNum}>
                    {!(col as Cell).columnNum && (
                      <div className="">
                        <input
                          key={row.id}
                          type="checkbox"
                          className="mr-4 ml-8"
                          checked={row.isChecked}
                          onChange={(e) =>
                            handleCheckBox(
                              e,
                              getRowNumberFromId(col as string),
                              row
                            )
                          }
                        ></input>
                        {getRowNumberFromId(col as string)}
                      </div>
                    )}
                    <div className="capitalize min-w-40 mr-4">
                      <TableEntry
                        column={col as Cell}
                        rowNumber={0}
                        onInputChange={onInputChange}
                        activeproject={true}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Projectdatagrid;
