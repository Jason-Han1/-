var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};

option = {
    title: {
        text: '天气情况统计',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: '100px',
        left: '600px',
        data: ['空闲', '加工','暂停','警告','故障','断链'],
        textStyle: {
            color: '#fff'
        }
    },
    series : [
        {
            type: 'pie',
            radius : '45%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                }
            },
            data:[
                {
                    value:1548,
                    name: '空闲'
                },
                {value:535, name: '加工'},
                {value:510, name: '暂停'},
                {value:634, name: '警告'},
                {value:634, name: '故障'},
                {value:378, name: '断链'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
