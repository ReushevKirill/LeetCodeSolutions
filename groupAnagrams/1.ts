function groupAnagrams(strs: string[]): string[][] {
	const res: {
		[key: string]: string[]
	} = {}

	strs.forEach((str, index) => {
		let count = Array(26).fill(0)

		for (let c of str) {
			count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
		}

		const key = count.join(',')
		res[key] = res[key] ? [...res[key], str] : [str]
	})

	return Object.values(res)
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs))
