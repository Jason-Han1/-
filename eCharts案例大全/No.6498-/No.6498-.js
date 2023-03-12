option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
        bottom: '0',
        textStyle: {
            color: 'rgb(63,80,124)',
            fontSize: 14
        },
        selectedMode: false,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                    color: 'rgb(63,80,124)',
                    fontSize: 14
                }
            }
        },
        zlevel: 5,
        barWidth: '15%',
        data: [320, 302, 301, 334, 390, 330, 320],
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'radial',
                    x: 0,
                    y: 0,
                    //圆心 x, y
                    r: 20,
                    //半径
                    colorStops: [{
                        offset: 0,
                        color: '#ff5400' // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#fc0024' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                barBorderRadius: [5,0,0,5],
                borderWidth: 0,
                borderColor: '#333',
            }
        },
    },
    {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        zlevel: 5,
        barWidth: '20%',
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                distance: 0,
                //文字距离柱状图的距离像素
                textStyle: {
                    color: 'rgb(63,80,124)',
                    fontSize: 14
                }
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'radial',
                    x: 0,
                    y: 0,
                    //圆心 x, y
                    r: 20,
                    //半径
                    colorStops: [{
                        offset: 0,
                        color: '#ffb525' // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#f47528' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                //顺时针左上，右上，右下，左下）
                barBorderRadius: [0,0,0,0],
            }
        },

    },
    {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'radial',
                    x: 0,
                    y: 0,
                    //圆心 x, y
                    r: 10,
                    //半径
                    colorStops: [{
                        offset: 0,
                        color: '#68f9d0' // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#00c58e' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                barBorderRadius: [0,0,0,0],
                borderWidth: 0,
                borderColor: '#333',
            }
        },
    },
    {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [150, 212, 201, 154, 190, 330, 410],
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'radial',
                    x: 0,
                    y: 0,
                    //圆心 x, y
                    r: 10,
                    //半径
                    colorStops: [{
                        offset: 0,
                        color: '#00d4e1' // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#0046f3' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                //顺时针左上，右上，右下，左下）
                barBorderRadius: [0,5,5,0],
                borderWidth: 0,
                borderColor: '#333',
            }
        },
    }]
};