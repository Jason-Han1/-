var iw = 20, ow = 40, gcount = 2, margin = 10;
function getRenderFn ({y, w, g}) {
 return function renderItem(params, api) {
    var xValue = api.value(0);
    var yValue = api.value(y);
    var style = api.style();
    var point = api.coord([xValue, yValue]);
    var size = api.size([1, yValue])
    var bar = api.barLayout({
        // barGap: '100%', barCategoryGap: '0%', count: 2
        barWidth: ow, count: gcount, barGap: '100%'
    });
    console.debug(bar)
    return {
            type: 'rect',
            shape: {
                x: point[0] + bar[g].offsetCenter - w/2,
                y: point[1],
                width: w,
                height: size[1]
            },
            style: style
        };
 }   
}

option = {
    dataset: {
        source: [
          [
            "省份",
            "目标",
            "实际",
            "回购",
            "逾期"
          ],
          [
            "福建",
            16,
            7,
            3,
            1
          ],
          [
            "广东",
            1,
            2,
            3,
            4
          ],
          [
            "贵州",
            4,
            5,
            6,
            7
          ]
          
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
    },
    dataZoom: [{
        type: 'slider',
    }, {
        type: 'inside',
    }],
    xAxis: {
        type: 'category',
        axisTick: {
                alignWithLabel: true
            }
    },
    yAxis: {},
    series: [{
        type: 'custom',
        name: '目标',
        renderItem: getRenderFn({
            y: '目标',
            w: ow,
            g: 0
        }),
        encode: {
            x: '省份',
            y: '目标'
        }
    },{
        type: 'custom',
        name: '实际',
        renderItem: getRenderFn({
            y: '实际',
            w: iw,
            g: 0
        }),
        encode: {
            x: '省份',
            y: '实际'
        }
    },{
        type: 'custom',
        name: '回购',
        renderItem: getRenderFn({
            y: '回购',
            w: ow,
            g: 1
        }),
        encode: {
            x: '省份',
            y: '回购'
        }
    },{
        type: 'custom',
        name: '逾期',
        renderItem: getRenderFn({
            y: '逾期',
            w: iw,
            g: 1
        }),
        encode: {
            x: '省份',
            y: '逾期'
        }
    }]
};