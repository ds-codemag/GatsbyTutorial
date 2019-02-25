module.exports = {
    siteMetadata: {
        title: "Gatsby.js tutorial",
        description: "This is a page created with Gastby.js tutorial."
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8
            }
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                "sourceMap": true,
                "autoLabel": process.env.NODE_ENV !== 'production',
                "labelFormat": "[local]",
                "cssPropOptimization": true
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            }
        }
    ]
};
