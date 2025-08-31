export async function bubbleSort(arr,setArray, setCompared, delay, setSorted=null) {
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            setCompared([j,j+1]);
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
                setArray([...arr]);
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
            setCompared([]);
        }
    }
    if(setSorted) setSorted(true);
};