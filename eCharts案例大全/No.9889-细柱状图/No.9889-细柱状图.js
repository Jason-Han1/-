var xAxisData = ['500','750','1000','1250','1500','1750','2000','2250','2500','2750','3000','3250','3500','3750','4000'];
var data = [30, 50, 35, 45, 52, 60, 68, 70, 86, 90, 84, 70, 45, 52, 60, ];

var option = {
    title: {text: '供应商资质能力'},
    tooltip: {
        show: true,
        trigger: 'item'
    },
    xAxis: {
        name: '万',
        nameTextStyle: {
            color: '#000'
        },
        data: xAxisData,
        axisLabel: {
            interval: 1,
            rotate: -25,
            fontSize: 10
        },
    },
    yAxis: {
        // name:'家',
        axisTick: {
            show: false
        },
        splitLine: {
            show: true
        }
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data,
        barWidth: 10,
        color: '#0078db',
        animationDelay: function(idx) {
            return idx * 10;
        }
    }],
    animationEasing: 'elasticOut'
};