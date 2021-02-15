import {PlopGeneratorConfig} from 'node-plop'

export const effect: {name: string; definition: PlopGeneratorConfig} = {
  name: 'effect',
  definition: {
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
        path: '../src/modules/{{module}}/effect/module.ts',
        templateFile: './templates/effect-module.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../src/modules/{{module}}/effect/{{name}}.ts',
        templateFile: './templates/effect.hbs'
      },
      {
        type: 'modify',
        path: '../src/modules/{{module}}/effect/module.ts',
        pattern: /(\/\/ @importSaga)/gi,
        template: "$1\r\nimport { {{name}}Saga } from './{{name}}'"
      },
      {
        type: 'modify',
        path: '../src/modules/{{module}}/effect/module.ts',
        pattern: /(\/\/ @exportSaga)/gi,
        template: '$1\r\n{{name}}Saga,'
      },
      {
        type: 'modify',
        path: '../src/modules/{{module}}/effect/module.ts',
        pattern: /(\/\/ @exportAction)/gi,
        template: "$1\r\nexport { {{name}} } from './{{name}}'"
      },
      {
        type: 'lint'
      }
    ]
  }
}
