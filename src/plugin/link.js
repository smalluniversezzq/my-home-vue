export default {
  install (Vue, options) {
    // console.log(Vue, "as", options, 'Vue, options')
    Vue.prototype.jumpTo = function (path) {
      options.router.push(path)
    }
    Vue.prototype.noPastTo = function (path) {
      options.router.replace(path)
    }
    Vue.prototype.goBack = function (path) {
      window.history.length > 1 ? options.router.go(-1) : options.router.push('/')
    }
    Vue.prototype.hide = function () {
    }
    Vue.prototype.jumpOpen = function(url){
      window.open(url)
    }
    Vue.prototype.jumpTos = function (item) {
      switch (item.types) {
        case 'homeDetail':
          options.router.push({'name': item.types, 'query': {'title': item.goodsId}})
          break
        case 'seller':
          options.router.push({'name': item.types, 'query': {'id': item.shopsId}})
          break
        case 'productList':
          options.router.push({'name': item.types, 'query': {'id': item.goodsCid}})
          break
        case 'category':
          options.router.push({'name': item.types, 'query': {'type': item.shopsCid}})
          break
        case 'cart':
          options.router.push(item.types)
          break
        case 'shopProductList':
          options.router.push(item.types)
          break
        case 'httpUrl':
          plus.runtime.openWeb(item.link)
          break
        default:
          options.router.push(item.types)
      }
    }
  }
}