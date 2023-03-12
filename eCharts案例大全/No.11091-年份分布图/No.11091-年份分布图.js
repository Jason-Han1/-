var chartData = [{
        name: '2018',
        value: 72.5,
    },
    {
        name: '2017',
        value: 65.2,
    },
    {
        name: '2016',
        value: 33.6,
    },
    {
        name: '2015',
        value: 33.6,
    }, {
        name: '2014',
        value: 33.6,
    }
];

var bgData = [];
var itemData = [];

// 取出每一条数据value,作为显示数据
chartData.forEach(function(items, index) {
    itemData.push(items.value);
})

// 取出所有数据最大值,作为背景象形柱图数据
chartData.forEach(function(items, index) {
    bgData.push({
        name: items.name,
        value: Math.max.apply(null, itemData)
    });
})

// 所有数据最大值
var maxValue = Math.max.apply(null, itemData);

// 字体 distance放大参数
var scale = 1;

//富文本配置

var option = {
    backgroundColor: '#fff',
   
    grid: {
        top: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: (function(data) {
            var arr = [];
            data.forEach(function(items) {
                arr.push(items.name);
            });
            return arr;
        })(chartData),
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#666'
            }
        }
    },
    yAxis: {
        type: 'value',
        show: false,

    },
    series: [{ // 内边框
        name: '',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: 'fixed',
        
        symbolMargin: '50%',
        symbolClip: true,
        symbolSize: ['20%', 6],
        itemStyle: {
            normal: {
                color: '#f5f5f5'
            }
        },
        z: 1,
        data: [100, 100, 100, 100, 100],
        animationEasing: 'elasticOut',
    }, {
        name: '数据',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: 'fixed',
        
        symbolMargin: '50%',
        symbolClip: true,
        symbolSize: ['20%', 6],
        z: 2,
        itemStyle: {
            normal: {
                color: "#1cd389"
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#333',
                formatter:function(res){
                    var tpl = res.value + '%';
                    return tpl;
                    
                }
            }
        },
        data: chartData,
    }, ]
};