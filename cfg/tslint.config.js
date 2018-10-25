module.exports = {
  rules: {
    'adjacent-overload-signatures': true,
    // 'await-promise': [false, 'Thenable'],
    // 'callable-types': false,
    'class-name': true,
    'comment-format': [true, 'check-space'],
    eofline: true,
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
    indent: [true, 'spaces'],
    'interface-over-type-literal': true,
    'label-position': true,
    'no-arg': true,
    'no-bitwise': true,
    // 'no-console': [false, 'debug', 'info', 'time', 'timeEnd', 'trace'],
    'no-conditional-assignment': true,
    'no-construct': true,
    'no-debugger': true,
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
    // 'no-namespace': [false, 'allow-declarations'],
    // 'no-non-null-assertion': false,
    // 'no-null-keyword': false,
    'no-reference': true,
    // 'no-require-imports': false,
    // 'no-shadowed-variable': false,
    'no-sparse-arrays': true,
    // 'no-string-literal': false,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-unused-expression': true,
    'no-unused-variable': [true, { 'ignore-pattern': '^_' }],
    // 'no-use-before-declare': false,
    'no-var-keyword': true,
    // 'no-var-requires': false,
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
    'space-before-function-paren': [true, 'always'],
    'triple-equals': [true, 'allow-null-check'],
    typedef: [true, 'property-declaration'],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
    ],
    // 'unified-signatures': false,
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore',
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-type',
      'check-typecast',
      'check-preblock',
    ],
  },
  /*
  excluded: {
    whitespace: ['check-module'],
    curly: true,
    forin: true,
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
