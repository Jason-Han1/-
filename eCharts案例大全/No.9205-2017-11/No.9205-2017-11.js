/**
 * 图标所需数据
 */
var data = {
    value: 24.2,
    text: '-',
    color: '#367bec',
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
            color: '#fff',
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
                           color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#00cefc' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#367bec' // 100% 处的颜色
                      }]
                    },
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
                            color: '#333',
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
    backgroundColor: '#222',
    title:titleData,
    series: seriesData
}