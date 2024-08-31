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
import { titleToNumber} from "../common/utils";

const Srroster = () => {
    const [srrosterRows, setSrrosterRows] = useState([] as SuperRaterRow[]);
    useEffect(() => {
        const fetchData = async () => {
          const queryParams = "range=Sheet1!B2:AG16";
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
                  id: `Roster:${value[titleToNumber(SUPERRATEROW_MAP.superRaterLDAP) - 2]}-${value[0]}`,
                  superRaterName: value[titleToNumber(SUPERRATEROW_MAP.superRaterName) - 2],
                  superRaterLDAP: value[titleToNumber(SUPERRATEROW_MAP.superRaterLDAP) - 2],
                  pod: value[titleToNumber(SUPERRATEROW_MAP.pod) - 2],
                  location: value[titleToNumber(SUPERRATEROW_MAP.location) - 2],
                  globalLogicEmail: value[titleToNumber(SUPERRATEROW_MAP.globalLogicEmail) - 2],
                  googleEmail: value[titleToNumber(SUPERRATEROW_MAP.googleEmail) - 2],
                  onboardingStatus: value[titleToNumber(SUPERRATEROW_MAP.onboardingStatus) - 2],
                  highestLevelofEducation: value[titleToNumber(SUPERRATEROW_MAP.highestLevelofEducation) - 2],
                  allAssociatedRoles: value[titleToNumber(SUPERRATEROW_MAP.allAssociatedRoles) - 2],
                  productionRole: value[titleToNumber(SUPERRATEROW_MAP.productionRole) - 2],
                  vendorOnboardedDate: value[titleToNumber(SUPERRATEROW_MAP.vendorOnboardedDate) - 2],
                  productionReadyDate: value[titleToNumber(SUPERRATEROW_MAP.productionReadyDate) - 2],
                  estDateofProdStart: value[titleToNumber(SUPERRATEROW_MAP.estDateofProdStart) - 2],
                  releasedfromOnboarding: value[titleToNumber(SUPERRATEROW_MAP.releasedfromOnboarding) - 2],
                  majorAreaofStudy: value[titleToNumber(SUPERRATEROW_MAP.majorAreaofStudy) - 2],
                  technicalLanguageSkills: value[titleToNumber(SUPERRATEROW_MAP.technicalLanguageSkills) - 2],
                  notes: value[titleToNumber(SUPERRATEROW_MAP.notes) - 2],
                  baseProject: value[titleToNumber(SUPERRATEROW_MAP.baseProject) - 2],
                  project: value[titleToNumber(SUPERRATEROW_MAP.project) - 2],
                  currentTask: value[titleToNumber(SUPERRATEROW_MAP.currentTask) - 2],
                  assignedProject: value[titleToNumber(SUPERRATEROW_MAP.assignedProject) - 2],
                  prodLead: value[titleToNumber(SUPERRATEROW_MAP.prodLead) - 2],
                  prodLeadLdap: value[titleToNumber(SUPERRATEROW_MAP.prodLeadLdap) - 2]
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
          <Button className="bg-blue-100 mr-8">Edit</Button>
          <Button className="bg-blue-100">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Srroster;
