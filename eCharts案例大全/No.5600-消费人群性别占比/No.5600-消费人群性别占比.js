let bgColor = '#fff';
let title = '总量';
let color = ['#FF5690', '#5BBAFB'];
let echartData = [{
        name: "男性消费人群",
        value: "3720"
    },
    {
        name: "女性消费人群",
        value: "2920"
    }
];

let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);

option = {
    backgroundColor: bgColor,
    color: color,

    series: [{
        type: 'pie',
        radius: ['45%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderColor: bgColor,
                borderWidth: 2
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                    // color: '#e6e6e6'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    const percentage = (params.value / total * 100).toFixed(2) + '%'
                    return (
                        '{name|' + params.name + '}\n{value|' +
                        percentage + '}'
                    );
                },
                padding: [20, 0, 0, 0],
                rich: {
                    icon: {
                        fontSize: 12
                    },
                    name: {
                        fontSize: 12,
                        padding: [0, 0, 20, 0],
                        color: '#333333'
                    },
                    value: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        padding: [10, 0, 10, 0],
                        fontFamily: 'DIN Alternate Bold'
                        // color: 'red'
                    }
                }
            }
        },
    }]
};