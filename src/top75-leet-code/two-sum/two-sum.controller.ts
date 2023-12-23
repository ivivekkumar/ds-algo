import { Controller, Get } from '@nestjs/common';
import {TwoSumService} from './two-sum.service';

@Controller('/top75/two-sum')
export class TwoSumController {
    constructor(private readonly twoSumService: TwoSumService) {}
// Two Sum

// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

@Get()
getTwoSum(): number[] {
  return this.twoSumService.getTwoSum([2, 7, 11, 15], 9);
}
}
