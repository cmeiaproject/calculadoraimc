const path = require('path');

module.exports = {
    entry : './src/app.js', // identifica o arquivo principal da aplicação
    output: {
                path: path.resolve(__dirname, 'dist'),  // se não encontra, cria a pasta
                publicPath: '/dist/',  // identifica que a pasta é publica
                filename: 'app-bundle.js'
    },
    modules:{
        rules:[
            // abaixo os loader (ou acrregadores)
            {
                test: /\.js$/,  // aqui indica que pega somente os arquivo com extensão .js. Pode ser colocado dentro de aspas
                exclude: /node_modules/, // aqui ele exclui (ou não considera) os arquivos da pasta identificada.
                use: 'babel-loader' // identifica que ira usar o babel-loader
            },
            {
                test: /\.s?css$/,  // aqui indica que pega somente os arquivo com extensão .css. Atenção ao '.s' que trata de arquivos SASS
                                   // a expressão poderia ficar sem o '.s?' 
                use: ['style-loader', 'css_loader'] // identifica que ira usar o style-loader e css-loader
            }

        ]
    },
    mode: 'development',
    resolver:{
        extensions: ['*', 'js']
    },
    devServer:{
        // p devServer configura o servidor de aplicação
        contenBase: path.join(__dirname, 'public/'),
        port: 3000, // pode usar qualquer porta
        publicPath: 'http://localhost:3000/dist'

    }
};

