option = {
    color: ['#FF0000','#FFFF00'],
    title: {
        text: '贵州省疫情统计',
        left: '5%',
    },
       grid: {
                left: '10%',
                top: '10%',
                bottom: '5%',
                right: '5%',
            },
             legend: {
                type: "scroll",
                right: '5%',
                data:['新增确诊','新增疑似'],
                 itemWidth:18,
                 itemHeight:12,
                 textStyle: {
                     fontSize:14
                 },
             },
            yAxis: [
                {
                    type: 'value',
                    position: 'left',
                    nameTextStyle: {
                        color: '#00FFFF'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(135,140,147,0.8)'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                        fontSize: 14
                    }
                },
            ],
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#6A989E',
                        }
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: '14',
                            lineHeight: 22
                        }

                    },
                    //-----
                    data: ['2/9','2/10', '2/11', '2/12', '2/12', '2/13', '2/14'],
                },
            ],
            series: [
                {
                    symbolSize: 10,
                    name: '新增确诊',
                    type: "line",
                    yAxisIndex: 0,
                    data: [23,43,54,46,56,75,10] ,
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                        }
                    }
                },
                {
                    symbolSize: 10,
                    name: '新增疑似',
                    type: "line",
                    yAxisIndex: 0,
                    data: [3,23,34,26,52,15,8] ,
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                        }
                    }
                }], 
};