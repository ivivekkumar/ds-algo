import { Controller, Get } from '@nestjs/common';
import { TwoSumService } from './two-sum.service';

@Controller('/top75/two-sum')
export class TwoSumController {
    constructor(private readonly twoSumService: TwoSumService) { }
    // Two Sum

    // Given an array of integers nums and an integer target, return
    // indices of the two numbers such that they add up to target.

    // You may assume that each input would have exactly one solution,
    // and you may not use the same element twice.

    // You can return the answer in any order.

    @Get()
    getTwoSum(): number[] {
        const nums = Array.from({ length: 1000000 }, (_, index) => index + 1);
        const target = 1000000 * 2 - 1;
        //[ 999998, 999999 ]

        // const nums = [-1, -2, -3, -4, -5];
        // const target = -8;
        // // Expected output: [2, 4] or [4, 2]

        // const nums = [1000000000, 2000000000, -3000000000, 4000000000];
        // const target = 1000000000;
        // // [2,3]

        // const nums = [1, -2, 3, 2, 0];
        // const target = 0;
        // // Expected output: [1, 3]


        return this.twoSumService.getTwoSum(nums, target);
    }
}
