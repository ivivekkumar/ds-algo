// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxFluid = (arr) => {
    let left = 0,
        right = arr.length - 1,
        maxWater = 0;

    while (left < right) {
        const minHeight = Math.min(arr[left], arr[right]);
        const width = right - left;
        currentWater = minHeight * width;
        maxWater = Math.max(currentWater, maxWater);

        if(arr[left] < arr[right]){
            left ++;
        }else {
            right--;
        }
    }
    return maxWater;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxFluid(height));
