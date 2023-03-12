var classData = [
    {name: '1班', value: '100'},
    {name: '2班', value: '60'},
    {name: '3班', value: '80'},
    {name: '4班', value: '130'},
    {name: '5班', value: '45'},
    {name: '6班', value: '190'},
    {name: '7班', value: '210'},
    {name: '8班', value: '300'},
    {name: '9班', value: '110'},
    {name: '10班', value: '99'}
];
var legendData = classData.map(function(item) {
    return item.name;
})
option = {
    // backgroundColor: '#0e4b86',
    title: {
        text: '评价次数班级分布',
        top: '30%',
        right: '1%',
        textStyle: {
            fontSize: 16,
            color: '#333'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(e) {
            return e.marker + e.name + '<br/>' + e.value + ' (' + e.percent + '%)';
        }
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        top: '35%',
        right: '5%',
        itemWidth: 14,
        itemHeight: 14,
        height: 260,
        data: legendData,
        itemGap: 15,
        textStyle: {
            fontSize: 14,
            color: '#333'
        },
        pageButtonItemGap: 10, // 按钮和页信息之间的间隔
        pageButtonGap: 10, // 控制块和图例项之间的间隔
        pageIconInactiveColor: 'orange', // 按钮未激活颜色
        pageIconColor: 'red', // 按钮颜色
        pageIconSize: [15, 30], // 翻页按钮的大小 [宽, 高]
        pageTextStyle: {
            color: '#333',
            fontSize: 16
        }
    },
    series: [{
        name: '',
        type: 'pie',
        center: ['40%', '50%'], // 位置调整
        radius: ['50%', '80%'], // 大小缩放
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                },
                formatter: function(e) {
                    return e.name + '\n' + e.value + ' (' + e.percent + '%)';
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: classData
    }]
};