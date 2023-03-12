const set1 =[
    ['时间', '挂牌价', '到手优惠', '到手价', '凑单优惠', '凑单价'],
    ['2019/10/3 12:32', 235, 40.36, 194.64, 75.64, 159.36],
    ['2019/10/4 18:32', 220, 28.82, 191.18, 31.16, 188.84],
    ['2019/10/6 0:32', 222, 42.66, 179.34, 80.38, 141.62],
    ['2019/10/6 12:32', 220, 23.03, 196.97, 23.27, 196.73],
    ['2019/10/6 19:32', 240, 24.32, 215.68, 33.51, 206.49],
    ['2019/10/8 12:32', 207, 34.15, 172.85, 58.78, 148.22],
    ['2019/10/9 12:32', 240, 34.21, 205.79, 52.98, 187.02],
    ['2019/10/10 6:32', 229, 46.09, 182.91, 63.62, 165.38],
    ['2019/10/10 10:32', 210, 42.02, 167.98, 52.44, 157.56],
    ['2019/10/10 12:48', 233, 46, 187, 46.41, 186.59],
    ['2019/10/10 20:32', 206, 28.42, 177.58, 28.56, 177.44],
    ['2019/10/12 1:32', 238, 34.64, 203.36, 64.32, 173.68],
    ['2019/10/12 8:32', 227, 46.68, 180.32, 59.34, 167.66],
    ['2019/10/12 12:32', 242, 10.55, 231.45, 19.28, 222.72]
];

option = {
    dataset: {
        source: set1
    },
    // backgroundColor: '#fff',
    dataZoom:{
        type:'slider',
        handleSize:'80%',
        height:16,
        bottom:8
    },
    legend: {
        show: true,
        left: 16,
        top: 8,
    },
    grid: {
        left: 48,
        right: 24,
        top: 48,
        bottom: 64
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {},
    series: [
        // {type:'line',show:false},
        // {type:'line',show:false},
        // {type:'line',show:false},
        // {type:'line',show:false},
        // {type:'line',show:false},

        {
            type: 'line',
            step: true,
            encode: {
                x: 0,
                y: 1
            },
            markPoint: {
                data: [{
                        name: '最高',
                        type: 'max',
                    },
                    {
                        name: '最低',
                        type: 'min'
                    }
                ],
                symbol:'circle',
                symbolSize: '16',
                itemStyle:{
                    opacity:0.5
                },
                label: {
                    show: false
                }
            }
        },
        {
            type: 'line',
            step: true,
            encode: {
                x: 0,
                y: 2
            },
            markPoint: {
                data: [{
                        name: '最高',
                        type: 'max',
                    },
                    {
                        name: '最低',
                        type: 'min'
                    }
                ],
                symbol:'circle',
                symbolSize: '16',
                itemStyle:{
                    opacity:0.5
                },
                label: {
                    show: false
                }
            }
        },
        {
            type: 'line',
            step: true,
            encode: {
                x: 0,
                y: 3
            },
            markPoint: {
                data: [{
                        name: '最高',
                        type: 'max',
                    },
                    {
                        name: '最低',
                        type: 'min'
                    }
                ],
                symbol:'circle',
                symbolSize: '16',
                itemStyle:{
                    opacity:0.5
                },
                label: {
                    show: false
                }
            }
        },
        {
            type: 'line',
            step: true,
            encode: {
                x: 0,
                y: 4
            },
            markPoint: {
                data: [{
                        name: '最高',
                        type: 'max',
                    },
                    {
                        name: '最低',
                        type: 'min'
                    }
                ],
                symbol:'circle',
                symbolSize: '16',
                itemStyle:{
                    opacity:0.5
                },
                label: {
                    show: false
                }
            }
        },
        {
            type: 'line',
            step: true,
            encode: {
                x: 0,
                y: 5
            },
            markPoint: {
                data: [{
                        name: '最高',
                        type: 'max',
                    },
                    {
                        name: '最低',
                        type: 'min'
                    }
                ],
                symbol:'circle',
                symbolSize: '16',
                itemStyle:{
                    opacity:0.5
                },
                label: {
                    show: false
                }
            }
        }
    ]
};
myChart.resize({
    width: 728,
    height: 290
});