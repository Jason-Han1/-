var amountMoney = [10, 110, 250, 230, 120, 130, 100, 41, 22, 32, 21, 21];
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['柱状图', '柱状图1', '折线图']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        name: '水量',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
            formatter: '{value} ml'
        }
    }],
    series: [{
        name: '柱状图',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(d) {
                    if ((Math.max.apply(null, amountMoney) == d.value) || Math.min.apply(null, amountMoney) == d.value) {
                        return " ";
                    } else {

                        return d.value;
                    }

                }

            }
        },
        data: amountMoney,
        itemStyle: {
            normal: {
                color: '#be9252',
                label: {
                    show: true,
                    color: '#be9252',
                    /*position: 'top',*/
                    /*formatter: '{b}: {c} '*/
                }
            }
        },
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值',
                    itemStyle: {
                        label: {
                            show: false
                        }
                    },
                }, {
                    type: 'min',
                    name: '最小值',
                    itemStyle: {
                        label: {
                            show: false
                        }
                    },
                },


            ]
        }
    },
    ]
};