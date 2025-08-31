export async function countingSort(arr, setArray, setCompared, delay, setSorted=null){
    if(arr.length==0) return;
    let maxVal=Math.max(...arr);
    let count=new Array(maxVal+1).fill(0);
    for(let i=0;i<arr.length;i++){
        count[arr[i]]++;
        setCompared([i]);
        await new Promise((resolve)=>setTimeout(resolve, delay));
    }
    let index=0;
    for(let i=0;i<count.length;i++){
        while(count[i]>0){
            arr[index]=i;
            setArray([...arr]);
            setCompared([index]);
            await new Promise((resolve)=>setTimeout(resolve, delay));
            index++;
            count[i]--;
        }
    }
    setCompared([]);
    if(setSorted) setSorted(true);
}