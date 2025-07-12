module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/-no-forget-to-do-things/'  // 改成你的 GitHub 仓库名
        : '/'
}