import { useLocation } from "react-router-dom";
import Budget from "./Budget";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";
import { AppProvider,  } from "../Context/AppContext";
import AddTransaction from "./AddTransaction";
import ChartLine from "./ChartBudget"
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
      <div className="container mt-10">
        <div className=" mt-4 flex justify-between ">
          <h1 className="text-4xl ms-10">My Budget Tracker - {username}</h1>
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
        <h3 className="mt-10 ms-10 text-2xl">Expenses</h3>
        <ExpensesList />
        <div  className="flex my-10 mx-auto justify-center items-center h-screen border" style={{height:"400px"}}>
        <ChartLine />
        </div>
      </div>
    </AppProvider>
  );
}

export default Dashboard;
