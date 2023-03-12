option = {
    backgroundColor: "#404A59",
    color: ['#ffd285', '#ff733f', '#ec4863','#ffc0a9'],

    title: [{
        text: '分娩—黑白胎统计报表',
        left: '40%',
        top: '6%',
        textStyle: {
            color: '#fff'
        }
    }],
    tooltip: {
      
    },
    legend: {
        x: '30%',
        bottom: '1%',
        /*textStyle: {
            color: '#ffd285',
        },*/
        data: ['白胎数', '黑胎数', '死仔总数', '产仔总数'],
      textStyle: {
              color: '#fff'
          }
    },
    radar: {
        // shape: 'circle',
        indicator: [{
            name: '白胎比例 ',
            max: 65
        }, {
            name: '黑胎比例',
            max: 16
        }, {
            name: '死胎比例',
            max: 30
        } ],
        center: ['83%', '65%'],
        radius: 80
    },
    grid: {
        left: '10%',
        right: '32%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        boundaryGap: true, //false时X轴从0开始
        data: ['2017/7', '2017/8', '2017/9', '2017/10', '2017/11', '2017/12', '2018/1']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        type: 'value'
    },
    series: [
       
        {
            name: '白胎数',
         
            smooth: true,
            type: 'bar',
            symbolSize: 8,
            //symbol: 'circle',
            data: [90, 50, 39, 50, 120, 82, 80]
        }, {
            name: '黑胎数',
            smooth: true,
            type: 'bar',
            symbolSize: 8,
            //symbol: 'circle',
            data: [70, 50, 50, 87, 90, 80, 70]
        }, {
            name: '死仔总数',
            smooth: true,
            type: 'bar',
            symbolSize: 8,
            //symbol: 'circle',
            data: [20, 10, 20, 12, 15, 20, 30]
            
        }, 
        {
            name: '产仔总数',
            smooth: true,
            type: 'bar',
            symbolSize: 8,
            //symbol: 'circle',
            data: [290, 200, 210, 132, 115, 200, 190]
            
        },{
            type: 'pie',
            center: ['83%', '20%'],
            radius: ['15%', '20%'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 335,
                name: '白胎比例 ',
                itemStyle: {
                    normal: {
                        color: '#ffd285'
                    }
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            color: '#ffd285',
                            fontSize: 20

                        }
                    }
                }
            }, {
                value: 100,
               
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#404A59'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ffd285',
                        },
                        formatter: '\n白胎比例 '
                    }
                }
            }]
        }, 

        {
            type: 'radar',
            center: ['83%', '85%'],
            //radius: ['15%', '20%'],
            //name: '雷达',
            tooltip: {

            },
            data: [{
                value: [43, 10, 28, 35, 50, 19],
                name: '比例'
            }, ]
        }
    ]
}