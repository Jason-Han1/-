            let barColor=['rgba(236,128,141,1)','rgba(131,198,238,1)','rgba(154,131,238,1)','rgba(118,211,130,1)']
            let personFloorName=[{name:'11',value:'20'},{name:'22',value:'30'},{name:'33',value:'50'},{name:'44',value:'60'}]
            option = {
                backgroundColor:'#2A4C7E',
                polar: {
                        radius:['20%','90%']
                    },
                    tooltip: {
                        axisPointer: {
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    angleAxis: {
                        show: false,
                        clockwise:false,
                        min: 0,
                        max: 100
                    },
                    radiusAxis: {
                        type: 'category',
                        min: function(value) {
                            return -1
                        },
                        max: function(value) {
                            return value.max;
                        },
                        axisLabel: {
                            interval: 0,
                            color: function(value, index) {
                                return barColor[index - 1];
                            },
                            fontSize: 12,
                            align:'left',
                            margin:'-10',
                            formatter: function (value, index) {
                                return ''
                                if(personFloorName[(index-1)]){
                                    return  personFloorName[index-1].value
                                }
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false,
                            alignWithLabel: true
                        },
                        splitLine: {
                            show: false
                        },
                        z:20,
                        data: [...personFloorName.map(d => d.name)],
                    },
                    series: [{
                            type: 'bar',
                            coordinateSystem: 'polar',
                            barWidth: 7, // 10条数据的时候 10
                            showBackground: true,
                            backgroundStyle: {
                                color: "#F2F2F2"
                            },
                            itemStyle: {
                            color: function(params) {
                                var idx=params.dataIndex;
                                    return barColor[idx]
                                },
                            },
                            roundCap: true,
                            data: personFloorName
                        },
                        {
                            type: "custom",
                            coordinateSystem: 'polar',
                            renderItem: function(params, api) {
                                var values = [api.value(0), api.value(1)];
                                var coord = api.coord(values);
                                return {
                                    type: 'text',
                                    position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                                    rotation: coord[3] + Math.PI / 2,
                                    origin: [coord[0], coord[1]],
                                    style: {
                                        text: api.value(1),
                                        fill: '#000',
                                        fontSize: 18,
                                        textAlign: "left",
                                        textVerticalAlign: "middle",
                                        x: coord[0]+10,
                                        y: coord[1]
                                    }
                                };
                            },
                            data: personFloorName
                        },
                        // 里面刻度
                        {
                            name: '小环',
                            type: 'gauge',
                            splitNumber: 12,
                            radius: '48%',
                            center: ['50%', '50%'],
                            startAngle: 0,
                            endAngle: 359.9999,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#BFBFBF',
                                    width: 3,
                                    shadowBlur: 1,
                                    shadowColor: '#BFBFBF',
                                },
                                length: 1,
                                splitNumber: 5
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            detail: {
                                show: false
                            }
                        },
                        {
                            name: '小环',
                            type: 'gauge',
                            splitNumber: 12,
                            radius: '62%',
                            center: ['50%', '50%'],
                            startAngle: 0,
                            endAngle: 359.9999,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#BFBFBF',
                                    width: 3,
                                    shadowBlur: 1,
                                    shadowColor: '#BFBFBF',
                                },
                                length: 1,
                                splitNumber: 7
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            detail: {
                                show: false
                            }
                        },
                        {
                            name: '小环',
                            type: 'gauge',
                            splitNumber: 12,
                            radius: '77%',
                            center: ['50%', '50%'],
                            startAngle: 0,
                            endAngle: 359.9999,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#BFBFBF',
                                    width: 3,
                                    shadowBlur: 1,
                                    shadowColor: '#BFBFBF',
                                },
                                length: 1,
                                splitNumber: 7
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            detail: {
                                show: false
                            }
                        },
                        {
                            name: '小环',
                            type: 'gauge',
                            splitNumber: 12,
                            radius: '93%',
                            center: ['50%', '50%'],
                            startAngle: 0,
                            endAngle: 359.9999,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: true,
                                lineStyle: {
                                    color: '#BFBFBF',
                                    width: 7,
                                    shadowBlur: 0,
                                    shadowColor: '#BFBFBF',
                                },
                                length: 1.5,
                                splitNumber: 5
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            detail: {
                                show: false
                            }
                        },
                    ]
            };