/**
*   @author liang
*   2019.01.10
*   新增边线效果
*   https://github.com/Mying666/myEcTooltip
*/
let data = [
    { name: '张家口', value: 47 },
    { name: '佛山', value: 22 },
    { name: '黔西南州', value: 17 },
    { name: '苏州', value: 33 },
    { name: '太原', value: 55 },
    { name: '晋中', value: 23 },
    { name: '长沙', value: 49 },
    { name: '株洲', value: 17 },
    { name: '合肥', value: 54 },
    { name: '泉州', value: 45 },
    { name: '福州', value: 9 },
    { name: '仙桃', value: 63 },
    { name: '东戴河', value: 28 },
    { name: '广州', value: 29 }

];
let geoCoordMap = {
   '北京':[116.4,39.9],
    '张家口':[114.9,40.8],
    '上海':[121.5,31.2],
    '佛山':[113.1,23],
    '惠州':[114.4,23.1],
    '嘉兴':[120.8,30.7],
    '黔西南州':[104.9,25.1],
    '湖州':[120.1,30.9],
    '苏州':[120.6,31.3],
    '无锡':[120.3,31.5],
    '南京':[118.8,32.1],
    '太原':[112.5,37.9],
    '晋中':[112.7,37.7],
    '西安':[108.9,34.3],
    '长沙':[112.9,28.2],
    '株洲':[113.2,27.8],
    '武汉':[114.3,30.6],
    '荆州':[112.2,30.3],
    '黄石':[115,30.2],
    '合肥':[117.2,31.8],
    '九华山':[117.8,30.5],
    '泉州':[118.7,24.9],
    '福州':[119.3,26.1],
    '南昌':[115.9,28.7],
    '九江':[116,29.7],
    '仙桃':[113.4,30.4],
    '天门':[113.2,30.7],
    '东戴河':[119.9,40],
    '广州':[113.3,23.1],

    '大庆':[125.03,46.58]
};

let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

/**
* priority  tooltip朝向（top/bottom）
* left, top 为默认值
* 根据展示内容需要微调text的宽高
*/
option = {
    title: {
        top: 10,
        text: '地图3D效果（大佬帮忙配个色）',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: 'rgba(0, 10, 52, 1)',
    legend: {
        show:false
    },
    tooltip: {
        show: true
    },
    geo: {
        map: 'china',
        aspectScale: 1,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                // areaColor: {
                //     type: 'radial',
                //     x: 1,
                //     y: 1,
                //     r: 1,
                //     colorStops: [{
                //         offset: 0,
                //         color: 'rgba(147, 235, 248, .9)' // 0% 处的颜色
                //     }, {
                //         offset: 1,
                //         color: 'rgba(147, 235, 248, .9)' // 100% 处的颜色
                //     }],
                //     globalCoord: false // 缺省为 false
                // },
                shadowColor: 'rgba(128, 217, 248, .2)',
                shadowOffsetX: -12,
                shadowOffsetY: 12,
                shadowBlur: 1
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        z: 2
    },
    series : [
        // {
        //     type: 'map',
        //     map: 'china',
        //     tooltip: {
        //         show: false  
        //     },
        //     label: {
        //         emphasis: {
        //             show: false
        //         }
        //     },
        //   top: '20.8%',
        //     left: '10.8%',
        //     aspectScale: 1,
        //     roam: false,
        //     itemStyle: {
        //         normal: {
        //             borderColor: 'rgba(147, 235, 248, 0.6)',
        //             borderWidth: 1,
        //             areaColor: 'rgba(147, 235, 248, 0)'
        //         },
        //         emphasis: {
        //             areaColor: 'rgba(147, 235, 248, 0)'
        //         }
        //     },
        //     zlevel: 1
        // },
       /* {
            name: 'map Test',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 50)),
            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            symbolSize: function (val) {
                return val[2] / 2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 10
        }*/
    ]
};
