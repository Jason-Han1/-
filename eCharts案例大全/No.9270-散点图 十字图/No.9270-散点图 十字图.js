var fSize = 18;
var color = "#74EAFC";
option = {
    color: ['#01b3e9', '#2f9b4f', '#96d107', '#4d5ae1', '#ff9c00', '#d804d6', '#bd146c'],
    backgroundColor: 'rgba(0,0,0,1)',
    tooltip: {
        formatter: function(params) {
            console.log(params);
            return params.seriesName + '<br>负损值 : ' + params.data[0] + '<br>负损提升 : ' + params.data[1]
        },
        textStyle: {
            fontSize: fSize
        }
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: '3%',
        itemWidth: 12,
        itemHeight: 12,
        icon: 'circle',
        selectedMode: true,
        textStyle: {
            color: color, // 图例文字颜色
            fontSize: fSize
        },
        data: ["石家庄", '保定', '衡水', '沧州']
    },
    grid: {
        left: '10%',
        right: '20%',
        bottom: '10%',
        top: "20%",
        containLabel: true
    },
    xAxis: {
        axisLabel: {
            inside: false,
            textStyle: {
                color: color,
                fontSize: fSize
            }
        },
        nameTextStyle: {
            color: color,
            fontSize: fSize
        },
        min: '-100',
        max: '100',
        axisTick: {
            lineStyle: {
                color: color
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed'
            }
        },
        name: "负损值"
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: color,
                fontSize: fSize
            }
        },
        min: '-100',
        max: '100',
        axisTick: {
            lineStyle: {
                color: color
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed'
            }
        },
        name: '负损提升',
        nameTextStyle: {
            color: color,
            fontSize: fSize,
        }
    },
    visualMap: {
        show: false,
        max: 100,
        inRange: {
            symbolSize: [18, 18]
        }
    },
    series: [{
            name: '石家庄',
            type: 'scatter',
            data: [
                [67, 45],
                [30, 24]
            ]
        },
        {
            name: '保定',
            type: 'scatter',
            data: [
                [-67, 45],
                [30, -24]
            ]
        },
        {
            name: '邢台',
            type: 'scatter',
            data: [
                [-47, -45],
                [20, -14],
                [50, 20]
            ]
        },
        {
            name: '衡水',
            type: 'scatter',
            data: [
                [-17, -25],
                [-20, 44],
                [30, 70]
            ]
        },
        {
            name: '沧州',
            type: 'scatter',
            data: [
                [-17, -45],
                [-50, 74],
                [20, 70]
            ]
        }
    ],
    animationDelay: function(idx) {
        return idx * 50;
    },
    animationEasing: 'elasticOut'
};