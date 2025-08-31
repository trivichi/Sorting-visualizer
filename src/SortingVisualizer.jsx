import { useState, useEffect } from "react";

import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";
import { countingSort } from "./algorithms/countingSort";

import { Controls } from "./components/Controls";
import { AlgorithmSelector } from "./components/AlgorithmSelector";
import { SliderControl } from "./components/SliderControl";
import { Bars } from "./components/Bars";


export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [compared, setCompared] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [barCount, setBarCount] = useState(30);
  const [algorithm, setAlgorithm] = useState("bubble");

  const generateArray = () => {
    if (isSorting) return;
    setIsSorted(false);
    setArray(Array.from({ length: barCount }, () => Math.floor(Math.random() * 200) + 20));
  };

  useEffect(() => {
    generateArray();
  }, [barCount]);

  const handleSort = async () => {
    setIsSorting(true);
    setIsSorted(false);
    const arrCopy = [...array];
    const delay = 200 - speed * 3;

    if (algorithm === "bubble") await bubbleSort(arrCopy, setArray, setCompared, delay, setIsSorted);
    else if (algorithm === "selection") await selectionSort(arrCopy, setArray, setCompared, delay, setIsSorted);
    else if (algorithm === "insertion") await insertionSort(arrCopy, setArray, setCompared, delay, setIsSorted);
    else if (algorithm === "merge") await mergeSort(arrCopy, setArray, setCompared, delay, setIsSorted);
    else if (algorithm === "quick") await quickSort(arrCopy, setArray, setCompared, delay, setIsSorted);
    else if (algorithm === "counting") await countingSort(arrCopy, setArray, setCompared, delay, setIsSorted);
    setIsSorting(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Bars className="m-4"array={array} compared={compared} isSorted={isSorted} barCount={barCount} />
      <div className="m-4">
      <Controls isSorting={isSorting} generateArray={generateArray} handleSort={handleSort} />
      </div>
      <div>
        <AlgorithmSelector algorithm={algorithm} setAlgorithm={setAlgorithm} isSorting={isSorting} />
      </div>
      <div>
        <SliderControl label="Speed" value={speed} min={5} max={100} onChange={setSpeed} isSorting={isSorting} unit="%" />
        <SliderControl label="Bar Count" value={barCount} min={10} max={100} onChange={setBarCount} isSorting={isSorting} />
      </div>
      
    </div>
  );
}

