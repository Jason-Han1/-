option = {
    color: "#37A2DA",
    grid: {
        top: 10,
        bottom: 20,
        containLabel: true,
        textStyle: {
            fontSize: 30
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['06-18', '06-17', '06-16'],
        axisLabel: {
            formatter: function(value) { //显示时间
                return value
            },
            interval: 2, //x轴间隔多少显示刻度
            fontSize: 15
        },
    },
    yAxis: {
        x: 'center',
        scale: true,
        type: 'value',
        axisLabel: {
            formatter: function(value) {
                return value
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 2,
        showContent: true,
        //padding:2,
        formatter: "{b}:收入{c}元",
        triggerOn: 'onclick',
        position: function(p) {
            return ['50%', 0];
        },
        //padding: 4,
        textStyle: {
            color: 'black',
            fontSize: 100,
        },
    },
    series: {
        type: 'line',
        smooth: true,
        data: [1, 2, 3],
        axisLabel: {
            formatter: function(value) {
                return value
            }
        }
    }
};


