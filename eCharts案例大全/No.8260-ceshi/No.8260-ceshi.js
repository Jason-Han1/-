option = {
    backgroundColor:'#0c3da6',
    tooltip: {
        trigger: 'axis',
      
    },
    xAxis: [{
        type: 'category',
        data: ['2019-06', '2019-05', '2019-04', '2019-03', '2019-02', '2019-01', '2018-12', '2018-11', '2018-10', '2018-09', '2018-08', '2018-07'],
        axisLine: {
            lineStyle: {
                color: "#fff",
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#2459ca'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#fff",
               
            },
        },
        nameTextStyle: {
            color: "#999",
            
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
        name: '课时',
        type: 'line',
        data: [3, 0, -3, 6, -5, 25,5, 11,12, 15,6, 9],
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#A9F387' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#48D8BF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 5,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderWidth: 5,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 100,*/
                borderColor: "#A9F387"
            }
        },
        smooth: true
    },{
        name: '课时2',
        type: 'line',
        data: [15, 12, 13, 16, 15, 10,15, -1,12, 12,0, 17],
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#507afe' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#7e3aff' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(78,124,254, 0.3)',
                shadowBlur: 5,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderWidth: 5,
                /*shadowColor: 'rgba(95,100,255, 0.3)',
                shadowBlur: 100,*/
                borderColor: "#7840ff"
            }
        },
        smooth: true
    }
    ]
};
myChart.getZr().on("click", function(params) {
    const pointInPixel = [params.offsetX, params.offsetY];
    if (myChart.containPixel("grid", pointInPixel)) {
        let xIndex = myChart.convertFromPixel({
            seriesIndex: 0
        }, [
            params.offsetX,
            params.offsetY
        ])[0];
        console.log(params)

    }
});