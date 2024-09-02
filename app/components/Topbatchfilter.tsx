import { ChangeEvent, useEffect, useState } from "react";
import Dropdown from "./Dropdown";

import { TOP_FILTER_CONFIG, Project } from "../common/constants";
import { arrToObject } from "../common/utils";
import { PROJECT_TAB_CONFIG } from "../common/constants";
interface TopfilterProps {
  onNameChange?: Function;
  onBaseProjectChange: Function;
  onProjectChange: Function;
  activeProjectFilter?: boolean;
}

const Topbatchfilter = ({
  onNameChange,
  onBaseProjectChange,
  onProjectChange,
  activeProjectFilter,
}: TopfilterProps) => {
  const [config, setConfig] = useState(TOP_FILTER_CONFIG);
  const [data, setData] = useState([] as Project[]);
  const [projectConfig, setProjectConfig] = useState(PROJECT_TAB_CONFIG[1]);
  useEffect(() => {
    const fetchData = async () => {
      const req = new Request(`/api/roster?range=Sheet1!AM2:AN2`);
      await fetch(req, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (
            !res.data.values ||
            !res.data.values[0] ||
            !res.data.values[0][0]
          ) {
            return;
          }
          const projects = arrToObject(res.data.values[0]);
          setData(projects);
          const options = projects
            .filter((p: Project) => p.name !== "")
            .map((p: Project) => ({
              label: p.name,
              value: p.name,
            }));
          setConfig({ ...TOP_FILTER_CONFIG, options });
          return res.data.values;
        });
    };
    fetchData();
  }, []);
  const handleNameChange = (name: string) => {
    if (onNameChange) {
      onNameChange(name);
    }
  };

  const handleBaseProjectChange = (value: string) => {
    const prefix = value.slice(0, 4);
    const options = (PROJECT_TAB_CONFIG[1].options || []).filter((o) =>
      o.value.startsWith(prefix)
    );
    setProjectConfig({ ...projectConfig, options });
    onBaseProjectChange(prefix);
  };

  const handleProjectChange = (value: string) => {
    const options = data
      .filter((p) => p.project == value)
      .map((p: Project) => ({
        label: p.name,
        value: p.name,
      }));
    setConfig({ ...TOP_FILTER_CONFIG, options });
    onProjectChange(value);
  };

  return (
    <div className="flex flex-row w-9/12">
      <div className="mr-16">
        <Dropdown
          column={PROJECT_TAB_CONFIG[0]}
          rowNumber={0}
          onBaseProjectChange={handleBaseProjectChange}
        ></Dropdown>
      </div>
      <div className="mr-16">
        <Dropdown
          column={projectConfig}
          rowNumber={0}
          onBaseProjectChange={handleProjectChange}
        ></Dropdown>
      </div>
      {!activeProjectFilter && (
        <Dropdown
          column={config}
          rowNumber={0}
          onNameChange={handleNameChange}
        ></Dropdown>
      )}
    </div>
  );
};

export default Topbatchfilter;
