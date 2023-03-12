option = {
    backgroundColor: '#021236',
    xAxis: {
        max: 85,
        min: 15,
        axisLine: {show:false},
        axisLabel: {show:false},
        axisTick: {show:false},
        splitLine: {show:false},
    },
    yAxis: {
        min: 100,
        max: 0,
        axisLine: {show:false},
        axisLabel: {show:false},
        axisTick: {show:false},
        splitLine: {show:false},
    },
       animation: false,
       selectedMode:false,//取消图例上的点击事件
    series: [{
        symbolSize: 150,
        data: [

            // 上方圆
            {
                name: 'c1',
                value: [50, 80],
                symbol: 'circle',
                symbolSize: 170,
                itemStyle: {
        
                    color: '#00a7db',
                    borderWidth: 10,
                    borderColor: '#021236'
                },
                   label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 90+'%'+'\n'+'大连·达沃斯';
                    }
                }
            },
            {
                name: 'c1',
                value: [50, 80],
                symbol: 'circle',
                symbolSize: 150,
                itemStyle: {
                    color: '#E75157',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                   label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 90+'%'+'\n'+'大连·达沃斯';
                    }
                }
             
            },
            // 左下圆
            {//外圈
                name: 'c1',
                value: [30, 30],
                symbol: 'circle',
                symbolSize: 130,
                itemStyle: {
                    color: '#00a7db',
                         borderWidth: 20,
                    borderColor: '#021236'
                },
                  label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 85+'%'+'\n'+'人工智能';
                    }
                }
            },
            {//内圈
                name: 'c1',
                value: [30, 30],
                symbol: 'circle',
                symbolSize: 100,
                itemStyle: {
                    color: '#5F7DF5',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 85+'%'+'\n'+'人工智能';
                    }
                }
            },
            // 右下圆
            {
                name: 'c1',
                value: [70, 30],
                symbol: 'circle',
                symbolSize: 110,
                itemStyle: {
                    color: '#00a7db',
                   borderWidth: 20,
                    borderColor: '#021236'
                },
                  label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 80+'%'+'\n'+'大数据';
                    }
                }
            },
            {
                name: 'c1',
                value: [70, 30],
                symbol: 'circle',
                symbolSize: 80,
                itemStyle: {
                    color: 'green',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 80+'%'+'\n'+'大数据';
                    }
                }
            },
            
            
              // 上方圆
            {
                name: 'c1',
                value: [50, 40],
                symbol: 'circle',
                symbolSize: 190,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 10,
                    borderColor: '#021236'
                },
                   label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                             return 95+'%'+'\n'+'大阪·G20';
                    }
                }
            },
            {
                name: 'c1',
                value: [50, 40],
                symbol: 'circle',
                symbolSize: 170,
                itemStyle: {
                    color: '#2535AE',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                   label: {
                    show: true,
                    fontSize: '100%',
                    formatter() {
                        return 95+'%'+'\n'+'大阪·G20';
                    }
                }
             
            },
        ],
        itemStyle: {
            opacity: 1,
            //borderWidth: 10,
            //borderColor: '#00a7db'
        },
        type: 'scatter'
    }]
};
