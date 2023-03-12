var percent = 0.4;

function getData() {
    var g = Math.round(255 - 255 * percent),
        b = Math.round(255 - 255 * percent);
    var mainColor = 'rgb(' + 255 + ',' + g + ',' + b + ')';
    var borderColor = 'rgb(' + 255 + ',' + Math.round(g - g * 0.1) + ',' + Math.round(b - b * 0.1) + ')';
    return [{
        value: percent,
        itemStyle: {
            normal: {
                color: mainColor,
                //color: '#fb358a',
                //shadowBlur: 20,
                //shadowColor: '#fb358a',
                //shadowColor: mainColor,
                borderWidth: 1.5,
                borderColor: borderColor
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

option = {
    backgroundColor: '#FFFFFF',

    title: {
        text: (percent * 100) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: 'rgba(130,130,130,1)',
            fontSize: 45,
        }
    },
    series: [{
        type: 'pie',
        radius: ['18%', '30%'],
        silent: true,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            itemStyle: {
                normal: {
                    color: 'rgba(200,200,200,1)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.8)'
                }
            }
        }],
        animation: false
    }, {
        name: 'main',
        type: 'pie',
        radius: ['19.5%', '28.5%'],
        silent: true,
        label: {
            normal: {
                show: false,
            }
        },
        data: getData(),
        animationEasingUpdate: 'bounceOut',
        animationDurationUpdate: 2000
    }]
};

setInterval(function() {
    percent = +Math.random();

    myChart.setOption({
        title: {
            text: (percent * 100).toFixed(0) + '%'
        },
        series: [{
            name: 'main',
            data: getData()
        }]
    })
}, 2500);