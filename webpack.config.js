var config = {
    entry: './app/main.js',
	output: {
		path:'/',
		filename: 'bundle.js'
	},
	devServer:{
		inline: true,
		port:8080
	},
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        query:{
                            presets:['es2015','react']
                            }
                    }
                ]
            }
        ]
    }
}
module.exports = config;
