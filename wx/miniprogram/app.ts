// import { getSetting, getUserInfo } from "./utils/util"

import { getUserInfo, getSetting } from "./utils/util"

// app.ts
App<IAppOption>({
  globalData: {
    // userInfo: new Promise((resolve, reject) => {
    //   // 获取用户信息
    //   getUserInfo().then( res => {
    //     if (!res) {
    //       return
    //     }
    //     // 通知页面我获取到了用户信息
    //     resolve(res.userInfo)
    //   }).catch(reject)
    // })
    userInfo: new Promise((resolve, reject) => {
      getSetting().then(res => {
        if (res.authSetting['scope.userInfo']) {
          return getUserInfo()
        }
        return undefined
      }).then(res => {
        if (!res) { 
          return
        }
        // 通知页面我获取到了用户信息
        resolve(res.userInfo)
    }).catch(reject)
    }),
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    
  },
})