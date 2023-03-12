var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: "20%"
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: true,
            color: "rgba(57,62,71,1)"
        },
        axisLabel: {
            show: true,
            fontSize: 40,
            align: 'left',
            color: '#fff'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        axisLabel: {
            margin: 50,
            fontSize: 40,
            align: 'right',
            color: '#fff'
        }
    },
    series: [{
            // z: 2,
            name: 'value',
            type: 'pictorialBar',
            symbolOffset: [0, 0],
            symbol: 'path://M6 4l20 12-20 12z',
            symbolRotate: 180,
            "barWidth": 12,
            "barMinWidth": 5,
            data: [3.66, 2.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02, 1],
            itemStyle: {
              color: {
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {offset: 0, color: "rgba(0, 69, 70, 1)"},
                    {offset: 1, color: "rgba(0, 252, 255, 0.3)"},
                ]
              }  
            },
            label: {
                show: false,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }

    ]
};