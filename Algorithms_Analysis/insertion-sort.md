# Insertion Sort 

## Example of the way of sorting like
 - Counting Sort 
 - Quick Sort
 - Shell Sort
 - Insertion Sort
 - Merge Sort
 - Selection Sort
 - Bubble Sort
 - Heap Sort
 - Radix Sort

## Pseudocode For Insertion Sort
```
1- x = [] , key = 0
2- read x
3- for i = 1 forward i < x.length
  3.1- key = x[i]
  3.2- for j = i - 1 backward j >= 0
        if key < x[i] then x[j+1] = x[j]
        else break this loop
  3.3- x[j+1] = key
4- print x 
```
## Code-JS
```

function insertionSort(x){
    for( var i = 1; i < x.length; i++ ){
        key = x[i];
        for( var j = i - 1; j >= 0; --j){
            if( x[j] > key ) x[j+1] = x[j];
            else break;
        }
        x[j+1] = key;
    }
    console.log(x);
}
```


