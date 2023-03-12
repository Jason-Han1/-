var myData = [ '北京', '上海','天津', '湖北']

var cost = ["30", "20", "80", "110"];
var totalCost = ["100", "100", "100", "100"];

var data = {
    cost: cost,
    totalCost: totalCost,
};

var option = {
    baseOption: {
        backgroundColor: 'rgba(1, 36, 65, 0.8)',
        legend: {
                data:["1111","2222"]
            },
        timeline: {
            show: false,
        },
        legend: {
            show: false
        },
        tooltip: {
            show: false,
        },
        grid: [{
                show: false,
                left: '9%',
                top: 20,
                bottom: 0,
                containLabel: true,
                width: '31%'
            },
            {
                show: false,
                left: '52.5%',
                top: 20,
                bottom: 0,
                width: '0%'
            },
            {
                show: false,
                right: '9%',
                top: 20,
                bottom: 0,
                containLabel: true,
                width: '31%'
            }
        ],

        xAxis: [{
                show:true,
                name:"标签1",
                type: 'value',
                   position: 'top',
                nameLocation:"center",
                 nameTextStyle:{
                   color:'#68DBD0',
                   fontSize:16
                 },
                offset:[-40],
                show:true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            {
                gridIndex: 1,
                show: false
            },
            {
                nameLocation:"center",
                offset:[-40],
                 show:true,
                 name:"标签2",
                 nameTextStyle:{
                   color:'#68DBD0',
                   fontSize:16
                 },
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: '#50afff',
                        fontSize: 14
                    }
                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            }
        ],
        series: []
    },

    options: [{
        series: [{
               name:'1111',
                type: 'bar',
                barGap: '-100%',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        position: 'left',
                        borderColor: '#214B66',
                        borderWidth: 2,
                        barBorderRadius: 15,
                        color: '#214B66'
                    },
                },
                z: 1,
                data: data.totalCost,
            }, {
                   name:'1111',
                type: 'bar',
                barGap: '-98%',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 12,
                        color: {
                            type: 'linear',
                            x: 0,
                            x1: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#27C6FE'
                            }, {
                                offset: 1,
                                color: '#00feff'
                            }]
                        }
                    },
                },
                label: {
                    normal: {
                        formatter: function(params) {
                            let str = params.data + "%";
                            return str
                        },
                        show: true,
                        position: 'top',
                        color: '#377AC0',
                        fontSize: 14,
                    }
                },
                labelLine: {
                    show: true,
                },
                z: 2,
                data: data.cost,
            },
            { name:'2222',
                type: 'bar',
                barGap: '-100%',
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        borderColor: '#214B66',
                        borderWidth: 2,
                        barBorderRadius: 15,
                        color: '#214B66'
                    },
                },
                z: 1,
                data: data.totalCost,
            }, {
                 name:'2222',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                barGap: '-98%',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 12,
                        color: {
                            type: 'linear',
                            x: 0,
                            x1: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#27C6FE'
                            }, {
                                offset: 1,
                                color: '#00feff'
                            }]
                        }
                    },
                },
                max: 1,
                label: {
                    normal: {
                        formatter: function(params) {
                            let str = params.data + "%";
                            return str
                        },
                        show: true,
                        position: 'top',
                        color: '#377AC0',
                        fontSize: 14,
                    }
                },
                labelLine: {
                    show: true,
                },
                z: 2,
                data: data.cost,
            }
        ]
    }]
}


