var ydata = [{
        name: '男',
        value: 1123
    },
    {
        name: '女',
        value: 32323
    },
    {
        name: '其它',
        value: 323
    }
];
var color = ["#4880ff", "#ff5660","#e8e8e8"]
var xdata = ['男', "女", "其它"];


option = {
    backgroundColor: "#fff",
    color:color,
    legend: {
        data: xdata,
        icon: 'roundRect',
        width:'10',
        right: '10%',
        bottom: '50%',
    },
    series: [
        {
            type: 'pie',
            clockwise: false, //饼图的扇区是否是顺时针排布
            minAngle:1, //最小的扇区角度（0 ~ 360）
            radius: ["60%", "70%"],
            center: ["40%", "50%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            selectedMode: 'single',
            startAngle: '135',
            itemStyle: { //图形样式
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.12)',
                    shadowBlur: 10,
                    
                },
                
            },
            data: [
                {
                    name: '男',
                    value: 1234,
                    "label": {
                        "normal": {
                            show:true,
                            "formatter": '{c|{c}} {b|}',
                            rich: {
                                c: {
                                    color: '#4a4a4a',
                                    fontSize: 48,
                                    fontWeight: 'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: '#4a4a4a',
                                    fontSize: 48,
                                    lineHeight: 5
                                }
                            },
                            position: "center",
                        }
                    }
                },
                {
                    name: '女',
                    value: 1231,
                    "label": {
                        "normal": {
                            show:false,
                            "formatter": '{c|{c}} {b|}',
                            rich: {
                                c: {
                                    color: '#4a4a4a',
                                    fontSize: 48,
                                    fontWeight: 'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: '#4a4a4a',
                                    fontSize: 48,
                                    lineHeight: 5
                                }
                            },
                            position: "center"
                        }
                    }
                },
                {
                    name: '其它',
                    value: 1231,
                    "label": {
                        "normal": {
                            show:false,
                            "formatter": '{c|{c}} {b|}',
                            rich: {
                                c: {
                                    color: '#4a4a4a',
                                    fontSize: 48,
                                    fontWeight: 'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: '#4a4a4a',
                                    fontSize: 48,
                                    lineHeight: 5
                                }
                            },
                            position: "center"
                        }
                    }
                }
            ]
        }
    ]
};
myChart.setOption(option);


