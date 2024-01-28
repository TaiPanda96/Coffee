import Decimal from 'decimal.js'

export function formatDecimalMoney(money: Decimal): string {
  const truncatedMoney = money.toFixed(2)
  const moneyWithCommas = truncatedMoney.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return `$${moneyWithCommas}`
}
