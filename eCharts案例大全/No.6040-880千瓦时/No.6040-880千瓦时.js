var getname = ['洗衣间', '信息中心', '厨房餐厅', '游泳池','健身房','实验室'];
var getvalue = [180, 200, 150, 130,110,110];
var indata = [];
for (var i = 0; i < getname.length; i++) {
    indata.push({
        name: getname[i],
        value: getvalue[i]
    })
}

var colorList = ['#02CAB3','#4885FF', '#FEC67C', '#54C3FC', '#9991F6', '#FF78E7']
option = {
    backgroundColor:'#fff',
    title: {
        text: '880千瓦时',
        textStyle: {
            color: '#484848',
            fontSize: 17
        },

        subtext: '总用电量',
        subtextStyle: {
            color: '#717171',
            fontSize: 15
        },
        itemGap: 20,
        left: 'center',
        top: '45%'
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        radius: ['45%', '55%'],
        center: ["50%", "50%"],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}}\n{b|{c}千瓦时}\n{hr|●}',
            rich: {
                hr: {
                    width: 6,
                    height: 6,
                    padding: [3, -10, 0, -10]
                },
                a: {
                    padding: [-30, 15, -40, 15],
                    color:'#666666',
                    fontSize:14
                },
                b: {
                    padding: [-30, 15, 0, 15],
                    color:'#666666',
                    fontSize:14
                }
            }
        },
        labelLine: {
            normal: {
                length: 30,
                length2: 30,
                lineStyle: {
                    width: 1,
                    color: '#CDCDCD'
                }
            }
        },
        data: indata,
    },{
        itemStyle: {
            normal: {
                color: '#F5F6FA',
            }
        },
        type: 'pie',
        hoverAnimation: false,
        radius: ['42%', '58%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show:false
            }
        },
        data: [{
                value: 1,
            }],
        z:-1
    }]
};