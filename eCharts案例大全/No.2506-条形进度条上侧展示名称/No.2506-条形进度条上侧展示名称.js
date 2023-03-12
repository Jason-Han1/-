
var data = [80,75,78];
var colorList = []
colorList[0] = new echarts.graphic.LinearGradient(
        0, 0, 1, 0,
        [
            {offset: 0, color: '#0275f2'},
            {offset: 1, color: '#24dcfe'}
        ]
    )
    colorList[1] = new echarts.graphic.LinearGradient(
        0, 0, 1, 0,
        [
            {offset: 0, color: '#7b6d00'},
            {offset: 1, color: '#f5cf00'}
        ]
    )
    colorList[2] = new echarts.graphic.LinearGradient(
        0, 0, 1, 0,
        [
            {offset: 0, color: '#008491'},
            {offset: 1, color: '#00dabf'}
        ]
    )
option = {
    backgroundColor:'#100c29',
    grid: {
        top:'4%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        offset: 10,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            inside:true,
            // verticalAlign: 'top'
        },
        data: ['标题一', '标题二', '标题三']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            // type: 'pictorialBar',
            barWidth: '30px',
            // symbol: 'rect',
            // symbolRepeat: 'fixed',
            // symbolMargin: '40%',
            // symbolClip: true,
            // symbolOffset: [5, 0],
            // stack: '12',
            // symbolSize: [4, 15],
            // symbolBoundingData: 100,
            itemStyle: {
                normal: {
                    color: function(params) {
                        console.log(params);
                        // build a color map as your need.
                        // var colorList = [
                        //   '#25defd','#ebc701','#00ddc2'
                        // ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                show: true,
                position: 'right',
                // distance: 20,
                offset:[0,28],
                fontSize: 14,
                color: '#fff',
                formatter: '{c}%'
            },
            z:9999,
            data: data
        },
        {
            name: '2011年',
            type: 'bar',
            // type: 'pictorialBar',
            barWidth: '30px',
            // symbolOffset: [5, 0],
            // animationDuration: 0,
            // symbolRepeat: 'fixed',
            // symbolMargin: '40%',
            // symbol: 'rect',
            // symbolSize: [4, 15],
            // symbolBoundingData: 100,
            barGap: '-100%', 
            z: 99,
            itemStyle: {
                normal: {
                    color: '#30373f'
                }
            },
            label: {
                show: true,
                position: 'insideBottomLeft',
                // distance: 20,
                offset:[-6,-30],
                fontSize: 18,
                color: '#caced1',
                formatter: '{b}'
            },
            data: [100,100,100]
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#100c29',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [4, 30],
            symbolPosition: 'start',
            symbolOffset: [-4, 0],
            // symbolBoundingData: this.total,
            data: [100, 100, 100],
            width: 25,
            z: 0,
            zlevel: 1,
        },
    ]
};