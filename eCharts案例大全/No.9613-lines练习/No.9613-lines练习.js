linesdata = [{
"fromId": 14201,
"fromName": "凤起路地铁站",
"toId": 14100,
"toName": "西湖",
"value": "11295",
"coords": [
    [120.170007, 30.268763],
    [120.15564, 30.25845]
],
"lineStyle": {
    "width": 8
}
}, {
"fromId": 14202,
"fromName": "龙翔桥地铁站",
"toId": 14100,
"toName": "西湖",
"value": "5388",
"coords": [
    [120.170581, 30.260523],
    [120.15564, 30.25845]
],
"lineStyle": {
    "width": 5
}
}, {
"fromId": 14203,
"fromName": "定安路地铁站",
"toId": 14100,
"toName": "西湖",
"value": "7187",
"coords": [
    [120.174309, 30.2517],
    [120.15564, 30.25845]
],
"lineStyle": {
    "width": 5
}
}, {
"fromId": 14100,
"fromName": "西湖",
"toId": 14203,
"toName": "定安路地铁站",
"value": "11033",
"coords": [
    [120.15564, 30.25845],
    [120.174309, 30.2517]
],
"lineStyle": {
    "width": 8
}
}, {
"fromId": 14100,
"fromName": "西湖",
"toId": 14202,
"toName": "龙翔桥地铁站",
"value": "13003",
"coords": [
    [120.15564, 30.25845],
    [120.170581, 30.260523]
],
"lineStyle": {
    "width": 8
}
}, {
"fromId": 14100,
"fromName": "西湖",
"toId": 14201,
"toName": "凤起路地铁站",
"value": "21746",
"coords": [
    [120.15564, 30.25845],
    [120.170007, 30.268763]
],
"lineStyle": {
    "width": 12
}
}]

myChart.setOption(
    option = {
        bmap: {
            center: [120.169, 30.260],
            zoom: 16,
            roam: true,
        },
        tooltip: {
            trigger: 'item',
            formatter: function(param) {
                if (param.seriesType == 'lines') {
                    console.log(param)
                    var str = ''
                    str += param.marker + param.data.fromName + ' > ' + param.data.toName + '<br/><p style="font-size: 22px;font-weight:bold;display:inline-block;color:#a6c84c;">' + param.data.value + '</p>人'
                    return str
                } else {
                    return ''
                }
            }
        },
        series: [{
            name: '流量',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: '#a6c84c',
                    width: 10,
                    curveness: 0.2
                }
            },
            data: linesdata
        }, {
            name: '流量',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: '#a6c84c',
                    width: 10,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: linesdata
        }, {
            name: '点',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 30,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#a6c84c'
                }
            },
            data: [{
                name: '西湖',
                value: [120.15564, 30.25845]
            }]
        }]
    }
)


setTimeout(function() {
    
    myChart.setOption({
        series: [{
            name: '点',
            data:[]
        }]
    })
}, 10000);