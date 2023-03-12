var getmydmc = ['山杨', '杨树林', '针阔混交', '珍贵硬阔混交', '软阔叶混交', '硬阔叶混交', '山槐林', '柳树', '其它']; //数据点名称
var getmyd = [86, 90, 77, 63, 55, 25, 98, 65, 55]; //学生满意度
var getmydzd = [];
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(10000);
}
//计算最大值
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        });
    });
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度
    let maxval = maxint * 10;
    //让显示的刻度是整数
    return maxval;
}

var max = Math.ceil(calMax([getmyd]) / 10) * 10;

option = {
    grid: {
        left: '170',
        right: '75',
        bottom: '30',
        top: '30',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return '林分类型分布<br>' + params[0].name + ': ' + params[0].value + '个';
        },
    },
    xAxis: [
        {
            type: 'value',
            axisLabel: {
                margin: 5,
                color: '#666666',
                textStyle: {
                    fontSize: '13',
                },
            },
            min: 0,
            max: max, // 计算最大值
            interval: max / 5, //  平均分为5份
            splitNumber: 5,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#D8D8D8',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#CCCCCC',
                },
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            axisLabel: {
                show: false,
            },
            min: 0,
            max: max, // 计算最大值
            interval: max / 10, //  平均分为5份
            splitNumber: 10,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#CCEAA4',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                textStyle: {
                    color: '#287912',
                    fontSize: '13',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#CCCCCC',
                },
            },
            data: getmydmc,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            xAxisIndex: 0,
            label: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold', // 加粗
                distance: 5, // 距离
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#0D8B10', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#2DE604', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            barWidth: 30,
            data: getmyd,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 30,
            barGap: '-100%',
            xAxisIndex: 1,
            data: getmydzd,
            itemStyle: {
                color: '#314383',
            },
        },
    ],
};
