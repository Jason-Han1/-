var addressData = ['广州南站东出发平台路段', '广州环城高速', '广州大道南出天大道西83米', '东风中路越秀北路口（西往东）', '南京路市良路南14米', '大广路前出口k3399 500（南往北）', '昌南东路）', '工业大道', '119省道下行9公里', '106国道出望胜北街西38米']
var lastData = [30, 25, 30, 20, 15, 18, 23, 21, 20, 10]
var thisData = [30, 0, 10, 20, 10, 30, 0, 10, 20, 20]

var option = {
    backgroundColor: "rgba(7,28,52,1)",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['假警', '中返警'],
        top: "4%",
        right: "1%",
        itemWidth: 30,
        itemHeight: 15,
        textStyle: {
            color: "#9AD1FD"
        },
        itemGap: 10
    },
    grid: [{
            left: '7%',
            right: '4%',
            bottom: '5%',
            width: '0%',
            containLabel: true,
            show: false
        },
        {
            left: '15%',
            right: '4%',
            bottom: '3%',
            width: '85%',
            containLabel: true,
            show: false
        }
    ],
    xAxis: [{
        gridIndex: 0,
        show: false,
        type: 'value',
    }, {
        gridIndex: 1,
        show: false,
        type: 'value'
    }],
    yAxis: [{
            gridIndex: 0,
            show: true,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "white"
            },
            type: 'category',
            // data:[-30,-25, -30, -20, -15, -18, -23,-21,-20,-10]
            data: ["天河区大队", "越秀区大队", "荔湾区大队", "白云区大队", "海珠区大队", "黄埔区大队", "番禺区大队", "花都区大队", "南沙区大队", "从化区大队"]

        },
        {
            gridIndex: 1,
            show: true,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: "white"
            },
            type: 'category',
            // data:[-30,-25, -30, -20, -15, -18, -23,-21,-20,-10]

        }

    ],
    series: [{
            name: '中返警',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: '0',
            barWidth: '50%',
            itemStyle: {
                normal: {
                    color: "rgba(165,131,249,0.9)",
                    opacity: 1,
                    barBorderRadius: [0, 20, 20, 0]
                }
            },
            data: [160, 90, 15, 60, 50, 18, 23, 21, 20, 0]
        },
        {
            name: '假警',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: '0',
            barWidth: '50%',
            itemStyle: {
                normal: {
                    color: "rgba(0,244,225,0.9)",
                    opacity: 1,
                    barBorderRadius: [20, 0, 0, 20]
                }
            },
            data: [0, -35, -80, -0, -0, -40, -45, -30, -10, -15]
        }
    ]
}