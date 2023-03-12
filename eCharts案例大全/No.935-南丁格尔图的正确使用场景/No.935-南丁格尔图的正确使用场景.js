var data = [];
var labelData = [];
for (var i = 0; i < 24; ++i) {
    data.push({
        value: Math.random() * 10 + 10 - Math.abs(i - 12),
        name: i + ':00'
    });
    labelData.push({
        value: 1,
        name: i + ':00'
    });
}

option = {
    title: {
        text: '基础能量消耗',
        left: '50%',
        textAlign: 'center',
        top: '20%'
    },
    color: ['#22C3AA'],
    series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        itemStyle: {
            normal: {
                color: 'white',
                borderColor: '#22C3AA'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: labelData,
        radius: ['75%', '100%'],
        zlevel: -2,
        itemStyle: {
            normal: {
                color: '#22C3AA',
                borderColor: 'white'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }
    }]
};
