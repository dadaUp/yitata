//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    const {statusBarHeight, platform} = wx.getSystemInfoSync();
    const {top, height, width} = wx.getMenuButtonBoundingClientRect();
    wx.setStorageSync('statusBarHeight', statusBarHeight);
    wx.setStorageSync('menuBottonHeight', height ? height : 32);
    wx.setStorageSync('menuBottonWidth', width);

    if(top && top !== 0 && height !== 0){
      const menuButtonTop = top - statusBarHeight;
      const navBarHeight = (top - statusBarHeight) * 2 + height;
      wx.setStorageSync('menuButtonTop', menuButtonTop);
      wx.setStorageSync('navBarHeight', navBarHeight);
    } else {
      wx.setStorageSync('menuButtonTop', 4);
      wx.setStorageSync('navBarHeight', platform === 'android' ? 48 : 40);
    }

    this.globalData = {}
    
  }
})
