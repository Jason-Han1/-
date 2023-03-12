var getname = ['入住', '未入住'];
var getvalue = [80,20];

var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({ name: getname[i], value: getvalue[i] });
}
var colorList = [
 {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#1875F0'
    }, {
        offset: 1,
        color: '#1875F0'
    }]
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{

        offset: 0,
        color: '#d0e3fc'
    }, {
        offset: 1,
        color: '#d0e3fc'

    }]
}
];

option = {
    backgroundColor: '#ffff',
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        show: true,

        height: '88%',
        y: '30%',
        x: '75%',
        icon: 'circle', //设置为圆，删除则为矩形
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#c0c4cc',
            fontSize: 14,
            lineHeight: 20,
            rich: {
                percent: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        formatter: function (name) {
            for (var i = 0; i < getname.length; i++) {
                if (name == data[i].name) {
                    return '{name|' + name + '}\r\r{rate|' + getvalue[i] + '人}';
                }
            }
        },
    },

    series: [
        {
            type: 'pie',
            
            radius: ['35%', '45%'],
            center: ['50%', '35%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                position: 'center',
            },
            labelLine: {
                show: false,
            },
            data: data,
            
        },
     
    ],
};
return option;  