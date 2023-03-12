option = {
    backgroundColor: '#010f1c',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },

    grid: {
        left: '15px',
        top: '30px',
        right: '20px',
        bottom: '0',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {

            lineStyle: {
                color: '#11505a',

            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#d1d1d1'
            }
        },
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

    }],
    yAxis: [{
        type: 'value',
        name: '单位 / A',
        nameTextStyle: { //y轴上方单位的颜色
            color: '#d1d1d1'
        },
        nameGap: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false, //y轴线
            lineStyle: {
                color: '#14568d',

            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#d1d1d1',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#11505a'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
            name: '电力',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            markLine: {
                silent: true,
                symbol: ['none', 'triangle'],
                symbolSize: 5,
                lineStyle: {
                    color: '#f12325'
                },
                label: {
                    show: false
                },
                data: [{
                        yAxis: 50
                    },

                ]
            },
            lineStyle: {
                shadowColor: '#fff',
                shadowBlur: 10,
                shadowOffsetY: 0,
                width: 2,
                color: '#5bddcd',

            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, //RGB(91,221,205)
                            color: 'rgba(91,221,205, 0.9)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(91,221,205,0.5)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(91,221,205,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#5bddcd',
                    borderColor: '#5bddcd',
                    borderWidth: 0

                }
            },

            data: [0, 50, 30, 60, 40, 80, 44],
        }, {
            name: '流',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,

            lineStyle: {

                width: 2,
                color: '#fff',

            },
            animationEasingUpdate:'quadraticIn',
            //animationDurationUpdate:800,
           
            data: [null, null, null, null, null, null, null],
        },


    ]
};


let num=0;

let intervalId = setInterval(function () {
     let _data = [null, null, null, null, null, null, null];
     
      if (num < _data.length - 1) {
            _data[num] = option.series[0].data[num]
        _data[num+1] = option.series[0].data[num+1]
        option.series[1].data = _data;
        myChart.setOption(option)
        console.log(option.series[1].data)
        
        } else {
             clearInterval(intervalId);
        }
       
   num ++
    
}, 800);


/*setTimeout(function() {
    var option = myChart.getOption();
    
    for (let i = 0; i < option.series[1].data.length; i++) {
        let _data = [null, null, null, null, null, null, null]
        if (i == option.series[1].data.length -1) {
            
        } else {
             _data[i] = option.series[0].data[i]
        _data[i+1] = option.series[0].data[i+1]
        }
       option.series[1].data = _data
       
         
         setTimeout(function(){
             console.log(option.series[1].data)
              myChart.setOption(option)
         },500)
        
        
    }
}, 1000);*/