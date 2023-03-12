let bgColor = '#fff';
let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
let echartData = [{
        name: "A类",
        value: "3720"
    },
    {
        name: "B类",
        value: "2920"
    },
    {
        name: "C类",
        value: "2200"
    },
    {
        name: "D类",
        value: "1420"
    }
];

option = {
    backgroundColor: bgColor,
    color: color,
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
                return params.percent.toFixed(2) + '%' + '<br>' + params.name
            }
    },
    
    legend: {
        orient: 'vertical',
        icon: 'circle',
        x: '80%',
        y: 'center',
        itemWidth: 12,
        itemHeight: 12,
        align: 'left',
        textStyle: {
            rich: {
                name: {
                    fontSize: 12
                },
                value: {
                    fontSize: 16,
                    padding: [0, 5, 0, 15]
                },
                unit: {
                    fontSize: 12
                }
            }
        },
        formatter: function(name) {
            let res = echartData.filter(v => v.name === name);
            res = res[0] || {};
            let unit = res.unit || '';
            return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
        }
        // data: legendName
    },
    series: [{
        type: 'pie',
        radius: ['45%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                    color: '#e6e6e6'
                }
            }
        },
        label: {
            normal: {
                show:false,
                rich: {
                    icon: {
                        fontSize: 16
                    },
                    name: {
                        fontSize: 14,
                        padding: [0, 10, 0, 4],
                        color: '#666666'
                    },
                    value: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333333'
                    }
                }
            }
        },
    }]
};