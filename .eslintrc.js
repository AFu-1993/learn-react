module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "require-jsdoc": [0] /* 很棒的规则，但似乎不适合ts项目 */,
        "semi": [2, 'never']
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    }
};
