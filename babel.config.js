module.exports = {
  "plugins": [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties"
],
  "presets": [
  "@babel/preset-react",
  [
    "@babel/preset-env",
    {
      "modules": "umd"
    }
  ]
]
}