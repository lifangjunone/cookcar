/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    // userInfo?: WechatMiniprogram.UserInfo,
    userInfo : Promise<WechatMiniprogram.UserInfo>
  }
  // userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}