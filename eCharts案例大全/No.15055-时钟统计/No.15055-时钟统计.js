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
        text: '1:00-2:00',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30
        }
    },
    color: ['#22C3AA'],
    series: [{
        type: 'pie',
        data: labelData,
        radius: ['50%', '75%'],
        zlevel: -2,
        itemStyle: {
            normal: {
                color: '#F5A645',
                borderColor: 'white'
            }
        },
  
     
        label: {
            fontSize: 19,
            normal: {
                position: 'inside'
            }
        }
    }]
};
