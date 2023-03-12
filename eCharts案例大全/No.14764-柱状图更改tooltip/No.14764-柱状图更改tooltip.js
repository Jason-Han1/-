var $imgs = [{
    mon: '1月',
    val: '一月'
}, {
    mon: '2月',
    val: '二月'
}, {
    mon: '3月',
    val: '三月'
}, {
    mon: '4月',
    val: '四月'
}, {
    mon: '5月',
    val: '五月'
}, {
    mon: '6月',
    val: '六月'
}];
option = {
    title: {
        text: '趋势统计',
        textStyle: {
            fontWeight: 'bold',
            fontFamily: '楷体',
            textShadowColor: 'red',
            color: 'red',
            fontSize: 30
        },
        top: '0',
        left: 670
    },
    tooltip: {

        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var $pna = params.name; //横坐标数值
            var $val = params.value //{c}
            var res = '';
            for (var i = 0; i < $imgs.length; i++) {
                console.log($imgs[i].mon)
                    //若是横坐标数值等于json数据
                if ($imgs[i].mon == $pna) {

                    res = '<ul>' +
                        '<li>' + $imgs[i].val + '</li>' +
                        '<li>' + $val + '</li>' +
                        '</ul>'
                    break;
                }
            }

            setTimeout(function() {
                // 仅为了模拟异步回调
                callback(ticket, res); //回调函数，这里可以做异步请求加载的一些代码

            }, 10)
            return res;
        }
    },
    legend: {
        data: ['蒸发量']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 4.0, 8.9, -1.0],
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#C1232B', '#B5C334', '#FCCE10', '#C1232B', '#B5C334', '#FCCE10',
                    ];
                    return colorList[params.dataIndex]
                },
                label: {
                    type: 'line',
                    data: [7, 1, 5, 3, 2, 6,-2],
                    symbolSize: 5, //设置折现圆点的大小
                    color: ['#d48265'],
                }
            }
        }
    }, {
        type: 'line',
        data: [7, 10, 5, 3, 2, 6, 5],
        symbolSize: 5, //设置折现圆点的大小
        color: ['#d48265'],
    }]
};

//删除了一些不必要的