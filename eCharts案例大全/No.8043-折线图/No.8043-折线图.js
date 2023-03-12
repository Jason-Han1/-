option = {
    color: "#DBDBDB",
    error: false,
    tooltip: {
        trigger: 'axis',
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
                        color: 'rgba(188,88,249,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(188,88,249,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(188,88,249,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },

    },
    dataZoom: [{
                        type: "slider", /*类型*/
                        xAxisIndex: 0, /*对应的轴*/
                        bottom: "0", /*位置，定位*/
                        start: 0, /*开始*/
                        end: 100, /*结束*/
                        handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
                        handleStyle: { /*手柄的样式*/
                            color: "#40bcf9",
                            borderColor: "#1fb2fb"
                        },
                        backgroundColor: "#e2f3ff", /*背景 */
                        dataBackground: { /*数据背景*/
                            lineStyle: {
                                color: "#000000"
                            },
                            areaStyle: {
                                color: "#d4d9dd"
                            }
                        },
                        fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/

                    }],
    grid: {
        top: '5%',
        left: '1%',
        right: '2%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#DBDBDB'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#666',
            },
        },
        axisTick: {
            show: false,
        },
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
    }],
    yAxis: [{
        name:'次',
        nameTextStyle: {
            color:'#000',
        },
        color:'#000',
        type: 'value',
        splitLine: {
            show: true,
            color: "#666"
        },
        axisLine: {
            color: "#666",
            lineStyle: {
                color: '#DBDBDB'
            },
        },
        axisLabel: {
            color: "#666"
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: "#B31FF8", // 线条颜色
            },
            borderColor: '#fff'
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#666',
            }
        },
        itemStyle: {
            normal: {
                color: "#BC58F9",
            }
        },
        tooltip: {
            show: false
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,150,239,0.3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,253,252,0)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [150, 200, 259, 360, 378, 450, 420]
    }]
};