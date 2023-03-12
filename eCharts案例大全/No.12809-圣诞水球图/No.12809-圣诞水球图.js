//需要引入 liquidfill插件
//GitHub地址为: https://github.com/ecomfe/echarts-liquidfill
var uploadedDataURL = "/asset/get/s/data-1482222810548-H1myTvIEg.png";
var radius = 250;
option = {
    backgroundColor: '#0ca59c',
    series: [{
        amplitude: 10,
        color: ['#eee', '#f3f3f3', '#fff'],
        type: 'liquidFill',
        radius: radius,
        data: [1, 1, 1],
        animationDuration: 0,
        animationDurationUpdate: 4000,
        label: {
            normal: {
                formatter: function() {
                    return '';
                }
            }
        },
        backgroundStyle: {
            color: 'transparent'
        },
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 5
            }
        }
    }],
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: uploadedDataURL,
                width: radius,
                height: radius
            },
            left: 'center',
            top: 'middle'
        }]
    }
};

setTimeout(function() {
    myChart.setOption({
        series: [{
            data: [0.3, 0.3, 0.3],
            color: ['rgba(238,238,238,.4)', 'rgba(243,243,243,.3)', 'rgba(255,255,255,.5)'],
        }]
    })
}, 2000);