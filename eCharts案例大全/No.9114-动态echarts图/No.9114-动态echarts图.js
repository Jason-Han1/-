option = {
    grid: {
          top: 20,
          right: 35,
          bottom: 30,
          left: 60
        },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        },
        
    },
   
 
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [{
            type: 'category',
            boundaryGap: true,
              axisLine: {
            lineStyle: {
              color: "#1982ff",
              width: 1 //这里是为了突出显示加上的
            }
          },
          axisLabel: {
            //字体颜色
            show: true,
            textStyle: {
              color: "#ff0536"
            }
          },
            data: (function() {
                var now = new Date();
                var res = [];
                var len = 32;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        }

    ],
    yAxis: [{
        type: 'value',
        scale: true,
        name: 'danwei',
          nameLocation: "center",
          nameGap: 34,
             axisLine: {
            lineStyle: {
              color: "#1982ff",
              width: 1 //这里是为了突出显示加上的
            }
          },
          axisLabel: {
            //字体颜色
            show: true,
            textStyle: {
              color: "#ff0536"
            }
          },
          splitLine: {
            show: false
          },
        boundaryGap: [0.2, 0.2]
    }],
    color:'#2ec7c9',
    series: [

        {
            name: '最新成交价',
            type: 'line',
            smooth:true,
            markLine: {
                silent: true,
                symbol: "none",
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: "solid",
                            color: "#f04864"
                        },
                        label: {
                            show: true,
                            position: "end"
                        }
                    }
                },
                data: [{
                        yAxis: -30,
                        label: {
                            position: 'end',
                            formatter: -30,
                            color: "#223273",
                        },
                        lineStyle: {
                            width: 1,
                            opacity: 0.9,
                            color: '#f00056'
                        }
                    },
                    {
                        yAxis: -20,
                        label: {
                            position: 'end',
                            formatter: -20,
                            color: "#223273",
                        },
                        lineStyle: {
                            width: 1,
                            opacity: 1,
                            color: '#facc14'
                        }
                    },
                    {
                        yAxis: 30,
                        label: {
                            position: 'end',
                            formatter: 30,
                            color: "#223273",
                        },
                        lineStyle: {
                            width: 1,
                            opacity: 1,
                            color: '#ffff00'
                        }
                    },
                    {
                        yAxis: 40,
                        label: {
                            position: 'end',
                            formatter: 40,
                            color: "#223273",
                        },
                        lineStyle: {
                            width: 1,
                            opacity: 0.8,
                            color: '#f04864'
                        }
                    }
                ]
            },
            data: (function() {
                var res = [];
                var len = 0;
                while (len < 30) {
                    res.push(Math.random() * (Math.random() > 0.5 ? 1 : -1) * 50);
                    len++;
                }
                return res;
            })()
        }
    ]
};


setInterval(function() {
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');


    var data1 = option.series[0].data;

    data1.shift();
    // data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
    data1.push(Math.random() * (Math.random() > 0.5 ? 1 : -1) * 50);

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);


    myChart.setOption(option);
}, 1100);