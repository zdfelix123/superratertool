import React, { ChangeEvent, useState } from "react";
import {
  SuperRaterRow,
  SUPERRATEROW_MAP,
  Cell,
  SUPERRATER_TABLEHEADER,
  TABLE_CONFIG,
  Column,
} from "../common/constants";
import TableEntry from "./TableEntry";
import { getRowNumberFromId } from "../common/utils";

interface TableProps {
  data: SuperRaterRow[];
  onCheckBoxChange: Function;
  onInputChange: Function;
}

const Table = ({ data, onCheckBoxChange, onInputChange }: TableProps) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>, rowNum: number) => {
    if (e.target.checked) {
      const set = new Set(selectedRows);
      set.add(rowNum);
      onCheckBoxChange(Array.from(set));
      setSelectedRows(set);
    } else {
      const set = new Set(selectedRows);
      set.delete(rowNum);
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
              {SUPERRATER_TABLEHEADER.map((c: string, index) => (
                <th key={index} className="capitalize text-left">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={i % 2===0? 'bg-zinc-200':""}>
                {Object.values(row).map((col, j) => (
                  <td key={j}>
                    {!col.columnNum && (
                      <div className="">
                        <input
                          type="checkbox"
                          className="mr-4 ml-8"
                          onChange={(e) =>
                            handleCheckBox(e, getRowNumberFromId(col))
                          }
                        ></input>
                        {getRowNumberFromId(col)}
                      </div>
                    )}
                    <div className="capitalize min-w-40 mr-4">
                      <TableEntry column={col} rowNumber={0} onInputChange={onInputChange}/>
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

export default Table;
