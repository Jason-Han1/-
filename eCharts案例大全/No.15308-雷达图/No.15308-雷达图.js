var defaultFontSize = 14,
    defaultTextColor = '#636c72',
    defaultGlobalColor = ['#5d9cec', '#62c87f', '#f15755', '#fc863f', '#7053b6'],
    defaultFontFamily = 'microsoft yahei',
    defaultBackgroundColor = '#fff',
    defaultShadowColor = 'rgba(204, 214, 235, 0.247059)';

option = {
    title: {
        text: '雷达图',
        top: 10,
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 400
        }
    },
    backgroundColor: defaultBackgroundColor, // 背景色，默认无背景。
    color: defaultGlobalColor, // 调色盘颜色列表。
    textStyle: { // 全局字体样式
        color: defaultTextColor,
        fontSize: defaultFontSize
    },
    legend: {
        bottom: 0,
        left: 'center',
        width: 500,
        itemWidth: 14,
        itemHeight: 14,
        itemBorderRadius: 8,
        textStyle: {
            // color: "#d7d7d7"
        },
        data: ['Chars Bosh', 'Shane Battier', 'LeBron James', 'Dwayne Wade', 'Mario Chalmers']
    },
    tooltip: { // 提示框组件
        trigger: 'item', // 触发类型 可选为：'axis' | 'item' | 'none'
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: defaultShadowColor
            }
        }
    },
    radar: {
        // shape: 'circle',
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: ['#eae9e9', '#eae9e9', '#eae9e9', '#eae9e9', '#eae9e9', '#6a7791']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eae9e9'
            }
        },
        indicator: [{
            name: 'points',
            max: 30
        }, {
            name: 'rebounds',
            max: 10
        }, {
            name: 'assists',
            max: 7
        }, {
            name: 'steals',
            max: 2
        }, {
            name: 'blocks',
            max: 2
        }]
    },
    series: [{
        name: '雷达图',
        type: 'radar',
        symbol: 'none',
        areaStyle: {
            normal: {
                opacity: .4
            }
        },
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 2
                }
            },
            emphasis: {
                areaStyle: {
                    opacity: .3
                }
            }
        },
        data: [{
            value: [17.2, 7.9, 1.6, 0.8, 0.8],
            name: 'Chars Bosh',
            z: 3
        }, {
            value: [5.4, 2.6, 1.2, 1.0, 0.5],
            name: 'Shane Battier',
            z: 1
        }, {
            value: [28.0, 8.4, 6.1, 1.9, 0.8],
            name: 'LeBron James',
            z: 5
        }, {
            value: [22.3, 5.0, 4.5, 1.7, 1.3],
            name: 'Dwayne Wade',
            z: 4
        }, {
            value: [10.2, 2.9, 3.6, 1.4, 0.2],
            name: 'Mario Chalmers',
            z: 2
        }]
    }]
};