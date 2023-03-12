option = {
    backgroundColor: '#05137A',
    title: {
        x: 'center',
        y: 'top',
        align: 'center',
        textStyle: {
            color: '#666666',
            fontWeight: 'bolder',
            fontSize: 28,
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            // 自定义toolTip提示框显示内容
            // alert(JSON.stringify(params));
            var res = '';
            console.log(params)
            for (var i = 0; i < params.length; i++) {
                if (i === 0) {
                    res += '<p>' + params[i].seriesName + ':' + params[i].data + '</p>';
                }
                if (i === 1) {
                    res += '<p>' + params[i].seriesName + ':' + params[i].data + '</p>';
                }
            }
            return res;
        },
        axisPointer: {
            // type: 'cross',  鼠标移动上去显示 虚刻度线
            crossStyle: {
                color: '#999',
            },
        },
    },
    toolbox: {
        show: false,
        top: 10,
        right: 10,
        feature: {
            mark: { show: false },
            magicType: { show: false, type: ['line', 'bar'] },
            restore: { show: false },
            saveAsImage: { show: false },
        },
    },
    grid: {
        //调整统计图上下左右边距
        top: 80,
        right: 70,
        bottom: 50,
        left: 75,
    },
    legend: {
        top: 45, // 统计图两个方块到Title的距离
        left: 'center',
        data: ['在库', '出库'],
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['在库', '出库'],
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                show: true,
                formatter: '{value}',
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
            axisLine: {
                // X轴线的颜色
                lineStyle: {
                    color: '#D5D5D5',
                    width: 2,
                },
            },
        },
    ],
    yAxis: {
            splitLine: {
                show: false,
            },
            type: 'value',
            nameTextStyle: {
                fontSize: 16,
            },
            axisLabel: {
                formatter: '{value} 个',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
            axisLine: {
                // Y轴线的颜色、和轴线的宽度
                lineStyle: {
                    color: '#D5D5D5',
                    width: 2,
                },
            },
        },
    series: {
        data: [
            {
                value: 200,
            
                itemStyle: {
                    color: '#FFE16B'
                }
            },
            {
                value: 100,
                itemStyle: {
                    color: '#00FFFF'
                }
            },
        ],
            barWidth: 30,
        type: 'bar'
    }
};
