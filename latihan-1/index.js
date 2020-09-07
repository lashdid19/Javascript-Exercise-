module.exports = function main(input) {
  return input
    .split("\n")
    .map((row) =>
      row
        .split(" ")
        .map((number) => parseInt(number))
        .reduce((prev, next) => prev * next)
    )
    .reduce((prev, next) => prev + next);
};

// function terserah(...bebas) {
//   console.log(bebas);
//   console.log(bebas.join("\n"));
// }

// terserah("bebas", "hahah", "hihih", "huhuh");
