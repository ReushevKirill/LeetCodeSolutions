const nums = [3, 2, 4]
const target = 6

function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i]
		const next = nums[i + 1]

		if (next && current + next === target) return [i, i + 1]
	}

	return []
}
