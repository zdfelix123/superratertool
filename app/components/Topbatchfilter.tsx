import { ChangeEvent, useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Multiselect from "./Multiselect";

import { TOP_FILTER_CONFIG, Project, Column } from "../common/constants";
import { arrToObject } from "../common/utils";
import { Button } from "@/components/ui/button";
import {
  PROJECT_TAB_CONFIG,
  USER_TAB_CONFIG,
  WORKFLOWFILTER_CONFIG,
  QTYPE_CONFIG,
} from "../common/constants";
interface TopfilterProps {
  onNameChange?: Function;
  onBaseProjectChange: Function;
  onProjectChange: Function;
  activeProjectFilter?: boolean;
  onProductionRoleChange?: Function;
  onWorkFlowChange?: Function;
  onQTypeChange?: Function;
  topprojectfilterconfig?:Column[];
  toprosterfilterconfig?: Column[];
  clearfilter:boolean;
}

const Topbatchfilter = ({
  onNameChange,
  onBaseProjectChange,
  onProjectChange,
  activeProjectFilter,
  onProductionRoleChange,
  onWorkFlowChange,
  onQTypeChange,
  topprojectfilterconfig,
  clearfilter,
  toprosterfilterconfig,
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

  const handleProductionRoleChange = (value: string) => {
    if (onProductionRoleChange) {
      onProductionRoleChange(value);
    }
  };

  const handleWorkFlowChange = (value: string) => {
    if (onWorkFlowChange) {
      onWorkFlowChange(value);
    }
  };

  const handleQTypeChange = (value: string) => {
    if (onQTypeChange) {
      onQTypeChange(value);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-9/12">
        <div className="mr-16">
          <Dropdown
            column={topprojectfilterconfig && topprojectfilterconfig[0] || PROJECT_TAB_CONFIG[0]}
            rowNumber={0}
            onBaseProjectChange={handleBaseProjectChange}
            clearfilter={clearfilter}
          ></Dropdown>
        </div>
        {!activeProjectFilter && (
          <div className="mr-16">
            <Dropdown
              column={toprosterfilterconfig && toprosterfilterconfig[1] ||PROJECT_TAB_CONFIG[1] }
              rowNumber={0}
              onBaseProjectChange={handleProjectChange}
              clearfilter={clearfilter}
            ></Dropdown>
          </div>
        )}
        {!activeProjectFilter && (
          <div className="mr-16">
            <Dropdown
              column={toprosterfilterconfig&&toprosterfilterconfig[2]||USER_TAB_CONFIG[9]}
              rowNumber={0}
              onProductionRoleChange={handleProductionRoleChange}
              clearfilter={clearfilter}
            ></Dropdown>
          </div>
        )}
        {activeProjectFilter && (
          <div className="mr-16">
            <Dropdown
              column={topprojectfilterconfig && topprojectfilterconfig[1] ||WORKFLOWFILTER_CONFIG}
              rowNumber={0}
              onWorkFlowChange={handleWorkFlowChange}
              clearfilter={clearfilter}
            ></Dropdown>
          </div>
        )}
        {activeProjectFilter && (
          <div className="mr-16">
            <Dropdown
              column={topprojectfilterconfig && topprojectfilterconfig[2] ||QTYPE_CONFIG}
              rowNumber={0}
              onQTypeChange={handleQTypeChange}
              clearfilter={clearfilter}
            ></Dropdown>
          </div>
        )}
      </div>
      <div className="flex flex-row w-3/12 mr-4">
        {!activeProjectFilter && (
          <Multiselect
            column={toprosterfilterconfig&&toprosterfilterconfig[3] || TOP_FILTER_CONFIG}
            rowNumber={0}
            onNameChange={onNameChange}
            clearfilter={clearfilter}
          ></Multiselect>
        )}
      </div>
    </div>
  );
};

export default Topbatchfilter;
