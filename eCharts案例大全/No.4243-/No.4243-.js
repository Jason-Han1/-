option = {
    dataZoom: [{
            type: 'slider',
            show: false,
            yAxisIndex: [0],
            left: '93%',
            start: 130, //数据窗口范围的起始百分比
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 36
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    label: {
        show: true,
        position: 'right',
        textStyle: {
            color: 'black',
            fontSize: 16,
            fontWeight: 600
        }
    },
    axisLabel: {
        color: "#000",
        interval: 0,
        formatter: function(value) {
            if (value.length > 16) {
                return value.substring(0, 16) + "...";
            } else {
                return value;
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
    },
    yAxis: {
        type: 'category',
        formatter: function(value) {
            if (value.length > 16) {
                return value.substring(0, 16) + "...";
            } else {
                return value;
            }
        },
        data: ["jjlfdsajk", "dsf", "asdf", "1dsafs23", "adsf", "adsf", "afd", 423, 123, 123, 123, 123, 123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123, 123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123, 123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123]
    },
    series: [{
        showBackground: true,
        name: '2012年',
        type: 'bar',
        data: [123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123, 123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123, 123, 123, 123, 123, 321, 213, 231, 423, 123, 123, 123, 123],
        itemStyle: {
            color: "rgba(116,41,201,1)",
            barBorderRadius: [0, 90, 90, 0],
        },
        barWidth: 10,
    }]
}