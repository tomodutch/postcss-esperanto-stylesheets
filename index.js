const translations = require("./translations");

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  const { properties, values } = translations;
  const declarations = Object.keys(properties).reduce((acc, key) => {
    const translatedProperty = properties[key];
    acc[key] = (declaration) => {
      declaration.prop = translatedProperty;
      Object.keys(values).forEach((value) => {
        // translates direct matches like the color keywords
        if (declaration.value === value) {
          declaration.value = values[value];
        }
      });
    };

    return acc;
  }, {});

  return {
    postcssPlugin: "postcss-esperanto-stylesheets",
    Declaration: declarations,
  };
};

module.exports.postcss = true;
