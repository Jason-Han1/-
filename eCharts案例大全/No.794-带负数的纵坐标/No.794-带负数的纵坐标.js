var xdata = ['党委会','董事会','监事会','经理层']
var data = [9,0,1,0]
//负数的柱子，圆头朝下的样例见本人其他作品
option = {
    backgroundColor: '#0a1a38',
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#202630',
        borderColor: '#202630',
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'solid',
            },
        },
    },
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%',
    },
    xAxis: [
        {
            type: 'category',
            color: '#59588D',
            data: xdata,
            axisLabel: {
                margin: 20,
                color: '#809dbe',
                textStyle: {
                    fontSize: 12,
                },
            },
           axisLine: {
            show: true,
            lineStyle: {
                color: '#457fa3',
            },
        },
            axisTick: {
                show: true,
            },
        },
    ],
    yAxis: [
        {
            max:10,
            min:-2,
            axisLabel: {
                // formatter: '{value}%',
                color: '#ccc',
                textStyle: {
                    fontSize: 12,
                },
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)',
                },
            },
            axisTick: {
                show: false,
            },
             splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(33, 57, 93,.9)',
            },
        },
        },
    ],
    series: [
        {
            type: 'bar',
            data: data,
            barWidth: '30px',
            label:{
                
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        let colorArr = params.value > 0 ? ['#FF9A22', '#FFD56E'] : ['#FFD56E', '#FF9A22'];
                        return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(70, 157, 226)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(70, 157, 226,.1)', // 100% 处的颜色
                                },
                            ],
                            false
                        );
                    },
                    // barBorderRadius: [30, 30, 0, 0],
                },
            },
         
        },
    ],
};
