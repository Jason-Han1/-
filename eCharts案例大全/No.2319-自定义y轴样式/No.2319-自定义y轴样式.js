var salvProName =[
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",
"XX设备 NMLD-C-001-003",];
var salvProValue =[60,50,40,30,20,];
var salvProMax =[];//背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(100)
}
option = {
    backgroundColor:"#000000",
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00D1F0'
            },
            rich: {
                a: {
                    color: '#00D1F0',
                    fontWeight:'800',
                    fontSize: 15,
                },
            },
            formatter:(val)=>{
                console.log('值',val);
                let text  = val.split(' ')
                console.log(text);
                
                return '{a' + '|' + '◇' + text[0]+ '}' + '\n'+text[1]
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: salvProName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#00D1F0',
                // fontSize: '12',
                fontWeight:'800'
            },
        },
        data:salvProValue
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(46,200,207,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(54, 142, 199,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: salvProValue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: '#000000',
                    barBorderRadius: 30,
                    borderColor:'#0F1B2B'
                }
            },
        },
    ]
};