// 左右两侧的数据个数要一样(positive 和 negative), 如果不一样会排列不整齐, 数量少的用空字符串代替 
var positive = ['校园班级文明', '洁净班级', '好人好事', '担任学校学生会干部', '年段竞赛', '校级竞赛', ''];
var negative = ['未经允许使用手机', '迟到', '缺席', '未穿校服', '化妆', '迟交作业', '缺交作业'];
var good = [50, 28, 80, 65, 68, 60, 35];
var bad = [-50, -28, -40, -45, -38, -58];

function xAxisFn(i) {
    return {
        type: 'value',
        gridIndex: i || 0,
        // min: 0,
        // max: 100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }
}

// 控制文字显示的和对齐方法之一
function yAxisFn(idx, data, bool) {
    // 这种对齐方法，自适应方面无适应, 需要另外写, 因此最好用第二种方法 typesetting()
    function isWho() {
        var obj = {
            show: true,
            color: '#fff',
            fontSize: 14,
        };
        if (bool) {
            // 右对齐
            obj.align = 'right';
            obj.padding = [0, -380, 0, 0];
            obj.verticalAlign = 'bottom';
            obj.lineHeight = 58;
        } else {
            // 左对齐
            obj['align'] = 'left';
            obj['padding'] = [0, 0, 0, 25];
            obj['verticalAlign'] = 'bottom';
            obj['lineHeight'] = 58;
        }
        return obj
    }
    return {
        type: 'category',
        gridIndex: idx || 0,
        inverse: true,
        data: data || '',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: isWho()
    }
}
option = {
    backgroundColor: '#0e4b86',
    color: ['#00b807', '#ff6600'],
    title: {
        text: '行为看板',
        top: 15,
        left: 20,
        padding: [7, 21],
        backgroundColor: '#3256a9',
        borderColor: '#3c62c0',
        borderWidth: 1,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    legend: {
        orient: 'horizontal', // 'vertical'
        top: 15,
        right: '5%',
        data: ['正向', '违纪'],
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 25, // 例间距
        textStyle: {
            fontSize: 14,
            color: '#fff'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: "none" // shadow
        },
        textStyle: {
            fontSize: 20
        },
        formatter: function(a) {
            var v = a[0];
            if (!v.name) return
            return v.name + '<br/>' + v.marker + v.seriesName + '：' + Math.abs(v.value);
        }
    },
    // 滚动条
    dataZoom: [{
            type: 'slider',
            show: true,
            yAxisIndex: [0, 1],
            // top: '25%',
            right: '5%',
            // bottom: '15%',
            width: 25,
            start: 0,
            end: 80,
            handleSize: '0', // 滑动条的 左右2个滑动小块的大小
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            textStyle: {
                color: "#fff"
            },
            fillerColor: '#3C62C0', // 拖动条的颜色
            borderColor: "none",
            backgroundColor: 'rgba(60, 98, 192, 0.302)',
            showDetail: false // 即拖拽时候是否显示详细数值信息 默认true
        },
        {
            type: 'inside',
            yAxisIndex: [0, 1],
            start: 1,
            end: 80,
            zoomLock: true // 取消鼠标滚轮的放大放小功能, 只能拖动
        }
    ],
    xAxis: [xAxisFn(0), xAxisFn(1)],
    yAxis: [yAxisFn(0, positive, 1), yAxisFn(1, negative, 0)],
    grid: [{
            width: '40%',
            left: '8%',
            height: '80%',
            gridIndex: 0,
        },
        {
            width: '40%',
            left: '50%',
            height: '80%',
            gridIndex: 1,
        }
    ],
    series: [
        seriesFn('正向', 0, bad, [30, 0, 0, 30], 1),
        seriesFn('违纪', 1, good, [0, 30, 30, 0], 0)
    ]
};

/**
 * 
 * @param name    name
 * @param idx     xAxisIndex / yAxisIndex
 * @param data    data 数据
 * @param radius  barBorderRadius
 * @param bool    布尔值 1 / 0, 控制文字顶部左 / 右对齐显示
 */
function seriesFn(name, idx, data, radius, bool) {
    return {
        name: name || '',
        type: 'bar',
        barGap: '30%',
        barWidth: '20',
        xAxisIndex: idx || 0,
        yAxisIndex: idx || 0,
        itemStyle: {
            normal: {
                barBorderRadius: radius,
                borderWidth: 0
            }
        },
        label: typesetting(bool),
        data: data || '',
        // zlevel: 5
    }
}

// 定义文字排版方式之方法二
function typesetting(bool) {
    var obj = {
        show: true,
        color: 'red',
        fontSize: 15,
        formatter: '{b}',
    };
    if (bool) {
        // 右边
        obj.align = 'right';
        obj.padding = [0, 10, 100, 0];
        obj.position = 'right';
        // obj.formatter = function(v) {}
    } else {
        // 左边
        obj['align'] = 'left';
        obj['padding'] = [0, 0, 100, 10];
        obj['position'] = 'left';
        // obj['formatter'] = function(v) {}
    }
    return obj
}