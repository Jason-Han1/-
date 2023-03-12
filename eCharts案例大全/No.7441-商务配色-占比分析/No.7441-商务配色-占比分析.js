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
    color: ['#304169', '#91BED4', '#C0E7F8', '#F6C24E', '#E84C3C'],

    title: {
        text: 'NAME',
        x: 'center',
        top: '36%',
        textStyle: {
            color: '#6c6c6c'
        }
    },

    legend: {

        x: 'center',
        top: '90%',
        data: ['series A', 'series B', 'series C', 'series D', 'series E']
    },
    series: [{
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
        data: [{
            value: 302,
            name: 'series A'
        }, {
            value: 217,
            name: 'series B'
        }, {
            value: 173,
            name: 'series C'
        }, {
            value: 152,
            name: 'series D'
        }, {
            value: 95,
            name: 'series E'
        }]
    }]
};