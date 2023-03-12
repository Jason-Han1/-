//数据纯属虚构
var data = [{
        name: '天津',
        value: 353
    },
    {
        name: '北京',
        value: 22
    },
    {
        name: '上海',
        value: 19
    },
    {
        name: '重庆',
        value: 9069
    },
    {
        name: '河北',
        value: 151
    },
    {
        name: '河南',
        value: 3714
    },
    {
        name: '云南',
        value: 54
    },
    {
        name: '辽宁',
        value: 1207
    },
    {
        name: '黑龙江',
        value: 65
    },
    {
        name: '湖南',
        value: 2017
    },
    {
        name: '安徽',
        value: 743
    },
    {
        name: '山东',
        value: 1230
    },
    {
        name: '新疆',
        value: 211
    },
    {
        name: '江苏',
        value: 112
    },
    {
        name: '浙江',
        value: 147
    },
    {
        name: '江西',
        value: 261
    },
    {
        name: '湖北',
        value: 3182
    },
    {
        name: '广西',
        value: 57
    },
    {
        name: '甘肃',
        value: 1520
    },
    {
        name: '山西',
        value: 2727
    },
    {
        name: '内蒙古',
        value: 3311
    },
    {
        name: '陕西',
        value: 3964
    },
    {
        name: '吉林',
        value: 944
    },
    {
        name: '福建',
        value: 254
    },
    {
        name: '贵州',
        value: 1401
    },
    {
        name: '广东',
        value: 2453
    },
    {
        name: '青海',
        value: 475
    },
    {
        name: '西藏',
        value: 31
    },
    {
        name: '四川',
        value: 9552
    },
    {
        name: '宁夏',
        value: 496
    },
    {
        name: '海南',
        value: 340
    },
    {
        name: '台湾',
        value: 0
    },
    {
        name: '香港',
        value: 0
    },
    {
        name: '澳门',
        value: 0
    }
];

var yData = [];
var barData = [];

for (var i = 0; i < 10; i++) {
    barData.push(data[i]);
    yData.push(i + data[i].name);
}

var option = {
    toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {
                    type: 'png' ,
                        
                    }
                }
            },
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value']
        },
    },
    visualMap: {
        type: 'continuous',
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 80,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 10000,
        inRange: {
            color: ['#CDF1EF', '#1FEADB', '#06B7B0']
        },
        textStyle: {
            color: '#7B93A7'
        },
        bottom: 30,
        left: 'left',
        formatter: '{value}',
    },
    
    series: [{
        name: 'mapSer',
        type: 'map',
        roam: true,
        //geoIndex: 0,
        map: 'china',
        label: {
                normal: {
                    show: true,
                    formatter:'{b}\n{c}',
                    fontSize: 16 ,
                },
                emphasis: {
                    show: true
                }
            },
        data: data
    }]
};