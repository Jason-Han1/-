var uploadedDataURL = "/asset/get/s/data-1625626157049-fN_7vO0_t.js";
data = [
   {	name:	'北京',	value:	6506	},
{	name:	'成都',	value:	1402	},
{	name:	'福州',	value:	1096	},
{	name:	'广州',	value:	24	},
{	name:	'贵阳',	value:	8442	},
{	name:	'哈尔滨',	value:	131426	},
{	name:	'海口',	value:	0	},
{	name:	'杭州',	value:	305	},
{	name:	'合肥',	value:	1771	},
{	name:	'呼和浩特',	value:	19896	},
{	name:	'济南',	value:	7715	},
{	name:	'昆明',	value:	2428	},
{	name:	'拉萨',	value:	222	},
{	name:	'兰州',	value:	4302	},
{	name:	'南昌',	value:	599	},
{	name:	'南京',	value:	90	},
{	name:	'南宁',	value:	0	},
{	name:	'上海',	value:	3091	},
{	name:	'沈阳',	value:	30716	},
{	name:	'石家庄',	value:	13697	},
{	name:	'太原',	value:	25152	},
{	name:	'天津',	value:	14843	},
{	name:	'乌鲁木齐',	value:	4294	},
{	name:	'武汉',	value:	1800	},
{	name:	'西安',	value:	25380	},
{	name:	'西宁',	value:	8390	},
{	name:	'银川',	value:	8398	},
{	name:	'长春',	value:	7100	},
{	name:	'长沙',	value:	284	},
{	name:	'郑州',	value:	8494	},
{	name:	'重庆',	value:	4672	},


];
var geoCoordMap = {
    南宁:[108.479, 23.1152],
    拉萨: [91.11, 29.97],
    南昌: [116.0046, 28.6633],
    上海: [121.48, 31.22],
    福州: [119.3, 26.08],
    广州: [113.23, 23.16],
    太原: [112.53, 37.87],
    昆明: [102.73, 25.04],
    海口: [110.35, 20.02],
    沈阳: [123.38, 41.8],
    银川: [106.27, 38.47],
    呼和浩特: [111.65, 40.82],
    成都: [104.06, 30.67],
    西安: [108.95, 34.27],
    重庆: [106.54, 29.59],
    南京: [118.78, 32.04],
    贵阳: [106.71, 26.57],
    北京: [116.46, 39.92],
    乌鲁木齐: [87.68, 43.77],
    杭州: [120.19, 30.26],
    兰州: [103.73, 36.03],
    天津: [117.2, 39.13],
    郑州: [113.65, 34.76],
    哈尔滨: [126.63, 45.75],
    石家庄: [114.48, 38.03],
    长沙: [113, 28.21],
    合肥: [117.27, 31.86],
    武汉: [114.31, 30.52],
    济南: [117.1582, 36.8701],
    西宁:[101.4038, 36.8207]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#404a59',
    title: {
        text: '全国主要城市空气废气中污染物排放情况',
        subtext: 'Top 20',

        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'item',
    },

    legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'center',
        data: ['生活烟尘'],
        textStyle: {
            color: '#fff',
        },
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111',
            },
            emphasis: {
                areaColor: '#2a333d',
            },
        },
    },
    series: [
        {
            name: '生活烟尘',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
                data
                    .sort(function (a, b) {
                        return b.value - a.value;
                    })
                    .slice(0, 20)
            ),
            symbolSize: function (val) {
                return val[2] / 2000;
            },
            encode: {
                vaue: 2,
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: '#ff0099',
                    shadowBlur: 10,
                    shadowColor: '#ff0099',
                },
            },
            zlevel: 1,
        },
    ],
};
