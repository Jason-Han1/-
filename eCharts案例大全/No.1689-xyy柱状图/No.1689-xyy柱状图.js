var myData = {
    name: ['语文', '数学', '英语', '化学', '物理', '生物', '地理', '政治', '历史'],
    value: [500, 250, 400, 550, 560, 200, 250, 190, 220],
    value2: [90000, 65000, 81000, 110000, 92000, 50000, 56000, 63000, 63000],
};
var max = Math.max(...myData.value)||1;
var max2 = Math.max(...myData.value2)||1;
var multiple = max2 / max;
for (var i in myData.value2) {
    myData.value2[i] = myData.value2[i] / multiple;
}
option = {
    backgroundColor: '#000',
    grid: {
        top: '15%',
        right: '11%',
        left: '11%',
        bottom: '22%',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: function (params, ticket, callback) {
            return (
                params[0].name +
                '<br/>' +
                params[0].seriesName +
                '：' +
                params[0].value +
                '个' +
                '<br/>' +
                params[1].seriesName +
                '：' +
                params[1].value * multiple +
                '元'
            );
        },
    },
    legend: {
        show: true,
        top: 11,
        right: 15,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
    },
    xAxis: [
        {
            type: 'category',
            data: myData.name,
            axisLine: {
                lineStyle: {
                    color: '#1E467E',
                },
            },
            axisLabel: {
                margin: 20,
                color: '#979797',
                align: 'center',
                verticalAlign: 'top',
                textStyle: {
                    fontSize: 12,
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位:个',
            nameLocation: 'end',
            nameTextStyle: {
                fontSize: 12,
                align: 'right',
                padding: [10, 5],
            },
            min: 0,
            max: max,
            splitNumber: 5,
            interval:max/5,
            axisLabel: {
                formatter: '{value}',
                color: '#979797',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(30,70,126,0.40)',
                },
            },
        },
        {
            type: 'value',
            name: '单位:元',
            nameLocation: 'end',
            nameTextStyle: {
                fontSize: 12,
                align: 'left',
                padding: [10, 5],
            },
            min: 0,
            max: max2,
            splitNumber: 5,
            interval:max2/5,
            axisLabel: {
                formatter: '{value}',
                color: '#979797',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '设备数量',
            type: 'bar',
            data: myData.value,
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#064CC4', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(6,76,196,0.05)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            name: '设备总价',
            type: 'bar',
            data: myData.value2,
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#4FB8F9', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(79,184,249,0.1)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
    ],
};
