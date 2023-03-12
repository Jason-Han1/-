// https://gallery.echartsjs.com/editor.html?c=x-dorcWMsL
var axis = ['ProGrp', 'NSE', 'SCC', 'CYFRA211', 'CA125', 'CEA'];
var scatterData = [];
var heatmapData = [
    [0, 0, 0.1],
    [0, 1, 0.03],
    [0, 2, 0.04],
    [0, 3, -0.03],
    [0, 4, 0.36],
    [0, 5, 1],
    [1, 0, 0.02],
    [1, 1, 0.02],
    [1, 2, 0.02],
    [1, 3, 0.02],
    [1, 4, 1],
    [1, 5, 0.6],
    [2, 0, 0.02],
    [2, 1, 0.02],
    [2, 2, 0.02],
    [2, 3, 1],
    [2, 4, 0.9],
    [2, 5, 0.8],
    [3, 0, 1],
    [3, 1, 1],
    [3, 2, 1],
    [3, 3, 0.2],
    [3, 4, -0.2],
    [3, 5, -0.8],
    [4, 0, 1],
    [4, 1, 1],
    [4, 2, -0.8],
    [4, 3, 0.5],
    [4, 4, 0.2],
    [4, 5, 0.3],
    [5, 0, 1],
    [5, 1, 0.2],
    [5, 2, 0.9],
    [5, 3, 0.6],
    [5, 4, -0.5],
    [5, 5, -0.2]
];

heatmapData = heatmapData.map(function(item) {
    return [item[1], item[0], item[2] || '-'];
});

var axisLength = axis.length - 1;


for (let i = 0; i < heatmapData.length; i++) {
    // 轴总长度-x轴下标 等于或小于y轴下标 为散点数据，heatmap不展示
    if (axisLength - heatmapData[i][0] <= heatmapData[i][1]) { // x:data.value[0] y:data.value[1]
        scatterData.push(heatmapData[i])
    }
}


option = {
    animation: true,
    title: {
        show: true,
        text: '',
        left: 'center',
        top: '5%'
    },
    grid: { // 容器本身设置
        width: '60%',
        height: '80%',
        top: '18%',
        left: '15%'
    },
    xAxis: [{
            type: 'category',
            show: false,
            data: axis
        },
        {
            type: 'category',
            data: axis,
            inverse: true, // 是否是反向坐标轴
            axisTick: {
                show: false
            },
            splitArea: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
                rotate: -50
            }
        }
    ],
    yAxis: {
        type: 'category',
        data: axis,
        axisTick: {
            show: false
        },
        splitArea: {
            show: true
        }

    },
    visualMap: [{ // 控制散点显示范围
            type: 'piecewise',
            left: '75%',
            right: '10',
            top: '20%',
            min: 0,
            max: 1,
            calculable: true, // 是否拖拽
            align: 'left',
            inRange: {
                color: ['#FEE090', '#FDAE61', '#F46D43', '#D73027']
            },
            textStyle: {
                color: '#ABABAB'
            },
            seriesIndex: [1]
        },
        {
            type: 'piecewise',
            left: '75%',
            right: '10',
            bottom: '2%',
            min: 0,
            max: -1,
            calculable: true, // 是否拖拽
            align: 'left',
            inRange: {
                color: ['#4575B4', '#74ADD1', '#ABD9E9', '#E0F3F8']
            },
            textStyle: {
                color: '#ABABAB'
            },
            seriesIndex: [2]
        },
        {
            type: 'piecewise',
            min: -0.5,
            max: -1,
            show: false,
            inRange: {
                color: ['#D73027']
            },
            textStyle: {
                color: '#ABABAB'
            },
            seriesIndex: [3]
        },
        { // 控制散点显示大小
            min: 0,
            max: 1,
            calculable: false,
            show: false,
            precision: 0.1,
            inRange: {
                symbolSize: [20, 50]
            },
            seriesIndex: [1]
        },
        {
            min: 0,
            max: -1,
            calculable: false,
            show: false,
            precision: 0.1,
            inRange: {
                symbolSize: [50, 20]
            },
            seriesIndex: [2]
        },
        {
            min: -0.5,
            max: -1,
            calculable: false,
            show: false,
            precision: 0.1,
            inRange: {
                symbolSize: [50, 20]
            },
            seriesIndex: [3]
        }
    ],
    series: [{
            name: 'heatmap1',
            type: 'heatmap',
            silent: true, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件
            show: true,
            data: heatmapData,
            label: {
                normal: {
                    color: '#ABABAB',
                    fontSize: 20,
                    show: true,
                    formatter: function(data) {
                        if (axisLength - data.value[0] > data.value[1]) { // x:data.value[0] y:data.value[1]
                            return data.value[2]
                        } else { // 轴总长度-x轴下标 等于或小于y轴下标 为散点数据，heatmap不展示
                            data.value = ''
                            return data.value
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#FFFFFF',
                    borderColor: '#ABABAB'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            },
            zlevel: 1
        },
        { // 正数
            name: 'scatter1',
            type: 'scatter',
            data: scatterData,
            symbolSize: 12,
            zlevel: 2
        },
        { // 负数
            name: 'scatter2',
            type: 'scatter',
            data: scatterData,
            symbolSize: 12,
            zlevel: 2
        },
        { // 矢量图
            name: 'before2',
            type: 'scatter',
            color: 'red',
            data: scatterData,
            symbol: 'path://M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z',
            zlevel: 3
        }
    ]
};