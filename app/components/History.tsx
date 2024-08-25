import {useEffect, useState} from "react";
interface HistoryProps {
  rowNumber: number;
}

const History = ({rowNumber}:HistoryProps) => {
  const [lastUpdated, setLastUpdated] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const req = new Request(
        `/api/roster?range=Sheet1!AI${rowNumber}`
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
          if (!res.data.values){
            setLastUpdated("");
            return;      
          };
          const updatedInfo = res.data.values[0][0];
          setLastUpdated(updatedInfo)
          console.log("result", res.data.values[0]);
          return res.data.values;
        });
    };
    fetchData();
  }, [rowNumber]);

  return (
    <div className="mt-4 flex flex-row">
      {lastUpdated && (<div>Last Updated: {lastUpdated}</div>)}
    </div>
  );
};

export default History;
