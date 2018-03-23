import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify"

export default {
  "input": "exports.mjs",
  "output": {
    "sourceMap": "false",
    "format": "es",
    "file": "docs/js/react.js"
  },
  "plugins": [
    babel ({ "exclude": "node_modules/**" }),
    uglify ()
  ]
}
