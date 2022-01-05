// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
    },
    'extends': 'eslint:recommended',
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
