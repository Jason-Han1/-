var objData = [{
        "NUMERIC": 30,
        "NAME": "公共类服务"
    },
    {
        "NUMERIC": 50,
        "NAME": "基础类服务"
    },
    {
        "NUMERIC": 10,
        "NAME": "模型类服务"
    },
    {
        "NUMERIC": 20,
        "NAME": "数据类服务"
    },
    {
        "NUMERIC": 30,
        "NAME": "计算类服务"
    },
    {
        "NUMERIC": 20,
        "NAME": "展示类服务"
    },
    {
        "NUMERIC": 30,
        "NAME": "交互类服务"
    }
]

var data = [
    [
        ['公共服务', 577]
    ],
    [
        ['基础服务', 81.4]
    ],
    [
        ['模型服务', 181.4, ]
    ]
];
var colors = ['#2292ec', '#03c5c0', '#01d56e', '#41d402', '#eb5336', '#255ae1', '#f28621'];

console.log(data)



var seriesArr = [];
data = objData.map((item, i) => {
    var arr = [
        []
    ];
    arr[0].push(item.NAME);
    arr[0].push(item.NUMERIC);
    var ser = {
        name: '--',
        data: arr,
        type: 'scatter',
        label: {
            show: true,
            position: 'inside',
            formatter: function(param) {
                console.log(param.value[1])
                return param.value[1];
            },
        },
        symbolSize: function(data) {
            //return 100
            return Math.sqrt(arr[0][1]) / 0.13;
        },
        itemStyle: {
            normal: {
                color: colors[i]
            }
        }
    };
    seriesArr.push(ser)

    return arr;

});
// var seriesArr =[]

var option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value[0] + ":" + obj.value[1];
            return value;
        }
    },

    xAxis: {
        type: 'category',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        name: '单位:次',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: seriesArr
};