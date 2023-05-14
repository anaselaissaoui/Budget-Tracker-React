import {AppContext} from "../Context/AppContext"
import { useContext } from 'react';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const ChartLine = () => {
  const { transactions } = useContext(AppContext);

  const incomeTransactions = transactions.filter(transaction => transaction.category === "Income");
  const outcomeTransactions = transactions.filter(transaction => transaction.category !== "Income");

  return (
<LineChart
width={500}
height={300}
data={transactions}
margin={{
  top: 5,
  right: 30,
  left: 20,
  bottom: 5
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="date" />
<YAxis />
<Tooltip />
<Legend />
<Line
  type="monotone"
  dataKey="cost"
  data={outcomeTransactions}
  stroke="#8884d8"
  activeDot={{ r: 8 }}
/>
<Line type="monotone" dataKey="cost" data={incomeTransactions} stroke="#82ca9d" activeDot={{ r: 8 }} />
</LineChart>
  );
}

export default ChartLine;
