"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Topbatchfilter from "../components/Topbatchfilter";
import { Button } from "@/components/ui/button";
import {
  SuperRaterRow,
  SUPERRATEROW_MAP,
  DataWithFilter,
  ValueRange,
  Record
} from "../common/constants";

import { useEffect, useState } from "react";
import { titleToNumber, getRowNumber } from "../common/utils";
import loading from "../../public/loading.gif";

const Srroster = () => {
  const [dataWithFilter, setDataWithFilter] = useState({} as DataWithFilter);
  const [selectedCheckbox, setselectedCheckbox] = useState([] as number[]);
  const [offset, setOffset] = useState(0);
  const [saveValues, setSaveValues] = useState(false);
  const [updates, setUpdates] = useState({} as Record);
  useEffect(() => {
    const fetchData = async () => {
      const queryParams = "range=Sheet1!B2:AG1582";
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
              id: `Roster:${
                value[
                  titleToNumber(SUPERRATEROW_MAP.superRaterLDAP.columnNum) - 2
                ]
              }-${value[0]}`,
              superRaterName: {
                ...SUPERRATEROW_MAP.superRaterName,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.superRaterName.columnNum) - 2
                  ],
              },
              superRaterLDAP: {
                ...SUPERRATEROW_MAP.superRaterLDAP,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.superRaterLDAP.columnNum) - 2
                  ],
              },
              baseProject: {
                ...SUPERRATEROW_MAP.baseProject,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.baseProject.columnNum) - 2
                  ],
              },
              project: {
                ...SUPERRATEROW_MAP.project,
                rowNum: getRowNumber(value[0]),
                value:
                  value[titleToNumber(SUPERRATEROW_MAP.project.columnNum) - 2],
              },
              currentTask: {
                ...SUPERRATEROW_MAP.currentTask,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.currentTask.columnNum) - 2
                  ],
              },
              assignedProject: {
                ...SUPERRATEROW_MAP.assignedProject,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.assignedProject.columnNum) -
                      2
                  ],
              },
              pod: {
                ...SUPERRATEROW_MAP.pod,
                rowNum: getRowNumber(value[0]),
                value: value[titleToNumber(SUPERRATEROW_MAP.pod.columnNum) - 2],
              },
              location: {
                ...SUPERRATEROW_MAP.location,
                rowNum: getRowNumber(value[0]),
                value:
                  value[titleToNumber(SUPERRATEROW_MAP.location.columnNum) - 2],
              },
              globalLogicEmail: {
                ...SUPERRATEROW_MAP.globalLogicEmail,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.globalLogicEmail.columnNum) -
                      2
                  ],
              },
              googleEmail: {
                ...SUPERRATEROW_MAP.googleEmail,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.googleEmail.columnNum) - 2
                  ],
              },
              onboardingStatus: {
                ...SUPERRATEROW_MAP.onboardingStatus,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.onboardingStatus.columnNum) -
                      2
                  ],
              },
              highestLevelofEducation: {
                ...SUPERRATEROW_MAP.highestLevelofEducation,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.highestLevelofEducation.columnNum
                    ) - 2
                  ],
              },
              allAssociatedRoles: {
                ...SUPERRATEROW_MAP.allAssociatedRoles,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.allAssociatedRoles.columnNum
                    ) - 2
                  ],
              },
              productionRole: {
                ...SUPERRATEROW_MAP.productionRole,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.productionRole.columnNum) - 2
                  ],
              },
              vendorOnboardedDate: {
                ...SUPERRATEROW_MAP.vendorOnboardedDate,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.vendorOnboardedDate.columnNum
                    ) - 2
                  ],
              },
              productionReadyDate: {
                ...SUPERRATEROW_MAP.productionReadyDate,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.productionReadyDate.columnNum
                    ) - 2
                  ],
              },
              estDateofProdStart: {
                ...SUPERRATEROW_MAP.estDateofProdStart,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.estDateofProdStart.columnNum
                    ) - 2
                  ],
              },
              releasedfromOnboarding: {
                ...SUPERRATEROW_MAP.releasedfromOnboarding,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.releasedfromOnboarding.columnNum
                    ) - 2
                  ],
              },
              majorAreaofStudy: {
                ...SUPERRATEROW_MAP.majorAreaofStudy,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.majorAreaofStudy.columnNum) -
                      2
                  ],
              },
              technicalLanguageSkills: {
                ...SUPERRATEROW_MAP.technicalLanguageSkills,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(
                      SUPERRATEROW_MAP.technicalLanguageSkills.columnNum
                    ) - 2
                  ],
              },
              notes: {
                ...SUPERRATEROW_MAP.notes,
                rowNum: getRowNumber(value[0]),
                value:
                  value[titleToNumber(SUPERRATEROW_MAP.notes.columnNum) - 2],
              },
              prodLead: {
                ...SUPERRATEROW_MAP.prodLead,
                rowNum: getRowNumber(value[0]),
                value:
                  value[titleToNumber(SUPERRATEROW_MAP.prodLead.columnNum) - 2],
              },
              prodLeadLdap: {
                ...SUPERRATEROW_MAP.prodLeadLdap,
                rowNum: getRowNumber(value[0]),
                value:
                  value[
                    titleToNumber(SUPERRATEROW_MAP.prodLeadLdap.columnNum) - 2
                  ],
              },
            };
          });
          console.log("response", res.batchGet);
          console.log("result", res.data.values);
          console.log("rows", rows);
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
  const handleNameChange = () => {};

  const handleInputChange = (vr: ValueRange)=>{
    const prev = JSON.parse(JSON.stringify(updates));
    console.log("updates", updates);
    prev[vr.range] =vr;
    setUpdates(prev);
  }

  const handleTopFilterBaseProjectChange = (baseProject: string) => {
    const prefix = baseProject.slice(0, 4);
    const filtered = dataWithFilter.data.filter((r) =>
      (r.baseProject.value || "").startsWith(prefix)
    );
    setDataWithFilter({ ...dataWithFilter, filtered });
  };

  const handleTopFilterProjectChange = (project: string) => {
    const filtered = dataWithFilter.data.filter(
      (r) => (r.project.value || "") === project
    );
    setDataWithFilter({ ...dataWithFilter, filtered });
  };

  const handleCheckBoxChange = (selected: number[]) => {
    setselectedCheckbox(selected);
  };

  const edit = () => {
    setSaveValues(true);
    const rows = [...dataWithFilter.filtered];
    selectedCheckbox.forEach((i) => {
      const row = rows.find((row) => row.superRaterName.rowNum === i)!;
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

  const handleNav = async (nextPage: number) => {
    if (offset + nextPage < 0) {
      return;
    }
    setOffset(offset + nextPage);
  };

  const getTableData = (rows: SuperRaterRow[], offset: number) => {
    return rows.slice(offset, 10 + offset);
  };
  return (
    <div>
      <Card>
        <CardHeader className="text-xl flex flex-row items-center justify-between">
          <div>Roster</div>
          <Nav />
        </CardHeader>
      </Card>

      <div className="ml-8 mt-8">
        <Topbatchfilter
          onNameChange={handleNameChange}
          onBaseProjectChange={handleTopFilterBaseProjectChange}
          onProjectChange={handleTopFilterProjectChange}
        />
      </div>
      {/* <Datagrid data={srrosterRows}/> */}
      <div className="grid justify-items-center">
        {dataWithFilter.filtered ? (
          <Table
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

export default Srroster;
