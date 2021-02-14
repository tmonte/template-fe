import {NodePlopAPI} from 'plop'
import {exec} from 'child_process'

export default function (plop: NodePlopAPI) {
  plop.setActionType('lint', function () {
    exec('yarn run lint', (_, stdout, stderr) => {
      if (stderr) console.error(stderr)
      if (stdout) console.log(stdout)
    })
    return 'Linting...'
  })
  plop.setGenerator('effect', {
    description: 'Generates an effect file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the effect name'
      },
      {
        type: 'input',
        name: 'module',
        message: 'Please enter the module name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/modules/{{module}}/effect/{{name}}.ts',
        templateFile: './templates/effect.hbs'
      },
      {
        type: 'lint'
      }
    ]
  })
}
