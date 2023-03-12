option = {
    backgroundColor:'rgba(9, 21, 16, 0.75)',
    color: ["rgba(255,89,98,1)", "rgba(28,214,255,1)", "rgba(0,222,115,1)",
    "rgba(253,221,96,1)", "rgba(255,183,45,1)", "rgba(255,134,63,1)",
    "rgba(235,68,188,1)", "rgba(159,36,255,1)", "rgba(51,47,255,1)"],
    grid: {
        left: '2%',
        top: '1%',
        bottom: 10,
        right: '1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 14
        },
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        icon: "circle",
        // x: 'center',
        right: '30%',
        top:'40%',
        itemWidth: 6,  // 设置宽度
        itemHeight: 6, // 设置高度
        // itemGap: 40,// 设置间距
        // bottom: '5%',
        textStyle: {
            //文字根据legend显示 
            color: "#fft",
            fontSize: 14
        },
        itemWidth: 16,
        itemHeight: 8,
        data: ['数据1', '数据2', '数据3', '数据4', '数据5', '数据6', '数据7','数据8','数据9']
    },
    //圆的背景颜色线
     polar: {
          center: ['25%', '50%'],
          radius: ["7%", "50%"],
     },
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 20,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "rgba(60, 189, 252, 0.1)",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            show:false,
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "rgba(60, 189, 252, 0.1)",
                width: 2,
                type: "dashed"
            }
        }
    },
    calculable: true,
    series: [
    {
        //外面透明的圆
        type: 'pie',
        radius: ["7%", "50%"],
        center: ['25%', '50%'],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "rgba(60, 189, 252, 0.1)"
                }
            }
        }]
    }, {
        stack: 'a',
        type: 'pie',
        radius: ['7%', '40%'],
        center: ['25%', '50%'],
        roseType: 'area',
        zlevel: 10,
        minAngle: 15,//最小角度
        startAngle:100, //起始角度
        label: {
            normal: {
                formatter: '{b} {c}',
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                height: 40,
                fontSize: 16,
                align: 'center',
                rich: {
                    b: {
                        fontSize: 16,
                        lineHeight: 5,
                        color: '#41B3DC'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [
            {
                value: 5,
                name: '数据1'
            },
            {
                value: 15,
                name: '数据2'
            },
            {
                value: 25,
                name: '数据3'
            },
            {
                value: 20,
                name: '数据4'
            },
            {
                value: 35,
                name: '数据5'
            },
            {
                value: 35,
                name: '数据6'
            },
            {
                value: 35,
                name: '数据7'
            },
            {
                value: 50,
                name: '数据8'
            },
            {
                value: 60,
                name: '数据9'
            }
        ]
    }, ]
};