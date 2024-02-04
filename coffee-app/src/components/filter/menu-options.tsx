import classNames from 'classnames'
import { Stack } from '../stack'

export interface MenuOptionProps {
  label: string
  description?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function MenuOptions({ label, description, value, onChange }: MenuOptionProps) {
  const radioOptionId = `radio-${value}`
  return (
    <>
      <Stack gap={4}>
        <ul>
          <li>
            <div className="flex p-2 rounded">
              <div className="flex items-center h-5">
                <input
                  id={radioOptionId}
                  name="helper-radio"
                  type="radio"
                  value={value}
                  className={classNames('w-4 h-4', 'text-primary-600', 'focus:ring-primary-900')}
                  onChange={
                    onChange
                      ? (event) => {
                          onChange(event)
                        }
                      : undefined
                  }
                />
              </div>
              <div className="ms-2 text-sm">
                <label htmlFor={radioOptionId} className="font-medium text-black">
                  {label}
                  <p
                    id={radioOptionId}
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    {description}
                  </p>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </Stack>
    </>
  )
}
