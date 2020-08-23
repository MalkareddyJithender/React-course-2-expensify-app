// entry ->output
const path = require('path')

module.exports = 
{ 
    entry:'./src/app.js',
    output:
    {
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:
    {
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test: /\.s?css$/,
            use:[
                //push js representation css along with style tag in to dom
                'style-loader',
                //it should load-in .css file and collect css then converts to js rep of css
                'css-loader',
                //it should grab .scss file and use node-sass behind the scenes to convert/compile/transform to .css file. 
                'sass-loader'
            ]
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:
    {  
        contentBase:path.join(__dirname,'public'),
         historyApiFallback:true
    }
};