import React from 'react'
import { SectionCard } from './section-card'

interface WallpaperProps {
  backgroundImage?: string
  color?: string
  className?: string
  children?: React.ReactNode
}

export function WallPaperComponent({ children, backgroundImage, className }: WallpaperProps) {
  const wallpaperStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }

  return (
    <div className={className} style={wallpaperStyle}>
      {children}
    </div>
  )
}

export default WallPaperComponent
