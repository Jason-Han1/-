var yLabel = ['杭商院北门', '港边路口', '张家口', '马冢', '马家村'];
var yData = [23, 18, 15, 13, 10];


option = {
    backgroundColor:'black',
          grid: {
                        left: '12%',
                        right: '1%',
                        bottom: '10%',
                        top: '10%',
                        containLabel: true
                 },
          xAxis: {
                        show: false,
                        type: 'value'
                    },
          yAxis: [{
                        type: 'category',
                        inverse: true,
                        axisLabel: {
                            show: true,
                            margin: 15,
                            textStyle: {
                                color: '#00dcf1',
                                fontSize: 19,
                                fontFamily: 'siyuan',
                                fontStyle: 'italic'
                            },
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: yLabel
                    }, {
                        zlevel:3,
                        type: 'category',
                        inverse: true,
                        axisTick: 'none',
                        axisLine: 'none',
                        show: true,
                        axisLabel: {
                            textStyle: {
                                color: '#9aeced',
                                fontSize: '20',
                                padding: [0, 0, 0, -33],
                            },
                        },
                        data: yData
                    }],
          series: [
                        {
                            name: '人数',
                            type: 'bar',
                            zlevel: 3,
                            itemStyle: {
                                normal: {
                                    //barBorderRadius: [0, 30, 30, 0],
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: 'rgba(4,128,224,0.3)'
                                    }, {
                                        offset: 1,
                                        color: 'rgb(4,128,224)'
                                    }]),
                                    shadowBlur: 0,
                                    shadowColor: 'rgba(87,220,222,0.7)'
                                },
                            },
                            barWidth: 15,
                            data: yData
                        },
                        {
                            z:1,
                            type: 'pictorialBar',
                            symbolPosition:'end',
                            symbolRotate:'180',
                            symbolSize: [20,15],
                            color:'rgb(4,128,224)',
                            data:yData,
                            symbol: 'triangle',
                            symbolOffset: ['52%',0],

                        },
                        { // 背景
                            type: 'pictorialBar',
                            animationDuration: 0,
                            hoverAnimation: false,
                            symbolRepeat: 'fixed',
                            label:{
                                show:false,
                                position:['97%','40%'],
                                fontSize:20,
                                color: '#9aeced',
                            },
                            legendHoverLink: false,
                            symbolMargin: '10%',
                            symbol: 'roundRect',
                            symbolSize: [5, 35],
                            itemStyle: {
                                normal: {
                                    color: '#12272A',

                                }
                            },
                            data: yData,
                            z: 0,
                        },
                    ]
};
