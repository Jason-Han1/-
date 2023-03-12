option = {
    backgroundColor: '#071729',
    grid: {
        left: '10%',
        right: '10%',
        bottom: '5%',
        top: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        scale: true,
        max: 2599,
        min: 0,
        axisTick: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: "#ccc" //X轴文字颜色
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(0,160,233,0.25)" //X轴文字颜色
            },
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: '90%',
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        //  max:1389,
        min: 0,
        axisTick: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: "#ccc"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(0,160,233,0.25)" //X轴文字颜色
            },
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: '90%',
        }
    }],
    series: [{
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: '#1C95FB'
                }
            },
            symbolSize: 7,
            data: [
                [2171, 157],
                [1557, 222],
                [829, 140],
                [834, 247],
                [655, 168],
                [1068, 275],
                [947, 636],
                [797, 424],
                [732, 381],
                [929, 672],
                [988, 625],
                [1089, 318],
                [792, 321],
                [766, 729],
                [715, 283],
                [1605, 448],
                [678, 453],
                [953, 378]
            ],
        },
        {
            data: [2171],
            type: 'effectScatter',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: '#E4007F',
                    shadowBlur: 20,
                    shadowColor: '#333'
                }
            },
            zlevel: 1,
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'solid',
                        opacity: 0
                    }
                },
            },
            label: {
                show: true,
                normal: {
                    show: true,
                    formatter: '未饱和', //名称
                    lineHeight: 25,
                    fontSize: 12,
                    padding: [0, 5, 0, 5],
                    backgroundColor: 'rgba(40,103,217,0.3)',
                    borderRadius: '80%',
                    borderWidth: 1,
                    borderColor: '#2FC1F6',
                    position: 'bottom',
                    distance: 1,
                    color: '#fff',
                }
            },
        }
    ],
};