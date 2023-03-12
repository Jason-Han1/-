
var xAxisDataText = [];
var seriesData = [];


for (var i = 0; i <= 1440; i++) {
    xAxisDataText.push("xxxx-xx-xx");

     if (i % 2 === 0 && (i / 50)%2 === 1) {
        var number = parseInt(Math.random() * 10);
        if (number > 6) {
            number = 6;
        } else if (number < 3) {
            number = 3;
        }
        seriesData.push(number);
    } else {
        seriesData.push("");
    }
};

option = {
    title: {
        text: "测试",
        textStyle: {
            color: "#000000"
        },
        left: "center",
        top: "3%"
    },
    grid: {
        left: "5%",
        top: "21%",
        right: "5%",
        bottom: "8%"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: "line",
            snap: true
        }
    },
    legend: {
        type: "scroll",
        itemHeight: 18,
        right: "5%",
        left: "5%",
        top: "13%",
        textStyle: {
            color: "#000000"
        },
        pageTextStyle: {
            color: "#000000"
        }
    },
    toolbox: {
        top: "20",
        right: "20",
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {}
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLabel: {
            color: "#000000"
        },
        axisLine: {
            onZero: false
        },
        boundaryGap: ['10%', '10%'],
        data: xAxisDataText
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: "#000000"
        },
        scale: true,
        splitNumber: 19,
        boundaryGap: ['15%', '10%']
    },
    dataZoom: [{
        type: 'inside'
    }],
    series: [{
        name: "数据",
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        showAllSymbol: true,
        sampling: 'average',
        connectNulls: true,
        data: seriesData
    }]
}