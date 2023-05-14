import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";

const AddTransaction = (props) => {
  // const navigate = useNavigate();
  const { showModal, closeModal } = props;
 

  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = (event) => {
    // navigate("/Dashboard");
    event.preventDefault();

    const transaction = {
      id: uuidv4(),
      name: name,
      description: description,
      category: category,
      cost: parseInt(cost),
      date: new Date(date).toLocaleDateString('en-GB').split('/').reverse().join('-'),
      type: type,
    };

    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    closeModal();
   
    
  };

  return (
    <div
    
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 mx-auto z-50 w-full p-4 bg-neutral-800 bg-opacity-50 overflow-x-hidden overflow-y-auto inset-0  max-h-full modal ${showModal ? 'is-active' : ''}`}
      >
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative dark:bg-neutral-200 rounded-lg shadow">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-3 right-2.5 close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-current="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
           
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-lg text-slate-900 bg- p-8 px-8"
            >
              <h2 className="text-4xl dark:text-black font-bold text-center">
                Add Transaction
              </h2>
              
              <div className="flex flex-col text-gray-400 py-2">
                <label>Name</label>
                <input
                  id="name"
                  required="required"
                  className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Description</label>
                <input
                  required="required"
                  className=" rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label for="Category">Category</label>
                <select
                  required="required"
                  id="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
                >
                  <option value="">Choose a Category</option>
                  <option value="Income">Income</option>
                  <option value="Utilities">
                    Utilities (electricity, water, gas, internet, phone)
                  </option>
                  <option value="Groceries">Groceries</option>
                  <option value="Dining out"> Dining out</option>
                  <option value="Clothing"> Clothing</option>
                  <option value="Travel"> Travel</option>
                  <option value="Insurance">
                    Insurance (health, car, home)
                  </option>
                  <option value="Personal care">
                    Personal care (haircuts, grooming products)
                  </option>
                  <option value="Education">Education</option>
                  <option value="Childcare">Childcare</option>
                  <option value="Home maintenance and repairs">
                    Home maintenance and repairs
                  </option>
                  <option value="Gifts and donations">
                    Gifts and donations
                  </option>
                  <option value="Pet expenses">Pet expenses</option>
                  <option value="Investments">Investments</option>
                  <option value="Entertainment">
                    Entertainment (movies, concerts, events)
                  </option>
                </select>
              </div>

              <div className="flex flex-col text-gray-400 py-2">
                <label>Cost</label>
                <input
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                  required="required"
                  className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
                  type="Number"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Date</label>
                <input
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required="required"
                  className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
                  type="Date"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label for="type">Type</label>
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  id="type"
                  required="required"
                  className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
                >
                  <option value="">Choose a Type</option>
                  <option value="Income">Income</option>
                  <option value="Depense">Depense</option>
                </select>
              </div>

              <button
                className="w-full my-5 py-2 bg-mainColor shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-bColor font-semibold rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    //   <div id="defaultModal" tabIndex="-1" aria-hidden="true" className=" bg-gray-200 fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    //    <div className="relative w-full max-w-2xl max-h-full">
    //     <form onSubmit={onSubmit} className="w-full rounded-lg text-slate-900 bg- p-8 px-8">
    //       <h2 className="text-4xl dark:text-black font-bold text-center">
    //         Add Transaction
    //       </h2>
    //       <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
    //                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-current="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-current="evenodd"></path></svg>
    //                 <span className="sr-only">Close modal</span>
    //             </button>
    //       <div className="flex flex-col text-gray-400 py-2">
    //         <label>Name</label>
    //         <input
    //         id="name"
    //         required="required"
    //           className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
    //           type="text"
    //           value={name}
    //           onChange={(event)=> setName(event.target.value)}
    //         />
    //       </div>
    //       <div className="flex flex-col text-gray-400 py-2">
    //         <label>Description</label>
    //         <input
    //         required="required"
    //           className=" rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
    //           type="text"
    //           value={description}
    //           onChange={(event)=> setDescription(event.target.value)}
    //         />
    //       </div>
    //       <div className="flex flex-col text-gray-400 py-2">
    //         <label for="Category">Category</label>
    //         <select
    //          required="required"
    //           id="category"
    //           value={category}
    //           onChange={(event)=> setCategory(event.target.value)}
    //           className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
    //         >
    //           <option value="">Choose a Category</option>
    //           <option value="Income">Income</option>
    //           <option value="Utilities">
    //             Utilities (electricity, water, gas, internet, phone)
    //           </option>
    //           <option value="Groceries">Groceries</option>
    //           <option value="Dining out"> Dining out</option>
    //           <option value="Clothing"> Clothing</option>
    //           <option value="Travel"> Travel</option>
    //           <option value="Insurance">Insurance (health, car, home)</option>
    //           <option value="Personal care">
    //             Personal care (haircuts, grooming products)
    //           </option>
    //           <option value="Education">Education</option>
    //           <option value="Childcare">Childcare</option>
    //           <option value="Home maintenance and repairs">
    //             Home maintenance and repairs
    //           </option>
    //           <option value="Gifts and donations">Gifts and donations</option>
    //           <option value="Pet expenses">Pet expenses</option>
    //           <option value="Investments">Investments</option>
    //           <option value="Entertainment">
    //             Entertainment (movies, concerts, events)
    //           </option>
    //         </select>
    //       </div>

    //       <div className="flex flex-col text-gray-400 py-2">
    //         <label>Cost</label>
    //         <input
    //         value={cost}
    //         onChange={(event)=> setCost(event.target.value)}
    //         required="required"
    //           className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
    //           type="Number"
    //         />
    //       </div>
    //       <div className="flex flex-col text-gray-400 py-2">
    //         <label>Date</label>
    //         <input
    //         value={date}
    //         onChange={(event)=> setDate(event.target.value)}
    //         required="required"
    //           className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
    //           type="Date"
    //         />
    //       </div>
    //       <div className="flex flex-col text-gray-400 py-2">
    //         <label for="type">Type</label>
    //         <select
    //         value={type}
    //         onChange={(event)=> setType(event.target.value)}
    //           id="type"
    //           required="required"
    //           className="rounded-lg text-slate-900 bg-white p-2  focus:outline-mainColor "
    //         >
    //           <option value="" >Choose a Type</option>
    //           <option value="Income">Income</option>
    //           <option value="Depense">Depense</option>
    //         </select>
    //       </div>

    //       <button
    //         className="w-full my-5 py-2 bg-mainColor shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-bColor font-semibold rounded-lg"
    //         type="submit"
    //       >
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default AddTransaction;
