import { useRef } from 'react'


function useDebounce(fn, delay) {
  const timerRef = useRef(null)
  return (...arg) => {
    if(timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => fn(...arg), delay)
  }
}

export default useDebounce

// bul