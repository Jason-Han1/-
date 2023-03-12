option = {
    backgroundColor: '#081736',
    legend: {
        show: true,
        textStyle: {
            color: '#fff'
        },
        data: [{
            name: '',
            icon: 'rect'
        },{
            name: ''
        }]
    },
    tooltip: {
    show: true,
    },
    xAxis: {
        data: ['五车-间生产班长', '一车间-投料工', '二车间-品管员/品管经理', '一车间-品管员/品质经理', '二车间-投料工','五车间-制粒膨化工', '一车间-制粒膨化工', '五车间-打包工'
        ,'一车间-打包工','一车间-下预工','五车间-中控员','二车间-生产班长','二车间-制粒膨化工','一车间-生产班长'
        ,'二车间-下预工','二车间-中控员','一车间-中控员'],
        axisLine: {
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            rotate:"45"
        },
 

    },
    yAxis:[ {
        type: 'value',
        name: "执行率",
        nameTextStyle: {
            color: '#0CD6FA',
            fontSize: 16
        },
        scale:true,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#0CD6FA',
            fontSize: 16
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: '#2d3d53'
            }
        },
        //max: 6000,
        //interval: 1200,
        //yAxisIndex:0
        min:35
        

    },{
        type: 'value',
        name: "合格率",
        nameTextStyle: {
            color: '#00ff00',
            fontSize: 16
        },
        //max: 6000,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#3d5269'
            }
        },
        axisLabel: {
            show: true,
            color: '#00ff00',
            fontSize: 16
        },
        
        splitLine: {
            show:true,
            lineStyle: {
                color: '#2d3d53'
            }
        },
        scale:true,
       // interval: 1200,
       min:35
        
    }],
    series: [
        {
        name: '排放量',
        type: 'bar',
        barWidth: 20,
        zlevel: 2,
        itemStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0BD7FA'
                }, {
                    offset: 1,
                    color: '#3761FE'
                }], false)
            }
        },
        label: {
            normal: {
                show: false,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'top',
            }
        },
        data: [ 100,100, 98, 97.3, 96, 96, 93, 90.9, 89, 84, 80, 73,70,70,68,66,40]
    },{
            name: '用电量',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 1,
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "rgba(0, 255, 0, 1)",
                },
            },
            zlevel: 1,
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                }
            },
            itemStyle: {
                color: "rgba(0, 96, 255, 0.8)",
                borderColor: "#fff",
                borderWidth: 2,
            },
          
            data: [ 100,98, 98, 97.3, 96, 96, 95, 90.9, 94, 84, 80, 93,95,96,90,90,98]
        }]
};