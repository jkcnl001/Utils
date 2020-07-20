import { Heap, HeapType } from "./Heap";

const Utils = {
    findTopN: function (arr: number[], n: number) {
        const minHeap = arr.slice(0, n);
        Heap.changeToMinHeap(minHeap);
        for (let i = n; i < arr.length; ++i) {
            if (arr[i] > minHeap[0]) {
                minHeap[0] = arr[i];
                Heap.sink(0, minHeap, HeapType.min)
            }
        }
        return minHeap;
    }
}
export { Utils };