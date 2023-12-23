import { Injectable } from '@nestjs/common';

@Injectable()
export class TwoSumService {
    getTwoSum(nums: number[], target: number): number[]{
        const numIndicesMap: Map<number, number> = new Map;

        for(let i=0; i<nums.length; i++){
            const complement: number = target - nums[i];

            if(numIndicesMap.has(complement)){
                return [numIndicesMap.get(complement)!, i];
            }

            numIndicesMap.set(nums[i], i);
        }

        // If no solution is found (shouldn't happen based on the problem statement)
        throw new Error("No solution found for Two Sum problem");
    }
}
