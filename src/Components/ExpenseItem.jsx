import React from "react";

const ExpenseItem = (props) => {
  const { category } = props;

  const rowStyle =
    category === "Income" ? "text-green-800" : "text-red-500";
  const costSign = category === "Income" ? "+" : "-";
  

  return (
    <tr
      className={`border-b hover:bg-gray-200 dark:border-neutral-500 ${rowStyle}`}
      key={props.id}
    >
      <td className="px-6 py-4">{props.name}</td>
      <td className="px-6 py-4">{props.description}</td>
      <td className="px-6 py-4">{props.category}</td>
      <td className="px-6 py-4">
        {costSign} ${props.cost}
      </td>
      <td className="px-6 py-4">{props.date}</td>
      <td className="px-6 py-4">{props.type}</td>
    </tr>
  );
};

export default ExpenseItem;
