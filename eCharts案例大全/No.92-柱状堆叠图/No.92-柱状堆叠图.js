var echartsData = {
    title: 'title',
    city: ['2015', '2016', '2017', '2018'],
    legend: ['公路', '水运', '民航', '铁路'],
    data: [
        [1550, 1260, 2125, 1800],
        [929, 945, 1012, 930],
        [2310, 2890, 3198, 3645],
        [1670, 2337, 2724, 2990],
    ],
};
var colors = ['#F56679', '#4C98FB', '#8CDF6C', '#9D50E0'];
var option = {
    backgroundColor:"#000a40",
    title: {
        text: echartsData.title,
        x: 'center',
        top: 15,
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
    },
    toolbox: {
        feature: {
            saveAsImage: {
                backgroundColor: '#243a55',
            },
        },
        iconStyle: {
            borderColor: '#fff',
            fontSize: '22px',
        },
    },
    color: colors,
    legend: {
        bottom: 10,
        left: 'center',
        itemWidth: 10,
        itemHeight: 10,
        padding: [5, 10],
        textStyle: {
            fontSize: 16,
            color: '#96A4F4',
            padding: [3, 0, 0, 0],
        },
        data: echartsData.legend,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#96A4F4',
            rotate: 0,//倾斜度
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4',
            },
            width: 5,
        },
        axisTick: {
            show: false,
        },
        data: echartsData.city,
    },
    yAxis: {
        name: '单位：个',
        type: 'value',
        axisLabel: {
            color: '#96A4F4',
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4',
            },
            width: 5,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)',
            },
        },
    },
    series: [],
};
for (var i = 0; i < echartsData.legend.length; i++) {
    option.series.push({
        name: echartsData.legend[i],
        type: 'bar',
        stack: '总数',
        barWidth: '45%',
        label: {
            show: false,
            position: 'insideRight',
        },
        data: echartsData.data[i],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: {
                        //数值样式
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: 600,
                    },
                },
            },
        },
    });
}
