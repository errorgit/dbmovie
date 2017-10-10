(function (angular) {
    angular.module('uglyJsonp', [])
        .service('uJsonp', ['$document','$window', function ($document,$window) {
            this.jsonp = function (url, data) {
                //添加请求参数
                var queryString = '?';
                for( var item in data){
                   if(item != 'callback'){
                       queryString+=item+'='+data[item]+'&';
                   } 
                }
                //添加请求回调函数名
                var cbName = 'uglyjsonp'+Math.random().toString().replace('.','');
                queryString+= 'callback='+cbName;
                //组合成请求url
                var requestUrl = url + queryString;
                //添加全局函数
                $window[cbName] = function(jsonData) {
                    data.callback(jsonData);
                    $document[0].body.removeChild(newTag);
                }
//                $window[cbName] = data.callback;
                //创建script元素
                var newTag = $document[0].createElement('script');
                //设置标签的src
                newTag.setAttribute('src', requestUrl);
                //添加方法,等script下载完成,追加到html文档
                $document[0].body.appendChild(newTag);
//console.log('service');
            }
    }]);
})(angular);
