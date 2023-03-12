const data = {
    title: 'test',
    legend: ['邮件营销', '联盟广告', '视频广告'],
    color: ['#6D83BC', '#bbb', '#8E96A5', '#8CA6D7', '#AAA38E', '#786659', '#939347'],
    yAxis: [
        [92.3, 100, 98.2, 91, 93, 90, 91.2, 93],
        [80, 75, 86, 83, 89, 85, 88, 82],
        [75, 66, 68, 80, 80, 66, 63, 64, 62]
    ],
    xAxis: ['只想要你知道', '遥不可及的你', '只要平凡', '时间飞行', '对你太想念',
        '不找了', '可能否'
    ],
    ysplitLine: '#F1F3F5',
}
let {
    title,
    color,
    xAxis,
    yAxis,
    legend
} = data

let seriesData = []
xAxis.forEach((item, index) => {
    let name = legend[index]
    let _areaStyle = {}
    if (index == 0) {
        _areaStyle = {
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: '13',
                    color: '#414957'
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(109,131,188,0.23)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(109,131,188,0.07)'
                        }
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            }
        }

    } else {
        _areaStyle = {
            label: {
                normal: {
                    show: false,
                }
            },
        }
    }
    console.log(_areaStyle)
    seriesData.push({
        name: name,
        type: 'line',
        // stack: '总量',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        symbolSize: 5,
        label: {
            normal: {
                show: true,
                position: 'top',
                fontSize: '13',
                color: '#414957'
            }
        },
        ..._areaStyle,
        lineStyle: {
            normal: {
                color: color[index], 
            }
        },
        itemStyle: {
            normal: {
                color: color[index],

            }
        },
        data: yAxis[index]
    })
})

option = {
    backgroundColor: "#fff",
    title: {
        show: false,
        text: title,
        x: '4%',
        top: '4%',
        textStyle: {
            color: '#4D5562',
            fontSize: '16',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'axis',
        // formatter: function(params) {
        //     let time = ''
        //     let str = []
        //     for (var i of params) {
        //         time = i.name.replace(/\n/g, '').concat('<br/>')
        //         str.push((i.data === 'null' || i.data === null) ?
        //             `<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:${color[i.seriesIndex]}"></span>${i.seriesName}：无数据<br/>` :
        //             `<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:${color[i.seriesIndex]}"></span>${i.seriesName}：${utilNumDecimal(i.data)}<br/>`
        //         )
        //     }
        //     return time + str.join('')
        // }
    },
    legend: {
        icon: 'rect',
        data: legend,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 12,
        borderRadius: 4,
        textStyle: {
            fontSize: 12,
            color: '#414957'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxis,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
                color: '#687284',
                align: 'center',
                whiteSpace: 'wrap',
                lineHeight: 12,
                height: 50,
                fontSize: 10
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#687284'
            }
        },
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: data.ysplitLine || '#F1F3F5',
                type: 'solid'
            },
        },
    },
    series: seriesData
};