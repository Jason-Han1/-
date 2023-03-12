// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill
var beginTime = null;
var clicks = 0;
var TOTAL_CLICKS = 100;

var option = {
    title: {
        text: '图表由 ECharts 制作',
        textStyle: {
            fontSize: 15,
            color: '#999'
        },
        left: '50%',
        top: '90%',
        textAlign: 'center',
        textBaseAlign: 'middle'
    },
    series: [{
        color: ['#FFBFE5', '#EA88CE', '#DE52B4', '#C42795'],
        type: 'liquidFill',
        silent: true,
        animationDurationUpdate: 200,
        data: getData(clicks),
        radius: '80%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#A31180',
            borderWidth: 1,
            shadowColor: 'rgba(234, 136, 206, 0.8)',
            shadowBlur: 100,
            color: '#FEF9FF'
        },
        itemStyle: {
            normal: {
                opacity: 0.6,
                shadowColor: 'rgba(234, 136, 206, 0.2)'
            }
        },
        shape: 'path://M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z',
        label: {
            normal: {
                position: ['50%', '45%'],
                formatter: function() {
                    if (clicks === 0) {
                        return '开始游戏';
                    } else if (clicks >= TOTAL_CLICKS) {
                        return '祝我最爱的 XXX\n情人节快乐！';
                    } else {
                        var elapsed = new Date() - beginTime;
                        return Math.floor(clicks / TOTAL_CLICKS * 100) + '%\n';
                    }
                },
                textStyle: {
                    fontSize: 28,
                    color: '#A31180'
                }
            }
        }
    }]
};

document.onclick = function() {
    if (clicks <= TOTAL_CLICKS) {
        if (clicks === 0) {
            beginTime = new Date();
        }
        myChart.setOption({
            series: [{
                data: getData(clicks),
                backgroundStyle: {
                    shadowBlur: Math.random() * 200 + 50
                }
            }]
        });
    }
    else if (clicks === TOTAL_CLICKS + 1) {
        // game over
    }

    ++clicks;
};

function getData(clicks) {
    var value = clicks / TOTAL_CLICKS;
    return [
        value,
        value - 0.02,
        value - 0.04,
        value - 0.06
    ];
}
