import {PlopGeneratorConfig, ActionConfig} from 'node-plop'
import {updateEffectsActions} from '../actions/update-effects'

export const module: {name: string; definition: PlopGeneratorConfig} = {
  name: 'module',
  definition: {
    description: 'Generates a top level module',
    prompts: [
      {
        type: 'input',
        name: 'module',
        message: 'Please enter the module name'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: `${process.cwd()}/src/modules/{{ dashCase module }}/`,
        base: './templates/module/',
        templateFiles: './templates/module/**',
        data: {effect: 'action'}
      },
      ...updateEffectsActions.map(action => {
        return {...(action as ActionConfig), data: {effect: 'action'}}
      }),
      {
        type: 'lint'
      }
    ]
  }
}
