export enum HeapType {
    min,
    max
}
const Heap = {
    /**
    * @description: 数组转为堆 
    * @param {number} 
    * @param {number[]} 
    * @param {HeapType} 
    * @return: 
    */
    changeToHeap(arr: number[], type: HeapType = HeapType.min) {
        for (let i = this.getParentIndex(arr.length); i >= 0; --i) {
            this.sink(i, arr, type);
        }
    },

    /**
    * @description: 数组转为最小堆 
    * @param {number[]} 
    * @return: 
    */
    changeToMinHeap(arr: number[]) {
        this.changeToHeap(arr, HeapType.min);
    },

    /**
    * @description: 数组转为最大堆 
    * @param {number[]} 
    * @return: 
    */
    changeToMaxHeap(arr: number[]) {
        this.changeToHeap(arr, HeapType.max);
    },

    /**
    * @description: 父节点下标 从0开始
    * @param {number} 
    */
    getParentIndex: function (n: number) {
        return (n - 1) >> 1;
    },

    /**
    * @description: 左孩子下标
    * @param {number} 
    */
    getLeftChildIndex: function (n: number) {
        return (n << 1) + 1;
    },

    /**
    * @description: 右孩子下标
    * @param {number} 
    */
    getRightChildIndex: function (n: number) {
        return (n << 1) + 2;
    },

    /**
    * @description: 检测两个节点是否符合堆特性
    * @param {number} 
    * @param {number}
    * @param {number[]} 
    * @param {HeapType} 
    * @return: 
    */
    check(index: number, compareIndex: number, heap: number[], type: HeapType = HeapType.min) {
        let accord;
        switch (type) {
            case HeapType.min: {
                accord = heap[index] > heap[compareIndex];
                break;
            }
            case HeapType.max: {
                accord = heap[compareIndex] > heap[index];
                break;
            }
        }
        return index > compareIndex ? accord : !accord;
    },

    /**
    * @description: 上浮
    * @param {number} 下标 
    * @param {number[]} 堆
    * @param {HeapType} 类型
    */
    floatUp(i: number, heap: number[], type: HeapType = HeapType.min) {
        let parentIndex = this.getParentIndex(i);
        while (parentIndex >= 0 && !this.check(i, parentIndex, heap, type)) {
            [heap[parentIndex], heap[i]] = [heap[i], heap[parentIndex]];
            i = parentIndex;
            parentIndex = this.getParentIndex(i);
        }
    },

    /**
     * @description 获取合适的子节点
     * @param {number} 
     * @param {number[]} 堆
     * @param {HeapType} 类型
     */
    getAppropriateChildIndex(i: number, heap: number[], type: HeapType = HeapType.min) {
        const left = this.getLeftChildIndex(i)
        const right = this.getRightChildIndex(i);
        switch (type) {
            case HeapType.min: {
                return heap[right] < heap[left] ? right : left;
            }
            case HeapType.max: {
                return heap[right] > heap[left] ? right : left;
            }
        }
    },

    /**
     * @description: 下沉
     * @param {number} 下标 
     * @param {number[]} 堆
     * @param {HeapType}
     */
    sink(i: number, heap: number[], type: HeapType = HeapType.min) {
        let appropriateChildIndex = this.getAppropriateChildIndex(i, heap, type);
        while (appropriateChildIndex < heap.length && !this.check(i, appropriateChildIndex, heap, type)) {
            [heap[i], heap[appropriateChildIndex]] = [heap[appropriateChildIndex], heap[i]];
            i = appropriateChildIndex;
            appropriateChildIndex = this.getAppropriateChildIndex(i, heap, type);
        }
    },
};
export { Heap };