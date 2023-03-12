option = {
        backgroundColor:'#000',
        legend: {
            top: '0',
            itemWidth: 5,
            itemHeight: 5,
            textStyle: {
                color: '#FFFFFF'
            },
            icon:'circle',
        },
        grid: {
            left: '50px',
            top: '50px',
            right: '12px',
            bottom: '12px',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show:false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {

                show:false,
                color: '#FFFFFF',
            }
        },
        yAxis: {
            type: 'category',
            data: ['其他','消防','烟草','农林', '交通', '教育', '文化', '卫生'],
            nameLocation: 'end', // 轴名称相对位置value
            nameTextStyle: {    // 坐标轴名称样式
                color: '#fff',
                padding: [5, 0, 0, 5]  // 坐标轴名称相对位置
            },
            nameGap: 200, // 坐标轴名称与轴线之间的距离
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 15,
                color: '#03FFFB',
            }
        },
        color: [
            '#6046D1',
           '#4B4CF9',
            '#4C80E8',
            '#4C80E8',
            '#43A1FF',
            '#59C8FF',
            '#36BED9',
            '#39DADA',
            '#4CE8CE',
            '#43FFC0',
            '#9BFFAC',
            '#DFFF94',
            '#F3FFC6',
        ],
        series: [
            {
                name: '南京',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '无锡',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '苏州',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '常州',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '镇江',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '扬州',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '泰州',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '南通',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '盐城',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '淮安',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '宿迁',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '徐州',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },
            {
                name: '连云港',
                type: 'bar',
                stack: 'Tik Tok',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        borderColor:'#00052C',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        offset: [-20, -12],
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline: 'middle',
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#fff',
                        }
                    },
                },
                data: [220, 230, 250, 260, 280,290,300,310]
            },

        ]
    }