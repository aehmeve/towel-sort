module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let res = matrix.map((el, index) => {
  	if (index % 2 === 1) {
    	return el.reverse();
    }
    
    return el;
  })

  return res.flat();
}