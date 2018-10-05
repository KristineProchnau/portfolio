module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`
  ],
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/projects`,
      name: 'pages',
    },
  },
  `gatsby-transformer-remark`,
}