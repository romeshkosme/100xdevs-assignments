/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const data = transactions.reduce((acc, curr) => {
    if (acc[curr["category"]]) {
      acc[curr["category"]]["totalSpent"] += curr["price"];
    } else {
      acc[curr["category"]] = {
        category: curr["category"],
        totalSpent: curr["price"]
      }
    }
    return acc;
  }, {});
  
  const resp = [];
  for (const key in data) {
    resp.push(data[key])
  }

  return resp;
}

module.exports = calculateTotalSpentByCategory;
