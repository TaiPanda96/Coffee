import classNames from 'classnames'
import { Stack } from '../stack'

export interface MenuOptionProps {
  label: string
  description?: string
}

export function MenuOptions({ label, description }: MenuOptionProps) {
  return (
    <>
      <Stack gap={4}>
        <ul aria-labelledby="dropdownHelperRadioButton">
          <li>
            <div className="flex p-2 rounded">
              <div className="flex items-center h-5">
                <input
                  id="helper-radio-4"
                  name="helper-radio"
                  type="radio"
                  value=""
                  className={classNames('w-4 h-4', 'bg-brand-1100')}
                />
              </div>
              <div className="ms-2 text-sm">
                <label htmlFor="helper-radio-4" className="font-medium text-black">
                  {label}
                  <p
                    id="helper-radio-text-4"
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
