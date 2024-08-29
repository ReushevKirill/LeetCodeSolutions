function isAnagram(s: string, t: string): boolean {
	let hashMapS = new Map()
	let hashMapT = new Map()

	if (s.length !== t.length) return false

	for (let i = 0; i < s.length; i++) {
		hashMapS.set(s[i], hashMapS.has(s[i]) ? hashMapS.get(s[i]) + 1 : 1)
		hashMapT.set(t[i], hashMapT.has(t[i]) ? hashMapT.get(t[i]) + 1 : 1)
	}

	if (hashMapS.size !== hashMapT.size) return false

	for (let j = 0; j <= hashMapS.size; j++) {
		if (hashMapS.get(s[j]) !== hashMapT.get(s[j])) return false
	}

	return true
}
