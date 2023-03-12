const itemStyle = {
    "type": "bar",
    "barWidth": 50,
    "barGap": "-130%",
    "silent": true,
    "stack": "指标范围",
}


const color = '#fff';
const hideAxis = {
    show: false
};

option = {
    backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0e2147'
        },
        {
            offset: 1,
            color: '#111c4e'
        }
    ], false),
    "toolbox": {
        "feature": {
            "saveAsImage": {}
        }
    },
    "tooltip": {
        backgroundColor: 'rgba(255,255,255,0.95)',
        extraCssText: 'padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
        textStyle: {
            color: '#333',
        },
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        formatter(params) {
            let [target, actual, ...levels] = params;
            levels = levels.map(({
                seriesName,
                value
            }) => ({
                seriesName,
                value,
            }));
            levels.forEach((_, idx) => {
                if (idx) {
                    levels[idx].value += levels[idx - 1].value;
                }
            });
            let curLevel = -1;
            levels.forEach((item, idx) => {
                if (actual.value >= item.value) {
                    curLevel = idx;
                }
            });

            let curText = levels[curLevel + 1].seriesName;

            let levelDst = R.clone(levels).map((item, idx) => {
                item.value = idx === 0 ? `0 ~ ${levels[idx].value}` : `${levels[idx - 1].value} ~ ${levels[idx].value}`;
                return item;
            });

            let detail = [target, actual, ...levelDst]
                .map(({
                    seriesName,
                    value
                }) => `${seriesName}: ${value}`)
                .join('<br>');
            return `${target.name}<strong style="color:#f67;"> (${curText}) </strong><br><br>
        ${detail} 
        `;
        },
    },
    "legend": {
        "data": ["目标值", , "实际值", "低于较差值", "较差值", "中间值", "良好值", "优秀值"].map(name => ({
            name,
            "icon": "circle",

        })),
        "selectedMode": false,
        right: 20,
        top: 40,
        textStyle: {
            color
        }
    },
    grid: {
        y: 100
    },
    "title": [{
        "text": "子弹图示例",
        subtext: '点击查看纵向版本',
        sublink: 'https://gallery.echartsjs.com/editor.html?c=xiOkfPsqyl',
        "textStyle": {
            "fontSize": 30,
            "fontWeight": 200,
            color
        },
        top: 20,
        left: 140
    }, {
        "text": "数据来源：xxx",
        "borderWidth": 0,
        "textStyle": {
            "fontSize": 10,
            "fontWeight": "normal",
            color
        },
        "x": 5,
        "y2": 0
    }, {
        "text": "©xx公司",
        "borderColor": color,
        "borderWidth": 0,
        "textStyle": {
            "fontSize": 10,
            "fontWeight": "normal",
            color
        },
        "x": "right",
        "y2": 3
    }],
    "yAxis": {
        "data": ["品种1", "品种2", "品种3", "品种4", "品种5"],
        "axisLine": hideAxis,
        "axisTick": hideAxis,
        axisLabel: {
            textStyle: {
                color
            }
        },
    },
    "xAxis": {
        "splitLine": hideAxis,
        axisLabel: {
            textStyle: {
                color
            }
        },
        "axisTick": {
            textStyle: {
                color
            }
        },
        axisLine: hideAxis
    }, 
    "series": [{
        "type": "bar",
        id: 'target',
        "name": "目标值",
        data: new Array(5).fill(0).map(item => Math.ceil(40 + Math.random() * 60)),
        "barWidth": 30,
        "z": 9,
        itemStyle: {
            normal: {
                show: 'true',
                barBorderRadius: [0,30,30,0],
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                        offset: 1,
                        color: '#00feff'
                    },
                    {
                        offset: 0.5,
                        color: '#027eff'
                    },
                    {
                        offset: 0,
                        color: '#0286ff'
                    }
                ]),
                shadowColor: '#28f',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 30
            },
        }
    }, {
        "type": "custom",
        id: 'actual',
        "name": "实际值",
        "data": new Array(5).fill(0).map(item => Math.ceil(40 + Math.random() * 60)),
        "z": 10,
        renderItem: (_, api) => {
            const [x, y] = api.coord([api.value(0), api.value(1)]);
            return {
                type: 'group',
                children: [{
                    type: 'line',
                    shape: {
                        x1: x,
                        x2: x,
                        y1: y - 30,
                        y2: y + 20,
                    },
                    style: {
                        stroke: api.visual('color'),
                        lineWidth: 6
                    }
                }],
            };
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fc3b05'
                }, {
                    offset: 1,
                    color: '#f5104d'
                }]),
                shadowColor: '#fff',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 30
            }
        }
    }, {
        ...itemStyle,
        "name": "低于较差值",
        "data": [60, 65, 70, 65, 65],
        "itemStyle": {
            "color": "#FF636E"
        }
    }, {
        ...itemStyle,
        "name": "较差值",
        "data": [10, 10, 5, 5, 3],
        "itemStyle": {
            "color": "#FFA39E"
        }
    }, {
        ...itemStyle,
        "name": "中间值",
        "data": [10, 10, 5, 12, 3],
        "itemStyle": {
            "color": "#FFD591"
        }
    }, {
        ...itemStyle,
        "name": "良好值",
        "data": [10, 10, 10, 8, 3],
        "itemStyle": {
            "color": "#91D5FF"
        }
    }, {
        ...itemStyle,
        "name": "优秀值",
        "data": [10, 5, 10, 10, 26],
        "itemStyle": {
            "color": "#A7E8B4"
        }
    }]
}

let myChart = echarts.getInstanceByDom(document.querySelector("#chart-panel"));
setInterval(() => {
    myChart.setOption({
        series: [{
            id: 'target',
            data: new Array(5).fill(0).map(item => Math.ceil(40 + Math.random() * 60))
        }, {
            id: 'actual',
            "data": new Array(5).fill(0).map(item => Math.ceil(40 + Math.random() * 60))
        }]
    })
}, 2000)