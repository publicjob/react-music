const debounce = (fn, delay) => {
  let timer = null;
  return () => {
    console.log(timer)
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}

export default debounce