var center = "/asset/get/s/data-1622190334142-uWb7uv7fY.png";

    option = {
        backgroundColor: '#000',
        //   color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
        //    color:['rgba(126,106,93,.6)'],
        tooltip: {
            show: false,
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        series: [
            {
                name: '指南针',
                type: 'gauge',
                //    center : ['50%', '60%'],    // 默认全局居中
                // radius: '65%',
                radius: '180',
                min: 0,
                max: 12,
                startAngle: 120,
                endAngle: -239.999999,
                splitNumber: 12,
                axisLine: {
                    // 坐标轴线
                    lineStyle: {
                        width: 0,
                    },
                },
                axisLabel: {
                    // 坐标轴小标记
                    distance: 30,
                    formatter: function (e) {
                        switch (e + '') {
                            case '0':
                                return '330';
                            case '1':
                                return 'N';
                            case '2':
                                return '30';
                            case '3':
                                return '60';
                            case '4':
                                return 'E';
                            case '5':
                                return '120';
                            case '6':
                                return '150';
                            case '7':
                                return 'S';
                            case '8':
                                return '210';
                            case '9':
                                return '240';
                            case '10':
                                return 'W';
                            case '11':
                                return '300';
                            case '12':
                                return '330';
                            default:
                                return e;
                        }
                    },
                    textStyle: {
                        // 属性lineStyle控制线条样式
                        fontWeight: '',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10,
                    },
                },
                axisTick: {
                    show: true,
                    // 坐标轴小标记
                    length: 1, // 属性length控制线长
                    splitNumber: 190,
                    lineStyle: {
                        // 属性lineStyle控制线条样式
                        color: '#fff',
                    },
                },
                splitLine: {
                    // 分隔线
                    show: false,
                    length: -8, // 属性length控制线长
                    lineStyle: {
                        // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 1,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10,
                    },
                },
                pointer: {
                    width: 0,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                },
                detail: {
                    show: true,
                    fontFamily: 'PingFang SC Regular',
                    fontSize: 40,
                    color: 'transparent',
                    offsetCenter:[0,0],
                    formatter: ' ',
                    rich: {},
                    width: 220,
                    height: 230,
                    backgroundColor: {
                        image: center
                    }
                },
                data: [{ value:'' }],
            },
            {
                type: 'gauge',
                // radius: '62.5%',
                radius: '175',
                min: 0,
                max: 12,
                startAngle: 120,
                endAngle: -239.999999,
                splitNumber: 12,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 1,
                        shadowBlur: 0,
                        color: [[1, '#000']],
                    },
                },
                axisTick: {   //仪表盘
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        width: 1,
                    },
                    length: '-3%',
                    splitNumber: 5,  //分割间刻度线数量
                },
                splitLine: { //分割线
                    show: true,
                    length: 10,
                    lineStyle: {
                        color: '#fff',
                        width: 1.5,
                    },
                },
                axisLabel: {
                    show: false,
                },
            },
            
        ],
    };
    if (option && typeof option === 'object') {
        var startTime = +new Date();
        myChart.setOption(option, true);
        var endTime = +new Date();
        var updateTime = endTime - startTime;
        console.log('Time used:', updateTime);
    }
