var data = {
    id: 'echartPie',
    values: [
        [{
            value: 210,
            name: '新用户'
        }, {
            value: 150,
            name: '老用户',

        }, {
            value: 110,
            name: '流失用户',
        },{
            value: 110,
            name: 'test1',
        }, {
            value: 110,
            name: 'test2',
        }],
        [{
            value: 210,
            name: '新用户'
        }, {
            value: 150,
            name: '老用户',

        }, {
            value: 110,
            name: '流失用户',
        },{
            value: 110,
            name: 'test1',
        }, {
            value: 110,
            name: 'test2',
        }],
        [{
            value: 210,
            name: '新用户'
        }, {
            value: 150,
            name: '老用户',
        }, {
            value: 110,
            name: '流失用户',
        },{
            value: 110,
            name: 'test1',
        }, {
            value: 110,
            name: 'test2',
        }]
    ],
    xAxis: ['2017-11', '2017-12', '2018-01'],
    color: ['#DA8084', '#8E96A5', '#B0B9C1', '#BCC9D3', '#D1D9E2'],
}


var seriesData = []
var titleData = []
var titleDataTop = []
data.values.forEach(function(item, index) {
    titleDataTop.push({
        //text: data.type[index],
        left: 25 * (index + 1) - .5 + '%',
       // top: '32%',
        textAlign: 'center',
        textStyle: {
            fontSize: '14',
            color: '#414957',
            fontWeight: '400',
        },
    })
    titleData.push({
        text: data.xAxis[index],
        left: 25 * (index + 1) - .5 + '%',
        top: '49%',
        textAlign: 'center',
        textStyle: {
            fontSize: '12',
            color: '#687284',
            fontWeight: '400',
        },
    })
    seriesData.push({
        name: '体检结果',
        type: 'pie',
        hoverAnimation: false,
        avoidLabelOverlap: false,
        radius: ['50', '80'],
        center: [25 * (index + 1) + '%', '50%'],
        label: {
            normal: {
                show:false,
                position: 'inner',
                formatter: "{c}",
                fontSize: 10,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        color: data.color,
        data: data.values[index]
    })

})
option = {
    title: [...titleData,...titleDataTop],
    tooltip: {
        trigger: 'item',
        
        show: data.tooltipShow === false ? false : true
        //   formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        top: 20,
        icon: 'circle',
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 6,
        borderRadius: 6,
    },
    series: seriesData
};