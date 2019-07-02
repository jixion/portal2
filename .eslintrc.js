module.exports = {
    "plugins": ["lodash"],
    "extends": ["plugin:lodash/recommended", "airbnb"],
    "rules": {
        "comma-dangle": 0,
        "func-names": 0,
        "no-var": 0,
        "prefer-arrow-callback": 0,
        "prefer-template": 0,
        "indent": 0,
        "quote-props": 0,
        "max-len": 0
    },
    "env": {
        "browser": 1,
        "jasmine": 1
    },
    "globals": {
        "_": 1,
        "angular": 1
    }
};
