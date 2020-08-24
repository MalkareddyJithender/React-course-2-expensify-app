// entry ->output
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new extractTextPlugin('styles.css');

module.exports = (env) =>
{
    const isProduction = env === 'production';
    
    return { 
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
                use:CSSExtract.extract({
                    use:[
                        //it should load-in .css file and collect css then converts to js rep of css
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        //it should grab .scss file and use node-sass behind the scenes to convert/compile/transform to .css file. 
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],
        devtool:isProduction ? 'source-map' :'inline-source-map',
        devServer:
        {  
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true
        }
    };
};
