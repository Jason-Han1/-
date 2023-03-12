const list = [
    {
        name: '湿地(00)',
        value: '39.57,',
    },
    {
        name: '耕地(01)',
        value: '883.67,',
    },
    {
        name: '种植园用地(02)',
        value: ' 3608.09',
    },
    {
        name: '林地(03)',
        value: '1126.79',
    },
    {
        name: '草地(04)',
        value: '48145.22',
    },
    {
        name: '商业服务业用地(05)',
        value: '1480.36',
    },
    {
        name: '工矿用地(06)',
        value: '4832.83',
    },
    {
        name: '住宅用地(07)',
        value: '4796.72',
    },
    {
        name: '公共管理与公共服务用地(08)',
        value: '0.15',
    },
    {
        name: '特殊用地(09)',
        value: '437.54',
    },
    {
        name: '交通运输用地(10)',
        value: '642.31',
    },
    {
        name: '水域及水利设施用地(11)',
        value: '97.35',
    },
    {
        name: '其他土地(12)',
        value: '76317.8',
    },
];

const datas = [
    '湿地(00)',
    '耕地(01)',
    '种植园用地(02)',
    '林地(03)',
    '草地(04)',
    '商业服务业用地(05)',
    '工矿用地(06)',
    '住宅用地(07)',
    '公共管理与公共服务用地(08)',
    '特殊用地(09)',
    '交通运输用地(10)',
    '水域及水利设施用地(11)',
    '其他土地(12)',
];
const values = [
    883.67,
    88.2,
    3608.09,
    11265.79,
    48145.22,
    4832.83,
    1480.36,
    4796.72,
    0.15,
    437.54,
    642.31,
    97.35,
    76317.8,
];
option = {
   backgroundColor:'black',
    xAxis: {
        // max: 76317,
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
    },
    grid: {
        containLabel: true,
        left: '3%',
        top: '3%',
        right: '10%',
        bottom: '3%',
    },
    yAxis: [
        {
            data: datas,
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine:{
              show:false  
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#717C8E',
                },
            },
        },
    ],
    series: [
        {
            //内
            type: 'bar',
            barWidth: 20,
            // legendHoverLink: false,
            // symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: 'transparent',
                // borderWidth:2
                borderColor:'transparent',
            },
            data: list,
            z: 1,
            // animationEasing: 'elasticOut',
        },
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [5, 20],
            symbolMargin: 2,
            // symbolBoundingData: 2000,
            itemStyle: {
                normal: {
                    color: 'transparent',
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    textStyle: {
                        color: '#717C8E',
                        fontSize: 14,
                    },
                },
            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut',
        },
        {
            //分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#26C5A2' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#8EE9A9' // 100% 处的颜色
                }], false)
            }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 1,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [3, 20],
            symbolPosition: 'start',
            // symbolOffset: [0, 0],
            // symbolBoundingData: 2000,
            data: list,
            z: 2,
            animationEasing: 'elasticOut',
        },
    ],
};
