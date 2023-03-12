var mapIcons = {
    sign: '/asset/get/s/data-1593933773676-FDpSjX2lK.png',
    bg: '/asset/get/s/data-1593933762711-IHRMda0Rg.png',
};

/*
使用富文本制作复杂标签
wx:yangtaoxf

参考以下文章和作品，感谢相关作者
https://gallery.echartsjs.com/editor.html?c=x9dsJQiYl
https://gallery.echartsjs.com/editor.html?c=x_jX_bJ42L
https://hacpai.com/article/1591878043990
https://blog.csdn.net/liangayang/article/details/83311433
*/

// 全国省份列表
var geoCoordMap = {
    台湾: [121.509062, 25.044332],
    河北: [114.502461, 38.045474],
    山西: [112.549248, 37.857014],
    内蒙古: [111.670801, 40.818311],
    辽宁: [123.429096, 41.796767],
    吉林: [125.3245, 43.886841],
    黑龙江: [126.642464, 45.756967],
    江苏: [118.767413, 32.041544],
    浙江: [120.153576, 30.287459],
    安徽: [117.283042, 31.86119],
    福建: [119.306239, 26.075302],
    江西: [115.892151, 28.676493],
    山东: [117.000923, 36.675807],
    河南: [113.665412, 34.757975],
    湖北: [114.298572, 30.584355],
    湖南: [112.982279, 28.19409],
    广东: [113.280637, 23.125178],
    广西: [108.320004, 22.82402],
    海南: [110.33119, 20.031971],
    四川: [104.065735, 30.659462],
    贵州: [106.713478, 26.578343],
    云南: [102.712251, 25.040609],
    西藏: [91.132212, 29.660361],
    陕西: [108.948024, 34.263161],
    甘肃: [103.823557, 36.058039],
    青海: [101.778916, 36.623178],
    宁夏: [106.278179, 38.46637],
    新疆: [87.617733, 43.792818],
    北京: [116.405285, 39.904989],
    天津: [117.190182, 39.125596],
    上海: [121.472644, 31.231706],
    重庆: [106.504962, 29.533155],
    香港: [114.173355, 22.320048],
    澳门: [113.54909, 22.198951],
};
var markPointData = [
    {
        name: '新疆',
        coord: [87.665966, 43.869561, 90],
        runConut: '537',
        num: '234',
    },
];

function randomData() {
    return Math.round(Math.random() * 500);
}

var dataMap = [
    {
        name: '北京',
        value: '100',
    },
    {
        name: '天津',
        value: randomData(),
    },
    {
        name: '上海',
        value: randomData(),
    },
    {
        name: '重庆',
        value: randomData(),
    },
    {
        name: '河北',
        value: randomData(),
    },
    {
        name: '河南',
        value: randomData(),
    },
    {
        name: '云南',
        value: randomData(),
    },
    {
        name: '辽宁',
        value: randomData(),
    },
    {
        name: '黑龙江',
        value: randomData(),
    },
    {
        name: '湖南',
        value: randomData(),
    },
    {
        name: '安徽',
        value: randomData(),
    },
    {
        name: '山东',
        value: randomData(),
    },
    {
        name: '新疆',
        value: randomData(),
    },
    {
        name: '江苏',
        value: randomData(),
    },
    {
        name: '浙江',
        value: randomData(),
    },
    {
        name: '江西',
        value: randomData(),
    },
    {
        name: '湖北',
        value: randomData(),
    },
    {
        name: '广西',
        value: randomData(),
    },
    {
        name: '甘肃',
        value: randomData(),
    },
    {
        name: '山西',
        value: randomData(),
    },
    {
        name: '内蒙古',
        value: randomData(),
    },
    {
        name: '陕西',
        value: randomData(),
    },
    {
        name: '吉林',
        value: randomData(),
    },
    {
        name: '福建',
        value: randomData(),
    },
    {
        name: '贵州',
        value: randomData(),
    },
    {
        name: '广东',
        value: randomData(),
    },
    {
        name: '青海',
        value: randomData(),
    },
    {
        name: '西藏',
        value: randomData(),
    },
    {
        name: '四川',
        value: randomData(),
    },
    {
        name: '宁夏',
        value: randomData(),
    },
    {
        name: '海南',
        value: randomData(),
    },
    {
        name: '台湾',
        value: randomData(),
    },
    {
        name: '香港',
        value: randomData(),
    },
    {
        name: '澳门',
        value: randomData(),
    },
];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
console.log(res);
    return res;
};

