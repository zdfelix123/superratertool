"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { USER_TAB_CONFIG, PROJECT_TAB_CONFIG } from "../common/constants";
import { titleToNumber } from "../common/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import Question from "../components/Question";

const Roster = () => {
  const [userTabs, setUserTabs] = useState([...USER_TAB_CONFIG]);
  const [projectTabs, setProjectTabs] = useState([...PROJECT_TAB_CONFIG]);
  const [rowNum, setRowNum] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      const req = new Request(`/api/roster?range=Sheet1!A2:AH2`);
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
          const userTabsWithVal = [...userTabs].map(tab => ({ ...tab, value: data[titleToNumber(tab.columnNum) - 1] }));
          setUserTabs(userTabsWithVal)
          const projectTabsWithVal = [...projectTabs].map(tab => ({ ...tab, value: data[titleToNumber(tab.columnNum) - 1] }));
          setProjectTabs(projectTabsWithVal)
          console.log("result", res.data.values[0]);
          return res.data.values;
        });
    };
    fetchData();
  }, []);

  return (
    <Tabs defaultValue="user" className="mt-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="user" className="text-xl">Super Rater Basic Information</TabsTrigger>
        <TabsTrigger value="project" className="text-xl">Project Information</TabsTrigger>
      </TabsList>
      <TabsContent value="user">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="grid grid-cols-4">
            {userTabs.map((c) => (
              <div className="space-y-1 ml-4" key={c.columnNum}>
                <Question column={c} rowNumber={rowNum} />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="project">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="grid grid-cols-4">
            {projectTabs.map((c) => (
              <div className="space-y-1 ml-4" key={c.columnNum}>
                <Question column={c} rowNumber={rowNum} />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Roster;
