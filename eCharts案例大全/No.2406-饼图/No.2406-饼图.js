var color = ['#4aa1ff', '#5acb75', '#fcd44c', '#4fcccb'];

var title = '调用错误数';
var legend = [
    '3XX',
    '4XX',
    '5XX',
    '其他'
];

var seriesData = [
    { "name": "3XX", "value": 30 },
    { "name": "4XX", "value": 10 },
    { "name": "5XX", "value": 15 },
    { "name": "其他", "value": 12 }
]
let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = seriesData.reduce((a, b) => {
    return a + b.value * 1
}, 0);
var option = {
    backgroundColor:'#fff',
    color: color,
    title:{
        text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#333333',
                }
            }
        }
    },
    grid: {
        top: '15%',
        left: 0,
        right: '1%',
        bottom: 5,
        containLabel: true,
    },
    legend: {
        icon: 'circle',
        itemWidth: 10, 
        orient: 'vertical',
        top: 'center',
        right: 50,
        textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
                name: {
                    color: 'rgba(0,0,0,0.5)',
                    fontSize: 12,
                },
                value: {
                    color: 'rgba(0,0,0,0.5)',
                    fontSize: 12,
                },
                rate: {
                    color: 'rgba(0,0,0,0.9)',
                    fontSize: 12,
                },
            },
        },
        data: legend,
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                return `{name|${name} | }{rate| ${item.value/ 2}%} {value| ${item.value}} `;
            }
        },
    },
    series: [{
        name: '调用错误',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '65%'],
        hoverAnimation: false,
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            show: false,
            length: 0,
            length2: 0,
        },
        data: seriesData,
    }],
};
myChart.setOption(option);

