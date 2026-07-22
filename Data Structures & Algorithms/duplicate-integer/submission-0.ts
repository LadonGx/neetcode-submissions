class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
      const visto = new Set<number>();
      for(const num of nums) {
        if (visto.has(num)) return true;
        visto.add(num)
      }
      return false;
    }
}
