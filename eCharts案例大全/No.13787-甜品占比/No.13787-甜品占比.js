var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 10,
        shadowColor: 'rgba(30, 30, 30,0.2)',
    }
};

option = {
    backgroundColor: '#fff',
    color: ['#F285A2', '#F9E392', '#F29B85', '#BBE2BF', '#FCDFD7'],

    title: {
        text: '甜品占比',
        x: 'center',
        top: '36%',
        textStyle: {
            color: '#6c6c6c'
        }
    },

    legend: {

        x: 'center',
        top: '90%',
        data: ['蛋糕', '布丁', '巧克力', '冰淇淋', '棒棒糖']
    },
    series: [{
        name: '主题配色下载占比',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: dataStyle,
        label: {
            normal: {
                show: false,
                position: 'center',
            },
            emphasis: {
                
                show: true,
                formatter: function(param) {
                    return param.name + '\n' + param.percent.toFixed(0) + '%';
                },
                textStyle: {
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [{
            value: 302,
            name: '蛋糕'
        }, {
            value: 217,
            name: '布丁'
        }, {
            value: 173,
            name: '巧克力'
        }, {
            value: 152,
            name: '冰淇淋'
        }, {
            value: 95,
            name: '棒棒糖'
        }]
    }]
};