module.exports = function main(input) {
  let data = input.split("\n").map((row) => row.split(" "));
  let parsedData = data.map((item) => {
    let name = item[0];
    let parsedNum = parseInt(item[1]);
    return [name, parsedNum];
  });
  let i;
  parsedData.forEach(([name, sold], dataIndex) => {
    if (i === undefined || parsedData[i][1] < sold) i = dataIndex;
  });
  return `${parsedData[i][0]} ${parsedData[i][1]}`;
};
