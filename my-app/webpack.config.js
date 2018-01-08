var port = process.env.PORT || 3000;

var lessons = [
    "01-intro",
    "02-render",
];

var entry = {};

lessons.forEach(function(lesson) {
    entry[lesson] = './lessons/' + lesson + '/main.js'
});

module.exports = {
    entry: entry,
    output: {
        path: __dirname + './lessons/',
        filename: '[name]/index.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './lessons',
        port: port
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};
