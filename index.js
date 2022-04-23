exports.horizLine = function(amount=75) {
    output = ""
    for (let i = 0; i < amount; i++) {
	output += "="
    }
    return output
}
