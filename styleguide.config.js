const path = require('path')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },         
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
        {test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader'}
      ]
    }
  },
  require: [
      "./config/masterStyles.scss"
  ],
  title: "Revibe Component Library",
  styleguideComponents: {
		StyleGuideRenderer: path.join(__dirname, 'styleguide/StyleGuide')
  },
  styleguideDir: "./build"
};