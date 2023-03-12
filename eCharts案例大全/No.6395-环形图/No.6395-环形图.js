let title = '总量';
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
let total = 200

option = {
    backgroundColor: '#fff',
    tooltip: {
        
    },
    legend: {
        icon: 'circle',
        orient: 'horizontal',
        left: 'center',
        bottom: 10,
        itemWidth: 10,
        itemHeight: 10,
    },
    color: color,
    title: [{
        text: '{name|' + title + '}\n{val|' + total + '}',
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
    }],
    series: [{
        type: 'pie',
        name: '222',
        radius: ['50%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
         itemStyle: {
                borderWidth: 3,
                borderColor: '#fff'
            }
    }]
};