var uploadedDataURL = "/asset/get/s/data-1571131575617-_z8tTWKm.js";
/*
    水球图 代码地址
    https://github.com/ecomfe/echarts-liquidfill/tree/master/dist
    
    echarts-liquidfill.min.js
*/
const rate = 0.55; // 进度
$.getScript(uploadedDataURL, function() {
    myChart.setOption({
        series: [{
            type: 'liquidFill',
            data: [{
                    value: rate,
                    direction: 'right', // 控制移动方向 left | right
                    itemStyle: {
                        color: 'rgba(0, 191, 255, 1)'
                    }
                },
                {
                    value: rate - 0.04,
                    direction: 'right',
                    itemStyle: {
                        color: 'rgba(0, 191, 255, 0.6)'
                    }
                },
                {
                    value: rate - 0.08,
                    direction: 'right',
                    itemStyle: {
                        color: 'rgba(0, 191, 255, 0.8)'
                    }
                }
            ],
            itemStyle: {
                opacity: 0.95,
                // shadowBlur: 10,
                // shadowColor: 'rgba(0, 191, 255, 0.8)',
            },
            label: {
                fontSize: 50 // 控制中央字体大小
            },
            outline: {
                show: false // 外圈
            },
            radius: 300,
            waveAnimation: 10, // 动画时长
            amplitude: 30, // 振幅
        }, {
            name: '访问来源',
            type: 'pie',
            radius: [152, 160],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
            },
            animationDuration: 2500, // 动画时长
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: rate,
                name: '直接访问',
                itemStyle: {
                    color: 'rgba(0, 191, 255, 0.6)'
                }
            }, {
                value: 1 - rate,
                name: '直接访问',
                itemStyle: {
                    color: '#e0e0e0'
                }
            }]
        }]
    })
});