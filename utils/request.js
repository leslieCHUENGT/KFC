const config = {
  mock: {
    domain: 'https://www.fastmock.site/mock/5980c22bf140b3094c8a20a72a579bf1/app'
  }
}
const domain = config.mock.domain;
const app = getApp();
/*
url: 请求地址，必填；
data: 请求体，含义和
params: 一些例如header,timeout等参数，详见小程序开发文档。
ignoreError: 默认将会自动捕获reject
与官方不同的是，封装后的请求默认请求方式是post。
*/
const $request = (url,data = {},params = {}, ignoreError = true) => {
  let header = params.header || {};
  // 可以选择是否携带token
 // header["X-Access-Token"] = app.globalData["X-Access-Token"];

  const promise = new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    wx.request({
      url: domain + url,
      data,
      method: 'GET',
      ...params,
      header,
      success: (res) => {
        console.log(res)
        // code码为200，说明请求正常返回。
        if (res.statusCode === 200) {
          console.log(res.data)
          resolve(res.data.data);
        } else {
          wx.showToast({
            title: res.data.message || '--',
            mask:true,
            icon: 'none'
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        wx.showToast({
          title: JSON.stringify(err.errMsg),
          icon: 'none',
          mask: true
        });
        reject(err);
      },
      complete: () => {
        wx.hideLoading();
      }
    })

  })

  return ignoreError ? promise.catch(()=>{}) : promise;
};

module.exports = {
  $request:$request
}