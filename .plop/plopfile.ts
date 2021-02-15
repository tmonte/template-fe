import {NodePlopAPI} from 'plop'
import {exec} from 'child_process'
import {generators} from './generators'

export default function (plop: NodePlopAPI) {
  plop.setActionType('lint', function () {
    exec('yarn run lint', (_, stdout, stderr) => {
      if (stderr) console.error(stderr)
      if (stdout) console.log(stdout)
    })
    return 'Linting...'
  })
  generators.forEach(generator => {
    plop.setGenerator(generator.name, generator.definition)
  })
}
