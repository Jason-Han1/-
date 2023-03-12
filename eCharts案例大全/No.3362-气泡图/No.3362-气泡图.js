var geoCoordMap = {
    省直: [113.165412, 34.750975],
    郑州市: [113.665412, 34.757975],
    开封市: [114.341447, 34.797049],
    洛阳市: [112.434468, 34.663041],
    平顶山市: [113.300848978, 33.7453014565],
    安阳市: [114.351806508, 36.1102667222],
    鹤壁市: [114.297769838, 35.7554258742],
    新乡市: [113.912690161, 35.3072575577],
    焦作市: [113.211835885, 35.234607555],
    濮阳市: [115.026627441, 35.7532978882],
    漯河市: [114.0460614, 33.5762786885],
    三门峡市: [111.181262093, 34.7833199411],
    南阳市: [112.542841901, 33.0114195691],
    商丘市: [115.641885688, 34.4385886402],
    信阳市: [114.085490993, 32.1285823075],
    周口市: [114.654101942, 33.6237408181],
    许昌市: [113.83531246, 34.0267395887],
    驻马店市: [114.049153547, 32.9831581541],
    济源市: [112.608898,35.074838],
};

var data = [
    {
        name: '郑州市',
        value: 526,
    },
    {
        name: '开封市',
        value: 320,
    },
    {
        name: '洛阳市',
        value: 205,
    },
    {
        name: '平顶山市',
        value: 150,
    },
    {
        name: '商丘市',
        value: 120,
    },
    {
        name: '省直',
        value: 775,

    },
    {
        name: '济源市',
        value: 1,

    },
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                sizeN:data[i].sizeN
            });
        }
    }
    return res;
};

var convertedData = 
    convertData(
        data.sort(function (a, b) {
                return b.value - a.value;
            })
    )
;
i = 80;

var option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#0f378f', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#00091a', // 100% 处的颜色
            },
        ],
        globalCoord: false, // 缺省为 false
    },

    animationDurationUpdate: 1000,

    // title: {
    //     padding: 20,
    //     text: '虚构疫情状况',
    //     subtext: '国家卫健委测',
    //     sublink: 'http://www.nhc.gov.cn',
    //     x: 'left',
    //     textStyle: {
    //         color: '#fff',
    //     },
    //     subtextStyle: {
    //         fontStyle: 'italic',
    //     },
    // },

    tooltip: {
        trigger: 'item',
    },

    grid: {
        right: '2%',
        top: '20%',
        bottom: '15%',
        width: '15%',
    },

   

    visualMap: {
        show: false,
        pieces: [
            {
                min: 600,
            },
            {
                min: 500,
                max: 600,
            },
            {
                min: 400,
                max: 500,
            },
            {
                min: 300,
                max: 400,
            },
            {
                min: 200,
                max: 300,
            },
            {
                min: 100,
                max: 200
            },
            {
                min: 50,
                max: 100,
            },
            {
                max: 50,
            },
        ],
        inRange: {
            color: ['#50a3ba', '#eac736', 'red'],
        },
        textStyle: {
            color: '#fff',
        },
    },

    geo: {
        roam: true, //缩放平移
        scaleLimit: {
            min: 0.5,
            max: 10,
        },
        map: 'henan',
        label: {
            normal: {
                show: false,
                color: '#00ffff',
                fontSize: 14,
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff',
                },
            },
        },
        itemStyle: {
            //地图区块颜色
            normal: {
                areaColor: '#3a7fd5',
                borderColor: '#0a53e9', //线
                shadowColor: '#092f8f', //外发光
                shadowBlur: 20,
            },
            emphasis: {
                areaColor: '#0a2dae', //悬浮区背景
            },
        },
        emphasis: {
            itemStyle: {
                areaColor: '#123555',
                shadowColor: '#000',
                shadowBlur: 10,
            },
            label: {
                show: false,
            },
        },

        // regions: [{      //突出显示
        //     name: '南阳市',
        //     itemStyle: {
        //         areaColor: 'red'
        //     },
        //     emphasis: {            //鼠标悬浮背景颜色
        //         itemStyle: {
        //             areaColor: 'yellow',
        //             shadowColor: 'yellow',
        //             shadowBlur: 10
        //         },
        //     }
        // }],
    },

    series: [
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            // symbolSize: [50,50],
            data: convertedData,
            symbolSize: function (params) {
                i = i - 4
                return  i
            },
            label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                    formatter(value) {
                        return value.data.value[2];
                    },
                    // padding: [10,10,10,10]
            },
            itemStyle: {
                normal: {
                    color: '#ddb926',
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + params.value[2];
                },
            },
        },
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [2, 2],
            data: convertedData,
            // symbolSize: function(params) {
            //     return (30 + Math.log2(params[2]));
            // },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#00ffff',
                        fontSize: 14,
                    },
                    formatter(value) {
                        return value.name;
                    },
                    position: 'bottom',
                },
            },
            itemStyle: {
                normal: {
                    color: '#ddb926',
                },
            },
        },
    ],
};


