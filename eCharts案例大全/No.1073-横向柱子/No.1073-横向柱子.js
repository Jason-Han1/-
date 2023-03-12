let yLabel = ['小一', '小二', '小三', '小四', '小五'];
let yData = [653, 755, 705, 655, 675];

option = {
    color: '#719DF7',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#719DF7'></span>" +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                ' <br/>'
            );
        },
    },
    backgroundColor: '#fff',
    xAxis: {
        show: true,
        type: 'value',
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                color: 'rgba(0, 0, 0, 0.45)',
                fontSize: 12,
                fontFamily: 'PingFang SC',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 15,
                textStyle: {
                    color: 'rgba(0, 0, 0, 0.45)',
                    fontSize: 12,
                    fontFamily: 'PingFang SC',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D9D9D9',
                },
            },
            data: yLabel,
        },
    ],
    series: [
        {
            name: '数据',
            type: 'bar',
            zlevel: 1,
            barWidth: 13,
            data: yData,
        },
    ],
};
