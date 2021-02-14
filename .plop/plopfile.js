module.exports = function (plop) {
  plop.setGenerator('example', {
      description: 'example',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'file name please'
      }],
      actions: [{
          type: 'add',
          path: '../src/{{name}}.ts',
          templateFile: './templates/example.hbs'
      }]
  });
};