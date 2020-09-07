module.exports = function main(input) {
  let data = input.split("\n").map((data) => data.split(" "));
  let parsedData = data.map((item) => {
    price = parseInt(item[0]);
    discount = parseInt(item[1].substr(0, 3));
    total = price - price * (discount / 100);
    return [price, discount, Math.round(total)];
  });
  return parsedData
    .map((item) => `${item[0]} x ${item[1]}% => ${item[2]}`)
    .join("\n");
};
