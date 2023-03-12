
var seriesData1 = [{
    name: "氐土乡",
    value: "25"
}, {
    name: "女土乡",
    value: "25"
}, {
    name: "胃土乡",
    value: "25"
},{
    name: "柳土乡",
    value: "25"
}];

var seriesData2 = [{
    name: "虚日乡",
    value: "12.5"
}, {
    name: "房日乡",
    value: "12.5"
}, {
    name: "危月乡",
    value: "12.5"
}, {
    name: "心月乡",
    value: "12.5"
}, {
    name: "星日乡",
    value: "12.5"
}, {
    name: "毕月乡",
    value: "12.5"
}, {
    name: "昴日乡",
    value: "12.5"
}, {
    name: "张月乡",
    value: "12.5"
}];

var seriesData3 = [{
    name: "角木乡",
    value: "6.25"
}, {
    name: "奎木乡",
    value: "6.25"
}, {
    name: "斗木乡",
    value: "6.25"
}, {
    name: "井木乡",
    value: "6.25"
},{
    name: "室火乡",
    value: "6.25"
}, {
    name: "尾火乡",
    value: "6.25"
}, {
    name: "翼火乡",
    value: "6.25"
}, {
    name: "觜火乡",
    value: "6.25"
},{
    name: "娄金乡",
    value: "6.25"
}, {
    name: "牛金乡",
    value: "6.25"
},{
    name: "魁（鬼）金乡",
    value: "6.25"
},{
    name: "亢金乡",
    value: "6.25"
},{
    name: "壁水乡",
    value: "6.25"
}, {
    name: "箕水乡",
    value: "6.25"
},{
    name: "参水乡",
    value: "6.25"
},{
    name: "轸水乡",
    value: "6.25"
}]

let echartData = {
    inner: seriesData1,
    outer: seriesData2
};

option = {
     backgroundColor: "#fff",
    series: [
        {
            color:'#f4d25a',
            type: 'pie',
            radius: [0, '15%'],
            label: {
                normal: {
                    position: 'center',
                    fontSize: 14,
                    formatter: params => {
                        return (
                            '{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#fff',
                        name: {
                            fontSize: 24,
                            padding: [0, 0, 3, 0],
                            color: '#000'
                        },
                        percent: {
                            fontSize: 14,
                            color: '#fff',
                            padding: [0, 0, 17, 0],
                        },
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {
    name: "三台",
    value: '1520'
}]
        },
        {
            color:['#3599b8','#fd625e', '#fff','#909399'],
            type: 'pie',
            startAngle:45,
            radius: ['15%', '40%'],
            itemStyle: {
                normal: {
                    borderColor: 'rgba(28,33,46,0.6)',
                    borderWidth:4,
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: params => {
                        return (
                            '{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#fff',
                        name: {
                            fontSize: 24,
                            padding: [0, 0, 3, 0],
                            color: '#000'
                        },
                        percent: {
                            fontSize: 14,
                            color: '#fff',
                            padding: [0, 0, 17, 0],
                        },
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            type: 'pie',
            startAngle:45,
            color:['#3599b8','#3599b8','#fd625e','#fd625e', '#fff','#fff','#909399','#909399'],
            radius: ['40%', '60%'],
            data: echartData.outer,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(28,33,46,0.6)',
                    borderWidth:4,
                }
            },
            labelLine: {
                normal: {
                    length:20,
                    length2: 0,
                    lineStyle: {
                        color: '#C8C8C8'
                    }
                }
            },
              label: {
                normal: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: params => {
                        return (
                            '{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#fff',
                        name: {
                            fontSize: 24,
                            padding: [0, 0, 3, 0],
                            color: '#000'
                        },
                        percent: {
                            fontSize: 14,
                            color: '#fff',
                            padding: [0, 0, 17, 0],
                        },
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
        },
        {
            type: 'pie',
            startAngle:45,
            color:['#3599b8','#3599b8','#3599b8','#3599b8','#fd625e','#fd625e', '#fd625e','#fd625e','#fff','#fff','#fff','#fff','#909399','#909399','#909399','#909399'],
            radius: ['60%', '95%'],
            data: seriesData3,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(28,33,46,0.6)',
                    borderWidth:4,
                }
            },
            labelLine: {
                normal: {
                    length:20,
                    length2: 0,
                    lineStyle: {
                        color: '#C8C8C8'
                    }
                }
            },
              label: {
                normal: {
                    position: 'inner',
                    fontSize: 24,
                    formatter: params => {
                        // var text = params.name
                        // if (params.name == '魁（鬼）金乡') {
                            
                        // }
                        return (
                            // text
                            '{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#fff',
                        name: {
                            fontSize: 24,
                            padding: [0, 0, 3, 0],
                            color: '#000'
                        },
                        percent: {
                            fontSize: 14,
                            color: '#fff',
                            padding: [0, 0, 17, 0],
                        },
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
        },
    ]
};
