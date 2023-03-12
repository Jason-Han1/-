//  荷叶数据
var dis = ['****1', '****2', '**3', '****4'];
var disdata =[186, 90, 755, 0.38];
var color = ['#FFA881', '#469AF0', '#8D82F3', '#83A6FE', '#1EBABC',
'#82E3A2', '#F5BE5C','#74FFFB', '#FFA881', '#469AF0', '#8D82F3',
'#83A6FE', '#1EBABC', '#82E3A2', '#F5BE5C','#70AD47','#6BAA41',
'#17b6d3', '#0090ba', '#0084e9', '#0841bc','#5e62ff', '#a48bff', '#5ebbef'];
var color1 = ['#9DC3E6','#4271C4','#EC7422','#C6E3B4'];
// 环形种类
var pa = [['******有限公司', 
'*******有限公司'],
['*******有限公司***分公司', 
'********服务有限公司**分公司', 
'*******有限公司**分公司',
'*******有限公司**分公司', 
'*******有限公司*分公司',
'*******有限公司',
'*******有限公司**分公司',
'*******有限公司',
'*******有限公司**分公司',
'*******有限公司',
'*******有限公司**分公司',
'*******有限公司**分公司',
'*******有限公司',
'*******有限公司**分公司',
'*******有限公司',
'*******有限公司',
'*******有限公司',
'*******有限公司****分公司'],
['***'],
['***', '*琳', '*阳', '*雪', '*炜']];
//  环形图数据
var data = [
    [106, 0.04],
    [0.54,0.02,0.01,0.05,0.25,0.16,
    30.4,0.98,1.8,3.2,0.11,0.01,-5,0.04,
    0.09,56.1,1.56,0.01],
    [214],
    [214, 15, 164, 34, 62]
]
// dat荷叶数据的组装
var dat = [];
for (var i = 0; i < dis.length; i++) {
    var da = {};
    da.value = disdata[i];
    da.id = i;
    da.name = dis[i];
    da.selected = false;
    da.itemStyle = {
        color: color1[i],
        borderColor: '#fff',
    }
    da.emphasis = {
        itemStyle: {
            borderColor: '#fff',
        }
    }
    dat.push(da);
}
dat[0]['selected'] = false
//  ser环形数据的组装
var ser = [];
var sers;
for (var i = 0; i < dis.length; i++) {
    sers = {};
    sers.value = data[0][i]
    sers.name = pa[0][i]
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
        show: true,
        orient: 'vertical',
        top: '10%',
        left: '10%',
        data: dat,
        textStyle: {
          color: '#000'
        }
      },
    series: [{
            type: 'pie',
            selectedMode: 'single',
            center: ['56%', '50%'],
            radius: [0, '30%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            itemStyle: {
            normal: {
              // 设置扇形的阴影
              shadowBlur: 10,
              shadowColor: '#666'

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
            radius: ['40%', '55%'],
            data: ser,
            label: {
                color: '#000',
                formatter: function(params) {
                    return params.name
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
    for (var i = 0; i < pa[params.data.id].length; i++) {
        sers = {};
        sers.value = data[id][i]
        sers.name = pa[params.data.id][i]
        sers.itemStyle = {
            color: color[i]
        }
        ser.push(sers);
    }
    option.series[1].data = ser;
    myChart.setOption(option)
});