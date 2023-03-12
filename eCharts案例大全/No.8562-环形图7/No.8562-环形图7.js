let bgColor = '#fff';
let title = '总数';
let echartData = [{
        name: "省级",
        value: "100"
    },
    {
        name: "市级",
        value: "300"
    },
    {
        name: "县级",
        value: "600"
    },
    {
        name: "本地",
        value: "1000"
    }
];
let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);
let formatTotal = formatNumber(total);
option = {
    backgroundColor: bgColor,
    color: ['#3F9DFE', '#00D196','#FF8D23','#FC6305','#6C86FE','#4AEAB0'],
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '{name|' + title + '}\n{val|' + formatTotal + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#333',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 18,
                    fontWeight: 'normal',
                    color: '#127CD8',
                }
            }
        }
    },
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '70%',
        y: 'center',
        itemWidth: 10,
        itemHeight: 10,
        align: 'left',
        textStyle: {
            color: '#666',
            rich: {
                name: {
                    width: 50,
                    align: 'left'
                },
                value: {
                    width: 40,
                    align: 'right'
                },
                c: {
                    width: 35,
                    align: 'right'
                }
            }
        },
        formatter: function(name) {
            let res = echartData.filter(v => v.name === name);
            res = res[0] || {};
            console.log(res)
            let percent = Math.round(res.value * 100 / total);
            return '{name|' + name + '}  {value|' + formatNumber(res.value) + '}{c|' + percent + '%}'
        }
    },
    series: [{
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['50%', '50%'],
        data: echartData,
        clockwise: false,
        itemStyle: {
            normal: {
                borderColor: bgColor,
                borderWidth: 1
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 20
            }
        },
        label: {
            normal: {
                show: false
            }
        },
    }]
};