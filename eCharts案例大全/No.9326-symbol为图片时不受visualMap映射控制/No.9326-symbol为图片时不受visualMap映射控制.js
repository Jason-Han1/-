 var chinaGeoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '大庆': [126.9688, 45.868],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 0.88
    }],
    [{
        name: '内蒙古',
        value: 0.12
    }],
    [{
        name: '吉林',
        value: 0.89
    }],
    [{
        name: '辽宁',
        value: 0.86
    }],
    [{
        name: '河北',
        value: 0.88
    }],
    [{
        name: '北京',
        value: 0.83
    }],
    [{
        name: '天津',
        value: 0.71
    }],
    [{
        name: '山西',
        value: 0.63
    }],
    [{
        name: '陕西',
        value: 0.56
    }],
    [{
        name: '宁夏',
        value: 0.17
    }],
    [{
        name: '云南',
        value: 0.11
    }],
    [{
        name: '四川',
        value: 1
    }],
    [{
        name: '重庆',
        value: 0.80
    }],
    [{
        name: '山东',
        value: 0.77
    }],
    [{
        name: '河南',
        value: 0.75
    }],
    [{
        name: '江苏',
        value: 0.88
    }],
    [{
        name: '安徽',
        value: 0.73
    }],
    [{
        name: '湖北',
        value: 0.75
    }],
    [{
        name: '浙江',
        value: 0.82
    }],
    [{
        name: '福建',
        value: 0.67
    }],
    [{
        name: '江西',
        value: 0.71
    }],
    [{
        name: '湖南',
        value: 0.75
    }],
    [{
        name: '广东',
        value: 0.78
    }],
    [{
        name: '海南',
        value: 0.1
    }],
    [{
        name: '新疆',
        value: 0
    }],
    [{
        name: '上海',
        value: 0.91
    }]
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [126.9688, 45.868];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
var series = [];
[
    ['大庆', chinaDatas]
].forEach(function(item, i) {
    console.log(item)
    series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
              //  period: 4, //箭头指向速度，值越小速度越快
               trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABvCAYAAAA0YEQFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGYGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0xMS0xOFQwOToyNTozMCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTEtMThUMDk6NDk6MDIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTEtMThUMDk6NDk6MDIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmEyODRlZjc1LTlhMzgtMmQ0Yi05NTZmLTY5MThiMjE2ZDc4MiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc5N2JjZjRmLTIzZjQtOWU0ZC05OGFkLWFmZDQ3ZjAzZDkxMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmNhZDM5OTQ2LWM5OWQtNDc0Ny05NjZkLTQ2NDIyMzI1NjU5NSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0ZDljY2M4Mi04ZDIxLWI0NGUtYTkzMC0xN2Q4MThmZjJhODU8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYWQzOTk0Ni1jOTlkLTQ3NDctOTY2ZC00NjQyMjMyNTY1OTUiIHN0RXZ0OndoZW49IjIwMTktMTEtMThUMDk6MjU6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEyODRlZjc1LTlhMzgtMmQ0Yi05NTZmLTY5MThiMjE2ZDc4MiIgc3RFdnQ6d2hlbj0iMjAxOS0xMS0xOFQwOTo0OTowMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sjwD3AAATJklEQVR4nO2dS48kRxHHf93Tu+tZe3dt8MrClrFkmxMfge/AgQ/rEyeOnLjAAWQhXvIDr5d9zM5Mv4pDdUxFR0dkRlZVG5AIqVRVWZGPyn/GPyIzq2cWXdfxf/nfldUCFvRH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', //箭头图标
                symbolSize: 100, //图标大小
            },
            lineStyle: {
                normal: {
                   // width: 1, //尾迹线条宽度
                    //opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function(params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 13
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 5 + val[2] * 5; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        //被攻击点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //offset:[5, 0],
                    color: '#0f0',
                    formatter: '{b}',
                    textStyle: {
                        color: "#0f0"
                    }
                },
                emphasis: {
                    show: true,
                    color: "#f60"
                }
            },
            symbol: 'pin',
            symbolSize: 50,
            data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
            }],
        }
    );
});

option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
    },
    backgroundColor: "#013954",
    visualMap: { //图例值控制
        min: 0,
        max: 1,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
            }
        }
    },
    series: series
};