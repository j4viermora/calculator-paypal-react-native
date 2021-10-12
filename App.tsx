import React from "react";
import { NativeBaseProvider } from "native-base";
import HomeView from "./src/views/HomeView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <HomeView />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
