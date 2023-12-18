'use client'
import React, { useEffect, useState } from 'react'
import styles from './cursor.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons/faMugHot'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className={styles.cursor}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <FontAwesomeIcon icon={faMugHot} size="2xl" style={{ color: '#512b1f' }} />
    </div>
  )
}

export default CustomCursor
