 var  option = {
        // backgroundColor: '#091034',
        legend: {
            icon:'circle',
            left:273,      
        //    padding:[2,4,20,6],
             itemWidth: 10,
            //  itemHeight: 10,
            data:['防火墙/WFA', 'IDS/IPS', '4A系统','僵木蠕监测','恶意程序监测处理','上网日志留存系统','IDC/ISP信息安全','安全大数据'],
            textStyle: {
                color: '#ccc'
            }
        },
        grid: {
            containLabel: true,
            left: 32,
            right: 15,
            bottom: 30,
           
        },

        xAxis: {
            splitNumber: 5,
            interval: 130 / 5,
            max: 130,
            axisLabel: {
                show: false,
                formatter: function(v) {
                    var _v = (v / 130 * 130).toFixed(0);
                    return _v == 0 ? _v : _v + '%';
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
    
        },
        yAxis: [
            {
                data: ['中国联通', '中国移动', '中国电信'],
                axisLabel: {
                    fontSize: 12,
                    color: '#ccc',
                        inside: true,
                        padding: [-45, 5, 10, -5]
                        // padding: [-45, 0, 10, -5]
        
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }, 
            {
                show: false,
                data:['中国电信', '中国移动', '中国联通'],
                axisLine: {
                    show: false
                }
            },
            {
            // data: ['52.1%', '97.9%', '88.2%'],
            data: ['11%', '29%', '52%'],
            axisLabel: {
                fontSize: 31,
                color: '#29e6ea',
                    inside: true,
                    // padding: [15,-90, 10, -5]
                     padding: [15,-90, 10, -5]
    
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }, {
            show: false,
            data: ['11%', '29%', '52%'],
            // data: ['52.1%', '97.9%', '88.2%'],
            axisLine: {
                show: false
            }
        }],
        series: [
            
            {
                type: "bar",
                barWidth: 30,
                xAxisIndex: 0,
                barGap: "-100%",
                // data: [100, 100,100],
                data: [150, 150,150],
                itemStyle: {
                  normal: {
                    color: "#393c4f",
                   
                  }
                },
                zlevel: -1
              },
            {
            type: 'bar',
            name: '防火墙/WFA',
            stack: '2',

            legendHoverLink: false,
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: '#29eef4'
                },
                emphasis: {
                    color: '#29eef4'
                }
            },
            data:[6,30,63],
        },
        {
            type: 'bar',
            name: 'IDS/IPS',
            stack: '2',

            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#35d9f5'
                },
                emphasis: {
                    color: '#35d9f5'
                }
            },
            data: [3,3,13.5],
            // 14.25
        },
        {
            type: 'bar',
            name: '4A系统',
            stack: '2',

            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#40c3f7'
                },
                emphasis: {
                    color: '#40c3f7'
                }
            },
            data: [1.5,1.5,0],
        },
        {
            type: 'bar',
            name: '僵木蠕监测',
            stack: '2',

            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#4daffa'
                },
                emphasis: {
                    color: '#4daffa'
                }
            },
            data: [1.5,1.5,0],
        },
            {
            type: 'bar',
            name: '恶意程序监测处理',
            stack: '2',

            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#579cfb'
                },
                emphasis: {
                    color: '#579cfb'
                }
            },
            data:[1.5,1.5,0],
            // data:[8.85,3.15,0],
        }, {
            type: 'bar',
            name: '上网日志留存系统',
            stack: '2',
            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#6386fb'
                },
                emphasis: {
                    color: '#6386fb'
                }
            },
            data:[1.5,3,0],
        }, {
            type: 'bar',
            stack: '2',
            name: 'IDC/ISP信息安全',
            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#6e71fb'
                },
                emphasis: {
                    color: '#6e71fb'
                }
            },
            // data: [0,3.15,8.58],
            data: [1.5,1.5,1.5],
        }, {
            type: 'bar',
            stack: '2',
            name: '安全大数据',
            legendHoverLink: false,
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: '#7a5bff'
                },
                emphasis: {
                    color: '#7a5bff'
                }
            },
            // data:  [0,3.15,0]
            data:  [0,1.5,0]
        }],
        
        
    };
    