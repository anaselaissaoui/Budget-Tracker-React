import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      if (action.payload.category === 'Income') {
        return {
          ...state,
          Budget: state.Budget + action.payload.cost,
          transactions: [...state.transactions, action.payload],
        };
      } else {
        return {
          ...state,
          expenses: state.expenses + action.payload.cost,
          Budget: state.Budget - action.payload.cost,
          transactions: [...state.transactions, action.payload],
        };
      }
    default:
      return state;
  }
}

const initialState = {

  transactions: [
    {
      id: 1,
      name: "Shopping",
      description: "I bought this from Marjane",
      category: "Shopping",
      cost: 500,
      date: new Date("2023-01-15").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    },
    {
      id: 2,
      name: "School",
      description: "I paid the school fees",
      category: "Education",
      cost: 1000,
      date: new Date("2023-02-15").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    },
    {
      id: 3,
      name: "Utilities",
      description: "Paid the utility bills",
      category: "Utilities",
      cost: 1200,
      date: new Date("2023-04-15").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    },
    {
      id: 4,
      name: "Salary",
      description: "Received salary for the month",
      category: "Income",
      cost: 5000,
      date: new Date("2023-05-15").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Income",
    },
    {
      id: 5,
      name: "Paiment",
      description: "Received salary for the month",
      category: "Income",
      cost: 2000,
      date: new Date("2023-05-15").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Income",
    },
    {
      id: 6,
      name: "Rent",
      description: "Paid monthly rent",
      category: "Housing",
      cost: 800,
      date: new Date("2023-05-01").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    },
    {
      id: 7,
      name: "Groceries",
      description: "Bought groceries for the week",
      category: "Food",
      cost: 100,
      date: new Date("2023-05-10").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    },
    {
      id: 8,
      name: "Freelance",
      description: "Completed a freelance project and got paid",
      category: "Income",
      cost: 500,
      date: new Date("2023-05-07").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Income",
    },
    {
      id: 9,
      name: "Transportation",
      description: "Paid for monthly metro pass",
      category: "Transportation",
      cost: 50,
      date: new Date("2023-05-02").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    },
    {
      id: 10,
      name: "Gift",
      description: "Bought a birthday gift for a friend",
      category: "Gifts",
      cost: 20,
      date: new Date("2023-05-08").toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: "Expense",
    }
    
  ],
};


const qualifyingTransactions = initialState.transactions.filter(
  (transaction) => transaction.category !== "Income"
);

const totalExpenses = qualifyingTransactions.reduce(
  (accumulator, transaction) => accumulator + transaction.cost,
  0
);

const budgetqualify = initialState.transactions.filter(
  (transaction) => transaction.category==="Income"
);
const Budget = budgetqualify.reduce(
  (accumulator, transaction) => accumulator + transaction.cost,
  0
);


export const AppContext = createContext("");


export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    expenses: totalExpenses,
    Budget : Budget
  });

  return (
    <AppContext.Provider
      value={{
        Budget: state.Budget,
        expenses: state.expenses,
        transactions: state.transactions,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
