var datas = [0.2, 0.3, 0.25, 0.25, 0.25, 0.25, 0.3, 0.2]

var calPrefixSum = index => {
    let sum = 0;
    for (let i = 0; i < index; i++) {
        sum += datas[i]
    }
    return sum;
}

function renderItem(params, api) {
    console.log({
        params,
        api
    });

    const coord = api.coord([0, 1 - calPrefixSum(params.dataIndexInside)]);
    const size = api.size([1, api.value(0)]);

    console.log({
        size,
        coord
    })
    // 截取矩形
    var rectShape = echarts.graphic.clipRectByRect({
        x: coord[0],
        y: coord[1],
        width: size[0],
        height: size[1]
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: {
            fill: '#fff'
        },
        styleEmphasis: {
            fill: '#eee'
        }
    };
}


const option = {
    tooltip: {

    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    dataZoom: [{
        type: 'slider',
        yAxisIndex: 0,
        left: 75,
        showDataShadow: false,
        showDetail: false,
        filterMode: 'empty',
        width: 10,
        // handleSize: '80%',
        backgroundColor:'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        fillerColor: 'rgba(0, 0, 255, 0.1)',
        // handleColor: 'rgba(0, 0, 0, 0)',
        dataBackgroundColor: 'rgba(0, 0, 0, 0)',
       
        
        
    }],
    grid: {
        borderWidth: 1,
        show: true,
        borderColor: '#BFBFBF',
        backgroundColor: '#fff',
        left: 80,
        zlevel: 0,
    },
    xAxis: [{
        type: 'value',
        max: 1,
        zlevel: 1,
        splitNumber: 1,
        axisLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#BFBFBF',
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        min: -1,
        max: 1,
        zlevel: 1,
        minInterval: 0.05,
        maxInterval: 0.05,
        splitNumber: 40,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            formatter: (val, idx) => {
                if (val === 1 || val === 0.8 || val === 0.5 || val === 0.25 || val === 0 ||
                    val === -0.25 || val === -0.5 || val === -0.8 || val === -1) {
                    return val
                }
                return '';
            }
        }
    }],
    series: [{
        type: 'custom',
        renderItem: renderItem,
        data: new Array(8).fill(undefined).map((a, idx) => ({
            name: `bar${idx}`,
            value: datas[idx],
        }))
    }]
};

// 创建div
const echartDiv = document.createElement('div');
// 初始化echart实例
const echartIns = echarts.init(echartDiv, 'yunting_multi_color', {
    width: 700,
    height: 500
});
document.body.appendChild(echartDiv);
echartIns.setOption(option);