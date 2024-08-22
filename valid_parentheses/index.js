const input = '()[]{}'

const isValid = function (string) {
	const stack = []
	const pairs = {
		')': '(',
		']': '[',
		'}': '{',
	}

	for (symbol of string) {
		if (Object.values(pairs).includes(symbol)) {
            stack.push(symbol)
		} else if (pairs.hasOwnProperty(symbol)) {
            if (stack.length === 0 || pairs[symbol] !== stack.pop()) {
                return false
            }
        }
	}

    return stack.length === 0
}

console.log(isValid(input))
