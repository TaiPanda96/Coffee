import { useState } from 'react'

export interface ListOptionProps {
  label: string
}

export function ListOption({ label }: ListOptionProps) {
  const [isCheck, setIsCheck] = useState(false)
  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        value=""
        checked={isCheck}
        onClick={() => setIsCheck(!isCheck)}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">{label}</label>
    </li>
  )
}
