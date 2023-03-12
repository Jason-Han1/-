var getname = [1,2,3] ;
var getvalue = [3,4,5] ;
var indata = [];
for (var i = 0; i < getname.length; i++) {
    indata.push({
        name: getname[i],
        value: getvalue[i]
    })
}

//var colorList = ['#4885FF', '#FEC67C', '#54C3FC', '#9991F6', '#FF78E7','#02CAB3']
var colorList = ['#4886FF', '#02CCB4']
option = {
    tooltip: {
        trigger: 'item',
        formatter:'{b0}：{c0}人',
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
            formatter: '{a|{b}}\n{b|{c}人}\n{hr|●}',
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
                length: 20,
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
        radius: ['40%', '60%'],
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
