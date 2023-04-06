const printC = (time) =>{
  // 가능하면 this.setState사용X
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return `${hours}:${minutes}:${seconds}`
}

export default printC;