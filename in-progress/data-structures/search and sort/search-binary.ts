// ITERATIVE
function binarySearch(arr: number[], q: number): number {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (q === arr[mid]) {
            return mid;
        }
        if (q < arr[mid]) {
            end = mid;
        }
        if (q > arr[mid]) {
            start = mid + 1;
        }
        if (start === end) {
            return -1;
        }
    }
    return -1;
}




// RECURSIVE
function binarySearch_recursive(arr: number[], q: number): number {
    let start = 0;
    let end = arr.length - 1;
    return _binarySearch_recursive(start, end, arr, q);
}

function _binarySearch_recursive(start, end, arr, q): number {
    let mid = Math.floor((start + end) / 2);

    if (q === arr[mid]) {
        return mid;
    }

    if (q < arr[mid]) {
        return _binarySearch_recursive(start, mid, arr, q);
    }
    if (q > arr[mid]) {
        return _binarySearch_recursive(mid + 1, end, arr, q);
    }
    return -1;
}