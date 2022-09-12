


const CalculateIncome = (productList) => {
    let OtherProductList = [];
  
    productList.forEach((element) => {
      OtherProductList.push({
        ...element,
        amontInStock: element.quantity - element.quantitySold,
        targetedIncomePercent:
          ((element.priceSold * element.quantitySold) /
            (element.priceSold * element.quantity) -
            1) *
          100,
        incomPercent:
          ((element.priceSold * element.quantitySold) /
            (element.price * element.quantity) -
            1) *
          100,
        UnitsSoldPercent: (element.quantitySold / element.quantity) * 100,
        PricePercent: (element.price / element.priceSold - 1) * 100 * -1,
        income:
          element.quantitySold * element.priceSold -
          element.quantity * element.price,
      });
    });
  
    return OtherProductList;
  };


  const countProductsInomeAndAmount = (productList) => {
    let productAmount;
    let priceBought;
    let priceSold;
    let income;
  
    productAmount = productList.length;
  
    priceBought = 0;
    productList.forEach((element) => {
      priceBought += element.price;
    });
  
    priceSold = 0;
    productList.forEach((element) => {
      priceSold += element.priceSold;
    });
  
    income = 0;
    productList.forEach((element) => {
      income += (element.priceSold - element.price) * element.quantitySold;
    });
    return {
      productAmount: productAmount,
      priceBought: priceBought,
      priceSold: priceSold,
      income: income,
    };
  };








  
// const CalculateIncome=()=>{
//     console.log("hi: ","CalculateIncome")
// }

// const CalculateIncomeOther=()=>{
//     console.log("hiOther: ","CalculateIncomeOtherPart")
// }


module.exports={
    CalculateIncome,
    countProductsInomeAndAmount
}