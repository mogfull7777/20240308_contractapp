import { useState } from "react";

export function useToggle(initialValue) {
  const [btnToggle, setBtnToggle] = useState(initialValue);

  const handleSubmit = () => {
    setBtnToggle(!btnToggle);
  };

  return [btnToggle, handleSubmit];
}
