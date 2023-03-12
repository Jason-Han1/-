var cities = [{

        name: '河北',

        value: 10

    },

    {

        name: '北京',

        value: 14

    },

    {

        name: '上海',

        value: 4

    },

    {

        name: '黑龙江',

        value: 5

    },

    {

        name: '吉林',

        value: 7

    },

    {

        name: '辽宁',

        value: 6

    },

    {

        name: '内蒙古',

        value: 4

    },

    {

        name: '新疆',

        value: 4

    },

    {

        name: '西藏',

        value: 1

    },

    {

        name: '甘肃',

        value: 5

    },

    {

        name: '青海',

        value: 1

    },

    {

        name: '海南',

        value: 0

    },

    {

        name: '天津',

        value: 6

    },

    {

        name: '山西',

        value: 4

    },

    {

        name: '宁夏',

        value: 2

    },

    {

        name: '山东',

        value: 14

    },

    {

        name: '陕西',

        value: 8

    },

    {

        name: '河南',

        value: 14

    },

    {

        name: '江苏',

        value: 21

    },

    {

        name: '安徽',

        value: 7

    },

    {

        name: '湖北',

        value: 9

    },

    {

        name: '四川',

        value: 10

    },

    {

        name: '重庆',

        value: 4

    },

    {

        name: '江西',

        value: 6

    },

    {

        name: '浙江',

        value: 2

    },

    {

        name: '湖南',

        value: 7

    },

    {

        name: '贵州',

        value: 3

    },

    {

        name: '福建',

        value: 6

    },

    {

        name: '云南',

        value: 4

    },

    {

        name: '广西',

        value: 4

    },

    {

        name: '广东',

        value: 8

    },

    {

        name: '香港',

        value: 0

    },

    {

        name: '澳门',

        value: 0

    },

    {

        name: '台湾',

        value: 0

    },

].sort(function(a, b) {

    return b.value - a.value;

});

var labelOption = {

    show: true,

    lineHeight: 20,

    align: 'left',

    position: 'top',

    rich: {

        name: {

            color: '#fff',

            fontSize: 16,

            textShadowBlur: 2,

            textShadowColor: '#000',

            textShadowOffsetX: 0,

            textShadowOffsetY: 1,

            textBorderColor: '#333',

            textBorderWidth: 2

        },

        value: {

            fontSize: 14,

            color: 'rgb(84,184,167)'

        },

        desc: {

            color: 'rgb(85,85,85)',

            textBorderColor: '#000',

            textBorderWidth: 1,

            fontSize: 12

        },

    }

};

var xData = [],

    vData = [],

    lineData = [],

    pointData = [];

cities.forEach(function(city, index) {

    xData.push(city.name);

    vData.push({

        value: city.value,

        //symbol: pathSymbols.run,

        symbol: 'circle',

        symbolSize: 10,

        color: 'red',

    });


    let coord1 = [index, city.value + 0.5];

    let coord2;

    if (index === 0) {

        coord2 = [index, city.value + 2];

    } else {

        if (city.value === cities[index - 1].value) {

            coord2 = [index, pointData[index - 1].coord[1]];

        } else {

            coord2 = [index, cities[index - 1].value];

        }


    }

    pointData.push(Object.assign({}, {

        label: Object.assign({}, labelOption, {

            formatter: [

                '{name|' + city.name + '}\n',

                '{value|' + city.value + '}'

                //'{desc|'+item.data.desc+'}'

            ].join('')

        }),

        coord: coord2

    }))

    lineData.push(

        [{

            xAxis: index,

            coord: coord1

        }, {

            xAxis: index,

            coord: coord2

        }]);

});

var axisLabelTextColor = 'rgb(135,135,135)';

option = {

    backgroundColor: 'rgb(41,41,43)',

    title: {

        text: '中国GIS高校分布-2014年',

        x: 'center',

        y: 10,

        textStyle: {

            color: '#B4B4B4',

            fontSize: 18,

            fontWeight: 'normal',

        },

    },

    xAxis: {

        data: xData,

        axisLabel: {

            textStyle: {

                color: axisLabelTextColor

            },

            rotate: 45,

        },

    },

    yAxis: {

        name: "数量(所)",

        nameTextStyle: {

            color: axisLabelTextColor

        },

        splitLine: {

            show: false

        },

        axisTick: {

            show: false

        },

        axisLine: {

            show: true

        },

        axisLabel: {

            color: axisLabelTextColor

        }

    },

    series: [{

        name: '省份',

        type: 'pictorialBar',

        symbol: 'triangle',

        symbolPosition: 'start',

        itemStyle: {

            normal: {

                //opacity: 0.5

            },

            emphasis: {

                opacity: 1

            },

        },

        color: {

            type: 'linear',

            x: 0,

            y: 0,

            x2: 0,

            y2: 1,

            colorStops: [{

                offset: 1,

                color: 'rgb(78,9,72)' // 0% 处的颜色

            }, {

                offset: 0,

                color: 'rgb(255,0,0)' // 100% 处的颜色

            }],

        },

        data: cities,

        z: 10,

        markLine: {

            symbol: [0, 'none'],

            label: {

                normal: {

                    show: false

                }

            },

            lineStyle: {

                normal: {

                    color: 'rgb(80,80,80)',

                    width: 1

                },

                emphasis: {

                    width: 1,

                    type: 'dashed'

                },

            },

            data: lineData

        },

        markPoint: {

            symbol: 'circle',

            symbolSize: 0.1,

            data: pointData

        }

    }, {

        name: '数量',

        type: 'pictorialBar',

        symbolPosition: 'end',

        color: 'rgb(0,255,0)',

        //color:'rgba(156,107,211,0.5)',

        symbolOffset: [0, -10],

        data: vData

    }]

};