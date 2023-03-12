/**
 * 图标所需数据
 */
var data = {
    value: 24.2,
    text: '-',
    color: ['rgba(36, 209, 209, 1)', 'rgba(252, 142, 108, 1)', 'rgba(68, 163, 252, 1)', 'rgba(165, 211, 255, 1)'],
    xAxis: ['正常运行', '异常运行', '故障', '调试中'],
    values: ['76', '78', '22', '33'],
}

var seriesData = []
var titleData = []
data.values.forEach(function(item, index) {
    titleData.push({
        text:  '台' + '\n\n\n\n',
        left: 22 * (index + 1) - .5 + '%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '12',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: '400',
        },
        subtext: data.xAxis[index],
        subtextStyle:{
            fontSize: '16',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: '400',
        },
    })
    seriesData.push({
        type: 'pie',
        radius: ['65', '68'],
        center: [22 * (index + 1) + '%', '50%'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            },
        },
        data: [{
                value: item,
                name: data.text,
                itemStyle: {
                    normal: {
                        color: data.color[index],
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                }
            },
            {
                value: 100 - item,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#edf1f4',
                    }
                },
                label: {
                    normal: {
                        formatter: item,
                        textStyle: {
                            fontSize: 36,
                            color: 'rgba(255,255,255,1)',
                        }
                    },

                }
            }
        ]
    })
})

////////////////////////////////////////

let value = data.value || 0
option = {
    backgroundColor: 'rgba(2,22,48,1)',
    title: titleData,
    series: seriesData,
    grid: {
        top: "30px",
        left: "45px",
        right: "0",
        bottom: "39px"
    }
}