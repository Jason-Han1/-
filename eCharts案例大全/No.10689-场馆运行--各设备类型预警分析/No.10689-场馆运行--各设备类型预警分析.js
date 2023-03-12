var textName = '各资' + '\n' + '源数';
var dataArr = [{
        value: 67,
        name: '环境资源'
    },
    {
        value: 83,
        name: '安保资源'
    },
    {
        value: 67,
        name: '消防资源'
    },
    {
        value: 55,
        name: '监控资源'
    },
    {
        value: 79,
        name: '物联网设备'
    },
    {
        value: 19,
        name: '应急资源'
    },
];
var total = 0;
for (var j = 0; j<dataArr.length;j++){
    total += dataArr[j].value;
}
var rich = {
    pale: {
        color: '#CBCBCB',
        fontSize: 25
    },
    bule: {
        color: '#01B8FE',
        fontSize: 25,
        padding:4
    },
    hr:{
        padding:5
    }
}
option = {
    backgroundColor: '#000',
    title: {
        text: textName,
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#CFE0EA',
            fontSize: 30,
            fontWeight: 'normal'
        }
    },
    angleAxis: {
        interval: 1,
        type: 'category',
        startAngle: 120,
        data: dataArr,
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#fff",
            margin: 8,
            fontSize: 16,
            formatter: function(params) {
                var percent = Math.round((params / total)*100) + '%';
                for (var i = 0; i < option.series[0].data.length; i++) {
                        return '{pale|'+ option.series[0].data[i].name +'}\n{bule|' + percent + '}{hr|' + '}{bule|' +params+ "项" + '}';
                }
            },
            rich: rich
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#00c7ff',
                type: 'solid'
            }
        },
        splitArea: {
            // show: true,
            areaStyle: {
                // color: ["rgba(3,10,36,1)"]
            }
        },


    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                // color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            // color: "#00c7ff",
            fontSize: 16
        },
        splitLine: {
            //  show: false,
            lineStyle: {
                color: "transparent",
                // width: 0,
                // type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        z: 1
    },
    polar: {},
    series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#071E48',
                    borderWidth: 2,
                    borderColor: '#00c7ff',

                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        console.log(params)
                        // return '{pale|' + params.name + '}\n{bule|' + params.value + '}{blue|' + '}';
                    },
                    rich: rich
                },
            },
            data: dataArr,
            coordinateSystem: 'polar',
        },
        { //各资源数
            "type": "pie",
            "center": ["50%", "50%"],
            "radius": ["15%", "14.5%"],
            "hoverAnimation": false,
            "data": [{
                "name": "",
                "value": 45,
                "z": 5,
                "labelLine": {
                    "show": false,
                },
                itemStyle: {
                    normal: {
                        color: '#CFE0EA'
                        // shadowColor: 'rgba(79,175,226,1)',
                        // shadowBlur: 20
                    }
                },
                label: {
                    normal: {
                        position: 'inner', //隐藏引导线
                        show: false //隐藏标识文字
                    }
                }
            }, ]
        },
    ],
};