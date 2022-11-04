const dbcontext = require('../services/dbConnection');

async function getAllProductDetails(req, result) {
  await dbcontext.query(`SELECT * from Product`, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    result(null, results)
  });

}


async function createNewItem(req, result) {
  await dbcontext.query(`Insert into Product(ItemName,ItemCategory,Price,InStock) values('${req.ItemName}','${req.ItemCategory}',${req.Price},'${req.InStock}') `,
    (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      result(null, results)
    });

}

module.exports = { getAllProductDetails,createNewItem };