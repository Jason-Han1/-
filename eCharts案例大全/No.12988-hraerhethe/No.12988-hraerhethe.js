option = {
   

    legend: {
        left: '83',
        top: '33',
        textStyle: {
            color: '#3e4956',
            fontSize: 13,
             
        },
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 65,
        icon: 'rect',
        data: ['单人当天', '群体基准']

    },
    yAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#3e4956',
          
            fontSize: 13,
        },

        type: 'category',
        position: 'left',
        data: ['操作5', '操作4', '操作3', '操作2', '操作1']

    }],

    xAxis: [{
        show: false,
        axisTick: {
            show: false
        },
        type: 'value',
        name: '检查批次数',
        min: 0,
        max: 1300,
        inverse: false,
        axisLine: {
            show: false,
        },


    }],
    series: [{

            name: '单人当天',
            align: 'left',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#99f952'
                }
            },
            barWidth: '10',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#3e4956'
                    }
                }
            },
            data: [321, 457, 789, 1244, 1322],
        },


        {
            name: '群体基准',
            align: 'left',
            type: 'bar',
            barGap: '99%',
            barWidth: '10',
            itemStyle: {
                normal: {
                    color: '#187831'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#3e4956'
                    }
                }
            },
            data: [347, 347, 654, 873, 897],
        },

    ]
};
