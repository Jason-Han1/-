var x_data = [];
for(var i = 0; i< 16; i ++) {
    x_data.push(i)
}

var data = [
        [877, 847, 822, 909, 958, 917, 863, 988, 885, 940, 820, 930, 878, 818, 873, 869],
    ]

option = {
    title: {
        text: '人员情况',
        left: 'left',
    },
    color: ['#41d79a', '#2e90fe', '#ff708b'],
    backgroundColor: '#ffffff00',

    tooltip: {
        show: true,
        trigger: 'axis',
    },
    legend: {
        data: ['数据1', '数据2', '数据3', '数据4'],
        top: '50',
        left: 'center',
        icon: 'roundRect',
        itemWidth: 8,
        itemHeight: 8,
    },
    grid: [
        {
            top: 60,
            left: 60,
            right: 50,
            height: '40%',
        },
        {
            left: 60,
            right: 50,
            top: '75%',
            height: '20%',
        },
    ],
    xAxis: [
        {
            name: '',
            type: 'category',
            data: x_data,
            boundaryGap: true,
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                color: '#333',
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                },
            },
        },
        {
            gridIndex: 1,
            type: 'category',
            data: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            boundaryGap: true,
            axisPointer: {
                type: 'shadow',
            },
            position: 'top',
            axisLabel: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} ',
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        {
            name: '',
            type: 'value',
            axisLabel: {
                formatter: '{value} %',
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                formatter: '{value} ',
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            inverse: true,
        },
    ],
    series: [
        {
            name: '数据1',
            type: 'bar',
            stack: '话务',
            barWidth: 10,
            data: data[0],
        },
        {
            name: '数据2',
            type: 'bar',
            stack: '话务',
            barWidth: 10,
            data: [408, 309, 379, 418, 482, 430, 352, 389, 407, 473, 372, 337, 389, 495, 306, 449],
        },
        {
            name: '数据3',
            xAxisIndex: 1,
            yAxisIndex: 2,
            type: 'bar',
            barWidth: 10,
            data: [317, 379, 333, 341, 371, 395, 333, 352, 372, 392, 393, 371, 335, 362, 395, 331],
        },
        {
            name: '数据4',
            yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                opacity: 0,
            },
            data: [
                84,
                84,
                80,
                86,
                81,
                81,
                81,
                84,
                82,
                89,
                87,
                82,
                86,
                87,
                84,
                87,
                84,
                83,
                88,
                86,
                87,
                88,
                84,
                83,
                85,
                87,
                85,
                88,
                89,
                81,
            ],
        },
    ],
};
myChart.setOption(option);
//获取Y轴的刻度范围
var per_num1, per_num2, top_bar_hit, bot_bar_hit, pos_top;
var hit = $('#chart-panel').height() * 0.8;

// 取得2个Y轴的最大值
var rangeY1 = myChart.getModel()._componentsMap.data.yAxis[0].axis.scale._extent[1];
var rangeY2 = myChart.getModel()._componentsMap.data.yAxis[2].axis.scale._extent[1];
// 设置分母
var range_total = rangeY1 + rangeY2;
// 上部bar的占比
per_num1 = rangeY1 / range_total;
// 下部bar的占比
per_num2 = rangeY2 / range_total;
// 高度赋值
top_bar_hit = hit * per_num1;
bot_bar_hit = hit * per_num2;

// 计算top 位置
option.grid[0].height = top_bar_hit;
option.grid[1].height = bot_bar_hit;
// 第二个图表的top=第一个bar的top: 80 + 5px + 上部bar图表高度
pos_top = top_bar_hit + 85;
option.grid[1].top = pos_top;

// 计算top 位置 end

myChart.setOption(option);

window.addEventListener('resize', function () {
    myChart.resize();

    myChart.setOption(option);

    //获取Y轴的刻度范围
    var per_num1, per_num2, top_bar_hit, bot_bar_hit, pos_top;
    var hit = $('#chart-panel').height() * 0.8;

    // 取得2个Y轴的最大值
    var rangeY1 = myChart.getModel()._componentsMap.data.yAxis[0].axis.scale._extent[1];
    var rangeY2 = myChart.getModel()._componentsMap.data.yAxis[2].axis.scale._extent[1];
    // 设置分母
    var range_total = rangeY1 + rangeY2;
    // 上部bar的占比
    per_num1 = rangeY1 / range_total;
    // 下部bar的占比
    per_num2 = rangeY2 / range_total;
    // 高度赋值
    top_bar_hit = hit * per_num1;
    bot_bar_hit = hit * per_num2;

    // 计算top 位置
    option.grid[0].height = top_bar_hit;
    option.grid[1].height = bot_bar_hit;
    // 第二个图表的top=第一个bar的top: 50 + 5px + 上部bar图表高度
    pos_top = top_bar_hit + 85;
    option.grid[1].top = pos_top;

    // 计算top 位置 end

    myChart.setOption(option);
});
