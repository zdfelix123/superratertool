import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

import { TOP_FILTER_CONFIG } from "../common/constants";
import { stringToArr } from "../common/utils";
interface TopfilterProps {
  onNameChange: Function;
}

const Topfilter = ({ onNameChange }: TopfilterProps) => {
  const [config, setConfig] = useState(TOP_FILTER_CONFIG);
  const [data, setData] = useState([] as string[]);
  useEffect(() => {
    const fetchData = async () => {
      const req = new Request(`/api/roster?range=Sheet1!AM2`);
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
          const data = stringToArr(res.data.values[0][0]);
          setData(data);
          const options = data
            .filter((name: string) => name !== "")
            .map((name: string) => ({
              label: name,
              value: name,
            }));
          setConfig({ ...TOP_FILTER_CONFIG, options });
          return res.data.values;
        });
    };
    fetchData();
  }, []);
  const handleRowChange = (name: string) => {
    if (name) {
      const rownumber = data.indexOf(name);
      onNameChange(rownumber);
    }
  };
  return (
    <div>
      <Dropdown
        column={config}
        rowNumber={0}
        onNameChange={handleRowChange}
      ></Dropdown>
    </div>
  );
};

export default Topfilter;
