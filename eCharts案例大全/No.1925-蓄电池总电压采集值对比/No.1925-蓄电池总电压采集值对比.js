let barColor = {
   green: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#2AFF4C'
    }, {
        offset: 1,
        color: '#28B441'
    }], false),
    red: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#ff2d1d'
    }, {
        offset: 1,
        color: '#c9281b'
    }], false),
    yellow: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#FEFF5B'
    }, {
        offset: 1,
        color: '#D8D95D'
    }], false)
};

/**
 * 获取随机数
 */
function random(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// 加载数据
let lineX = [], values = [];
for (let i = 1; i < 16; i++) {
    lineX.push("电池"+i);
    values.push(parseFloat(random(38,66)));
}
let lineY = [
    {
        name: "总电压",
        type: 'bar',
        barMaxWidth: 25,
        itemStyle: {
            barBorderRadius: [5, 5, 0, 0], // 圆角（左上、右上、右下、左下）
            color: function (params) {
                if (params.value < 48) {
                    return barColor.red;
                } else if (params.value > 56.5) {
                    return barColor.yellow;
                } else {
                    return barColor.green;
                }
            },
        },
        data: values,
    },
];
let charts = {
    lineX: lineX,
    lineY: lineY
}

option = {
    backgroundColor: '#081832',
    title:{
        text: '蓄电池总电压采集值对比',
        subtext : "根据阈值动态改变柱子颜色",
        textStyle: {
            color: '#fff'
        },
        subtextStyle : {
			color : '#ddd',
			fontSize : 13
		},
        x : 'center'
    },
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#ffffff',
        },
        backgroundColor: 'rgba(50,50,50,0.6)',
        transitionDuration: 0,
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        confine: true,
    },
    grid: {
        top: '10%',
        left: '20',
        right: '20',
        bottom: '15',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: '#3dbaff',
            },
            interval: 0,
            rotate: 40,
        },
    },
    yAxis: {
        type: 'value',
        name:'V',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#3dbaff',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(23,255,243,0.3)',
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(0,253,255,0.6)',
            },
        },
        scale: true,
        min: function (value) {
            return value.min - 2 > 0 ? parseInt(value.min - 2) : value.min < 0 ? value.min : 0;
        },
    },
    series: charts.lineY,
};
