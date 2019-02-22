module.exports = {
    siteMetadata: {
        title: "My Homepage"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
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
        }
    ]
};
