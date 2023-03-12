// 环形种类
var pa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
//  荷叶数据
var dis = ['肺1', '肺2', '肺3', '肺4', '肺5'];
var color = ['#fb6a0f', '#ed1c24', '#bf54ef', '#f8cb17', '#2ecb70', '#19b5ff', '#f8cb17', '#bf54ef', '#f82558'];
var color1 = ['#3dc4a3']
//  环形图数据
var data = [
    [23, 44, 66, 77, 88, 99],
    [234, 45, 64, 234, 642],
    [214, 115, 164, 34, 642],
    [214, 15, 164, 34, 62],
    [4, 15, 14, 34, 42]
]
// dat荷叶数据的组装
var dat = [];
for (var i = 0; i < dis.length; i++) {
    var da = {};
    da.value = 1;
    da.id = i;
    da.name = dis[i];
    da.selected = false;
    da.itemStyle = {
        color: color1[0],
        borderColor: '#fff',
    }
    da.emphasis = {
        itemStyle: {
            color: '#f8cb17',
            borderColor: '#fff',
        }
    }
    dat.push(da);
}
dat[0]['selected'] = true
//  ser环形数据的组装
var ser = [];
var sers;
for (var i = 0; i < dis.length; i++) {
    sers = {};
    sers.value = 200
    sers.name = pa[i]
    sers.itemStyle = {
        color: color[i]
    }
    ser.push(sers);
};
var option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        position: 'right',
        data: pa,
        textStyle: {
            color: '#000'
        },
        itemGap: 5,
        itemWidth: 15
    },
    series: [{
            type: 'pie',
            selectedMode: 'single',
            center: ['19%', '50%'],
            radius: [0, '20%'],
            label: {
                normal: {
                    color: '#000'
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#000'
                    }
                }
            },
            data: dat
        },
        {
            type: 'pie',
            center: ['56%', '50%'],
            radius: ['30%', '60%'],
            data: ser,
            label: {
                color: '#000',
                formatter: function(params) {
                    return params.name + "-" + params.value + "人"
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#000'
                    }
                }
            },

        }
    ]
};
myChart.setOption(option);
//  点击荷叶事件
myChart.on('click', function(params) {
    for (var j = 0; j < dis.length; j++) {
        dat[j].selected = false;
    }
    params.data.selected = true;
    var id = params.data.id
    var ser = [];
    var sers;
    /*k是循环颜色的变量*/
    k = 0;
    for (var i = 0; i < dis.length; i++) {
        sers = {};
        sers.value = data[id][i]
        sers.name = pa[i]
        sers.itemStyle = {
            color: color[i]
        }
        ser.push(sers);
    }
    option.series[1].data = ser;
    myChart.setOption(option)
});