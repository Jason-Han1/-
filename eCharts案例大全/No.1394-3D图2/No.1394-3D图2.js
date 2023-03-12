const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        console.log(shape)
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.y, xAxisPoint[1]];
        const c1 = [shape.y+7, xAxisPoint[1] + 7];
        const c2 = [xAxisPoint[0], xAxisPoint[1]+  7];
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.y, xAxisPoint[1]];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0], xAxisPoint[1] - 7];
        const c4 = [shape.y+5, xAxisPoint[1] -7];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.y, shape.xAxisPoint[1]];
        const c2 = [shape.y+7 , shape.xAxisPoint[1]-7 ];
        const c4 = [shape.y+7 , shape.xAxisPoint[1] +7];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeLeft2 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.y, xAxisPoint[1]-20];
        const c1 = [shape.y + 7, xAxisPoint[1] - 13];
        const c2 = [xAxisPoint[0] , xAxisPoint[1] - 13];
        const c3 = [xAxisPoint[0] , xAxisPoint[1]-20];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight2 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.y, xAxisPoint[1]-20];
        const c2 = [xAxisPoint[0], xAxisPoint[1]-20];
        const c3 = [xAxisPoint[0], xAxisPoint[1] - 27];
        const c4 = [shape.y + 5, xAxisPoint[1] - 27];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop2 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.y , shape.xAxisPoint[1]-20];
        const c2 = [shape.y + 7, shape.xAxisPoint[1] - 27];
        const c4 = [shape.y + 7, shape.xAxisPoint[1] -13];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
echarts.graphic.registerShape('CubeLeft2', CubeLeft2);
echarts.graphic.registerShape('CubeRight2', CubeRight2);
echarts.graphic.registerShape('CubeTop2', CubeTop2);
let newData = [
  ['被征地农民养老保障金', 30, 33],
        ['城乡低保补助', 45, 25],
        ['部分农村计生奖扶', 55, 65],
        ['渔船油价补贴', 60, 77],
        ['农业支持保护补贴', 65, 45],
        ['高龄老人', 30, 33],
        ['部分城镇计生奖扶', 45, 25],
        ['特困人员补助（补助）', 55, 65],
        ['困难残疾人生活补贴', 60, 77],
        ['城乡困难群众过节补助', 65, 45],
        ['生态林补偿金', 30, 33],
        ['养老保险高龄人员过节费', 45, 25],
        ['灵活就业社保补贴', 55, 65],
     
];

