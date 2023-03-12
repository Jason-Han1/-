var data = [334, 390, 330, 220];
var max = 0;
for (var item of data) {
    if (item > max) {
        max = item;
    }
}
option = {
    title: {
        text: '资本开支及转资季度分析',
        textStyle:{
            color: '#6A6A6A'
        }
    },
    color: ['#3398DB'],
    legend: {
        data: ['资本开支金额'],
        right: '4%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '<h4>{b}</h4><ul><li style="color:#3398DB"><span style="color:#333333">{a}：{c}</span></li></ul>',
        backgroundColor: '#fcfcfc',
        textStyle: {
            color: '#333333',
            fontSize: '12px',
            fontFamily: 'PingFangSC-Medium'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        name: '（单位：万）',
        type: 'value',
        max: max / 0.8,
        nameTextStyle: {
            color: '#b0b0b0'
        }
    }],
    series: [{
        name: '资本开支金额',
        type: 'bar',
        barWidth: '20%',
        data: data,
    }]
};