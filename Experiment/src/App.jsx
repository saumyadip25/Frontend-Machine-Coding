import { useState } from "react";
import Parent from "./Parent";
import withLoading from "./withLoading";

export default function App() {
  const HOC = withLoading(Parent);
  return (
    <div>
      <HOC />
    </div>
  );
}
