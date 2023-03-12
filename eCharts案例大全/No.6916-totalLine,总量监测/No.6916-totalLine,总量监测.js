var dataAll = [10,2,77,68,5,110];
var colorList = ['#57DD84', '#558FFE', '#FEC665', '#FCA344', '#F96D43', '#EC6E6F'].reverse();
var yAxisData = ['铅', '汞','氨氮','COD','镉','磷'];
var option = {
    backgroundColor: '#fff',
    grid: {
        top:'10%',
        left:"10%",
        bottom:"10%",
        right:"10%",
        containLabel: true
    },
    tooltip: {
        formatter: '{b} ({c})'
    },
    xAxis: [{
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#EFF0F1"
            }

        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#EFF0F1"
            }

        }
    }],
    yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: yAxisData.reverse(),
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#EFF0F1"
            }
        },
    }],
    series: [


        {
            name: '投诉原因TOP10',
            type: 'bar',
            xAxisIndex: 0,
            barWidth: '45%',
            itemStyle: {
                barBorderRadius: 0,
                color: (val) => {
                    console.log(val.dataIndex)
              return colorList[val.dataIndex];
            },
            },
            data: dataAll.reverse()
        },

    ]
};