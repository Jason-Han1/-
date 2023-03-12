var uploadedDataURL = "/asset/get/s/data-1608096528689-xJEypXyif.png";
var img = new Image();
img.src = uploadedDataURL;

var xData = ["工单", "影响客户"];
var yData1 = [100, 60];
var yData2 = [80, 40];
var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';

option = {
   backgroundColor:{
  image:img,
  repeat: 'repeat'
  },
    title: {
        text: '本年预安排停电',
        top: 5,
        left: '20%',
        textStyle: {
            fontSize: 18,
            color: '#fff'
        }
    },
    legend: {
        data: ['总数', '未复电数']
    },
    "grid": {
        "top": "25%",
        "left": "-5%",
        "bottom": "10%",
        "right": "5%",
        "containLabel": true
    },
    animation: false,
    "xAxis": [{
        "type": "category",
        "data": xData,
        "axisTick": {
            show: false,
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#fff"
        },
        "axisLine": {
            show: false,
            "lineStyle": {
                "color": "#82b0ec"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            margin: 20
        }
    }],
    "yAxis": [{
        show: false,
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
            "formatter": "{value}%"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
            //图例一顶部底片
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            color: "#68B4FF",
            data: [100, 60]
        },
        {//图例一柱底部底片
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [0, 5],
            z: 12,
            color: "#68B4FF",
            data: [80, 40]
        },
        {  //图例二柱顶部底片
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            color: "#FFCE69",
            data: [180, 100]
        },
        {  //图例三柱顶部底片
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            color: "red",
            data: [260, 140]
        },
        {
            type: 'bar',
            stack:'1',
            itemStyle: {
                normal: {
                    opacity: .7
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#3D83CD"
                },
                {
                    offset: 1,
                    color: "#0B3147"
                }
            ]),
            data: [{isd:'1',us:'2',value:'100'},{isd:'1',us:'2',value:'60'}]
        },
        {
            type: 'bar',
            stack:'1',
            itemStyle: {
                normal: {
                    opacity: .7
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#CC9F49"
                },
                {
                    offset: 1,
                    color: "#0B3147"
                }
            ]),
            data: [{isd:'1',us:'2',value:'80'},{isd:'1',us:'2',value:'40'}]
        },{
            type: 'bar',
            stack:'1',
            itemStyle: {
                normal: {
                    opacity: .7
                }
            },
            barWidth: "30",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "red"
                },
                {
                    offset: 1,
                    color: "red"
                }
            ]),
            data: [{isd:'1',us:'2',value:'80'},{isd:'1',us:'2',value:'40'}]
        }
    ]
}