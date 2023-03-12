let xLabel = ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月']
let goToSchool = ["40", "60", "22", "85", "50", "40", "60", "22", "85", "50", '70','80']

option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor:'transparent',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(126,199,255,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(126,199,255,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(126,199,255,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },
        // formatter: (p) => {
        //     let dom = ``
        //     return dom
        // }
    },
    grid: {
        top: '20%',
        left: '15%',
        right: '5%',
        bottom: '25%',
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#B0C5DB'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#8C8C8C',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis: [{
        name: '元',
        nameTextStyle: {
            color: "#8C8C8C",
            fontSize: 14,
            padding: 10
        },
        min: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: "transparent"
            }

        },
        axisLabel: {
            // show: true,
            textStyle: {
                color: '#8C8C8C',
                padding: 16
            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            // show: false,
        },
    }],
    series: [{
        name: '',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
                color: "#1890FF", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "#1890FF",
            borderColor: "#646ace",
            borderWidth: 2

        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(25,163,223,.3)"


                    },
                    {
                        offset: 1,
                        color: "rgba(25,163,223, 0)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: goToSchool
    }]
};