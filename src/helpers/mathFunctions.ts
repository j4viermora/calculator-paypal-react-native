function average(numeroAlCualSeLeSacaraElPorcentaje:number):number{
  let result = ( 5.4 * numeroAlCualSeLeSacaraElPorcentaje / 100 ) + 0.3; 
  return  result
  };
  
function subtract(a:number,b:number):number {
  let result = a - b

  return result
}

function add(a:number , b:number):number {
  let result = a + b
  return result
}


export {
  average,
  subtract,
  add
}