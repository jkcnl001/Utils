import { Heap, HeapType } from "./ts/Heap";
import { Utils } from "./ts/Utils";
const arr = [99, -1, 56, 30, 71, 18, 29, 93, 44, 75, 100, 99, 20, 65, 68, 34, 5, 7];
Heap.changeToHeap(arr, HeapType.max);
console.log(JSON.stringify(arr));
Heap.changeToHeap(arr, HeapType.min);
console.log(JSON.stringify(arr));
arr.push(-110);
Heap.floatUp(arr.length - 1, arr);
console.log(JSON.stringify(arr));
let top = Utils.findTopN(arr, 10)
console.log(JSON.stringify(top));
// Heap.changeToMinHeap(arr);
// console.log(arr);