var data = [60, 85, 110, 160, 90, 80, 190, 80, 110, 160, 70, 90, 140];
var xdata = ['02', '03', '04', '05', '06', '07', '09', '10', '11', '12', '13', '14', '15'];
option = {
    backgroundColor: "#ea5a25",
    tooltip: {
        trigger: "item",
        show: true
    },
    title: {
        text: "Time Power",
        subtext: "2014.12.25",
        textStyle: {
            color: "#fff",
            fontSize: 26
        },
        subtextStyle: {
            color: "#ff8b5d",
            fontSize: 14
        },
        left: 'center',
        top: "15%"
    },
    grid: {
        left: "10%",
        top: "35%",
        bottom: "15%",
        right: "10%",
        containLabel: true
    },
    xAxis: {
        data: xdata,
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#ff8b5d',
            fontSize: 14
        }
    },
    yAxis: {
        type: 'value',
        splitNumber: 4,
        interval: 50,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ec7443'
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#ff8b5d',
            fontSize: 14
        }
    },
    series: [{
            type: 'bar',
            animation: false,
            barWidth: 4,
            data: data,
            tooltip: {
                show: false
            },
            itemStyle: {
                color: "#f2fec3"
            },
        },
        {
            type: 'scatter',
            data: data,
            symbolSize: 8,
            itemStyle: {
                borderWidth: 0,
                opacity: 1,
                color: "#f2fec3"
            }
        }

    ]
};