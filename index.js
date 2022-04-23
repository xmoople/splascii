exports.horizLine = function(amount=50) {
    output = ""
    for (let i = 0; i < amount; i++) {
	output += "="
    }
    console.log(output)
}
