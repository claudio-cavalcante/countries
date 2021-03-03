const numberWithDots = (number) => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : '';
}

const hasOnlyTwoLetters = (value) =>{
    return /^[A-Za-z]{2}$/gi.test(value)
  }

export {
    numberWithDots,
    hasOnlyTwoLetters
};