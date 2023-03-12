var colorSerier=['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1',
        '#7DA6FF', '#4AC312', '#FB8F14', '#F148E7'];

var data = [{
    name: '苹果',
    data: [1, 2, 0, 2, 2]
}, {
    name: '肉肉',
    data: [3, 1, 3, 0, 1]
}];
var data_y = ['01-01', '01-02', '01-03', '01-04', '01-05'];

for (var i = 0; i < data.length; i++) {
    data[i]['type'] = 'line';
    data[i]['stack'] = i.toString();
    if (data[i].data.length != 1) {
        data[i]['symbol'] = 'none';
    }
    //data[i]['stack']='总量';
}

option = {

    tooltip: {
        trigger: 'axis',
        // formatter: '{b0}<br />{a0}：{c0}个<br />{a1}：{c1}个<br />{a2}：{c2}个'
    },
    legend: {
        icon: 'rect',
        itemWidth: 15, // 设置宽度
        itemHeight: 4, // 设置高度
        itemGap: 24, // 设置间距
        type: 'scroll', //超出支持切换
        y: 'bottom',
        selectedMode: false,
        bottom: 40,
        data: data,
        textStyle: {
            color: '#666',
        }
    },
    color: colorSerier,
    grid: {
        top: '30px',
        bottom: '108px',
        left: '80px',
        right: '60px'
    },
    lineStyle: {
        width: 4,
    },
    areaStyle: {

    },
    dataZoom: [
        {
            show: data.length > 7,
            realtime: true,
            start: 0,
            endValue: null,
            bottom: 35,
            height: 12,
            backgroundColor: '#F0F0F0',
            dataBackground: {
                lineStyle: {
                    color: '#fff'
                },
                areaStyle: {
                    color: '#F0F0F0'
                }
            },
            fillerColor: '#D3D3D3',
            borderColor: '#F0F0F0',
            handleStyle: {
                opacity: 0
            }

        },
        {
            type: 'inside',
            realtime: true
        }
    ],
    xAxis: {
        boundaryGap: false,
        type: 'category',
        //刻度线
        axisTick: false,
        axisLine: {
            lineStyle: {
                color: '#BFBFBF'
            }
        },
        axisLabel: {
            color: '#333',
            margin: 16
        },
        data: data_y
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E9E9E9',
                type: 'dashed'
            }
        },
        //刻度线
        axisTick: false,
        axisLine: {
            // symbol:['none','arrow'],//箭头
            lineStyle: {
                color: '#fafafa'
            }
        },
        axisLabel: {
            color: '#333',
            margin: 8
        },
        min: 0,
        splitNumber: 4,
        minInterval: 1
    },

    series: data
};