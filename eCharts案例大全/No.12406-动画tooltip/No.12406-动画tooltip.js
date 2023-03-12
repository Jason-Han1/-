/**
*   2019.01.07
*/
let data = [
{name: '扬州 1', value: 40},
/*{name: '北京 28', value: 200},
{name: '南京 4', value: 100},
{name: '合肥 3', value: 70},
{name: '重庆 2', value: 60},
{name: '郑州 2', value: 60},
{name: '徐州 1', value: 50},
{name: '武汉 1', value: 40},
{name: '常州 1', value: 40},
{name: '大连 1', value: 40},
{name: '沈阳 1', value: 40},
{name: '青岛 2', value: 40},
{name: '保定 1', value: 40},
{name: '济南 2', value: 60},
{name: '石家庄 2', value: 60},
{name: '长沙 2', value: 60},
{name: '成都 1', value: 40},
{name: '哈尔滨 1', value: 40},
{name: '太原 1', value: 40},
{name: '苏州 1', value: 40},
{name: '扬州 1', value: 40},*/
]; 
let geoCoordMap = {
'扬州 1':[119.42,32.39],
/*'北京 28':[116.40,39.90],
'南京 4':[118.76,32.04],
'合肥 3':[117.00,32.00],
'重庆 2':[106.54,29.59],
'郑州 2':[113.67,34.76],
'徐州 1':[117.20,34.26],
'武汉 1':[114.29,30.58],
'常州 1':[119.95,31.78],
'大连 1':[121.62,38.92],
'沈阳 1':[123.43,41.80],
'青岛 2':[120.33,36.07],
'保定 1':[115.47,38.87],
 '济南 2':[116.98,36.67],
'石家庄 2':[114.26,38.03],
'长沙 2':[112.93,28.23],
'成都 1':[104.07,30.67],
'哈尔滨 1':[126.63,45.75],
'太原 1':[112.53,37.87],
'潍坊 1':[119.1,36.62],
'苏州 1':[120.62,31.32],
'扬州 1':[119.42,32.39],*/
}; 

let convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
let convertData2 = function (data) {
            let res = [];
            for (let i = 0; i < data.length; i++) {
                let geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        coord:[geoCoord[0],geoCoord[1]],
                    });
                    console.info(res)
                }
            }
            return res;
        };
let tooltipDom = '<canvas id="tCanvas" width="200" height="80">123</canvas>'
var max = 480,
min = 9; // todo
var maxSize4Pin = 50,
minSize4Pin = 20;
var url = "http://pic3.nipic.com/20090702/918855_174429094_2.jpg";
var img=document.createElement("img");
img.src=url;
img.style = {
    width: '2px',
    height: '2px',
    backgroundSize: '100%',
}

option = {
    backgroundColor: '#4d4d4d',
    tooltip : {
        trigger: 'item',
        triggerOn: 'click',
        backgroundColor: 'transparent',
        alwaysShowContent: true,
        position (pos) {
            return pos
        },
        formatter (params) {
            //canvasAnimation(params)
            return "<img src='https://dg-img.oss-cn-shenzhen.aliyuncs.com/headicon/4187355-004781d447d5e94557f7663192491f62.jpg' style='width:30px; height:30px; border-radius:50%;'></div>"
        }
    },
    legend: {
        show:false
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48', /*中国地图颜色*/
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: 'Tooltip Test',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right', /*文字显示位置*/
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFE503', /*原点颜色#FFE503,#02BCEB*/
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
       /* {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return (a * val[2] + b * 2)  ;
                    },
                    itemStyle: {
                        borderWidth:0,
                        color: {
                            image : img,
                        }
                    },
                    markPoint : {
                        data: convertData2(data)
                    },
                    zlevel: 6,
                    data: convertData(data)
                }*/ /*去掉蓝色气泡*/
    ]
};

const canvasAnimation = params => {
    setTimeout(function() {
        let canvas = document.querySelector('#tCanvas')
        let ctx = canvas.getContext("2d")
        let a = {a: 0}
        TweenMax.to(a, 1, {
            a: 1,
            onUpdate () {
                ctx.clearRect(0,0,200,80)
                let s = a.a
                ctx.font= 20*s + "px Georgia";
                ctx.fillStyle="red";
                ctx.fillRect(0,0,150*s,80*s);
                ctx.strokeText(params.name,10*s,45*s)
            }
        })
        
    }, 0);
}

function autoPlay(){
   setInterval(function(){ 

    
   }, 3000);
}
autoPlay();


