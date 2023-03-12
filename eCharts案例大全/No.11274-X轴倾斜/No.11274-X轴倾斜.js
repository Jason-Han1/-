res = {
    xAxisData: ['XX国际集团有限公司','XX际集团有限公司','XX国际集团有限公司','XX国际集团有限公司','XX第六'],
    seriesData: [900, 823, 751, 500, 380]
}
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[0];
            return tar.name + ' : ' + tar.value + tar.seriesName;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        axisLabel: {   
            interval:0,
            rotate:40

        },
        data : res.xAxisData
    },
    yAxis: {
        name: '人',
        type : 'value'
    },
    series: [
        {
            name: '人',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: res.seriesData
        }
    ]
};
