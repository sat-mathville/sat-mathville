const isDev = process.env.NODE_ENV === 'development'

// Phaser webpack config
let phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
let phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
let pixi = path.join(phaserModule, 'build/custom/pixi.js')
let p2 = path.join(phaserModule, 'build/custom/p2.js')

let definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
})


module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
