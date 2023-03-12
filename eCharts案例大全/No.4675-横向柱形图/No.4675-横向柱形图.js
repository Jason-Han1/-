var barWidth = 22;
var nameArray = ['a表', 'b表', 'c表', 'd表'];
var nameTipArray = ['a表', 'b表', 'c表', 'd表'];
var dataArray = [50, 25, 88, 67];
var dataArrayB = []; // 背景柱状图的数据 [100, 100, 100, 100];
dataArray.forEach(function() {
    dataArrayB.push(100);
});
var option = {
    grid: {
        left: '60',
        right: '0',
        bottom: '0%',
        top: '0%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: [8, 12],
        textStyle: {
            color: 'white',
            fontSize: '12',
            lineHeight: 12,
            fontFamily: 'Microsoft YaHei, PingFang SC'
        },
        formatter: '{b0}{c0}%'
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#000000',
                fontSize: '16',
                lineHeight: 22,
                fontFamily: 'Microsoft YaHei, PingFang SC'
            },
        },
        silent: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: nameArray
    }],
    series: [{
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: barWidth,
                    color: function(params) {
                        var value = params.value;
                        if (value > 80) {
                            return '#df2424';
                        } else if (value > 50) {
                            return '#f9b602';
                        }
                        return '#6ab831';
                    }
                },
            },
            barWidth: barWidth,
            data: dataArray
        },
        {
            type: 'bar',
            barWidth: barWidth,
            hoverAnimation: false,
            barGap: '-100%',
            data: dataArrayB,
            itemStyle: {
                normal: {
                    color: '#dbdbdb',
                    barBorderRadius: barWidth,
                },
                emphasis: {
                    color: '#dedede'
                }
            },
        },
    ]
};