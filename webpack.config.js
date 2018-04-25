module.exports = {
  entry: './app/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main         : 'app/components/Main.jsx',
      Navigation   : 'app/components/Navigation.jsx',
      Weather      : 'app/components/Weather.jsx',
      About        : 'app/components/About.jsx',
      Examples     : 'app/components/Examples.jsx',
      WeatherForm  : 'app/components/WeatherForm.jsx',
      WeatherMsg   : 'app/components/WeatherMsg.jsx',
      OpenWeatherMap   : 'app/api/OpenWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
