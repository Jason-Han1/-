option = {
    backgroundColor: 'white',
    color: ['#FFC90E', '#ED1C24'],
    title: {
        text: '故障统计',
        x: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: 'white',
            fontSize: 18
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        textStyle: {
            color: 'black',
            fontSize: 14
        },
        data: ['预警', '报警']
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '13%',
        top: '16.5%',
        containLabel: true,
    },
    toolbox: {
        show: true,
        //orient: 'vertical',//默认是横向，这个是纵向
        x: 'center',
        y: '65',
        feature: {
            dataView: { //数据视图
                show: true,
                readOnly: false
            },
            magicType: { //动态类型切换
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
                //      折线,  柱状,   堆叠,    平铺
            },
            restore: { //重置
                show: true
            },
            saveAsImage: { //保存图片
                show: true
            },
        },
        iconStyle: {
            normal: {
                color: 'white', //设置图标颜色
            },
            emphasis: { //字体颜色及位置
                color: 'black',
                textPosition: 'bottom'
            }
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: 'black',
            }
        },
        axisLabel: {
            show: true,
            color: 'black',
            textStyle: {
                fontSize: 18
            }
        },
        data: ['a', 'b', 'c']
    }],
    yAxis: [{
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'black',
            }
        },
        axisLabel: {
            color: 'black',
            formatter: '{value}',
            textStyle: {
                fontSize: 18
            }
        },
        type: 'value'
    }],
    series: [{
            name: '预警',
            type: 'bar',
            barWidth: '15%',
            data: [50, 66, 57],
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
        },
        {
            name: '报警',
            type: 'bar',
            barWidth: '15%',
            data: [23, 12, 26],
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
        }
    ]
};