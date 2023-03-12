    const color = ['#0090FF', '#FFC005', '#36CE9E', '#FF515A', '#8B5CFF', '#00CA69']

    const xAxisData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const yAxisData1 = [100, 138, 350, 173, 180, 150, 178]
    const yAxisData2 = [50, 60, 90, 80, 60, 50, 70]
    const yAxisData3 = [233, 201, 182, 198, 234, 210, 230]

    const hexToRgba = (hex, opacity) => {
        let rgbaColor = ''
        const reg = /^#[\da-f]{6}$/i
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
        }
        return rgbaColor
    }
    const lineStyle = (index) => {
        return {
            normal: {
                color: color[index],
                shadowColor: hexToRgba(color[index], 0.5),
                shadowBlur: 3,
                shadowOffsetY: 8
            }
        }
    }
    const areaStyle = (index) => {
        return {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                    [{
                        offset: 0,
                        color: hexToRgba(color[index], 0.3)
                    }, {
                        offset: 1,
                        color: hexToRgba(color[index], 0.1)
                    }]
                ),
                shadowColor: hexToRgba(color[index], 0.1),
                shadowBlur: 10
            }
        }
    }

    option = {
        backgroundColor: '#fff',
        color: color,
        grid: {
            top: 100,
            left: 100,
            right: 100,
            bottom: 100
        },
        title: {
            text: '单位：万人·万辆',
            top: 10,
            right: 10,
            textStyle: {
                fontSize: 12,
                fontWeight: 400,
                color: '#567'
            }
        },
        legend: {
            icon: 'rect',
            itemHeight: 12,
            itemWidth: 12,
            top: 10,
            left: 10,
            textStyle: {
                fontSize: 12,
                color: '#567'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
            extraCssText: 'font-size:14px;line-height:24px;color:#567;background:#fff;box-shadow:0 0 3px rgba(0, 0, 0, 0.2)',
            formatter: function(params) {
                let html = ''
                params.forEach(v => {
                    console.log(v)
                    html += `<div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>${v.seriesName}<span style="color:${color[v.componentIndex]};font-size:18px;font-weight:700">${v.value}</span>万`
                })
                return html
            }
        },
        xAxis: {
            data: xAxisData
        },
        yAxis: {
            show: false
        },
        series: [{
            name: '客流量',
            type: 'line',
            data: yAxisData1,
            smooth: true,
            symbolSize: 6,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0)
        }, {
            name: '客车流量',
            type: 'line',
            data: yAxisData2,
            smooth: true,
            symbolSize: 6,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1)
        }, {
            name: '货车流量',
            type: 'line',
            data: yAxisData3,
            smooth: true,
            symbolSize: 6,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2)
        }]
    };