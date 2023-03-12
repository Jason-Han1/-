var data = [10.0, 9.6, 8.0, 6.9, 3.1, 5.1, 8.1, 7.2, 4.9, 3.9, 7.2, 9.2, 12.7, 7.0, 4.6, 6.1, 8.4, 8.2, 6.2, 4.7, 9.2, 7.2];

var dataShadow = [];


option = {

    tooltip: {
        trigger: 'axis',
        formatter: "{b}: {c}",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '4%',
        right: '0',
        bottom: '20%',
        top: '15%',

    },
    xAxis: [{
        type: 'category',
        data: ['特中设备监管', '食品小作坊监管', '食品安全监管', ' 药械保化监管', '进口药品报验管理', '智慧315', '工业品生产许可证管理', '产品风险监测与处置', '食品安全法检', '价格信用单位监管', '食品经营单位监管', '网络订餐食品安全监管', '自动售货设备管理', '食用农产品批发监管', '食用农产品风险防控', '案件稽查', '互联网广告监测', '药械保化(三期)', '办公室综合管理', '协同办公OA', '信用档案', '网络交易监管'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#666',
            },
            rotate: 30
        }
    }],
    yAxis: {
        name: '百分比',

        splitLine: {
            show: true,
            lineStyle: {
                color: ['#eee'],
                width: 1,
                type: 'solid'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#666'
            },

        }
    },
    series: [

        {
            type: 'bar',
            barCategoryGap: '40%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#666' // 改变标示文字的颜色
                    },
                },

            },

            itemStyle: {

                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3b7ed9'
                        }, {
                            offset: 1,
                            color: '#785ef2'
                        }]
                    ),
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 94, 242, 0.5)',
                    shadowOffsetY: 5,
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3b7ed9'
                        }, {
                            offset: 1,
                            color: '#785ef2'
                        }]
                    )
                }
            },
            data: data
        }
    ]
};