
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: '91porn-frontend',
      dll: true,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
}
