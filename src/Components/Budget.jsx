import React, {useContext} from "react";
import image1 from '../Assets/wallet.png';
import image2 from '../Assets/wallet-2.png';
import { AppContext } from "../Context/AppContext";


const Budget = () => {
  const { Budget, transactions } = useContext(AppContext);

  const totalExpenses = transactions ? transactions.reduce((total, item)=>{
    if(item.category !=="Income"){
      return(total = total + item.cost);}else{return total}
  },0) : 0;

  return (
    <div className="flex justify-evenly mt-20">
      <div className="block rounded-lg  px-8 shadow-lg  hover:shadow-lg shadow-green-800  hover:shadow-mainColor bg-neutral-700">
        
        <div className="p-6 ">
          <h5 className="mb-2 leading-tight text-slate-500">
            Total Balance
          </h5>
          <div className="flex justify-content-start">
          <div className="rounded-full bg-slate-600 ">
          <img
            className="h-10 p-2"
            src={image1}
            alt=""
          />
          </div>
          <h2 className="self-center text-2xl text-white ms-2 ">{Budget}$</h2>
        </div>

        </div>
      </div>

      <div className="block rounded-lg  px-8 shadow-lg  hover:shadow-lg shadow-red-500  hover:shadow-mainColor bg-neutral-200">
        
        <div className="p-6">
          <h5 className="mb-2 leading-tight text-slate-500">
            Total Spending
          </h5>
          <div className="flex justify-content-start">
          <div className="rounded-full bg-slate-300">
          <img
            className="h-10 p-2"
            src={image2}
            alt=""
          />
          </div>
          <h2 className="self-center text-2xl text-neutral-700 ms-2 ">{totalExpenses}$</h2>
        </div>

        </div>
      </div>
    </div>

    
  );
};
export default Budget;
