var timeData = ['2016年', '2017年', '2018年', '2020年', '1996年', '1995年', '1994年'];
//var content = [{name:'1',x:0,y:0},{name:'2',x:2,y:1},{name:'3',x:0,y:1},{name:'4',x:3,y:1},{name:'5',x:4,y:1},{name:'6',x:5,y:1},{name:'7',x:0,y:0}];
var links = [{
    source: 'a',
    target: 'b',
    value: 'rel',
    name: 'rel'
}];
option = {
    title: {
        text: '我的第一个echarts'
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        // axisLabel: {
        //         //formatter: '{value} kg',
        //         // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
        //         formatter: function (value, index) {
        //             // 格式化成月/日，只在第一个刻度显示年份
        //             var date = new Date(value);
        //             var texts = [(date.getMonth() + 1), date.getDate()];
        //             if (index === 0) {
        //                 texts.unshift(date.getYear());
        //             }
        //             return texts.join('/');
        //         }

        // }
        //boundaryGap: false,
        data: timeData,
        name: '年份'
    },
    yAxis: {
       // show: false,
        /* type: 'category',
         data: ['第一阶段', '第二阶段', '第三阶段']*/
        // min: 0,
        splitNumber: 3,
        max: 300,
        axisTick: {
            lineStyle: {
                width:2
            }
        },
        // axisLabel: {
        //     formatter: function(value) {
        //         var texts = [];
        //         if(value == 0 ) {
        //             texts.push("");
        //         }
        //         else if (value == 100) {
        //             texts.push('第一阶段');
        //         } else if (value == 200) {
        //             texts.push('第二阶段');
        //         } else if (value == 300) {
        //             texts.push('第三阶段');
        //         }
        //         return texts;

        //     }
        // }
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 40,
        label: {
            normal: {
                show: true
            }
        },
        edgeLabel: {
            normal: {
                show: true,
                formatter: '{@value}'
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: [{
            name: 'a',
            value: [5, 300],
        }, {
            name: 'b',
            value: [1, 20],
        },{
            name: 'c',
            value: [1, 30],
        },{
            name: 'd',
            value: [1, 40],
        },{
            name: 'e',
            value: [1, 50],
        }],
        links: links,
        lineStyle: {
            normal: {
                color: '#2f4554',
                show:true
            }
        }

    }]
};