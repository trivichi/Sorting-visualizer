export async function quickSort(arr, setArray, setCompared, delay, setSorted=null){
    async function partition(arr, low, high){
        let pivot=arr[high];
        let i=low-1;
        for(let j=low; j<high;j++){
            setCompared([j,high]);
            await new Promise((resolve)=>setTimeout(resolve, delay));
            if(arr[j]<pivot){
                i++;
                [arr[i],arr[j]]=[arr[j],arr[i]];
                setArray([...arr]);
            }
        }
        [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
        setArray([...arr]);
        return i+1;
    }
    async function quickSortRecursive(arr, low, high){
        if(low<high){
            let pi=await partition(arr,low,high);
            await quickSortRecursive(arr,low,pi-1);
            await quickSortRecursive(arr,pi+1,high);
        }
    }
    await quickSortRecursive(arr,0,arr.length-1);
    setCompared([]);
    if(setSorted) setSorted(true);
}