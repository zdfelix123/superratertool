
import Dropdown from "./Dropdown";
import Multiselect from "./Multiselect";
import { TOP_FILTER_CONFIG, Column } from "../common/constants";
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

  const handleBaseProjectChange = (value: string) => {
    onBaseProjectChange(value);
  };

  const handleProjectChange = (value: string) => {
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
