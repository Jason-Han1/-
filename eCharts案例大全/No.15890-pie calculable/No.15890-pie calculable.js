var colorList = [
    '#c23531', '#2f4554', '#61a0a8',
    '#d48265', '#91c7ae','#749f83',
    '#ca8622', '#bda29a','#6e7074',
    '#546570', '#c4ccd3'
];

var originalData = [
    {value: 335, name: '直接访问'},
    {value: 310, name: '邮件营销'},
    {value: 234, name: '联盟广告'},
    {value: 135, name: '视频广告'},
    {value: 1548, name: '搜索引擎'}
];
echarts.util.each(originalData, function (item, index) {
    item.itemStyle = {
        normal: {color: colorList[index]}
    };
});

var data = [];
var legendData = [];

var dragging;
var draggingDataIndex;
var dx;
var dy;
var zr = myChart.getZr();

resetOption();

myChart.on('mousedown', function (params) {
    draggingDataIndex = getHoveredDataIndex(params);
    if (draggingDataIndex != null) {

        var srcSector = params.event.target;
        dragging = new echarts.graphic.Sector({
            shape: echarts.util.extend({}, srcSector.shape),
            style: {
                fill: srcSector.style.fill,
                opacity: 0.5
            },
            silent: true,
            z: 10000
        });

        dx = params.event.offsetX - srcSector.shape.cx;
        dy = params.event.offsetY - srcSector.shape.cy;

        zr.add(dragging);
    }
});

myChart.on('mouseup', function (params) {
    if (dragging) {
        var targetDataIndex = getHoveredDataIndex(params);
        if (targetDataIndex != null
            && targetDataIndex !== draggingDataIndex
        ) {
            data[targetDataIndex].value += data[draggingDataIndex].value;
            data[targetDataIndex].name += '\n' + data[draggingDataIndex].name;
            legendData[targetDataIndex] = data[targetDataIndex].name;
            data.splice(draggingDataIndex, 1);
            legendData.splice(draggingDataIndex, 1);
            myChart.setOption({
                legend: {data: legendData},
                series: {data: data}
            });
        }
    }
});

zr.on('mousemove', function (e) {
    if (dragging) {
        dragging.setShape({
            cx: e.offsetX - dx,
            cy: e.offsetY - dy
        });
    }
});

zr.on('mouseup', function (e) {
    if (dragging) {
        zr.remove(dragging);
        dragging = null;
    }
});

function getHoveredDataIndex(params) {
    return params.componentType === 'series'
        && params.componentSubType === 'pie'
        && params.dataIndex;
}

function resetOption() {
    data.length = 0;
    legendData.length = 0;
    echarts.util.each(originalData, function (item, index) {
        data.push({
            value: item.value, 
            name: item.name,
            itemStyle: {
                normal: {color: item.itemStyle.normal.color}
            }
        });
        legendData.push(item.name);
    });
    
    option = {
        legend: {
            data: legendData,
            formatter: function (name) {
                return name.replace(/\n/g, ' + ');
            }
        },
        title: {
            bottom: 0,
            left: 'center',
            text: '将一个扇区拖到另一个扇区 可以合并它们',
            textStyle: {
                fontSize: 14,
                color: '#777'
            }
        },
        toolbox: {
            left: 'left',
            feature: {
                dataView: {},
                saveAsImage: {},
                myRestore: {
                    show: true,
                    title: '还原',
                    icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
                    onclick: resetOption
                },
            }
        },
        tooltip: {},
        series: [{
            name: 'pie',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 30,
            clockwise: true,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                        color: '#333'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#333'
                    }
                }
            },
            data: data
        }]
    };  
    myChart.setOption(option, true);
}