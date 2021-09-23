
const transactionsUl = document.querySelector('#transactions') 


// declaraccao de um objeto literal
const dummyTransactions = [
    {id : 1, name : 'Bolo de brigadeiro', amount: -20},
    {id : 2, name : 'Salario', amount: 30},
    {id : 3, name : 'Bolo de Limao', amount: -20},
    {id : 3, name : 'Violao', amount: 150}
]


const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'; // it ternario ou if linha
    const amountWithoutOperator = Math.abs(transaction.amount);
    const CSSclass = transaction.amount < 0 ? 'minus' : 'plus';
    const li = document.createElement('li');
    li.classList.add(CSSclass);

    li.innerHTML = `
    ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator} </span> 
    <button class="delete-btn">x</button>
    `

    transactionsUl.append(li);
}

//Metodo que ira retornar 
const updateBalanceValues = () => {

    //pegar todos os valores do objeto dummy
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount);

    //Somatorio dos valores retornados
    const total = transactionAmounts.reduce((acumulator, transaction) => acumulator + transaction, 0).toFixed(2);
    console.log("Soma dos valores " + total)

    // retorna todas as receitas
    const income = transactionAmounts.filter(values => values > 0).reduce((acumulator, values) => acumulator + values,0).toFixed(2);
    console.log("calculo das receitas " + income)

    // retorna todas as despesas
    const expense = Math.abs(transactionAmounts.filter(value => value < 0).reduce((acumulator, value) => acumulator - value, 0)).toFixed(2);
    console.log("calc dos negativos " + expense)
}



// inicializa todas as funções
const init = () =>{   
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();

}

init();