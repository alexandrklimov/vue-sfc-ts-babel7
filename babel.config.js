const presets = [
    [
        "@babel/env",
        {
            useBuiltIns: "usage"
        }
    ],
    "@babel/preset-typescript"
];

const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
];

module.exports = {presets, plugins};