const snapshot = [
  { sym: 'GME', cost: 280 },
  { sym: 'PYPL', cost: 234 },
  { sym: 'AMZN', cost: 3206 },
  { sym: 'AMZN', cost: 3213 },
  { sym: 'GME', cost: 325 },
  { sym: 'GME', cost: 540 },
  { sym: 'GME', cost: 300 },
  { sym: 'AMZN', cost: 3540 },
  { sym: 'PYPL', cost: 300 },
  { sym: 'AMZN', cost: 2500 },
  { sym: 'PYPL', cost: 150 },
];

/* FIRST APPROACH */

const filterStocks = (oldStocks) => {
  let newStocks = [];
  for (let i = 0; i < oldStocks.length; i++) {
    const newStock = oldStocks[i];
    const alreadyExists = newStocks.find(
      (currentStock) => currentStock.sym === newStock.sym
    );
    if (!alreadyExists) {
      newStocks.push(newStock);
    } else {
      newStocks = newStocks.map((oldStock) =>
        oldStock.sym === newStock.sym ? newStock : oldStock
      );
    }
  }

  return newStocks;
};

console.time('first approach');
const filteredSnapshot = filterStocks(snapshot);
console.log('filteredSnapshot', filteredSnapshot);
console.timeLog('first approach');

/*
  filteredSnapshot = [
    {sym: "GME", cost: 300},
    {sym: "PYPL", cost: 150},
    {sym: "AMZN", cost: 2500}
  ]
  first approach: 3.015ms
*/

/* SECOND APPROACH */

const filterStocks2 = (allStocks) => {
  let newStocks = {};
  for (let i = 0; i < allStocks.length; i++) {
    const stock = allStocks[i];
    newStocks[stock.sym] = stock.cost;
  }

  const mappedStocks = Object.keys(newStocks).map((sym) => ({
    sym: sym,
    cost: newStocks[sym],
  }));
  return mappedStocks;
};

console.time('second approach');
const filteredSnapshot2 = filterStocks2(snapshot);
console.log('filteredSnapshot2', filteredSnapshot2);
console.timeLog('second approach');

/*
  filteredSnapshot = [
    {sym: "GME", cost: 300},
    {sym: "PYPL", cost: 150},
    {sym: "AMZN", cost: 2500}
  ]
  second approach: 0.173ms
*/

const filterStocks3 = (allStocks) => {
  const stockAsObject = allStocks.reduce((acc, curr) => {
    const { sym } = curr;
    acc[sym] = curr;
    return acc;
  }, {});

  console.log('stockAsObject', stockAsObject);
  return stockAsObject;
};

console.time('third approach');
const filteredSnapshot3 = filterStocks3(snapshot);
console.log('filteredSnapshot3', filteredSnapshot2);
console.timeLog('third approach');

/*
  filteredSnapshot = [
    {sym: "GME", cost: 300},
    {sym: "PYPL", cost: 150},
    {sym: "AMZN", cost: 2500}
  ]
  
  third approach: 0.134ms
*/
