var attr = [{
    name: "智能环空设备", 

}, {
    name: "智能饲喂器", 
}, {
    name: "摄像头",
}, {
    name: "摄像头2",
}]
var xData = ["2018", "2019", "2020", ];
var lines = [
    [400, 400, 300, 300, 300, 400, 400, 400, 350],
    [400, 500, 500, 500, 500, 400, 400, 500, 500],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700]
];
var option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        padding: 5,
        textStyle: {
            color: '#5c6c7c',
            fontSize:10,
        },
    },
    grid: {
        left: '10%',
        top: '8%',
        right: '5%',
        bottom: '19%',
    },
    legend: {
        show: true,
        icon: 'circle',
        orient: 'horizontal',
        top: '0.5%',
        right: '8%',
        itemWidth: 18.5,
        itemHeight: 6,
        itemGap: 30,
        textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD'
        }
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisLabel: {
            show: true,
            fontSize: 9,
            textStyle: {
                color: "#C9C8CD" //X轴文字颜色
            },
            formatter: function(value) {
                var str = "";
                str += value.substring(0, 4) + "\n";
                str += value.substring(5, 10);
                return str;
            }
        },
        axisLine: {
            show: true, //显示x轴
            lineStyle: {
                type: "solid",
                color: "#E9EBF1"
            }
        },
        axisTick: {
            show: false //不显示刻度
        },
        // boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisPointer: { //轴指示器
            type: 'shadow',
            z: 1,
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(18,155,249,0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(18,155,249,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 5
            }
        },

    }],
    yAxis: [{
        type: 'value',
        // scale: true, //坐标轴起点不限制0
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
                color: "#C9C8CD" //X轴文字颜色
            }
        },
        splitLine: {
            show: true,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#E9EBF1"
            }

        },
        axisTick: {
            show: false, //不显示刻度
        },
        axisLine: {
            show: false,
        },
        nameTextStyle: {
            color: "#FFFFFF"
        },
        splitArea: {
            show: false
        }
    }],
    series: [

        {
            name: '智能摄像头',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: '#83CFFF',
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            data: lines[0]
        },
        {
            name: '智能饲喂器',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: '#2D99FF',
                    barBorderRadius: [30, 30, 0, 0],
                }

            },
            data: lines[1]
        }, {
            name: '智能环空设备',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color:'#56D6A1',
                    barBorderRadius: [30, 30, 0, 0],
                },
            },
            data: lines[2]
        }, {
            name: '智能环空设备2',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color:'#D8DFE7',
                    barBorderRadius: [30, 30, 0, 0],
                },
            },
            data: lines[3]
        }
    ]
};