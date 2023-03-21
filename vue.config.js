const port = process.env.port || 8000; // 配置端口号


devServer: {
    open: true;
    port;
    public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':' + port // 设置访问ip端
    https: false
}