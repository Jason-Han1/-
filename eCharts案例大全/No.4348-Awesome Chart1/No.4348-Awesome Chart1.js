var scaleData = [{
        'name': '高中以上',
        'value': 20
    },
    {
        'name': '高中',
        'value': 15
    },
    {
        'name': '初中',
        'value': 10
    },
    {
        'name': '小学',
        'value': 10
    },
    {
        'name': '文盲',
        'value': 2
    },
/*    {
        'name': '其他交易',
        'value': 10
    },*/
  
];
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
var color1 = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)','rgb(255,222,0)','rgb(255,0,0)'];

for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                shadowBlur: 30,
                borderColor:'rgb(43, 166, 254)',
                shadowColor: 'rgb(43, 166, 254)',
                color: 'rgb(43, 166, 254)',
                opacity:0.75,
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [80, 160],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
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
}];
option = {
    //backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}