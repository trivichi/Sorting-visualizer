export async function insertionSort(arr, setArray, setCompared, delay, setSorted =null){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let key=arr[i];
        let j=i-1;
        setCompared([i]);
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            setArray([...arr]);
            await new Promise((resolve)=>setTimeout(resolve, delay));
            j--;
            setCompared([i,j]);
        }
        arr[j+1]=key;
        setArray([...arr]);
        await new Promise((resolve)=>setTimeout(resolve, delay));
        setCompared([]);
    }  
    if(setSorted) setSorted(true);
}