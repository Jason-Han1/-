let colorStopsArray = [
    [{
            offset: 0,
            color: 'rgba(86,42,84, 0.65)', //  0%  处的颜色
        },
        {
            offset: 1,
            color: 'rgba(240,72,100, 0.65)', //  100%  处的颜色
        },
    ],
    [{
            offset: 0,
            color: 'rgba(22,36,112, 0.65)', //  0%  处的颜色
        },
        {
            offset: 1,
            color: 'rgba(52,54,199, 0.65)', //  100%  处的颜色
        },
    ],
    [{
            offset: 0,
            color: 'rgba(73,75,65, 0.65)', //  0%  处的颜色
        },
        {
            offset: 1,
            color: 'rgba(250,204,20, 0.65)', //  100%  处的颜色
        },
    ],
    [{
            offset: 0,
            color: 'rgba(5,83,116, 0.65)', //  0%  处的颜色
        },
        {
            offset: 1,
            color: 'rgba(19,194,194, 0.65)', //  100%  处的颜色
        },
    ],
    [{
            offset: 0,
            color: 'rgba(13,49,110, 0.65)', //  0%  处的颜色
        },
        {
            offset: 1,
            color: 'rgba(24,144,255, 0.65)', //  100%  处的颜色
        },
    ],
    [{
            offset: 0,
            color: 'rgba(59,73,110, 0.65)', //  0%  处的颜色
        },
        {
            offset: 1,
            color: 'rgba(217,217,217, 0.65)', //  100%  处的颜色
        },
    ],
];

let pictorialName = ['化学工业','水泥工业','生物制药','污水处理','汽车制造','其他'];
let pictorialData = [123, 60, 25, 18, 12, 9];

option = {
    title: {
        text: '单位(kg)',
        x: '2%',
        y: '2%',
        textStyle: {
            color: '#1890FF',
            fontSize: 14,
            fontWeight: 400,
        },
    },
    backgroundColor: '#2c3e50',
    grid: {
        left: '5%',
        top: '8%',
        bottom: '10%',
        right: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        // formatter: '{a} :<br/>{b}，共 {c} 人',
        /*formatter: function(params) {
              return params[0].name + ': ' + params[0].value;
          }*/
    },
    xAxis: {
        data: pictorialName,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(45, 140, 240, 0.65)',
                width: 1, //这里是为了突出显示加上的
            },
        },
        axisLabel: {
            show: true,
            interval: 0, //代表显示所有x轴标签显示
            rotate: 0, //代表逆时针旋转45度
            margin: 8,
            textStyle: {
                color: '#1890FF',
                fontSize: 14,
                fontWeight: 400,
            },
        },
    },
    yAxis: [{
        splitNumber: 2,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(24,144,255, 0.15)',
                width: 1, //这里是为了突出显示加上的
            },
        },
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#1890FF',
                fontWeight: 400,
                fontSize: 14,
            },
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: 'rgba(255,255,255,.5)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(24,144,255, 0.15)',
                width: 1,
                type: 'solid',
            },
        },
    }, ],
    series: [{
        name: '行业排量分析',
        type: 'pictorialBar',
        barCategoryGap: '-50%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: false,
            position: 'top',
            distance: 15,
            color: '#1890FF',
            fontWeight: 'bolder',
            fontSize: 14,
        },
        itemStyle: {
            normal: {
                color: function(data) {
                    var obj = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            colorStopsArray[data.dataIndex][0],
                            colorStopsArray[data.dataIndex][1],
                        ],
                        global: false, //  缺省为  false
                    }

                    return obj
                },
            },
            emphasis: {
                opacity: 1,
            },
        },
        data: pictorialData,
        z: 10,
    }, ],
};

