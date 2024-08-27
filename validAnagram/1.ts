function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false

	const countS: Map<string, number> = new Map()
	const countT: Map<string, number> = new Map()

	for (let i = 0; i < s.length; i++) {
		if (countS.get(s[i])) {
			countS.set(s[i], 1 + countS.get(s[i]))
		} else {
			countS.set(s[i], 1)
		}

		if (countT.get(t[i])) {
			countT.set(t[i], 1 + countT.get(t[i]))
		} else {
			countT.set(t[i], 1)
		}
	}

	for (let j = 0; j <= countS.size; j++) {
		if (countS.get(s[j]) !== countT.get(s[j])) return false
	}

	return true
}
