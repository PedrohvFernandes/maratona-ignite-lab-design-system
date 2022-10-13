// https://blog.umbler.com/br/introducao-ao-postcss/#:~:text=Em%20resumo%2C%20o%20PostCSS%20é,ferramenta%20resolver%20todos%20os%20problemas.
// https://medium.com/@neysimes/o-que-é-o-postcss-be462abb5298
// No geral o postcss vai ficar lendo nossos arquivos e criando o css necessários, pro tailwind funcionar na nossa pagina, ou seja um ecossistema de plugins(tailwindcss) de css, que facilita o acesso do css no JS
module.exports = {
  plugins: {
    tailwindcss: {},
    // WebKit etc
    autoprefixer: {},
  },
}
