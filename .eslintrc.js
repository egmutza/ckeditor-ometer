module.exports = {
	parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },
  extends: [ 'ckeditor5' ],
  rules: {
		'allow-empty-input': 'off',
    indent: 'off'
  },
	env: {
    browser: true,
    amd: true,
    node: true
	}
};
