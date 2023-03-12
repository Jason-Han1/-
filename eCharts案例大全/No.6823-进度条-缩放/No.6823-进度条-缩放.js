var getzszy = ['专业1', '专业2', '专业3', '专业4', '专业5', '专业6', '专业7', '专业8', '专业9', '专业10', '专业11']; //数据点名称
var getzswcl = [101, 100, 100, 98.65, 98.30, 97.55, 92.63, 90.55, 89.98, 88.72, 85.72]; //招生完成率
var getzswcl2 = [101, 100, 100, 98.65, 98.30, 97.55, 92.63, 90.55, 89.98, 88.72, 85.72]; //招生完成率
var getzswclzd = []; //招生完成率100%
for (let i = 0; i < getzswcl.length; i++) {
    if (getzswcl[i] > 100) {
        getzswcl[i] = 100
    }
    getzswclzd.push(100)
}

option = {
    grid: {
        left: '170',
        right: '120',
        bottom: '3%',
        top: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return getzszy[params[0].dataIndex] + '<br>招生完成率: ' + getzswcl2[params[0].dataIndex] + '%'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#666666',
                fontSize: '13'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getzszy
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#333333',
                fontSize: '13'
            },
            formatter: '{value}%'
        },
        data: getzswcl2
    }],
    dataZoom: [{
        type: 'slider',
        show: true,
        yAxisIndex: [0, 1],
        right: '20',
        //top: '20',
        width: '20',
        //height: '280',
        startValue: 0,
        endValue: 8,
        zoomLock: true
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#4E7BFE'
                },
            },
            barWidth: 10,
            data: getzswcl
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: getzswclzd,
            itemStyle: {
                normal: {
                    color: 'rgba(103,150,253,0.3)',
                    barBorderRadius: 5,
                }
            },
        },
    ]
};