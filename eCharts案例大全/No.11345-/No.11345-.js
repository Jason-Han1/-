var colors = [ '#81d0d7'];
var data1=[345,274,382,278];
//数据纯属虚构
var data = [{
        name: '一月',
        value: 5.3
    },
    {
        name: '二月',
        value: 3.8
    },
    {
        name: '三月',
        value: 4.6
    },
    {
        name: '四月',
        value: 3.6
    },
    {
        name: '五月',
        value: 3.4
    },
    {
        name: '六月',
        value: 3.2
    },
    {
        name: '七月',
        value: 1.6
    },
    {
        name: '八月',
        value: 4.3
    },
    {
        name: '九月',
        value: 4.1
    },
    {
        name: '十月',
        value: 2.4
    },
    {
        name: '十一月',
        value: 3.3
    },
    {
        name: '十二月',
        value: 3.0
    }];

var yData = [];
var barData = [];

for (var i = 0; i < 12; i++) {
    barData.push(data[i]);
    yData.push(i + data[i].name);
}
var data2=[917,889,1264,727];
option = {
    title: [{
        show: true,
        textStyle: {
            color: '#2D3E53',
            fontSize: 18
        },
    }],
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value'] 
        },
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 95,
            textStyle: {
                color: '#455A74',
                align: 'left',
                fontSize: 14
            },
            rich: {
                b: {
                    color: '#000',
                    backgroundColor: '#4197FD',
                    fontSize:15,
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 10
                },
                c:{
                   color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                },
                c1:{
                   color: '#fff',
                    backgroundColor: '#ff1515',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                },
                c2:{
                   color: '#fff',
                    backgroundColor: '#96ff1c',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                },
                c3:{
                   color: '#fff',
                    backgroundColor: '#188ce8',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                }
            },
            formatter: function(params) {
                console.log(params.slice(0, 2))
                if (parseInt(params.slice(0, 1)) == 0) {
                    return [
                        '{b|' + (parseInt(params.slice(0, 3)) + 1) + '}' + '  ' + '{c1|' + params.slice(1)+ '}' 
                    ].join('\n')
                } 
                if (params.slice(2, 5) == '十一月') {
                    return [
                        '{b|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + '{c|' + params.slice(2)+ '}' 
                    ].join('\n')
                }
                if (params.slice(2, 5) == '十二月') {
                    return [
                        '{b|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + '{c|' + params.slice(2)+ '}' 
                    ].join('\n')
                }
                if (parseInt(params.slice(0, 1)) == 1) {
                    return [
                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + '{c2|' + params.slice(1)+ '}' 
                    ].join('\n')
                }
                if (parseInt(params.slice(0, 1)) == 2) {
                    return [
                        '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + '{c3|' + params.slice(1)+ '}' 
                    ].join('\n')
                }else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 3)) + 1) + '}' + '  ' + '{c|' + params.slice(1)+ '}'
                    ].join('\n')
                }
            }
        },
        data: yData
    },
    geo: {
        // roam: true,
        map: 'china',
        left: 'left',
        right: '300',
        // layoutSize: '80%',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#fff464'
            }
        }
    },
    series: [{
        name: 'mapSer',
        type: 'map',
        roam: false,
        geoIndex: 0,
        label: {
            show: false,
        },
      
        data: data
    }, {
        name: 'barSer',
        type: 'bar',
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#000',
                    fontSize: '13',
                }
            }
        },
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 8,
        barGap: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#FFD119' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFAC4C' // 100% 处的颜色
                            }]
                        },
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#00C0FA' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#2F95FA' // 100% 处的颜色
                            }]
                        }
                    ];
                    if (params.dataIndex < 3) {
                        return colorList[1]
                    } else {
                        return colorList[1]
                    }
                },
                barBorderRadius: 15
            }
        },
        data: barData
    }]
};
