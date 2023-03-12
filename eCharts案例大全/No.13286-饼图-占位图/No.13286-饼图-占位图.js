/**
 * 图标所需数据
 */
var data = {
    value: 24.2,
    text: '-',
    color: '#27D38A',
    xAxis:['2017-11','2017-12','2018-01'],
    values:['76','78','22'],
}

var seriesData = []
var titleData = []
data.values.forEach(function(item, index) {
    titleData.push({
        text: data.xAxis[index],
        left: 25*(index+1)-.5+'%',
        top: '64%',
        
        textAlign: 'center',
        textStyle: {
            fontSize: '12',
            color: '#687284',
            fontWeight: '400',
        },
    })
    seriesData.push({
            type: 'pie',
            radius: ['75', '85'],
            center: [25*(index+1)+'%', '50%'],
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
                            color: data.color,
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
                            formatter: item + '',
                            textStyle: {
                                fontSize: 36,
                                color: data.color
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
    backgroundColor: '#fff',
    title:titleData,
    series: seriesData
}