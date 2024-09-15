import { Command } from 'commander'
import { ingestCoffee } from './utils/ingest-coffee'

const program = new Command()

program.name('load').action(async () => {
  await ingestCoffee()
})

program.parse(process.argv)
