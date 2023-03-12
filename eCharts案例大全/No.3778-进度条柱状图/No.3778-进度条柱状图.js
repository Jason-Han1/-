const xData = ['周一', '周二', '周三', '周四', '周五']
const yData1 = [12, 18, 15, 14, 22]; // 数据值
const yData2 = [100, 100, 100, 100, 100]; // 背景框长度
const colors = ['rgba(20, 255, 141,0.6)', 'rgba(255, 99, 14, 0.6)', 'rgba(253, 189, 20, 0.6)', 'rgba(38, 126, 245, 0.6)', 'rgba(126, 61, 48, 0.6)'];

option = {
    titel: {
        text: '柱状图表',
        textStyle: {
            color: 'red',
        },
    },
    xAxis: {
        show: false,
    },
    // 设置两个类目轴
    yAxis: [{
        type: 'category',
        data: xData,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'rgba(106,100,199,1)',
            fontSize: 14,
            margin: 30, // 标签与柱状图距离
        },
    }, {
        type: 'category',
        data: yData1,
        axisLabel: {
            color: 'rgba(106,100,199,1)'
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        // 内部数据条
        type: 'bar',
        name: '每日任务完成情况', // 开启tooltip时显示的名称
        barWidth: 34,
        yAxisIndex: 1,
        itemStyle: {
            color: (arg) => colors[arg.dataIndex],
            barBorderRadius: [0, 30, 30, 0],
        },
        label: {
            show: true,
            position: 'inside', // 也可以用inside: true设置数据在柱子内部
            formatter: `{c}%`, //{a}:系列名；{b}：数据名；{c}:数据值
            textStyle: {
                fontSize: 14,
            }
        },
        data: yData1,
    }, {
        // 背景框
        type: 'bar',
        name: '',
        barWidth: 40,
        yAxisIndex: 0, // 将边框柱状图与数据柱状图重叠
        itemStyle: {
            color: 'transparent',
            borderWidth: 2,
            borderColor: 'rgba(121, 168, 242,1)',
            barBorderRadius: [0, 30, 30, 0], // 上/右/下/左四个方向的圆角
        },
        data: yData2
    }]
};