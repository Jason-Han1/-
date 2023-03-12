option = {
    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        //orient: 'vertical',
                        //icon: "circle",
                        x: 'center',
                        bottom: '20px',
                        data: ['入金', '出金']
                    },
                    series: [{
                        type: 'pie',
                        radius: '58%',
                        center: ['50%', '35%'],
                        roseType: 'radius',
                        color: ['#F44F6C', '#33BFA3'],
                        startAngle: 180,//起始位置
                        data: [{
                            value: 1784,
                            name: '入金'
                        }, {
                            value: 568,
                            name: '出金'
                        }],
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 10
                                },
                                formatter: function(param) {
                                    return param.name + '(' + Math.round(param.percent) + '%)' + '\n' + param.value;
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                labelLine: { //指示线的长度
                                    length: 5,
                                    length2: 5,
                                    show: true,
                                }
                            }
                        },
                    }]
};