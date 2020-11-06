function insertFezz(strings: string[]): string[] {
    let index = strings.findIndex(word => word[0] === "B")
    if (index === -1) {
        strings.push("Fezz")
        return strings
    }
    strings.splice(index, 0, "Fezz")
    return strings
    
}

function fizzBuzz(limit: number): void {
    for (let i = 1; i < limit + 1; i++) {

        let divisible3 = i % 3 === 0 ? "Fizz" : ""
        let divisible5 = i % 5 === 0 ? "Buzz" : ""
        let divisible7 = i % 7 === 0 ? "Bang" : ""
        let divisible11 = i % 11 === 0 ? ["Bong"] : [divisible3, divisible5, divisible7]
        let divisible13 = i % 13 === 0 ? insertFezz(divisible11) : divisible11
        let divisible17 = i % 17 === 0 ? divisible13.reverse() : divisible13
        let output = divisible17.join("")
        console.log(output === "" ? i : output);
    }
}

fizzBuzz(200);