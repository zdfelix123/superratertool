"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Nav from "../components/Nav";
import Projectdatagrid from "../components/Projectdatagrid";
import Topbatchfilter from "../components/Topbatchfilter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ProjectDataWithFilter,
  ActiveProjectRow,
  ACTIVEPROJECT_CONFIG,
  ValueRange,
  Record
} from "../common/constants";
import { titleToNumber, getRowNumber } from "../common/utils";
import loading from "../../public/loading.gif";

const Activeprojects = () => {
  const [dataWithFilter, setDataWithFilter] = useState(
    {} as ProjectDataWithFilter
  );
  const [selectedCheckbox, setselectedCheckbox] = useState([] as number[]);
  const [offset, setOffset] = useState(0);
  const [saveValues, setSaveValues] = useState(false);
  const [updates, setUpdates] = useState({} as Record);
  useEffect(() => {
    const fetchData = async () => {
      const queryParams = "range=Sheet2!B7:AS1132";
      const req = new Request(`/api/roster?${queryParams}`);
      await fetch(req, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const values = res.data.values;
          const rows = values.map((value: string[]) => {
            return {
              id: `ActiveProject:${
                value[titleToNumber(ACTIVEPROJECT_CONFIG.bugId.columnNum) - 2]
              }-${value[0]}`,
              bugId: {
                ...ACTIVEPROJECT_CONFIG.bugId,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.bugId.columnNum) - 2
                  ],
              },
              project: {
                ...ACTIVEPROJECT_CONFIG.project,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.project.columnNum) - 2
                  ],
              },
              workflow: {
                ...ACTIVEPROJECT_CONFIG.workflow,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.workflow.columnNum) - 2
                  ],
              },
              tasksubtype: {
                ...ACTIVEPROJECT_CONFIG.tasksubtype,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.tasksubtype.columnNum) -
                      2
                  ],
              },
              workspace: {
                ...ACTIVEPROJECT_CONFIG.workspace,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.workspace.columnNum) - 2
                  ],
              },
              qType: {
                ...ACTIVEPROJECT_CONFIG.qType,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.qType.columnNum) - 2
                  ],
              },
              status: {
                ...ACTIVEPROJECT_CONFIG.status,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.status.columnNum) - 2
                  ],
              },
              startDate: {
                ...ACTIVEPROJECT_CONFIG.startDate,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.startDate.columnNum) - 2
                  ],
              },
              endDate: {
                ...ACTIVEPROJECT_CONFIG.endDate,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(ACTIVEPROJECT_CONFIG.endDate.columnNum) - 2
                  ],
              },
              reviewCompleted: {
                ...ACTIVEPROJECT_CONFIG.reviewCompleted,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(
                      ACTIVEPROJECT_CONFIG.reviewCompleted.columnNum
                    ) - 2
                  ],
              },
              averageHandlingTime: {
                ...ACTIVEPROJECT_CONFIG.averageHandlingTime,
                rowNum: getRowNumber(value[0]) + 6,
                value:
                  value[
                    titleToNumber(
                      ACTIVEPROJECT_CONFIG.averageHandlingTime.columnNum
                    ) - 2
                  ],
              },
            };
          });
          setDataWithFilter({ data: rows, filtered: rows });
          return res.data.values;
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!Object.keys(updates).length){
      return;
    }
    Object.values(updates).forEach(update=>{
      const postData = async () => {
        const req = new Request(
          `/api/roster?range=${update.range}`
        );
        const response = await fetch(req, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update.value),
        });
        return response;
      }
      postData();
    });

  }, [saveValues]);

  const handleTopFilterBaseProjectChange = (baseProject: string) => {
    const prefix = baseProject.slice(0, 4);
    const filtered = dataWithFilter.data.filter((r) =>
      (r.project.value || "").startsWith(prefix)
    );
    setDataWithFilter({ ...dataWithFilter, filtered });
  };
  const handleTopFilterProjectChange = (project: string) => {
    const prefix = project.slice(0, 4);
    const filtered = dataWithFilter.data.filter(
      (r) => (r.workflow.value || "").startsWith(prefix)
    );
    setDataWithFilter({ ...dataWithFilter, filtered });
  };

  const edit = () => {
    setSaveValues(true);
    const rows = [...dataWithFilter.filtered];
    selectedCheckbox.forEach((i) => {
      const row = rows.find((row) => row.bugId.rowNum === i)!;
      Object.values(row)
        .filter((v) => v.columnNum)
        .forEach((v) => (v.disabled = false));
    });
    setDataWithFilter({ ...dataWithFilter, filtered: rows });
  };

  const save = () => {
    const rows = [...dataWithFilter.filtered];
    rows.forEach((row) => {
      Object.values(row)
        .filter((v) => v.columnNum)
        .forEach((v) => (v.disabled = true));
    });
    setDataWithFilter({ ...dataWithFilter, filtered: rows });
    setselectedCheckbox([]);
    setSaveValues(false);
  };

  const handleCheckBoxChange = (selected: number[]) => {
    setselectedCheckbox(selected);
  };

  const getTableData = (rows: ActiveProjectRow[], offset: number) => {
    return rows.slice(offset, 10 + offset);
  };

  const handleInputChange = (vr: ValueRange)=>{
    const prev = JSON.parse(JSON.stringify(updates));
    prev[vr.range] =vr;
    setUpdates(prev);
  }

  const handleNav = async (nextPage: number) => {
    if (offset + nextPage < 0) {
      return;
    }
    setOffset(offset + nextPage);
  };
  return (
    <div>
      <Card>
        <CardHeader className="text-xl flex flex-row items-center justify-between">
          <div>Active Projects</div>
          <Nav />
        </CardHeader>
      </Card>
      <div className="ml-8 mt-8">
        <Topbatchfilter
          onBaseProjectChange={handleTopFilterBaseProjectChange}
          onProjectChange={handleTopFilterProjectChange}
          activeProjectFilter={true}
        />
      </div>
      <div className="grid justify-items-center">
        {dataWithFilter.filtered ? (
          <Projectdatagrid
            data={getTableData(dataWithFilter.filtered || [], offset)}
            onCheckBoxChange={handleCheckBoxChange}
            onInputChange={handleInputChange}
          />
        ) : (
          <img className="w-32 mt-12 mb-12" src={loading.src} alt="loading" />
        )}
      </div>

      <CardFooter className="ml-8 flex flex-row justify-between">
        <div>
          <Button
            onClick={edit}
            className="bg-blue-100 mr-8"
            disabled={!selectedCheckbox.length}
          >
            Edit
          </Button>
          <Button
            onClick={save}
            className="bg-blue-100"
            disabled={!selectedCheckbox.length || !saveValues}
          >
            Save
          </Button>
        </div>
        <div className="flex flex-row mr-16">
          <Button onClick={() => handleNav(-10)}>Previous</Button>
          <Button onClick={() => handleNav(10)}>Next</Button>
        </div>
      </CardFooter>
    </div>
  );
};

export default Activeprojects;
