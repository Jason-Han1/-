var districtList = ['椒江', '黄岩', '路桥', '温岭', '玉环', '临海', '天台', '仙居', '三门']
var lN = [12000, 20000, 15000, 8000, 7000, 11000, 10300, 5000, 8000],
    bN = [6000, 8008, 12000, 20000, 15000, 8000, 7000, 11000, 1300];

option = {
    legend: {
        x: '85%', //用百分比 处理块与文字位置
        y: 'center',
        orient: 'vertical',
        textStyle: {
            fontSize: 12,
            lineHeight: 45,
            color: '#666',
        },
        //selectedMode: false,    //选中哪个图例 false后图例不可点击
        data: ['x数', 'y数']
    },
    xAxis: {
        type: 'category',
        data: districtList,
        axisLine: {
            lineStyle: {
                color: '#f0f'
            }
        },
    },
    yAxis: {
        type: 'value',
        minInterval: 2000,
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
    },
    grid: { //用于处理图标放入过多空白问题
        top: '5%', //距上边距

        left: '5%', //距离左边距

        right: '5%', //距离右边距

        bottom: '5%', //距离下边距
    },
    series: [{
        name: 'x数',
        data: lN,
        type: 'bar',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#30eafe'
        }, {
            offset: 1,
            color: '#1185fd'
        }]),
        showBackground: false,

    }, {
        name: 'y数',
        data: bN,
        type: 'bar',
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ff9191'
        }, {
            offset: 1,
            color: '#ff696a'
        }]),
        showBackground: false,

    }]
};