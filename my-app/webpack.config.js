const port = process.env.PORT || 3000;

const lessons = [
    "02-component",
    "03-properties",
    "04-state",
    "05-children",

    "06-props",
    "07-state",
    "08-passing-method-references",
    "09-conditions",
    "10-outputting-lists",

    "assignment-1",
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
                    presets: ['es2015', 'stage-2',  'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            }
        ]
    }

};
