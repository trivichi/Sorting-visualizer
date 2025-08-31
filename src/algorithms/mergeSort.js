export async function mergeSort(arr, setArray, setCompared, delay, setSorted=null){
    async function merge(arr,l,m,r){
        let n1=m-l+1;
        let n2=r-m;
        let L=arr.slice(l,m+1);
        let R=arr.slice(m+1,r+1);
        let i=0,j=0,k=l;
        while(i<n1 && j<n2){
            setCompared([k,l+i,m+1+j]);
            await new Promise((resolve=>setTimeout(resolve, delay)));
            if(L[i]<=R[j]){
                arr[k]=L[i];
                i++;
            }
            else{
                arr[k]=R[j];
                j++;
            }
            setArray([...arr]);
            k++;
        }
        while(i<n1){
            arr[k]=L[i];
            setArray([...arr]);
            setCompared([k,l+i]);
            await new Promise((resolve=>setTimeout(resolve, delay)));
            i++;
            k++;
        }
        while(j<n2){
            arr[k]=R[j];
            setArray([...arr]);
            setCompared([k,m+1+j]);
            await new Promise((resolve=>setTimeout(resolve, delay)));
            j++;
            k++;
        }
        setCompared([]);
    }
    async function mergeSortRecursive(arr,l,r){
        if(l>=r) return;
        let m=Math.floor((l+r)/2);
        await mergeSortRecursive(arr,l,m);
        await mergeSortRecursive(arr,m+1,r);
        await merge(arr,l,m,r);
    }
    await mergeSortRecursive(arr,0,arr.length-1);
    if(setSorted) setSorted(true);
}