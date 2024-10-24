module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:react/jsx-runtime', 'prettier'],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: 'detect' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'no-unused-vars': 'off',
	},
};
