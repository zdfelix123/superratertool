import React, { ChangeEvent, useState } from "react";
import {
  ActiveProjectRow,
  ACTIVEPROJECT_CONFIG,
  Cell,
  ACTIVEPROJECT_TABLEHEADER,
  Column,
} from "../common/constants";
import TableEntry from "./TableEntry";
import { getRowNumberFromId, convertActiveProjectRowToArray} from "../common/utils";

interface Projectdatagrid {
  data: ActiveProjectRow[];
  onCheckBoxChange: Function;
  onInputChange: Function;
  activeproject?:boolean
}

const Projectdatagrid = ({ data, onCheckBoxChange, onInputChange, activeproject}: Projectdatagrid) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>, rowNum: number, row:ActiveProjectRow) => {
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
  return (
    <div>
      {data && (
        <table className="mt-6">
          <thead>
            <tr className="bg-sky-600 text-white">
              { ACTIVEPROJECT_TABLEHEADER.map((c: string, index) => (
                <th key={index} className="capitalize text-left">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr className={i % 2===0? 'bg-zinc-200':""} key={i}>
                {convertActiveProjectRowToArray(row).map((col, j) => (
                  <td key={j}>
                    {!(col as Cell).columnNum && (
                      <div className="">
                        <input
                          type="checkbox"
                          className="mr-4 ml-8"
                          checked = {row.isChecked}
                          onChange={(e) =>
                            handleCheckBox(e, getRowNumberFromId(col as string), row)
                          }
                        ></input>
                        {getRowNumberFromId(col as string)}
                      </div>
                    )}
                    <div className="capitalize min-w-40 mr-4">
                      <TableEntry column={col as Cell} rowNumber={0} onInputChange={onInputChange} activeproject={true}/>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Projectdatagrid