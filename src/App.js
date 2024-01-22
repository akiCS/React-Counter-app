import { useState } from "react";
import "./App.css";

function App() {

  const[count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (

    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-blue-600 via-pink-700 to-yellow-400 flex-col gap-10">

      <div className="text-[#0398d4] font-medium text-2xl" >Increment And Decrement</div>

      <div className="bg-white flex flex-row gap-12 justify-center py-3 rounded-sm text-[25px] text-[#344151]">

        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>

      </div>

      <button onClick={resetHandler} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Reset
        </span>
      </button>

    </div>

  );
}

export default App;
