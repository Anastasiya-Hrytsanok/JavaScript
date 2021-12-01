let arr = [1, 43, 5, 213, 76, 14, 5, 3, 7, 2, 86, 3, 0];

function SelectionSort(arr)
{
    for (let i = 0; i < arr.length; i++)
     { let min = i;
       for (let j = i + 1; j < arr.length; j++)
        { if (arr[j] < arr[min]) min = j; } 
       let t = arr[min]; arr[min] = arr[i]; arr[i] = t;
     }                    
    return arr; 
}

console.log(SelectionSort(arr));