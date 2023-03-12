var colors = [
            ['#1492ff', 'rgba(20,146,255,0.35)'],
            ['rgba(89,170,245,0.85)', 'rgba(89,170,245,0.25)'],
            ['rgba(21,190,79,0.85)', 'rgba(21,190,79,0.25)'],
            ['rgba(252,92,92,0.85)', 'rgba(252,92,92,0.25)'],
        ]
var rich = {
                total:{
                    fontSize: 30,
                    color:'#1492ff',
                    fontWeight: "bold"
                },
                active: {
                    fontSize: 14,
                    color:'#333',
                    lineHeight:30,
                },
            }
var count = 12
var Sdata =[
            {value: 12, name: 'A'},
            {value: 12, name: 'B'},
            {value: 0, name: 'C'},
            {value: 0, name: 'D'}
        ]
var seriesArr = []
        Sdata.forEach(function(item, index) {
            seriesArr.push({
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [45, 70],
                    itemStyle: {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: [index > 1 ? (index - 2) * 50 + 25 + '%' : (index) * 50 + 25 + '%', index > 1 ? '75%' : '25%'],
                    data: [{
                        value: item.value,
                        name:item.name,
                        label: {
                            normal: {
                                formatter: function(params) {
                                    var name = params.name
                                    var value =params.value
                                    return '\n{total|' + value + '}{active|项}\n\r{active|' + name + '}'
                                },
                                rich:rich,
                                position: 'center',
                                show: true
                            }
                           
                        },
                    }, {
                        value: count - item.value,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: colors[index][1]
                            },
                            emphasis: {
                                color: colors[index][1]
                            }
                        }
                    }]
                })
        });
        
option = {
    title: {show:false},
    legend:{show:false},
    series: seriesArr

};