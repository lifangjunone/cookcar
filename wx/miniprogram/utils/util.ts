export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export function getSetting() :Promise<WechatMiniprogram.GetSettingSuccessCallbackResult> {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: resolve,
      fail: reject,
    })
  })
}

export function getUserInfo() : Promise<WechatMiniprogram.GetUserInfoSuccessCallbackResult> {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve,
      fail: reject,
    })
  })
}

// export function getUserInfo() : Promise<WechatMiniprogram.GetUserProfileSuccessCallbackResult> {
//     return new Promise((resolve, reject) => {
//       // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//       wx.getUserProfile({
//           desc: "展示用户信息",
//           success: resolve,
//           fail: reject,
//       })
//     })
// }