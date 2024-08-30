"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  USER_TAB_CONFIG,
  PROJECT_TAB_CONFIG,
  PROJECTWORKTYPE,
  Option,
  Column,
} from "../common/constants";
import { titleToNumber, getBadge } from "../common/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import History from "../components/History";
import HCBarchart from "../components/HCBarchart";
import Topfilter from "../components/Topfilter";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Roster = () => {
  const [userTabs, setUserTabs] = useState([...USER_TAB_CONFIG]);
  const [projectTabs, setProjectTabs] = useState([...PROJECT_TAB_CONFIG]);
  const [rowNum, setRowNum] = useState(2);
  const [prefix, setPrefix] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const req = new Request(
        `/api/roster?range=Sheet1!A${rowNum}:AH${rowNum}`
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
          const data = res.data.values[0];
          const userTabsWithVal = [...userTabs].map((tab) => ({
            ...tab,
            value: data[titleToNumber(tab.columnNum) - 1],
            placeHolder: "Please enter ...",
            badge: getBadge(
              titleToNumber(tab.columnNum) - 1,
              data[titleToNumber("AG") - 1]
            ),
          }));
          setUserTabs(userTabsWithVal);
          const projectTabsWithVal = [...projectTabs].map((tab) => ({
            ...tab,
            value: data[titleToNumber(tab.columnNum) - 1],
          }));
          if (data[titleToNumber("I") - 1]) {
            const prefix = data[titleToNumber("I") - 1].slice(0, 4);
            const options = PROJECTWORKTYPE.filter((o: Option) =>
              o.label.startsWith(prefix)
            );
            const project = projectTabsWithVal.find(
              (c: Column) => c.columnNum === "H"
            );
            if (!!project) {
              project.options = options;
            }
          }
          setProjectTabs(projectTabsWithVal);
          console.log("result", res.data.values[0]);
          return res.data.values;
        });
    };
    fetchData();
  }, [rowNum]);

  const handleNav = async (nextPage: number) => {
    if (rowNum + nextPage < 2) {
      return;
    }
    setRowNum(rowNum + nextPage);
  };

  const handleBaseProjectChange = (baseProject: string) => {
    const prefix = baseProject.slice(0, 4);
    setPrefix(prefix);
    const options = PROJECTWORKTYPE.filter((o: Option) =>
      o.label.startsWith(prefix)
    );
    const project = projectTabs.find((c: Column) => c.columnNum === "H");
    if (!!project) {
      project.options = options;
      setProjectTabs(projectTabs);
    }
  };

  const handleTopFilterBaseProjectChange = (prefix: string)=>{
    setPrefix(prefix);
  }

  const handleNameChange = (rownumber: number) => {
    setRowNum(rownumber + 2);
  };

  return (
    <div>
      <Card>
        <CardHeader className="text-xl flex flex-row items-center">
          <div>Project Overview</div>
        </CardHeader>
        <CardContent>
        <HCBarchart prefix={prefix} />
        </CardContent>
      </Card>
      <Card>
        <div className="ml-8 mt-8">
          <Topfilter onNameChange={handleNameChange} onBaseProjectChange={handleTopFilterBaseProjectChange}/>
        </div>
        <CardHeader className="text-xl flex flex-row items-center">
          <div>Super Rater Basic Information</div>
        </CardHeader>
        <CardContent className="grid grid-cols-4">
          {userTabs.map((c) => (
            <div className="space-y-1 ml-4" key={c.columnNum}>
              <Question column={c} rowNumber={rowNum} />
            </div>
          ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Card>
        <CardHeader className="text-xl">Project Information</CardHeader>
        <CardContent className="grid grid-cols-4">
          {projectTabs.map((c) => (
            <div className="space-y-1 ml-4" key={c.columnNum}>
              <Question
                column={c}
                rowNumber={rowNum}
                onBaseProjectChange={handleBaseProjectChange}
              />
            </div>
          ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <div className="mt-4 flex flex-row ml-8">
        <History rowNumber={rowNum} />
      </div>
      <div className="mt-4 flex flex-row justify-center">
        <div className="cursor-pointer">
          <SlArrowLeft onClick={() => handleNav(-1)} />
        </div>
        <div className="ml-4 mr-4">{rowNum}</div>
        <div className="cursor-pointer">
          <SlArrowRight onClick={() => handleNav(1)} />
        </div>
      </div>
    </div>
  );
};

export default Roster;
