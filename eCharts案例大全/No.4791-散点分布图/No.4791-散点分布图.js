//跳转代码
myChart.on('click', function(params) {
    console.log(params.name);
    window.open(params.data.url);
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
});

var colorList = [
        '#ff7f50', '#87cefa', '#7b68ee', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#da70d6',
    ],
    option = {
        // 图表标题
        title: {
            show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '水晶球', //主标题文本，'\n'指定换行
            x: 'center', // 水平安放位置，默认为左对齐，可选为：
            // ¦ {number}（x坐标，单位px）
            y: '10%', // 垂直安放位置，默认为全图顶端，可选为：           
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc', // 标题边框颜色
            borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5, // 标题内边距，单位px，默认各方向内边距为5，                   // 接受数组分别设定上右下左边距，同css
            itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333' // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa' // 副标题文字颜色
            }
        },
        backgroundColor: '#fff',
        tooltip: {},
        animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 500,
                edgeLength: 10
            },
            roam: true,
            label: {
                show: true,
                formatter: [
                    '{title|{c}}',
                    '{name|{b}}'
                ].join('\n'),
                rich: {
                    title: {
                        fontSize: 16,
                        color: '#fff',
                        textAlign: 'center'
                    },
                    name: {
                        fontSize: 14,
                        color: '#fff',
                        textAlign: 'center'
                    }
                }
            },
            data: [{
                "name": "新冠肺",
                "value": 2373,
                "symbolSize": 50, //设置圈圈的大小
                "draggable": true, //是否可拖拽
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[0],
                        "color": colorList[0]

                    }
                }
            }, {
                "name": "女连胜",
                "value": 5449,
                "symbolSize": 73,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[1],
                        "color": colorList[1]
                    }
                }
            }, {
                "name": "火医院",
                "value": 2289,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[2],
                        "color": colorList[2]
                    }
                }
            }, {
                "name": "女队员",
                "value": 2518,
                "symbolSize": 50,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[3],
                        "color": colorList[3]
                    }
                }
            }, {
                "name": "人们",
                "value": 4730,
                "symbolSize": 88,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[4],
                        "color": colorList[4]
                    }
                }
            }]
        }]
    }