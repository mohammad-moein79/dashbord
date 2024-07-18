import { SetStateAction, useEffect, useState } from "react";

function useDebounce(
  callback: () => void,
  delay: number
): [string, React.Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const getData = setTimeout(() => {
      !!value && callback();
    }, delay);

    return () => clearTimeout(getData);
  }, [value]);

  return [value, setValue];
}

export default useDebounce;