var option = {
      dataset:{
	source: [
 [116.405285, 39.904989, 100],
[117.190182, 39.125596, 500],
[121.472644, 31.231706, 77],
[106.504962, 29.533155, 103],
[114.502461, 38.045474, 141],
[113.665412, 34.757975, 48],
 [102.712251, 25.040609, 90],
[123.429096, 41.796767, 447],
 [126.642464, 45.756967, 74],
 [112.982279, 28.19409, 400],
[117.283042, 31.86119, 29],
[117.000923, 36.675807, 50],
 [87.617733, 43.792818, 274],
[118.767413, 32.041544, 250],
 [120.153576, 30.287459, 137],
 [115.892151, 28.676493, 416],
[114.298572, 30.584355, 184],
 [108.320004, 22.82402, 138],
[103.823557, 36.058039, 223],
[112.549248, 37.857014, 451],
 [111.670801, 40.818311, 108],
[108.948024, 34.263161, 122],
 [125.3245, 43.886841, 367],
 [119.306239, 26.075302, 274],
 [106.713478, 26.578343, 283],
[113.280637, 23.125178, 350],
 [101.778916, 36.623178, 192],
 [91.132212, 29.660361, 172],
[104.065735, 30.659462, 11],
[106.278179, 38.46637, 29],
 [110.33119, 20.031971, 396],
[121.509062, 25.044332, 388],
[114.173355, 22.320048, 119],
 [113.54909, 22.198951, 35]
		 ]
},
    grid: {},
    geo: {
        map: 'china',
        //"center": [0, 12],
        aspectScale: 0.8,
        roam: true,
        scaleLimit: {
            min: 1.2,
            max: 15,
        },

        zoom: 1.2,
    },
    series: [
        {
            name: '热力图',
            type: 'heatmap',
            minAlpha: 0.5,
            coordinateSystem: 'geo',
        },
    ],
    visualMap: [
        {
            show: true,
            left: '10%',
            bottom: '5%',
            max: 500,
            min: 0,
            z: 999,
            calculable: false,
            text: ['高', '低'],
            inRange: {
                color: ['#0033FF', '#FFFF00', '#FF3333'],
            },
            textStyle: {
                color: '#fff',
            },
            seriesIndex: 0,
        },
    ],
};

var currentPage = 1,
    pageSize = 5,
    len = dataMap.length;

setInterval(function () {
    var start = currentPage == 1 ? 0 : (currentPage - 1) * pageSize;
    var end = currentPage * pageSize + 1;
    var data = [];
    var labelData = [];
    if (end > len) {
        labelData = dataMap.slice(start);
        //	data=convertData(dataMap.slice(start));

        currentPage = 1;
    } else {
        labelData = dataMap.slice(start, end);
        //data=convertData(dataMap.slice(start,end));

        currentPage = currentPage + 1;
    }

    myChart.setOption({
        geo: {
            map: 'china',
            //"center": [0, 12],
            aspectScale: 0.8,
            roam: true,
            scaleLimit: {
                min: 1.2,
                max: 15,
            },

            zoom: 1.2,

            label: {
                //标签样式设置

                normal: {
                    show: true,
                    formatter: function (params) {
                        for (var i = 0; i < labelData.length; i++) {
                            if (params.name == labelData[i].name) {
                                //return "{div|\n{fontName|"+params.name+"}{fontVal|"+dataMap[i].value+"}\n{sign|}"

                                return '{div|' + params.name + '}\n{fontVal|' + labelData[i].value + '}\n{sign|}';
                            }
                        }
                        return params.name;
                    },
                    /*backgroundColor: {
                        	image: './static/img/bg.png'
                        },*/
                    color: '#FFFFFF',
                    verticalAlign: 'bottom',
                    rich: {
                        value: {
                            fontsize: 20,
                        },
                        fontName: {
                            shadowOffsetX: -1,
                            color: '#57F7FE',
                            fontSize: 10,
                        },
                        fontVal: {
                            height: 10,
                            color: '#ffffff',
                            fontSize: 14,
                            fontWeight: 900,
                            padding: [10, 3, 0, 0],
                        },
                        div: {
                            height: 25,
                            fontSize: 12,
                            lineHeight: 8,
                            //疑似 下 右 上 左
                            padding: [15, 3, 3, 0],
                            color: '#57F7FE',
                            backgroundColor: {
                                image: mapIcons.bg,
                            },
                        },
                        sign: {
                            position: 'absolute',
                            height: 30,
                            color: '#ffffff',
                            backgroundColor: {
                                image: mapIcons.sign,
                            },
                        },
                    },
                },
                emphasis: {
                    //鼠标移上去的样式
                    show: true,
                    //"fontSize": "16",
                    color: '#FFFFFF',
                },
            },
        },
    });
}, 2500);