let nameArr = newData.map((it) => it[0]);
let values = newData.map((it) => it[1]);
let values2 = newData.map((it) => it[2]);
let seriesOption = [
    {
        type: 'custom',
        name: '金额(亿元)',
         xAxisIndex: 1,
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)]);
            return {
                type: 'group',
                children: [
                    {
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(1),
                            yValue: api.value(0),
                            x: location[1],
                            y: location[0],
                            xAxisPoint: api.coord([0,api.value(1)]),
                        },
                        style: {
                            fill: 'rgba(41, 93, 173, 1)',
                        },
                        silent: true,
                    },
                    {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(1),
                            yValue: api.value(0),
                            x: location[1],
                            y: location[0],
                            xAxisPoint: api.coord([0,api.value(1)]),
                        },
                        style: {
                            fill: 'rgba(123, 175, 255, 1)',
                        },
                        silent: true,
                    },
                    {
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(1),
                            yValue: api.value(0),
                            x: location[1],
                            y: location[0],
                            xAxisPoint: api.coord([0,api.value(1)]),
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(123, 175, 255, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255, 255, 255, 1)',
                                },
                            ]),
                        },
                        silent: true,
                    },
                ],
            };
        },
        tooltip: {
            show: true,
        },
        data: values,
    },
    {
        type: 'custom',
        name: '人数(万人)',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)]);
            return {
                type: 'group',
                
                children: [
                    {
                        type: 'CubeLeft2',
                        shape: {
                            api,
                            xValue: api.value(1),
                            yValue: api.value(0),
                            x: location[1],
                            y: location[0],
                            xAxisPoint: api.coord([0,api.value(1)]),
                        },
                        style: {
                            fill: '#F4AE3D',
                        },
                        silent: true,
                    },
                    {
                        type: 'CubeRight2',
                        shape: {
                            api,
                            xValue: api.value(1),
                            yValue: api.value(0),
                            x: location[1],
                            y: location[0],
                            xAxisPoint: api.coord([0,api.value(1)]),
                        },
                        style: {
                            fill: '#C48C30',
                        },
                        silent: true,
                    },
                    {
                        type: 'CubeTop2',
                        shape: {
                            api,
                            xValue: api.value(1),
                            yValue: api.value(0),
                            x: location[1],
                            y: location[0],
                            xAxisPoint: api.coord([0,api.value(1)]),
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#FFC261',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255, 255, 255, 1)',
                                },
                            ]),
                        },
                        silent: true,
                    },
                ],
            };
        },
        tooltip: {
            show: true,
        },
        
       
        data: values2,
    },
    {
        type: 'bar',
         name: '人数(万人)',
        
        label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 20,
                color: '#BA7400',
                offset: [5, -8],
            },
        },
        // stack: true,
        itemStyle: {
            color: 'transparent',
        },
        tooltip: {},
        data: values2,
    },
     {
        type: 'bar',
         name: '金额(亿元)',
           xAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 20,
                color: 'rgba(41, 93, 173, 1)',
                offset: [5, -10],
            },
        },
        // stack: true,
        itemStyle: {
            color: '#295DAD',
            opacity:1
        },
        tooltip: {},
        data: values,
    },
];

option = {
    grid: {
        left: 300,
        right: 60,
        bottom: 50,
        top: 90,
    },
    color:['#295DAD','#BA7400'],
    legend: {
        itemWidth: 13,
        itemHeight: 13,
        
        data: [
          
            { name: '人数(万人)', icon: 'roundRect'},
              { name: '金额(亿元)', icon: 'roundRect'},
        ],
    },
    xAxis:[
         {
        name: '万人',
        nameGap: 8,
        nameTextStyle: {
            color: '#666666',
            fontSize: 16,
            padding: [75, 30, 15, 0],
        },
        
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#777777',
            },
        },
        axisLabel: {
            fontSize: 16,
            color: '#666666',
            fontWeight: 600,
            margin: 18,
            interval: 0,
            formatter: function (params) {
                let res = '';
                if (params.length > 5) {
                    res = params.substring(0, 5) + '\n' + params.substring(5);
                } else {
                    res = params;
                }
                return res;
            },
        },
        axisTick: {
            show: false,
        },
        splitLine:{
            show:false
        },
        data: this.value,
    },
    {
        name: '亿元',
        nameGap: 8,
        nameTextStyle: {
            color: '#666666',
            fontSize: 16,
            padding: [75, 30, 15, 0],
        },
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#777777',
            },
        },
       
        axisLabel: {
            fontSize: 16,
            color: '#666666',
            fontWeight: 600,
            margin: 18,
            interval: 0,
            formatter: function (params) {
                let res = '';
                if (params.length > 5) {
                    res = params.substring(0, 5) + '\n' + params.substring(5);
                } else {
                    res = params;
                }
                return res;
            },
        },
        axisTick: {
            show: false,
        },
        splitLine:{
            show:false
        },
        data: this.value2,
    },
        ],
   

    yAxis: [
        {
            name: '',
            type: 'category',
            data:nameArr,
            nameGap: 8,
            nameTextStyle: {
                fontSize: 14,
                padding: [0, 40, 30, 0],
                color: '#666666',
            },
            minInterval: 1,
            
            axisLine: {
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#666666',
                fontSize: 16,
            },
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255, 255, 255, 0.15)',
                },
            },
        },
    ],
    series: seriesOption,
};
