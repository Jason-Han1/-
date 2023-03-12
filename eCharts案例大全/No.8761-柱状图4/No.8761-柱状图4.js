let xdata = ['学员续费率', '试听课转换率', '课程消费率', '课后评分率', '作业完成率', '班级满班率', '排课上课率', '体验课转化率'],
    data = [100, 90, 10, 90, 90, 20, 56, 89];

option = {
    title: { //标题组件，包含主标题和副标题。
        text: '院校报到汇总情况', //主标题文本
        textAlign: 'center', //整体（包括 text 和 subtext）的水平对齐
        top: '1%', //grid 组件离容器上侧的距离。
        left: '10%', //grid 组件离容器左侧的距离。
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: xdata,
        axisPointer: {
            type: 'line'
        },
        axisLine: {
            lineStyle: {
                color: '#272456'
            },
            interval: 1,
        },
        axisLabel: {
            margin: 20,
            color: '#59588D',
            textStyle: {
                fontSize: 12,
            },
        },
    }],
    yAxis: [{
        min: 0,
        max: 100,
        axisLabel: {
            color: '#59588D',
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#272456'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: data,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: { //图形颜色
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#41E1D4' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#10A7DB' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(0,255,225,1)',
                shadowBlur: 4,
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: '#252453',
                borderRadius: 200,
                position: ['-8', '-60'],
                distance: 1,
                formatter: [
                    '    {d|●}',
                    ' {a|{c}%}     \n',
                    '    {b|}'
                ].join(','),
                rich: {
                    d: {
                        color: '#3CDDCF',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                    b: {
                        width: 1,
                        height: 30,
                        borderWidth: 1,
                        borderColor: '#234e6c',
                        align: 'left'
                    },
                }
            }
        }
    }]
}