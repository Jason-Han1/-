// 多系列无法定位

var colors = [{
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#23c3e2dd'
    }, {
        offset: 1,
        color: '#23c3e2dd'
    }]
}, {
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#352a6b'
    }, {
        offset: 1,
        color: '#352a6b'
    }]
}];


var barWidth = 30;

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        z:1,
        type: 'bar',
        barWidth:barWidth,
        data:[220, 182, 191, 234, 290, 330, 310],
        itemStyle:{
            normal:{
                color:colors[1]
            }
        },
    },{
        z:2,
        name:'底部',
        type:'pictorialBar',
        data :[1, 1, 1, 1, 1, 1, 1],
        symbol :'diamond',
        symbolOffset:[0,'50%'],
        symbolSize:[barWidth,10],
        itemStyle:{
            normal:{
                color:colors[1]
            }
        },
    },{
        z:3,
        name:'上部1',
        type:'pictorialBar',
        symbolPosition:'end',
        data:[220, 182, 191, 234, 290, 330, 310],
        symbol :'diamond',
        symbolOffset:[0,'-50%'],
        symbolSize:[barWidth - 4,10 * (barWidth - 4) / barWidth],
        itemStyle:{
            normal:{
                borderColor: '#7153d3',
                borderWidth: 2,
                color:'#352a6b'
            }
        },
    }]
};