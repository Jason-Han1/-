let bgColor = '#fff';
let title = '总量';
let color = ['#00ABFF', '#4ADEC0', '#FFC500'];
let echartData = [{
        name: "环境卫生",
        value: "158"
    },
    {
        name: "绿化管理",
        value: "126"
    },
    {
        name: "容貌秩序",
        value: "174"
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
    title: [{
        text: '{val|' + '458' + '}\n{name|总计}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 25,
                    fontWeight: 'normal',
                    color: '#000000',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32,
                    color: '#4ADEC0',
                 
                }
            }
        }
    }],
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '80%',
        y: 'center',
        itemWidth: 20,
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
        label: {
           show:false
        },
    }]
};