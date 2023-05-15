import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";
import imageSort from "../Assets/sort.png"

const ExpensesList = () => {
  const { transactions } = useContext(AppContext);
  const [sortOrder, setSortOrder] = useState("desc"); 
   const sortedTransactions = transactions.sort((a, b) => {
    if (sortOrder === "desc") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

 
  const handleSortClick = () => {
    if (sortOrder === "desc") {
      setSortOrder("asc");
    } else {
      setSortOrder("desc");
    }
  };

  return (
    <table className="w-full border-solid border-2 border-mainColor my-10 text-center justify-self-center text-gray-500">
  <thead className="border-b rounded-t-md bg-mainColor font-medium text-slate-800">
        <tr>
          <th
            scope="col"
            className="px-6 py-4  cursor-pointer"
            onClick={handleSortClick}
          >
            Name
          </th>
          <th scope="col" className="px-6 py-4">
            Description
          </th>
          <th scope="col" className="px-6 py-4">
            Category
          </th>
          <th scope="col" className="px-6 py-4">
            Cost
          </th>
          <th
            scope="col"
            className="px-6 py-4 cursor-pointer"
            onClick={handleSortClick}
          >
            Date <img  src={imageSort} alt="" style={{height : "12px" , display: "inline" }}/>
          </th>
          <th scope="col" className="px-6 py-4">
            Type
          </th>
        </tr>
      </thead>

      <tbody>
        {sortedTransactions.map((transaction) => (
          <ExpenseItem
            key={transaction.id}
            name={transaction.name}
            description={transaction.description}
            category={transaction.category}
            cost={transaction.cost}
            date={transaction.date}
            type={transaction.type}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesList;
