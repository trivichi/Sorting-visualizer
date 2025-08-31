export async function selectionSort(arr, setArray, setCompared, delay, setSorted=null){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++){
            setCompared([minIdx,j]);
            await new Promise((resolve)=> setTimeout(resolve, delay));
            if(arr[j]<arr[minIdx]){
                minIdx=j;
            }
        }
        if(minIdx!==i){
            [arr[i], arr[minIdx]]=[arr[minIdx], arr[i]];
            setArray([...arr]);
        }
        setCompared([]);
    }
    if(setSorted) setSorted(true);
}