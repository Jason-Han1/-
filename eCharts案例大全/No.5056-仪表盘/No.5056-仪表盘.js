var dataArr = 328;

option = {
    backgroundColor: '#fff',
    tooltip: {
        show:false
    },

    series: [{
            name: "内部进度条",
            type: "gauge",
            radius: '40%',
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 1000, '#468EFD'],
                        [1, "#111F42"]
                    ],
                    width: 8
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function() {
                    return '塔米分';
                },
                offsetCenter: [0, 130],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#324063'
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 90], // x, y，单位px
                textStyle: {
                    color: "#2D99FF",
                    fontSize: 40, //表盘上的标题文字大小
                    fontWeight: 700,
                    fontFamily: 'PingFangSC'
                }
            },
            data: [{
                name: dataArr,
                value:  dataArr/10,
            }],
            pointer: {
                show: true,
                length: '75%',
                radius: '20%',
                width: 10, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '50%',
            min: 0,  
            max: 1000,  
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#4d5bd1',
                distance: 25,
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '100':
                            return '100';
                        case '200':
                            return '200';
                        case '300':
                            return '300';
                        case '400':
                            return '400';
                        case '500':
                            return '500';
                        case '600':
                            return '600';
                        case '700':
                            return '700';
                        case '800':
                            return '800';
                        case '900':
                            return '900';
                        case '1000':
                            return '1000';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: '#468EFD', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#468EFD', //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
    ]
};