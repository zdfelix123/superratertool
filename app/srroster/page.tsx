"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Nav from "../components/Nav";
import Datagrid from "../components/Datagrid";
import Topfilter from "../components/Topfilter";
import { Button } from "@/components/ui/button";
import {
    SuperRaterRow,
    SUPERRATEROW_MAP
  } from "../common/constants";

import {useEffect, useState} from "react";

const Srroster = () => {
    const [srrosterRows, setSrrosterRows] = useState([] as SuperRaterRow[]);
    useEffect(() => {
        const fetchData = async () => {
          const req = new Request(
            `/api/roster?range=Sheet1!B2:AG16`
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
              const rows = [];
               values.map((value: string[] )=>{
                const colNum = SUPERRATEROW_MAP
               }); 
              console.log("new data", res.data.values);
              return res.data.values;
            });
        };
        fetchData();
      }, []);
  const handleNameChange = () => {};

  const handleTopFilterBaseProjectChange = () => {};
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
            <Topfilter
              onNameChange={handleNameChange}
              onBaseProjectChange={handleTopFilterBaseProjectChange}
            />
          </div>
          <Datagrid />
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
