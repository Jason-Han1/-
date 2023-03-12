colors = [
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FF3FDA',
                // color: 'red'
            },
            {
                offset: 0.5,
                color: '#FF3FDA',
                // color: 'red'
            },
            {
                offset: 0.5,
                color: '#CC1BAA',
                // color: 'yellow'
            },
            {
                offset: 1,
                color: '#CC1BAA',
                // color: 'yellow'
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#602CFF',
            },
            {
                offset: 0.5,
                color: '#602CFF',
            },
            {
                offset: 0.5,
                color: '#4915E6',
            },
            {
                offset: 1,
                color: '#4915E6',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#00FFFF',
            },
            {
                offset: 0.5,
                color: '#00FFFF',
            },
            {
                offset: 0.5,
                color: '#11A6D0',
            },
            {
                offset: 1,
                color: '#11A6D0',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#89FF5E',
            },
            {
                offset: 0.5,
                color: '#89FF5E',
            },
            {
                offset: 0.5,
                color: '#48DD12',
            },
            {
                offset: 1,
                color: '#48DD12',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FFD05C',
            },
            {
                offset: 0.5,
                color: '#FFD05C',
            },
            {
                offset: 0.5,
                color: '#DEA821',
            },
            {
                offset: 1,
                color: '#DEA821',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FF7853',
            },
            {
                offset: 0.5,
                color: '#FF7853',
            },
            {
                offset: 0.5,
                color: '#DB3E13',
            },
            {
                offset: 1,
                color: '#DB3E13',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#AA48FF',
            },
            {
                offset: 0.5,
                color: '#AA48FF',
            },
            {
                offset: 0.5,
                color: '#8E15F8',
            },
            {
                offset: 1,
                color: '#8E15F8',
            },
        ],
    },
];

option = {
    // title: {
    //     text: '评价详情',
    //     subtext: '纯属虚构'
    // },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['学生', '督导', '部门', '总分'],
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['体育教研部', '马克思主义学院', '文化基础教研部', '金融学院', '会计学院'],
        },
    ],
    yAxis: [
        {
            // 纵轴标尺固定
            type: 'value',
            scale: true,
            max: 100,
            min: 0,
            splitNumber: 5,
            boundaryGap: [0.2, 0.2],
        },
    ],
    // yAxis:[
    //     {
    //     type:'value', //表示数据轴
    //     min:0, // 最小值
    //     max:100, // 最大值
    //     splitNumber:5, //分隔线条数
    //     // position:'top', // x轴位置在上方
    //     minInterval:2, // 数据轴递增区间
    //     splitLine:{
    //         show:false // 分隔线不显示
    //     },
    //     axisLabel:{
    //         color:'#939395', // X轴刻度信息文字颜色
    //         fontSize:12, // X轴刻度信息文字大小
    //         formatter:function(value,index){  // 格式化X轴刻度信息为需要显示的
    //             if(index===0){
    //                 value='0';
    //             }else if(index==1){
    //                 value='92';
    //             }else if(index==2){
    //                 value='94';
    //             }else if(index==3){
    //                 value='96';
    //             }else if(index==4){
    //                 value='98';
    //             }else if(index==5){
    //                 value='100';
    //             }
    //             return value;
    //         }
    //     },
    //     axisLine:{
    //         lineStyle:{
    //                 color:'#939395' // 设置X轴颜色
    //             }
    //         },
    //     axisTick:{
    //             length:0 // X轴刻度没有小竖线
    //         }
    //     },
    // ],
    series: [
        {
            name: '学生',
            type: 'bar',
            data: [98.1, 98.3, 98, 96, 95],
            // markPoint: {
            //     data: [
            //         {type: 'max', name: '最大值'},
            //         {type: 'min', name: '最小值'}
            //     ]
            // },
            itemStyle: {
                normal: {
                    // color: function (params) {
                    //     return colors[params.dataIndex % 7];
                    // },
                    color: colors[0],
                },
            },
            markLine: {
                data: [{ type: 'average', name: '学生均值' }],
            },
        },
        {
            name: '督导',
            type: 'bar',
            data: [98.3, 98.5, 98.4, 98.2, 98.1],
            // markPoint: {
            //     data: [
            //         {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
            //         {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
            //     ]
            // },
            itemStyle: {
                normal: {
                    color: colors[1],
                },
            },
            markLine: {
                data: [{ type: 'average', name: '监督均值' }],
            },
        },
        {
            name: '部门',
            type: 'bar',
            data: [99, 98.7, 99, 99.1, 98.9],
            // markPoint: {
            //     data: [
            //         {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
            //         {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
            //     ]
            // },
            itemStyle: {
                normal: {
                    color: colors[2],
                },
            },
            markLine: {
                data: [{ type: 'average', name: '监督均值' }],
            },
        },
        {
            name: '总分',
            type: 'bar',
            data: [99.8, 99.5, 99.4, 99.2, 99.1],
            // markPoint: {
            //     data: [
            //         {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
            //         {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
            //     ]
            // },
                        itemStyle: {
                normal: {
                    color: colors[3],
                },
            },
            markLine: {
                data: [{ type: 'average', name: '监督均值' }],
            },
        },
    ],
};
