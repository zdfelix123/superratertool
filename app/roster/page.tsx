"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { USER_TAB_CONFIG, PROJECT_TAB_CONFIG } from "../common/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Roster = () => {
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
            {USER_TAB_CONFIG.map((c) => (
              <div className="space-y-1 ml-2">
                <Label htmlFor="name">{c.label}</Label>
                <Input id="name" placeholder={c.placeHolder} />
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
          {PROJECT_TAB_CONFIG.map((c) => (
              <div className="space-y-1 ml-2">
                <Label htmlFor="name">{c.label}</Label>
                <Input id="name" placeholder={c.placeHolder} />
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
