import { useEffect, useState } from "react";

const Rosterchangehistory = () => {
  const [data, setData] = useState([] as string[][]);
  useEffect(() => {
    const fetchData = async () => {
      const queryParams = "range=RosterChange!B:B";
      const req = new Request(`/api/roster?${queryParams}`);
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
          setData(values);
          return res.data.values;
        });
    };
    fetchData();
  }, []);
  return (
    <table className="mt-6">
      <thead>
        <tr className="bg-sky-600 text-white">
          <th>Change History</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Rosterchangehistory;
