
let data = [{
        name: '体温单正常',
        value: 120,
        color: ['rgba(47,204,255,1)', 'rgba(47,204,255,0.5)', 'rgba(47,204,255,0.01)', 'rgba(0,0,0,0)']
    },
    {
        name: '体温单异常',
        value: 31,
        color: ['rgba(253,42,52,1)', 'rgba(253,42,52,0.5)', 'rgba(253,42,52,0.01)', 'rgba(0,0,0,0)']
    },
];


let titleArr = [],
    legendArr = [],
    seriesArr = [],
    total = 0;

for (let i = 0; i < data.length; i++) {
    total += data[i].value
}

for (let i = 0; i < data.length; i++) {

    titleArr.push({
        text: data[i].name,
        subtext: data[i].value,
        left: (i) * 40 + 53 + '%',
        top: '46%',
        textAlign: 'right',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#f7fcff',

        },
        subtextStyle: {

            fontSize: 16,
            color: ['#f7fcff'],
            fontWeight: 800
        },
    });

    seriesArr.push({
        name: data[i].name,
        type: 'pie',
        clockWise: true,
        startAngle:90,
        center: [(i) * 40 + 30 + '%', '50%'],
        radius: ['28%', '30%'],

        itemStyle: {
            normal: {

                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
        },
        hoverAnimation: false,

        data: [{
            value: data[i].value,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y:0,
                        x2:1,
                        y2:1,
                        colorStops: [{
                            offset: 0,
                            color: data[i].color[0] // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: data[i].color[1] // 100% 处的颜色
                        }, {
                            offset: 0.8,
                            color: data[i].color[2] // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: data[i].color[3] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },


                    shadowColor: data[i].color[0],
                    shadowBlur: 0,


                }
            },
            label: {
                normal: {
                    formatter: function(params) {
                    
                       console.log(params.seriesName)
                       let percent = ((params.value/total)*100).toFixed(0);
                        return percent+'%';
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#eefafb'
                    }
                }
            },
        }, {
            value: total - data[i].value,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }]
    })

}


option = {
    backgroundColor: '#000f1e',
    title: titleArr,
    legend: legendArr,
    series: seriesArr
}