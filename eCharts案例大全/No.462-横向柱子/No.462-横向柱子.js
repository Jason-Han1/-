let yLabel = ['阿里', '蚂蚁', '网易'];
let yData = [75, 89, 65];
option = {
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
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                ' <br/>'
            );
        },
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                color: '#fff',
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
        },
        data: yLabel,
    },
    yAxis: [
        {
            type: 'category',
            axisLabel: {
                show: true,
                margin: 15,
                textStyle: {
                    color: '#fff',
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
            },
            data: yLabel,
        },
    ],
    series: [
        {
            name: '达标率',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                barBorderRadius: 30,
                shadowBlur: 0,
                shadowColor: 'rgba(87,220,222,0.7)',
                color: function (value) {
                    if (value.dataIndex === 0) {
                        return '#44B07B';
                    } else if (value.dataIndex === 1) {
                        return '#0089F3';
                    } else {
                        return '#C7973B';
                    }
                },
            },
            barWidth: 20,
            data: yData,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [100, 100, 100],
            itemStyle: {
                color: 'rgba(29, 57, 101, 0.8)',
                borderWidth: 1,
                barBorderRadius: [30, 30, 30, 30],
            },
        },
    ],
};
