let familia = {
    renda: [2000,3000,1500,4000],
    gastos: [1500,2000,2500,4000]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value      
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(familia.renda)
    const calculateExpenses = sum(familia.gastos)

    const total = calculateIncomes - calculateExpenses
    let saldo = "negativo"
    if (total >= 0) {
        saldo = "positivo"

    }
    console.log(`Seu saldo é ${saldo}`)
}
calculateBalance()

saldo.lenght()