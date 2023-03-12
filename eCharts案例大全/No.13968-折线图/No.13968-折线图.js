var data = [{
        name: '电影',
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: '电视剧',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '结婚照',
        data: [150, 232, 201, 154, 190, 330, 500]
    },
    {
        name: '机场',
        data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
        name: '抓拍',
        data: [80, 432, 941, 454, 390, 330, 120]
    },
    {
        name: '电影节',
        data: [120, 732, 301, 644, 190, 320, 132]
    },
    {
        name: '红地毯',
        data: [320, 912, 961, 332, 339, 333, 420]
    },
    {
        name: '别墅',
        data: [620, 322, 401, 334, 890, 60, 820]
    }
]
var colors = ["rgba(110, 181, 229, 1)", " rgba(229, 155, 110, 1)", "rgba(110, 229, 158, 1)", "rgba(248, 107, 79, 1)", "rgba(180, 229, 110, 1)", "rgba(245, 140, 161, 1)", " rgba(229, 110, 177, 1)", "rgba(127,110, 229,1)"]
var rgbas = ["rgba(110, 181, 229, 0.3)", " rgba(229, 155, 110, 0.3)", "rgba(110, 229, 158, 0.3)", " rgba(248, 107, 79, 0.3)", "rgba(180, 229, 110, 0.3)", "rgba(245, 140, 161, 0.3)", "rgba(229, 110, 177, 0.3)", " rgba(127,110, 229, 0.3)"]
var brokenData = []
var legendData = []
data.forEach(function(item, index) {
    var _data = [];
    legendData.push(item.name)
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    var alpha = Math.random(); //随机生成1以内a值
    colors.push(`rgb(${r},${g},${b})`); //返回rgba(r,g,b,a)格式颜色
    rgbas.push(`rgba(${r},${g},${b},0.3)`)
    item.data.forEach(function(_items, ind) {
        _data.push({
            "value": _items,
            "symbol": false,
            "symbolSize": 20,
            "itemStyle": {
                "normal": {
                    "color": colors[index],
                }
            }
        })
        item.data = _data
    })
    brokenData.push({
        "name": item.name,
        "type": "line",
        "stack": item.name,
        "data": _data
    })
})
option = {
    title: {
        text: '范冰冰',
        textStyle: { //标题内容的样式
            color: '#6c6c6c', //京东红
            fontFamily: "san-serif", //主题文字字体，默认微软雅黑
            fontSize: 18 //主题文字字体大小，默认为18px
        },
        // left:"center",
    },
    color: colors,
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // type: 'scroll',
        // orient: 'vertical',
        // right: 10,
        // top: 20,
        // bottom: 20,
        data: legendData
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
            lineStyle: {
                color: '#676767',
                width: 1, //这里是为了突出显示加上的
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#676767',
                width: 1, //这里是为了突出显示加上的
            }
        }
    },
    series: brokenData
};
