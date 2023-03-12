var datas = [{
        name: '男性',
        value: '180'
    },
    {
        name: '女性',
        value: '260'
    }
];
var legendData = datas.map(function(item) {
    return item.name;
});

option = {
    backgroundColor: '#0e4b86',
    color: ['#0098ec', '#ff5252'],
    title: {
        text: '评价次数性别分部',
        top: '46%',
        right: '2%',
        textStyle: {
            fontSize: 16,
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(e) {
            return e.marker + e.name + '：' + e.value + ' ( ' + e.percent + '% )';
        }
    },
    legend: {
        orient: 'horizontal',
        top: '50%',
        right: '3%',
        itemWidth: 15,
        itemHeight: 15,
        data: legendData,
        itemGap: 20,
        textStyle: {
            fontSize: 14,
            color: '#fff'
        }
    },
    series: [{
        name: '评价次数性别分部',
        type: 'pie',
        clockwise: false, // 大到小排列
        radius: '60%',
        center: ['50%', '50%'],
        data: datas,
        // hoverAnimation: false, // 是否取消hover的放大动画
        label: {
            // 鼠标hover时候的样式
            normal: {
                // show: false,
                position: 'inner', //标签的位置
                fontSize: 20,
                color: '#fff',
                formatter: '{c}\n{d}%'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                // show: false
            }
        },
        itemStyle: {
            // 间隙
            // borderColor: "#fff",
            // borderWidth: 4
        }
    }]
};