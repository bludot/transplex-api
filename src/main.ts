import { start } from './server/server.app'
import "source-map-support/register"

if (require.main === module) {
  start().catch(die)
}

function die(error: Error): Promise<void> {
  // tslint:disable-next-line:no-console
  console.error(error)
  process.exit(1)
}
