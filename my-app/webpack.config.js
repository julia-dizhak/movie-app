const port = process.env.PORT || 3000;

const lessons = [
    "02-component",
    "03-properties",
    "04-state",
    "05-children"
];

let entry = {};

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
