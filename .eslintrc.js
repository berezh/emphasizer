module.exports = {
  extends: ["varp-common"],
  ignorePatterns: ["dist/", "node_modules/"],
  rules: {
    /* Additional rules */
    "import/no-default-export": "off",
    "import/no-unresolved": ["error", { ignore: ["csstype"] }],
  },
};
