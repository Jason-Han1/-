var data = [{
        value: 135,
        name: '视频广告'
    },
    {
        value: 1548,
        name: '搜索引擎'
    }
]
var title = '今日'


let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = data.reduce((a, b) => {
    return a + b.value * 1
}, 0)

var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}: {c} ({d}%)'
    },
    title: [{
            show: true,
            text: '{name|车流量}\n{val|' + formatNumber(total) + '}\n{unit|辆}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 20,
                        fontWeight: 'bolder',
                        color: '#666666',
                        padding: [10, 0]
                    },
                    val: {
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#333333',
                    },
                    unit: {
                        fontSize: 20,
                        fontWeight: 'bolder',
                        color: '#666666',
                        padding: [10, 0]
                    }
                }
            }
        },
        {
            text: '{icon|●  }' + title + '车流量统计',
            // top: 20,
            // left: 20,
            top: '1%',
            left: '3%',
            textStyle: {
                fontSize: 20,
                color: '#666666',
                fontWeight: 'normal',
                rich: {
                    icon: {
                        fontSize: 16,
                        color: '#6562FE'
                    }
                }
            }
        }
    ],
    legend: {
        orient: 'horizontal',
        itemGap: 50,
        // left: 'center',
        top: '5%',
        data: ['视频广告', '搜索引擎']
    },
    series: [{
        name: '车流量',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: true,
        label: {
            show: false,
            position: 'center',
            formatter: '{b}: {@[' + data.value + ']} ({d}%)'
        },
        emphasis: {
            label: {
                show: false,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        color: ['#A592E5', '#00BCD5'],
        data: data
    }]
};