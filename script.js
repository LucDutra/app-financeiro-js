const transactionsUl = document.querySelector('#transactions') 



const dummyTransactions = [
    {id : 1, name : 'Bolo de brigadeiro', amount: -20},
    {id : 2, name : 'Salario', amount: 30},
    {id : 3, name : 'Bolo de Limao', amount: -20},
    {id : 3, name : 'Violao', amount: 150}
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
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

const updateBalanceValues = () => {
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount);


    const total = transactionAmounts.reduce((acumulator, transaction) => acumulator + transaction, 0).toFixed(2);


    const income = transactionAmounts.filter(values => values > 0).reduce((acumulator, values) => acumulator + values,0).toFixed(2);

    const expense = Math.abs(transactionAmounts.filter(value => value < 0).reduce((acumulator, value) => acumulator + value, 0)).toFixed(2);
}




const init = () =>{
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();

}

init();