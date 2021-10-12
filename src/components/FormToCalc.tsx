import {
  Button,
  Divider,
  FormControl,
  Heading,
  Input,
  KeyboardAvoidingView,
  Stack,
  Text,
  View,
} from "native-base";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import useCalcResult from "../hooks/useCalcResult";
import useForm from "../hooks/useForm";

import { Form, iInitialResult } from "../interfaces/interfaces";
import CopyRight from "./CopyRight";

export default function FormToCalc() {
  const initialValue: Form = {
    montoParaEnviar: "",
    montoParaRecibir: "",
  };

  const initialResult: iInitialResult = {
    totalAverage: 0,
    totalToSend: 0,
    totalAverageSend: 0,
    totalReceive: 0,
  };

  const { form, handlerForm, reset } = useForm(initialValue);
  const { result } = useCalcResult(initialResult, form);

  return (
    <>
      <KeyboardAvoidingView
        style={{
          minHeight: 100,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View mt={10}>
            <FormControl isRequired>
              <Stack mx="4">
                <Heading textAlign="left" mb="4">
                  Quiero Enviar
                </Heading>
                <Input
                  size="xl"
                  keyboardType="number-pad"
                  autoCorrect={false}
                  value={form.montoParaEnviar}
                  placeholder="Escribe cuanto enviaras"
                  onChangeText={(value) =>
                    handlerForm(value, "montoParaEnviar")
                  }
                />
                <Text marginTop={3}>
                  Comisión:{" "}
                  <Text bold>
                    {result.totalAverageSend < 1
                      ? "0"
                      : result.totalAverageSend.toFixed(2)}
                  </Text>
                </Text>
                <Text marginTop={2}>
                  Total monto que llegará a destino:{" "}
                  <Text bold>
                    {result.totalReceive < 1
                      ? "0"
                      : result.totalReceive.toFixed(2)}
                  </Text>
                </Text>
                <Divider marginY={4} />
                <Heading textAlign="left" mb="4">
                  Quiero Recibir
                </Heading>
                <Input
                  size="xl"
                  multiline
                  keyboardType="number-pad"
                  value={form.montoParaRecibir}
                  placeholder="Escribe cuanto quieres recibir"
                  onChangeText={(value) =>
                    handlerForm(value, "montoParaRecibir")
                  }
                />
                <Text marginTop={3}>
                  Comisión:{" "}
                  <Text bold>
                    {result.totalAverage < 1
                      ? "0"
                      : result.totalAverage.toFixed(2)}
                  </Text>
                </Text>
                <Text marginTop={2}>
                  Total monto que te deben enviar:{" "}
                  <Text bold>
                    {result.totalToSend < 1
                      ? "0"
                      : result.totalToSend.toFixed(2)}
                  </Text>
                </Text>
                <Button onPress={reset} mt={3}>
                  Borrar Campos
                </Button>
              </Stack>
            </FormControl>
            <CopyRight />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
