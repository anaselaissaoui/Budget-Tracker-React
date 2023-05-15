import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import React from "react";
import { omit } from "lodash";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const ChartLine = () => {
  const { transactions } = useContext(AppContext);

  const transformedTransaction = transactions.map((tr) => ({
    ...omit(tr, "cost"),
    Income: tr.category === "Income" ? tr.cost : undefined,
    Expense: tr.category !== "Income" ? tr.cost : undefined,
  }));

  return (
    <LineChart
      width={1100}
      height={600}
      data={transformedTransaction.reverse()}
      margin={{
        top: 50,
        right: 20,
        left: 20,
        bottom: 80,
      }}
      
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="date" tick={{
          fill: "white",
          marginBottom:80,
          fontSize: 10,
          angle: -90,
          dy: 10,
          textAnchor: "end",
        }}
        interval="preserveStartEnd"
        padding={{ left: 20, right: 20 }} />
      <YAxis  tick={{ fill: "white",  }}/>
      <Tooltip />
      <Legend
        verticalAlign="top"
        height={36}
        formatter={(value) => {
          if (value === "Income") return "Income";
          if (value === "Expense") return "Expense";
          return null;
        }}/>
      <Line
        connectNulls
        type="monotone"
        dataKey="Income"
        stroke="#8884d8"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Line
        connectNulls
        type="monotone"
        dataKey="Expense"
        stroke="#82ca9d"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default ChartLine;
