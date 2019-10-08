module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Barlow Condensed', 'Open Sans']
				}
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#22d07f',
				showSpinner: false
			}
		}
	]
};
