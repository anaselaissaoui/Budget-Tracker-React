import { useLocation } from "react-router-dom";
import Budget from "./Budget";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import { AppProvider } from "../Context/AppContext";
import AddTransaction from "./AddTransaction";
import ChartLine from "./ChartBudget";
import React from "react";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  return (
    <AppProvider>
      <div className="container  mx-auto mt-10">
        <div className=" mt-4 flex justify-between ">
          <h1 className="text-4xl font-semibold  ms-10 text-slate-300">
            My Budget Tracker - {username}
          </h1>
          <button
            className="w-40 h-10 me-20 bg-mainColor shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-bColor font-semibold rounded-lg"
            type="button"
            onClick={openModal}
          >
            +Add Transaction
          </button>
        </div>
        {showModal && <AddTransaction closeModal={closeModal} />}

        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
        </div>
        <h3 className="mt-10 ms-10 text-slate-300 font-semibold text-3xl">
          Expenses
        </h3>
        <div className="px-8">
          <ExpensesList />
        </div>

        <div
          className="d-flex my-20 pb-20 mx-auto justify-center items-center h-screen"
          style={{ height: "400px" }}
        >
          <h3 className="mt-10 ms-10 text-slate-300 font-semibold text-3xl">
            My Transactions in Chart
          </h3>
          <div className="flex justify-center">
            <ChartLine />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default Dashboard;
