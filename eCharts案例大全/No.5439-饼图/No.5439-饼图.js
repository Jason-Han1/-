var scaleData = [{
        'name': '工程建设',
        'value': 10
    },
    {
        'name': '产权交易',
        'value': 10
    },
    {
        'name': '土地交易',
        'value': 10
    },
    {
        'name': '其他交易',
        'value': 10
    }
  
];

var sum = 0

var rich = {
    white: {
        color: '#fff',
        align: 'center',
        fontWeight:'bold',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var data1 = [];
var color1 = ['#009cff', '#00fff0', '#f1bb00', '#00f439'];

for (var i = 0; i < scaleData.length; i++) {
    sum += scaleData[i].value
    
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                shadowBlur: 10,
                // borderColor:color1[i],
                shadowColor: color1[i],
                color: color1[i],
                opacity:0.75,
            }
        }
    }, {
        value: scaleData[i].value / 50,
        name: '',
        itemStyle: placeHolderStyle
    });
    
    data1.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                // shadowBlur: 10,
                // borderColor:color1[i],
                // shadowColor: color1[i],
                color: color1[i],
                opacity:0.3,
            }
        }
    }, {
        value: scaleData[i].value / 50,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [
    {
        name: '',
        type: 'pie',
        clockWise: true,
        radius: [180, 200],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'inner',
                    fontWeight:'bold',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        }else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    show: false,
                }
            }
        },
        data: data
    },
    {
        name: '',
        type: 'pie',
        clockWise: true,
        radius: [140, 180],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'inner',
                    fontWeight:'bold',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        }else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    show: false,
                }
            }
        },
        data: data1
    }
];
var option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: true,
        x: 'right',
        y: 'center',
        icon: 'circle',
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 30,
        textStyle: {
            color: '#fff',
            fontSize: 24
        }
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}