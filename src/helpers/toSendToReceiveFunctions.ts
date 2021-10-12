import { add, average, subtract } from "./mathFunctions";



function printToSend( valueToCalc: string ){

  const valueToCalcNumber = Number(valueToCalc)

  const porcentajeTotal = average(valueToCalcNumber);
  const receive = subtract(valueToCalcNumber, porcentajeTotal);
  return {
    porcentajeTotal,
    receive
  }

}

function printToReceive( valueToCalc: string ) {

  const valueToCalcNumber = Number(valueToCalc)
  const subAverage = average( valueToCalcNumber )
  const subTotalToSend =  add( subAverage , valueToCalcNumber )
  const totalAverage = average( subTotalToSend)
  const totalToSend = add( valueToCalcNumber, totalAverage )

  return {
    totalToSend,
    totalAverage,
  }
  
}


export {
  printToReceive,
  printToSend
}