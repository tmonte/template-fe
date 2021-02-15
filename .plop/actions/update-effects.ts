import {ActionType} from 'node-plop'

export const updateEffectsActions: ActionType[] = [
  {
    type: 'modify',
    path: '../src/modules/{{dashCase module}}/effect/module.ts',
    pattern: /(\/\/ @importSaga)/gi,
    template:
      "$1\r\nimport { {{camelCase effect}}Saga } from './{{dashCase effect}}'"
  },
  {
    type: 'modify',
    path: '../src/modules/{{dashCase module}}/effect/module.ts',
    pattern: /(\/\/ @exportSaga)/gi,
    template: '$1\r\n{{camelCase effect}}Saga,'
  },
  {
    type: 'modify',
    path: '../src/modules/{{dashCase module}}/effect/module.ts',
    pattern: /(\/\/ @exportAction)/gi,
    template:
      "$1\r\nexport { {{camelCase effect}} } from './{{dashCase effect}}'"
  },
  {
    type: 'modify',
    path: '../src/modules/{{dashCase module}}/effect/interface.ts',
    pattern: /(\/\/ @exportInterface)/gi,
    template:
      "$1\r\nexport type { I{{pascalCase effect}} } from './{{dashCase effect}}'"
  }
]
