import { useRef, useEffect, useState } from "react"
import { animate, useInView } from "framer-motion"
import { AnimatedNumberStyles as s } from "./AnimatedNumber.styles"

export interface AnimatedNumberProps {
  from: number
  to: number
  duration?: number
  suffix?: string
}

export const AnimatedNumber = ({
  from,
  to,
  duration = 1,
  suffix,
}: AnimatedNumberProps) => {
  return <Counter from={from} to={to} duration={duration} suffix={suffix} />
}

function Counter({ from, to, duration, suffix }) {
  const [number, setNumber] = useState(from)
  const [toState, setTo] = useState(0)

  const max = from > to ? from : to
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    const controls = animate(from, toState, {
      duration: duration,
      onUpdate(value) {
        setNumber(parseFloat(value).toFixed(0))
      },
    })

    return () => controls.stop()
  }, [from, toState])

  useEffect(() => {
    if (isInView) {
      setTo(to)
    }
  }, [to, isInView])

  return (
    <s.Wrapper>
      <s.Container ref={ref}>
        {/* Hidden Max width to reduce layout shift */}
        <s.Hidden aria-hidden="true">
          {max.toString().replace(/\d/g, 8)}
        </s.Hidden>
        <s.Visible>{number}</s.Visible>
      </s.Container>
      {suffix}
    </s.Wrapper>
  )
}
