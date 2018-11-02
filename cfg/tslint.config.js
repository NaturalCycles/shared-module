// formatting rules still have value that IDEs will infer their setting from them
module.exports = {
  rules: {
    'adjacent-overload-signatures': true,
    'array-type': [true, 'array'],
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'arrow-return-shorthand': true,
    'ban-types': {
      options: [
        ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
        // ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."],
        ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
        ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
        ['String', 'Avoid using the `String` type. Did you mean `string`?'],
        ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
      ],
    },
    'callable-types': true,
    'class-name': true,
    curly: [true, 'ignore-same-line'],
    'comment-format': [true, 'check-space'],
    'cyclomatic-complexity': [true, 30],
    eofline: true,
    // "forin": true, // todo: enable!
    'import-blacklist': [
      true,
      'rxjs/Rx',
      'rxjs/internals',
      'rxjs/Observable',
      'rxjs/Observer',
      'rxjs/Subject',
      'rxjs/observable/defer',
      'rxjs/observable/merge',
      'rxjs/observable/of',
      'rxjs/observable/timer',
      'rxjs/observable/combineLatest',
      'rxjs/add/observable/combineLatest',
      'rxjs/add/observable/of',
      'rxjs/add/observable/merge',
      'rxjs/add/operator/debounceTime',
      'rxjs/add/operator/distinctUntilChanged',
      'rxjs/add/operator/do',
      'rxjs/add/operator/filter',
      'rxjs/add/operator/map',
      'rxjs/add/operator/retry',
      'rxjs/add/operator/startWith',
      'rxjs/add/operator/switchMap',
      'rxjs/observable/interval',
      'rxjs/observable/forkJoin',
    ],
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'label-position': true,
    'no-angle-bracket-type-assertion': true,
    'no-arg': true,
    'no-bitwise': true,
    // 'no-console': [false, 'debug', 'info', 'time', 'timeEnd', 'trace'],
    'no-conditional-assignment': true,
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-variable': true,
    // 'no-duplicate-imports': false,
    'no-eval': true,
    'no-floating-promises': true,
    'no-inferrable-types': [true, 'ignore-params'],
    'no-internal-module': true,
    // 'no-implicit-dependencies': [false, 'dev', ['@app']],
    'no-invalid-this': [true, 'check-function-in-method'],
    'no-irregular-whitespace': true,
    'no-misused-new': true,
    'no-namespace': [true, 'allow-declarations'],
    // 'no-null-keyword': false,
    'no-reference': true,
    'no-return-await': true,
    // 'no-require-imports': false,
    // 'no-shadowed-variable': false,
    'no-sparse-arrays': true,
    // 'no-string-literal': false,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-unnecessary-initializer': true,
    'no-unsafe-finally': true,
    'no-unused-expression': [true, 'allow-new'],
    'no-unused-variable': [true, { 'ignore-pattern': '^_' }],
    // 'no-use-before-declare': false,
    'no-var-keyword': true,
    // 'no-var-requires': false,
    'object-literal-shorthand': true,
    'one-variable-per-declaration': true,
    'ordered-imports': true,
    'prefer-const': [
      true,
      {
        destructuring: 'all',
      },
    ],
    'prefer-for-of': true,
    'promise-function-async': [
      true,
      'check-function-declaration',
      'check-function-expression',
      'check-method-declaration',
    ],
    // This rule is the only difference between our style and Prettier style
    'space-before-function-paren': [true, 'always'],
    'triple-equals': [true, 'allow-null-check'],
    typedef: [true, 'property-declaration'],
    // 'unified-signatures': false,
    'use-isnan': true,
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore',
    ],
  },
  /*
  excluded: {
    'object-literal-sort-keys': true,
    'no-for-in-array': true,
    'no-unnecessary-qualifier': true,
    'restrict-plus-operands': true,
    'member-ordering': [
      true,
      {
        order: [
          'constructor',
          'public-static-field',
          'private-static-field',
          'static-before-instance',
          'variables-before-functions',
        ],
      },
    ],
  },
  */
}
