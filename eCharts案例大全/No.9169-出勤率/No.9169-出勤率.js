data = {
    x: ['1旅1营1连', '1旅1营2连', '1旅1营3连', '1旅2营1连', '1旅2营2连', '1旅2营3连', '1旅2营4连', '1旅2营5连', '1旅2营6连', '1旅3营3连'],
    y: [85, 52, 83, 95, 70, 30, 90, 98, 85, 87]
}
var yMax = 100;
var dataShadow = [];
var yData = data.y;
for (var i = 0; i < yData.length; i++) {
    dataShadow.push(yMax);
}
var option = {
    color: ['#25c987'],
    backgroundColor: "transparent",
    title: {
        text: '出勤率',
        textStyle: {
            color: "#666",
            fontWeight: "bold",
            fontSize: 16
        },
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        formatter: "组 织:{b1}<br/>{a1}: {c1}%",
        backgroundColor: 'rgba(0,0,0,0.25)',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: '' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '15px',
        top: '30px',
        right: '15px',
        bottom: '20px',
        containLabel: true
    },
    dataZoom: [{
            show: true,
            realtime: true,
            bottom: 0,
            height: 20,
            fillerColor: "rgba(238,238,238,1)",
            borderColor: "#ccc",
            backgroundColor: "rgba(255,255,255,1)",
            start: 45,
            end: 65
        },
        {
            type: 'inside',
            realtime: true,
            start: 45,
            end: 65
        }
    ],
    xAxis: [{
        type: 'category',
        data: data.x,
        axisTick: {
            show: true,
        },
        axisLine: {
            lineStyle: {
                color: '#999',
                width: 1,
            }
        },
        axisLabel: {
            interval: 0,
            //rotate: '35'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '%',
        nameTextStyle: {
            width: '15',
            height: '15'
        },
        nameGap: '-5',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#e7e7e7'
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#666'
            }
        }

    }],
    series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(238, 238, 238,1)'
                },
                emphasis: {
                    color: "rgba(238, 238, 238,1)"
                },
            },
            barGap: '-100%',
            barWidth: 40,
            data: dataShadow,
            animation: false
        },
        {
            name: '出勤率',
            type: 'bar',
            barWidth: 40,
            itemStyle: {
                emphasis: {
                    color: "#f1a727"
                },
            },
            data: yData
        }
    ]
};