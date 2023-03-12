/**
*   @author liang
*   2019.01.10
*   新增边线效果
*   https://github.com/Mying666/myEcTooltip
*/
let data = [
     { name: '北京', value: 57 },
    { name: '张家口', value: 47 },
    { name: '上海', value: 3 },
    { name: '上海', value: 3 },
    { name: '佛山', value: 22 },
    { name: '嘉兴', value: 6 },
    { name: '黔西南州', value: 17 },
    { name: '湖州', value: 34 },
    { name: '苏州', value: 33 },
    { name: '无锡',  value: 5},
    { name: '南京', value: 5 },
    { name: '太原', value: 55 },
    { name: '晋中', value: 23 },
    { name: '西安', value: 4 },
    { name: '长沙', value: 49 },
    { name: '株洲', value: 17 },
    { name: '武汉', value: 57 },
    { name: '荆州', value: 10 },
    { name: '黄石', value: 21 },
    { name: '合肥', value: 54 },
    { name: '九华山', value: 5 },
    { name: '泉州', value: 45 },
    { name: '福州', value: 9 },
    { name: '九江', value: 3 },
    { name: '仙桃', value: 63 },
    { name: '天门', value: 10 },
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

option = {
   
    backgroundColor: '#404a59',

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
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 50)),
            symbolSize: function (val) {
                return val[2] / 5;
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
            zlevel: 1
        }
    ]
};


