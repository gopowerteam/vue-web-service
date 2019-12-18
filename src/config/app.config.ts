export default {
  server: process.env.VUE_APP_SERVER, // 后端服务地址
  attch: process.env.VUE_APP_ATTACH, // 存放附件地址
  geoServer: process.env.VUE_APP_GEO_SERVER, // geoserver地址
  mapResouce: process.env.VUE_APP_MAP_RESOUCE, // 地图其他资源 3dtileset raster terrain
  webSocket: process.env.VUE_APP_WEB_SOCKET,
  debug: false, // process.env.NODE_ENV === 'development', //TODO 暂时关闭
  timeout: process.env.VUE_APP_TIMEOUT,
  root: process.env.WORK_DIR
}
