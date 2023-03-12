var option = {
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#fff',
            fontSize: '16'
        },
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: '1',
        borderColor: '#5cc1ff',
        extraCssText: 'box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);',
        formatter: function(params) {
            return params[0].name + "<br />" + "<span>景区客流: </span>" + "<span>" + params[0].value + "万人</span>";
        }
    },
    grid: {
        left: '0%',
        right: '10%',
        bottom: '0%',
        top: '15%',
        containLabel: true
    },
    yAxis: {
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
            textStyle: {
                fontSize: 12,
                color: '#000'
            }
        },
        data: ["回龙风景区", "百泉景区", "万仙山", "八里沟景区", "九莲山景区"]
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        barWidth: 20,
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: "{c}万人"
            }
        },
        data: [50, 60, 110, 160, 240]
    }]
};