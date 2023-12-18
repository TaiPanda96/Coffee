import classNames from 'classnames'

interface SliderProps {
  className?: string
  gap?: number
  sections: number
}

export function Slider({ sections, className }: SliderProps) {
  const step = Math.floor(100 / (sections > 0 ? sections : 1))
  const startingValue = step
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        value={startingValue}
        className="range bg-primary"
        step={step}
      />
      <div
        className={classNames('w-full', 'flex', 'justify-between', 'text-xs', 'px-2', className)}
      >
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </>
  )
}
