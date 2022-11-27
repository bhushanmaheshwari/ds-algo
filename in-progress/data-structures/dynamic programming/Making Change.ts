// amount - 32
// coins [1, 5, 10 25];
// change --> 32-25, 7-5 2-1 2-1 -> 4 coins

function change_recursive(sum: number, coins: number[], counter: number, count: number): number {
    // Base Condition
    if (sum === 0) return count;

    for (let c = counter; c < coins.length; c++) {
        // Choice Diagram
        if (sum - coins[c] >= 0) {
            return change_recursive(sum - coins[c], coins, c, count + 1);
        }
    }
    return count;
}

function change_memoization(sum: number, coins: number[], counter: number, count: number, memCache: any): number {
    // Base Condition
    if (sum === 0) return count;

    for (let c = counter; c < coins.length; c++) {
        // Choice Diagram
        if (sum - coins[c] >= 0) {
            // memoization to avoid unnecessary replications
            if (memCache[sum - coins[c]]) {
                return memCache[sum - coins[c]];
            } else {
                memCache[sum - coins[c]] = true;
                return change_memoization(sum - coins[c], coins, c, count + 1, memCache);
            }
        }
    }
    return count;
}

console.log(change_recursive(3, [25, 10, 5, 1], 0, 0));
console.log(change_memoization(3, [25, 10, 5, 1], 0, 0, {}));

