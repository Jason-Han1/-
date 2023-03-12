option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none', // 'shadow' as default; can also be 'line' or 'shadow'
        },
        formatter: function (params) {
                console.log(params[0].dataIndex)
                console.log(params)
                let data = params;
                let str = ''
                if(params[0].dataIndex == 1){
                    str = params[0].data.status + '<br/>' +  params[0].seriesName + ":" +  params[0].data.value1 + '<br/>' +  params[1].seriesName + ":" +  params[1].data.value2;
                } else {
                    str = params[0].data.status + '<br/>' +  params[0].seriesName + ":" +  params[0].data.value1;
                }
                return str
            },
    },
    legend: {
        // data: ["已完成", "进行中"],
        top: '22%',
        left: '5%',
        icon: 'rect',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        top: '35%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.8)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.15)', // 分割线颜色
            },
        },
    },
    yAxis: {
        type: 'category',
        //   data: ["已签收", "配送中", "已出库", "采购中", "接单中"],
        axisLabel: {
            color: 'rgba(255,255,255,0.8)',
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.15)', // 分割线颜色
            },
        },
    },
    series: [
        {
            name: '贷款余额',
            type: 'bar',
            stack: 'total',
            label: {
                show: false,
            },
            emphasis: {
                focus: 'series',
            },
            // data: [121, 828, 144, 368, 390],
            barWidth: 12,
            itemStyle: {
                label: {
                    show: true,
                },
                labelLine: {
                    show: false,
                },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: 'rgba(7,165,255,0.2)' },
                    { offset: 1, color: 'rgba(7,165,255,1)' },
                ]),
                borderColor: 'rgba(7,165,255,0.7)',
                shadowBlur: 16,
                shadowColor: 'rgba(7,165,255,1)',
            },
        },
        {
            name: '差值',
            type: 'bar',
            stack: 'total',
            label: {
                show: false,
            },
            emphasis: {
                focus: 'series',
            },
            barWidth: 12,
            itemStyle: {
                label: {
                    show: true,
                },
                labelLine: {
                    show: false,
                },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 1, color: 'rgba(246, 186, 2, 1)' },

                    { offset: 0.5, color: 'rgba(117, 127, 70, 1)' },
                    { offset: 0, color: 'rgba(39, 77, 84, 1)' },
                ]),
                borderColor: 'rgba(104, 110, 57, 1)',
                shadowBlur: 16,
            },
        },
    ],
    dataset: {
        source: [
            { status: '1月', value1: 100, value2: 0 },
            { status: '2月', value1: 60, value2: 40 },
        ],
    },
};
