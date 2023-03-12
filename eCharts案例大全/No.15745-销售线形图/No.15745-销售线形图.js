var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        top: '10px',
        left: '50px',
        right: '15px',
        bottom: '40px',
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
        },
        splitLine: {
            show: false,
        },
        nameTextStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14,
        },
        data: ["本月计划汇总", "本月实际入库", "本月请领汇总", "本月结算汇总"]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: function(params) {
                var n = params;
                n = Math.round(n / 10000);
                return n + "万";
            }
        }
    },
    series: [{
        type: 'line',
        symbolSize: 7,
        lineStyle: {
            normal: {
                color: '#1ab394',
                width: 2,
            },
        },
        "itemStyle": {
            "normal": {
                "color": "#1ab394"
            }
        },
        areaStyle: {
            normal: {
                    color: new echarts.graphic.LinearGradient(0, 0,0,1, [{
                        offset: 0,
                        color: 'rgba(0, 0, 0, 0.2)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0, 0, 0, 0.08)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }, {
                        offset: 0.92,
                        color: 'transparent'
                    }, {
                        offset: 1,
                         color: 'transparent'
                    }])
                }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    var n = params.value;
                    if (n > 0) {
                        n = Math.round(n / 10000);
                        return n + "万";
                    } else {
                        return "暂无数据";
                    }

                }
            },
        },
        data: ['987651','1975628', '896578', '974201']
    }]
};