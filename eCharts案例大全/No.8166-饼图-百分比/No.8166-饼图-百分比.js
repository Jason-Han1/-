
var chart2Data = [{value: 852, name: '突发事件'}, {value: 310, name: '意外伤害'},
                {value: 1548, name: '重大疾病'}, {value: 135, name: '其他特殊原因'}];
// 数据整理
let total = chart2Data.reduce((a, b) => {
    return a + b.value
}, 0);
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    textStyle: {
        fontSize: 12
    },
    // color: optionColor,
    legend: {
        orient: 'vertical',
        right: '10%',
        y: 'center',
        itemWidth: 10,
        itemHeight: 8,
        // data: ['困难户', '特困救助供养对象户', '其他']
        textStyle: {
            fontSize: 14,
            rich: {
                name: {
                    color: "#333333",
                    // padding: [10, 5, 30, 5],
                },
                percent: {
                    color: '#18DB9F',
                    fontSize: 16,
                    // padding: [0, 5, 0, 5],
                }
            }
        },
        formatter: function(name) {
            let res = chart2Data.filter(v => v.name === name);
            let percent = ((res[0].value * 100) / total).toFixed(2);
            return (
                "{name| " + name + "} {percent|" + percent + "%}"
            );
        },
    },
    series: [{
        name: '临时救助申请原因',
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['40%', '65%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            formatter: '{d}%  ',
        },
        data: chart2Data
    }]
};