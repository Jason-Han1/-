let randomlength = 100
    , xAxisData = Array.from({
        length: 24
    }).map((item, index) => {
        return index < 10 ?
            `0${index}:00` :
            index === 23 ?
            `${index}:59` :
            `${index}:00`
    }),
    yAxisData = Array.from({
        length: randomlength
    }).map((item, index) => {
        return ++index
    }),
    seriesData = Array.from({
        length: randomlength
    })
    , lineData = Array.from({
        length: randomlength
    }).map((item, index) => {
        return {
            type: 'line',
            // name: 'zone' + Math.ceil(Math.random() * 4),
            symbolSize: 0.1,
            animation: false,
            sampling: 'average',
            label: {
                show: true,
                offset: [0, 20],
                position: 'bottom',
                formatter: (params) => {
                    return params.name
                }
                
            },
            lineStyle: {
                // color: 'transparent'
            },
            throttle: 0,
            data: seriesData.map((i, v) => {
                return [
                    v,
                    index,
                    Math.ceil(Math.random() * 400)
                ]
            })
        }
    })
    , scatterData = Array.from({ length: randomlength }).map((item, index) => {
        return {
            type: 'scatter',
            name: 'zone' + Math.ceil(Math.random() * 4),
            animation: false,
            throttle: 0,
            itemStyle: {
                color: (params) => {
                    if (params.data) {
                        return colors[params.data[params.data.length - 1]]
                    }
                }
            },
            symbolSize: (val, params) => {
                return calcSymbolSize(val[2], 10, 400, 10, 40)
            },
            data: seriesData.map((i, v) => {
                return [
                    v,
                    index,
                    Math.ceil(Math.random() * 400),
                    Math.ceil(Math.random() * 4)
                ]
            })
        }
    })
    , newSeries = []
    , colors = {
        1: '#6784E3',
        2: '#3BB8FF',
        3: '#FFC62E',
        4: '#FF9631'
    }

    lineData.forEach((item, index) => {
        newSeries.push(item)
    })
    scatterData.forEach((item, index) => {
        newSeries.push(item)
    })

// console.log('newSeries', newSeries)
option = {
    title: {
        text: 'Track'
    },
    tooltip: {},
    // legend: {
    //     data: Array.from({ length: 4 }).map((item, index) => {
    //         return {
    //             name: 'zone' + (++index),
    //             icon: 'circle'
    //         }
    //     })
    // },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: xAxisData,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        data: yAxisData,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    dataZoom: [{
            type: 'slider',
            // zoomLock: true,
            xAxisIndex: 0,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        {
            type: 'inside',
            xAxisIndex: 0,
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            right: 0,
            orient: 'vertical',
            startValue: 0,
            endValue: 9,
            maxValueSpan: 9,
            // minSpan: 1
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        {
            type: 'inside',
            orient: 'vertical',
            yAxisIndex: 0,
            
        }

    ],
    series: newSeries
}

function createMinute(startHour, endHour, splitNum) {
    // 0 10 20 30 40 50
    // splitNum
}

function calcSymbolSize(val, minSize, maxSize, limitMin, limitMax) {
    return (val - minSize) / (maxSize - minSize) * (limitMax - limitMin) + limitMin
}