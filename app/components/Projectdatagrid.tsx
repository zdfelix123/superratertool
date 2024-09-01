import React, { ChangeEvent, useState } from "react";
import {
  ActiveProjectRow,
  ACTIVEPROJECT_CONFIG,
  Cell,
  ACTIVEPROJECT_TABLEHEADER,
  Column,
} from "../common/constants";
import TableEntry from "./TableEntry";
import { getRowNumberFromId } from "../common/utils";

interface Projectdatagrid {
  data: ActiveProjectRow[];
  onCheckBoxChange: Function;
}

const Projectdatagrid = ({ data, onCheckBoxChange }: Projectdatagrid) => {
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
            <tr>
              { ACTIVEPROJECT_TABLEHEADER.map((c: string, index) => (
                <th key={index} className="capitalize text-left">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((col, j) => (
                  <td key={j}>
                    {!col.columnNum && (
                      <div className="ml-16 mt-14">
                        <input
                          type="checkbox"
                          className="mr-4"
                          onChange={(e) =>
                            handleCheckBox(e, getRowNumberFromId(col))
                          }
                        ></input>
                        {getRowNumberFromId(col)}
                      </div>
                    )}
                    <div className="capitalize min-w-40 mr-4">
                      <TableEntry column={col} rowNumber={0} />
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