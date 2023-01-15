module.exports = ({ config, env }) => {
  const isDevelopment = env !== "production"

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "babel-loader",
      },
      {
        loader: "@linaria/webpack-loader",
        options: {
          sourceMap: isDevelopment,
        },
      },
      {
        loader: "ts-loader",
      },
    ],
  })
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
