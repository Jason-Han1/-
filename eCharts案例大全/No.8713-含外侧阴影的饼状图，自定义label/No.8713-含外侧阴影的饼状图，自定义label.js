let bgColor = '#011D32';
let bdColor = 'rgba(23, 47, 109, 0.7)';
let scale = 1;
var echartData = [{
    name: 'A类',
    value: '272'
}, {
    name: 'B类',
    value: '292'
}, {
    name: 'C类',
    value: '120'
}, {
    name: 'D类',
    value: '42'
}];
option = {
    backgroundColor: bgColor,
    legend: {
        orient: 'horizontal',
        bottom: '20',
        itemGap: 20,
        textStyle: {
            color: '#ffffff'
        }
    },
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    series: [{
            type: 'pie',
            radius: ['0', '50%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 15
                }
            },
            label: {
                normal: {
                    formatter: (params) => {
                        let res = params.percent.toFixed(2).split('.');
                        return '{int| ' + res[0] + '}' + '{float|.' + res[1] + '}{unit|%}'
                    },
                    rich: {
                        int: {
                            fontSize: 36 * scale,
                            fontWeight: 700,
                            lineHeight: 36 * scale,
                            padding: [0, 0, 5, 0]
                        },
                        float: {
                            fontSize: 14 * scale,
                            fontWeight: 700,
                            lineHeight: 20,
                            padding: [0, 0, 12 * scale, 0]
                        },
                        unit: {
                            fontSize: 14 * scale,
                            fontWeight: 700,
                            lineHeight: 14 * scale,
                            color: '#cecece',
                            padding: [0, 0, 12 * scale, 4]
                        }

                    }
                }
            },
            data: echartData,
        },
        {
            type: 'pie',
            radius: ['50%', '55%'],
            color: [bdColor],
            data: [100],
            label: {
                show: false
            }
        }
    ]
};