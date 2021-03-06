module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	parser: 'vue-eslint-parser',
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
