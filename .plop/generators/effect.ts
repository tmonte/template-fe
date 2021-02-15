import {PlopGeneratorConfig} from 'node-plop'
import {updateEffectsActions} from '../actions/update-effects'

export const effect: {name: string; definition: PlopGeneratorConfig} = {
  name: 'effect',
  definition: {
    description: 'Generates an effect file',
    prompts: [
      {
        type: 'input',
        name: 'effect',
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
        path: '../src/modules/{{dashCase module}}/effect/module.ts',
        templateFile: './templates/module/effect/module.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: '../src/modules/{{dashCase module}}/effect/interface.ts',
        templateFile: './templates/module/effect/interface.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path:
          '../src/modules/{{dashCase module}}/effect/{{dashCase effect}}.ts',
        templateFile: './templates/module/effect/action.ts.hbs'
      },
      ...updateEffectsActions,
      {
        type: 'lint'
      }
    ]
  }
}
