export default {
    'env': {
        'browser': true,
    },
    'extends': 'eslint:recommended',
    "parser": "babel-eslint",
    'parserOptions': {
        'ecmaVersion': 2021,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
