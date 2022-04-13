function converterTemp(degree){
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    let updatedDegree = Number(degree.toUpperCase().replace("F",""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    return formula(updatedDegree) + degreeSign
}
console.log(converterTemp("50F"))