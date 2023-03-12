let colors = ['#5793f3','#d14a61','#675bba','#64B8A1','#FEDC97'];
option = {
            color: colors,
            backgroundColor: '#FFFFFF',
            title: {
                text: 'XX时-XX时XX市XX污染要素与气象要素日均值时序对比',
                top: '16',
                x: 'center',
                textStyle: {color: '#30465D',fontSize: '18',fontWeight: 'bold'}
            },
            calculable : true,
            grid:{
                x: '50',
                y: '150',
                x2: '300',
                y2: '150'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {type: 'shadow',label: {show: true}}
            },
            toolbox: {
                top: '50',
                right: '18',
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            legend: {
                top: '50',
                data:['日降水量','日均气温','日均湿度','日均风速','PM2.5']
            },
            xAxis:{
                type: 'category',
                axisTick: {show: false},
                axisLabel: {textStyle: {color:'#445E77',fontSize:14,}},
                axisLine: {lineStyle: {color: '#445E77'}},
                data: ["2019-02-09","2019-02-10","2019-02-11","2019-02-12","2019-02-13","2019-02-14","2019-02-15","2019-02-16","2019-02-17","2019-02-18","2019-02-19","2019-02-20","2019-02-21","2019-02-22","2019-02-23","2019-02-24","2019-02-25","2019-02-26","2019-02-27","2019-02-28","2019-03-01","2019-03-02","2019-03-03","2019-03-04","2019-03-05","2019-03-06","2019-03-07","2019-03-08","2019-03-09","2019-03-10"]
            },
            yAxis:[
                {
                    type: 'value',
                    name: '水量(ml)',
                    position: 'left',
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {color: colors[0]}
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '气温(°C)',
                    position: 'right',
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {color: colors[1]}
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '湿度(%)',
                    position: 'right',
                    offset: 80,
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {color: colors[2]}
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '风速(m/s)',
                    position: 'right',
                    offset: 160,
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {color: colors[3]}
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '污染(μg/m3)',
                    position: 'right',
                    offset: 240,
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {color: colors[4]}
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name:'日降水量',
                    type:'line',
                    // smooth: true,
                    z: 10,
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{offset: 0, color: 'rgba(87,147,243,1)'},{offset: 1, color: 'rgba(87,147,243,0.1)'}],
                            globalCoord: false
                        }
                    },
                    data:[6.44,0.45,0.01,8.72,1.99,7.31,5.57,0.33,0.0,9.9,4.36,2.14,1.55,5.88,0.0,0.0,0.0,0.55,1.51,0.01,0.29,1.14,0.07,0.0,1.88,0.33,0.0,0.0,1.41,0.14]
                },
                {
                    name:'日均气温',
                    type:'line',
                    // smooth: true,
                    yAxisIndex: 1,
                    data:[-0.04,0.32,0.24,1.83,4.43,3.65,3.92,2.53,2.72,3.07,3.79,3.84,4.55,3.83,4.73,5.23,6.3,6.49,6.69,6.92,7.22,7.63,7.06,8.42,8.91,9.9,6.72,6.15,9.05,9.7]
                },
                {
                    name:'日均湿度',
                    type:'line',
                    // smooth: true,
                    yAxisIndex: 2,
                    data:[81.68,76.37,78.19,85.76,85.79,89.74,93.21,68.17,55.61,83.92,88.78,85.46,83.31,88.31,78.54,72.27,71.53,78.23,84.32,80.05,76.12,74.53,73.53,69.74,77.91,76.01,56.9,64.55,81.57,84.58],"maxRH":[96.4,90.23,94.07,96.27,96.63,96.96,97.8,91.01,72.46,98.17,98.76,95.69,95.36,96.8,97.64,97.86,96.29,98.21,92.6,95.69,95.39,88.51,86.26,94.19,92.14,98.6,71.31,88.71,93.87,96.91],"minRH":[63.19,67.1,56.27,72.3,66.5,78.24,82.83,46.6,38.03,57.19,73.11,72.17,65.41,74.23,45.46,31.41,37.76,48.7,72.34,53.99,51.01,56.61,58.03,40.16,63.04,37.74,31.24,39.8,66.47,61.39]
                },
                {
                    name:'日均风速',
                    type:'line',
                    // smooth: true,
                    yAxisIndex: 3,
                    data:[2.59,2.28,1.47,2.17,2.53,3.32,1.75,2.41,1.88,2.22,2.38,1.78,1.93,1.66,1.51,1.0,1.42,2.68,2.27,1.25,1.65,2.14,1.61,1.74,2.49,2.32,2.39,2.27,1.89,2.02]
                },
                {
                    name:'PM2.5',
                    type:'bar',
                    // smooth: true,
                    yAxisIndex: 4,
                    data:[2.59,2.28,1.47,2.17,2.53,3.32,1.75,2.41,1.88,2.22,2.38,1.78,1.93,1.66,1.51,1.0,1.42,2.68,2.27,1.25,1.65,2.14,1.61,1.74,2.49,2.32,2.39,2.27,1.89,2.02]
                }
            ]
        }