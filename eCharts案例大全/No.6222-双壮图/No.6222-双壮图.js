var fontSize = 16;

option = {
    baseOption: {
        legend: [{
            bottom: '5%',
            right: '57%',
            align: 'right',
            itemWidth: 14,
            itemHeight: 14,
            data: ['改造前'],
            textStyle: {
                color: '#333',
                fontSize: fontSize
            },
        }, {
            bottom: '5%',
            left: '57%',
            itemWidth: 14,
            itemHeight: 14,
            data: ['改造后'],
            textStyle: {
                color: '#333',
                fontSize: fontSize
            },
        }],
        grid: [{
            show: false,
            left: '15%',
            top: '10%',
            bottom: '15%',
            containLabel: true,
            width: '27%'
        }, {
            show: false,
            left: '51%',
            top: '10%',
            bottom: '15%',
            width: '0%'
        }, {
            show: false,
            right: '15%',
            top: '10%',
            bottom: '15%',
            containLabel: true,
            width: '27%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dashed'
                }
            },
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dashed'
                }
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#D7D7D7'
                }
            },
            
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        }, {
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
                padding: [0, 0, 0, 0],
                textStyle: {
                    color: '#333',
                    fontSize: fontSize
                },
                align: "center"

            },
            data: ['运维检修部', '皋兰县', '平川县','景泰县','会宁县','靖远县']
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle:{
                    color:'#D7D7D7'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
        }],
        series: [{
                name: "改造前",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#21C4B1',
                        barBorderRadius: [20,0,0,20]
                    }
                },
                label: {
                    show: false,
                },
                data: [2, 3, 7,5,3]
            },
            {
                name: "改造后",
                type: "bar",
                barWidth: 15,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: '#F8716E',
                        barBorderRadius: [0,20,20,0]
                    }
                },
                data: [2, 5, 3,7,6],
                label: {
                    show: false,
                },
            },
        ]

    },
}