import { useState, useEffect } from "react";
import { Form, iInitialResult } from "../interfaces/interfaces";
import {
  printToReceive,
  printToSend,
} from "../helpers/toSendToReceiveFunctions";
export default function useCalcResult(
  initialResult: iInitialResult,
  form: Form
) {
  const [result, setResult] = useState(initialResult);

  useEffect(() => {
    const { totalToSend, totalAverage } = printToReceive(form.montoParaRecibir);
    const { porcentajeTotal, receive } = printToSend(form.montoParaEnviar);

    setResult({
      ...result,
      totalAverage,
      totalToSend,
      totalAverageSend: porcentajeTotal,
      totalReceive: receive,
    });
  }, [form]);

  return {
    result,
  };
}
