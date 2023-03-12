var getColor = ['#CCFFFF', '#FFCCCC', '#FF6666']; // 分界值对应的颜色
var getClassification = [10, 20]; // 3个分界值（从小往大排序）
// 后台获取到的数据
var dates = [{
        name: '新疆',
        value: 8
    },
    {
        name: '陕西',
        value: 20
    },
    {
        name: '北京',
        value: 33
    },
];
dates.forEach(item => {  // 根据数组中每一项的 value 判断属于哪个等级，对应颜色，从 getColor 中取值
    if (item.value <= getClassification[0]) {
        item.itemStyle = {
            areaColor: getColor[0]
        }
    } else if (item.value > getClassification[0] && item.value <= getClassification[1]) {
        item.itemStyle = {
            areaColor: getColor[1]
        }
    } else if (item.value > getClassification[1]) {
        item.itemStyle = {
            areaColor: getColor[2]
        }
    }
});
option = {
    backgroundColor: '#051b4a',
    tooltip: {
        trigger: 'item',
    },
    series: {
        name: '总金额',
        type: 'map',
        map: 'china',
        data: dates,
        zoom: 1.2,
        scaleLimit: {
            min: 0.5,
            max: 3
        },
        label: { // 地图中各区域的文本标签
            normal: { // 标签显示
                show: true,
                color: '#c0c0c0'
            },
            emphasis: { //鼠标放在对应的地图块中的显示内容
                show: true,
                color: '#fff'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
        },
        tooltip: {
            formatter: function(params) {  // 信息提示框（鼠标放在省份上显示数据
                if (params.data == undefined || params.data == null) {
                    return
                } else {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                    return params.seriesName + '<br/>' + params.name + ': ' + value;
                }

            }
        },
    }
};