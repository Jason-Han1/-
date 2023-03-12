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
    series: [{
        symbolSize: 50,
        data: [
            // 中心圆
            {
                name: 'c1',
                value: [50, 50],
                symbol: 'circle',
                symbolSize: 300,
                itemStyle: {
                    color: '#ffe9af'
                },
            },
            {
                name: 'c1',
                value: [50, 50],
                symbol: 'circle',
                symbolSize: 380,
                itemStyle: {
                    color: 'transparent',
                    borderWidth: 10,
                    borderColor: '#00a7db'
                },
            },
            
            // 上方圆
            {
                name: 'c1',
                value: [50, 80],
                symbol: 'circle',
                symbolSize: 170,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
            },
            {
                name: 'c1',
                value: [50, 80],
                symbol: 'circle',
                symbolSize: 150,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                label: {
                    show: true,
                    fontSize: '300%',
                    formatter() {
                        return '50%';
                    }
                }
            },
            
            
            // 左下圆
            {
                name: 'c1',
                value: [30, 30],
                symbol: 'circle',
                symbolSize: 170,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
            },
            {
                name: 'c1',
                value: [30, 30],
                symbol: 'circle',
                symbolSize: 150,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                label: {
                    show: true,
                    fontSize: '300%',
                    formatter() {
                        return '50%';
                    }
                }
            },
            
            
            // 右下圆
            {
                name: 'c1',
                value: [70, 30],
                symbol: 'circle',
                symbolSize: 170,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 2,
                    borderColor: '#021236'
                },
            },
            {
                name: 'c1',
                value: [70, 30],
                symbol: 'circle',
                symbolSize: 150,
                itemStyle: {
                    color: '#00a7db',
                    borderWidth: 5,
                    borderColor: '#021236'
                },
                label: {
                    show: true,
                    fontSize: '300%',
                    formatter() {
                        return '60ms';
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
