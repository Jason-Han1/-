var getname = ['应届生毕业率', '应届生就业率'];
var value = [0.9265,0.7655];

option = {
            backgroundColor:"#000",
            grid: {
                top: '15%',
                left: '5%',
                right: '15%',
                bottom: '13%'
            },
            tooltip: {
                show: false
            },
            xAxis: {
                type: 'value',
                min: 0,
                max:1,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ffffff',
                        width: 1
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(96,118,173,0.3)'
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                //show: false,
                type: 'category',
                inverse:true,
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    margin: 0,
                    align: 'left',
                    padding: [-50, 0, 0, 0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                axisTick: {
                    show: false
                },
                data : getname
            },
            series: [{
                //真实数值条形图
                name: "真实值",
                type: 'bar', //pictorialBar
                barWidth: 18,
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: '#00E4FF'
                    },
                    barBorderRadius: 10
                },
                label: {
                    show: false,
                },
                data : value,
                z: 0
            }, {
                //辅助方格图形
                name: "辅助值",
                type: 'pictorialBar',
                barWidth: 20,
                symbol: 'rect',
                symbolRepeat: 'true',
                symbolMargin: 4,
                symbolSize: ['20%', '100%'],
                symbolOffset: ['120%', '0%'],
                symbolRepeat: true,
                itemStyle: {
                    normal: {
                        color: '#000'
                    },
                    barBorderRadius: 10
                },
                label: {
                    normal: {
                        color: '#fff',
                        show: true,
                        position: ['100%', '10%'],
                        fontSize: 16,
                        formatter: function(params) {
                            //console.info(params);
                            return ' ' + (value[params.dataIndex]*100).toFixed(2) + '%';
                        }
                    }
                },
                data : [1,1],
                z: 1
            },{
                //辅助背景图形
                name: "背景条",
                type: 'bar', //pictorialBar
                barWidth: 18,
                barGap : '-100%',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: '#00E4FF',
                        opacity:0.2
                    },
                    barBorderRadius: 10
                },
                data : [1,1],
                z: 0
            },]
        };