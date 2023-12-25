// Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct
// ways can you climb to the top?

const climbStairs = (stairs) =>{
    if(stairs <= 2){
        return stairs;
    }

    let ways = new Array(stairs + 1);
    ways[1] = 1;
    ways[2] = 2;

    for(let i=3; i<stairs; i++){
        ways[i] = ways[i-1] + ways[i-2];
    }

    return ways[stairs];

}

const n = 5;
const distinctWays = climbStairs(n);
console.log(`There are ${distinctWays} distinct ways to climb ${n} stairs.`);
