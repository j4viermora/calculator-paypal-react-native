import React, { useState } from "react";

export default function useForm<T extends Object>(initialState: T) {
  const [form, setForm] = useState(initialState);

  const reset = () => {
    setForm(initialState);
  };

  const handlerForm = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    form,
    reset,
    handlerForm,
  };
}
