
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { groupByReferrer } from '../apis/click-event';
const COLORS = [
  "#0088FE", // Blue
  "#00C49F", // Teal
  "#FFBB28", // Yellow-orange
  "#FF8042", // Orange
  "#A28DFF", // Soft purple
  "#FF66B2", // Pink
  "#82CA9D", // Light green
  "#FF4444", // Red
  "#7FDBFF", // Sky blue
  "#B19CD9"  // Lavender
];

export default function Piechart({id}) {
  const [data,setData]=useState([]);
  const init = async()=>{
    const response = await groupByReferrer(id,localStorage.getItem('token'));
  //  console.log(response);
    setData(response);
  }
  useEffect(() => {
    init();
  }, [])
  
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="people"
        nameKey="referrer"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={entry.referrer} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

