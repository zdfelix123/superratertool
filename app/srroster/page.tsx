"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Nav from "../components/Nav";
import Datagrid from "../components/Datagrid";
import Topbatchfilter from "../components/Topbatchfilter";
import { Button } from "@/components/ui/button";
import {
    SuperRaterRow,
    SUPERRATEROW_MAP
  } from "../common/constants";

import {useEffect, useState} from "react";
import { titleToNumber, getRowNumber} from "../common/utils";

const Srroster = () => {
    const [srrosterRows, setSrrosterRows] = useState([] as SuperRaterRow[]);
    useEffect(() => {
        const fetchData = async () => {
          const queryParams = "range=Sheet1!B2:AG5";
          const req = new Request(
            `/api/roster?${queryParams}`
          );
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
              const rows = values.map((value: string[] )=>{
                return {
                  id: `Roster:${value[titleToNumber(SUPERRATEROW_MAP.superRaterLDAP.columnNum) - 2]}-${value[0]}`,
                  superRaterName: {...SUPERRATEROW_MAP.superRaterName, rowNum: getRowNumber(value[0]),value: value[titleToNumber(SUPERRATEROW_MAP.superRaterName.columnNum) - 2]},
                  superRaterLDAP: {...SUPERRATEROW_MAP.superRaterLDAP, rowNum: getRowNumber(value[0]),value: value[titleToNumber(SUPERRATEROW_MAP.superRaterLDAP.columnNum) - 2]},
                  pod: {...SUPERRATEROW_MAP.pod,rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.pod.columnNum) - 2] },
                  location: {...SUPERRATEROW_MAP.location, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.location.columnNum) - 2] },
                  globalLogicEmail: {...SUPERRATEROW_MAP.globalLogicEmail, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.globalLogicEmail.columnNum) - 2] },
                  googleEmail: {...SUPERRATEROW_MAP.googleEmail, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.googleEmail.columnNum) - 2] },
                  onboardingStatus: {...SUPERRATEROW_MAP.onboardingStatus, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.onboardingStatus.columnNum) - 2] },
                  highestLevelofEducation: {...SUPERRATEROW_MAP.highestLevelofEducation, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.highestLevelofEducation.columnNum) - 2] },
                  allAssociatedRoles: {...SUPERRATEROW_MAP.allAssociatedRoles, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.allAssociatedRoles.columnNum) - 2] },
                  productionRole: {...SUPERRATEROW_MAP.productionRole, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.productionRole.columnNum) - 2] },
                  vendorOnboardedDate: {...SUPERRATEROW_MAP.vendorOnboardedDate, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.vendorOnboardedDate.columnNum) - 2] },
                  productionReadyDate: {...SUPERRATEROW_MAP.productionReadyDate, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.productionReadyDate.columnNum) - 2] },
                  estDateofProdStart: {...SUPERRATEROW_MAP.estDateofProdStart, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.estDateofProdStart.columnNum) - 2] },
                  releasedfromOnboarding: {...SUPERRATEROW_MAP.releasedfromOnboarding, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.releasedfromOnboarding.columnNum) - 2] },
                  majorAreaofStudy: {...SUPERRATEROW_MAP.majorAreaofStudy, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.majorAreaofStudy.columnNum) - 2] },
                  technicalLanguageSkills: {...SUPERRATEROW_MAP.technicalLanguageSkills, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.technicalLanguageSkills.columnNum) - 2] },
                  notes: {...SUPERRATEROW_MAP.notes, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.notes.columnNum) - 2] },
                  baseProject: {...SUPERRATEROW_MAP.baseProject, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.baseProject.columnNum) - 2] },
                  project: {...SUPERRATEROW_MAP.project, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.project.columnNum) - 2] },
                  currentTask: {...SUPERRATEROW_MAP.currentTask, rowNum: getRowNumber(value[0]),value: value[titleToNumber(SUPERRATEROW_MAP.currentTask.columnNum) - 2] },
                  assignedProject: {...SUPERRATEROW_MAP.assignedProject, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.assignedProject.columnNum) - 2] },
                  prodLead: {...SUPERRATEROW_MAP.prodLead, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.prodLead.columnNum) - 2] },
                  prodLeadLdap: {...SUPERRATEROW_MAP.prodLeadLdap, rowNum: getRowNumber(value[0]), value: value[titleToNumber(SUPERRATEROW_MAP.prodLeadLdap.columnNum) - 2] }
                }}); 
              console.log("response", res.batchGet);
              console.log("result", res.data.values);
              console.log("rows", rows)
              setSrrosterRows(rows);
              return res.data.values;
            });
        };
        fetchData();
      }, []);
  const handleNameChange = () => {};

  const handleTopFilterBaseProjectChange = () => {};

  const handleTopFilterProjectChange =() =>{};

  const edit = () =>{};

  const save = () =>{};
  return (
    <div>
      <Card>
        <CardHeader className="text-xl flex flex-row items-center justify-between">
          <div>Roster</div>
          <Nav />
        </CardHeader>
      </Card>
      <Card>
        <CardContent>
          <div className="ml-8 mt-8">
            <Topbatchfilter
              onNameChange={handleNameChange}
              onBaseProjectChange={handleTopFilterBaseProjectChange}
              onProjectChange={handleTopFilterProjectChange}
            />
          </div>
          <Datagrid data={srrosterRows} />
        </CardContent>
        <CardFooter className="flex flex-row">
          <Button onClick={edit} className="bg-blue-100 mr-8">Edit</Button>
          <Button onClick={save} className="bg-blue-100">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Srroster;
