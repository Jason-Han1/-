option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false, // 隐藏Y轴刻度
        },
        axisLine: {
            show: false, // 隐藏Y轴线段
        },

    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [{
        name: '2011年',
        type: 'bar',
        itemStyle: {
            normal: {
                // 定制显示（按顺序）
                color: function(params) {
                    var colorList = ['#EE9201', '#EFE42A', '#64BD3D', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#EAF2F8', '#4A235A', '#3498DB'];
                    return colorList[params.dataIndex]
                }
            },
        },
        data: [18203, 23489, 29034, 104970, 131744, 630230]
    }]
};