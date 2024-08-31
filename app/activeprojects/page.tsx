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
import React from "react";
import { Button } from "@/components/ui/button";

const Activeprojects = () => {
  const handleNameChange = () => {};

  const handleTopFilterBaseProjectChange = () => {};
  return (
    <div>
      <Card>
        <CardHeader className="text-xl flex flex-row items-center justify-between">
          <div>Active Projects</div>
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

export default Activeprojects;
