/**
 * Created by zhuliang on 2017/4/6.
 */
global.SERVICEURL="http://localhost:8080"


if(process.env.NODE_ENV=="production"){
  global.SERVICEURL="http://localhost:9090"
}









