var percent = 0.6;

function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                color: '#f2c967',
                shadowBlur: 10,
                shadowColor: '#f2c967'
            }
        }
    }, {
        value: 1 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}
var option = {
    title: {
        text: (percent * 100) + '%',
        subtext: '完成率',
        x: 'center',
        y: '45%',
        textStyle: {
            color: '#f2c967',
            fontSize: 44
        },
        subtextStyle: {
            color: '#3da1ee',
            fontSize: 36
        }
    },
    animation: false,
    series: [{
        type: 'pie',
        radius: ['28%', '33%'],
        silent: true,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#3da1ee',
                    shadowBlur: 2,
                    shadowColor: '#3da1ee'
                }
            }
        }]
    }, {
        name: 'main',
        type: 'pie',
        radius: ['35%', '42%'],
        label: {
            normal: {
                show: false
            }
        },
        data: getData()
    }]
};