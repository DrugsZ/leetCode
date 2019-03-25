const sortedSquares = (A) => {
  let i = 0;
  let j = A.length - 1;
  const results = [];

  while (i <= j) {
    const result = Math.abs(A[i]) - Math.abs(A[j]);

    if (result > 0) {
      results.unshift(A[i] ** 2);
      i++;
    } else {
      results.unshift(A[j] ** 2);
      j--;
    }
  }
  return results;
};

module.exports = {
  sortedSquares,
};

