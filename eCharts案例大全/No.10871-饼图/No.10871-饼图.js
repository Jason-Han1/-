  var a = 18;//X fontSize

    var option = {
        backgroundColor: '#000000',
        legend: {
            orient: 'vertical',
            x: '35',
            y: '30',
            icon: "circle",
            data: ['<0.25%', '0.25-0.5%', '0.5-0.75%', '0.75-1%', '1-1.5%', '1.5-2%', '2-5%', '>5%'],
            textStyle: {
                fontSize: a,
                color: '#fcfbfa'
            }
        },
        grid: {
            //right: '30%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} "
        },
        angleAxis: {
            type: 'category',
            data:['周一', '周二', '周三', '周四', '周五', '周六', '周七', '周八', '周九', '周十', '周十一'],
            z: 1,
            boundaryGap: false,
            //startAngle:45,//倾斜度
            axisLine: {
                lineStyle: {
                    color: '#21B7D2'
                }
            },
            axisLabel: {
                fontSize: 20,
                interval: 0,//间隔
                color: '#fbfff8'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#21B7D2'
                    //type:'solid',
                }
            }
        },
        radiusAxis: {
            splitNumber: 2,//内圈数
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                //show:false,
                lineStyle: {
                    color: '#21B7D2'
                    //type:'solid',
                }
            }
        },
        polar: {
            center: ['50%', '50%'],
            //     radius: 200,
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '<0.25%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#76F24A',
                    borderWidth: 1,
                    borderColor: '#76F24A',
                },
            }
        }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '0.25-0.5%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#85FA4C',
                    borderWidth: 1,
                    borderColor: '#85FA4C',
                },
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '0.5-0.75%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#A6FB4F',
                    borderWidth: 1,
                    borderColor: '#A6FB4F',
                },
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '0.75-1%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#D4FB52',
                    borderWidth: 1,
                    borderColor: '#D4FB52',
                },
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '1-1.5%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#FFFE54',
                    borderWidth: 1,
                    borderColor: '#FFFE54',
                },
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '1.5-2%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#F2B13F',
                    borderWidth: 1,
                    borderColor: '#F2B13F',
                },
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '2-5%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#EA5E2A',
                    borderWidth: 1,
                    borderColor: '#EA5E2A',
                },
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5, 2, 3, 4, 5],
            coordinateSystem: 'polar',
            name: '>5%',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: '#E83223',
                    borderWidth: 1,
                    borderColor: '#E83223',
                },
            }
        }
        ],
    };