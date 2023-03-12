option = {
    title: {
    text: "2017-2018安全边际额(金额)",
    subtext:"单位:%",
    left: "left",
    top: "top",
    textStyle: {
      fontSize: 30
    },
    },
    backgroundColor: '#ddd',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    legend: {
        left: "right",
        top: 0,
        itemWidth: 7,
        itemHeight: 7,
        textStyle: {
            color: '#fff',
            padding: [5, 0, 0, 0]
        },
        borderRadius: 0,
        data: ["2017", "2018"]
    },
    grid: [{
            top: 20,
            bottom: 20,
            left: "16%",
            width: "39%",
            containLabel: true
        },
        {
            top: 20,
            bottom: 18,
            left: 134,
            width: 0
        },
        {
            top: 20,
            bottom: 20,
            right: "6%",
            width: "39%",
            containLabel: true
        }
    ],
    xAxis: [{
            position: "bottom",
            type: "value",
            
            inverse: true,
            axisLabel: {
                show: true,
                color: "#000000",
                formatter:'{value} %',
                margin: 8
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitNumber: 2
        },
        {
            gridIndex: 1,
            show: false
        },
        {
            position: "bottom",
            gridIndex: 2,
            type: "value",
            axisLabel: {
                show: true,
                color: "#000000",
                formatter:'{value} %',
                margin: 8
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitNumber: 2
        }
    ],
    yAxis: [{
            position: "right",
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            type: "category",
            inverse: false,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            data:  [
               'SI服务',
               'BP服务',
               'SMM服务'
               
            ]
        },
        {
            gridIndex: 1,
            // position: "left",
            type: "category",
            axisLabel: {
                show: true,
                color: "#000000",
                fontSize: 20
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: [
               'SI服务',
               'BP服务',
               'SMM服务'
               
            ]
        },
        {
            gridIndex: 2,
            position: "left",
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            type: "category",
            inverse: false,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: [
               'SI服务',
               'BP服务',
               'SMM服务'
               
            ]
        }
    ],
    series: [{
            type: "bar",
            name: "2017",
            label: {
                fontSize: 20,
                color: "#FFFFFF",
                lineHeight: 30,
                show: true,
                fontFamily: "Rubik-Medium",
                distance: 10
            },
            itemStyle: {
                color: "#000080",//#000000
                barBorderRadius: [5, 0, 0, 5]
            },
            data: [59.52,61.21,0],
            barWidth: 30
        },
        {
            type: "bar",
            name: "2018",
            label: {
                fontSize: 20,
                color: "#FFFFFF",
                lineHeight: 30,
                show: true,
                fontFamily: "Rubik-Medium",
                distance: 10
            },
            itemStyle: {
                color: "#054ef3",
                barBorderRadius: [1, 5, 5, 0]
            },
            data: [65.69,64.75,40],
            barWidth: 30,
            xAxisIndex: 2,
            yAxisIndex: 2
        }
    ]
};