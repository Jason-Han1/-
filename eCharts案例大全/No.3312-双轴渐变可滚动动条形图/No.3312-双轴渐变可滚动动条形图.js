// salvProName =["安徽省","河南省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"];
// salvProValue =[239,181,154,144,135,117,74,72,67,55];
colors = [{
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#C85E62'
        }, {
            offset: 0.5,
            color: '#884150'
        },{
            offset: 0,
            color: '#6E3648'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#BD9576'
        }, {
            offset: 0.5,
            color: '#916C5B'
        }, {
            offset: 0,
            color: '#7A554D'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#0BE1A4'
        },{
            offset: 0.5,
            color: '#0BBAB9'
        },{
            offset: 0,
            color: '#0BA4C3'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#0CCDEE'
        }, {
            offset: 0.5,
            color: '#0C89D2'
        },{
            offset: 0,
            color: '#0C67C2'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#0CCDEE'
        }, {
            offset: 0.5,
            color: '#0C89D1'
        },{
            offset: 0,
            color: '#0C68C3'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#0CCDEE'
        }, {
            offset: 0.5,
            color: '#0C8AD2'
        },{
            offset: 0,
            color: '#0C67C3'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: '#0CB6D8'
        }, {
            offset: 0.5,
            color: '#0C87D0'
        },{
            offset: 0,
            color: '#0C67C3'
        }]
    },
    
];
option = {
    dataset: {
        source:[
            {name:"安徽省",value: 239,code:'1' },
            {name:"河南省",value: 181,code:'2' },
            {name:"浙江省",value: 154,code:'3' },
            {name:"湖北省",value: 144,code:'4' },
            {name:"贵州省",value: 135,code:'5' },
            {name:"江西省",value: 117,code:'6' },
            {name:"江苏省",value: 74,code:'7' },
            {name:"四川省",value: 72,code:'8' },
            {name:"云南省",value: 67,code:'9' },
            {name:"湖南省",value: 55,code:'10' },
        ]
    },
    title:{
        text:"变态设计"
    },
    backgroundColor: '#041730',
    color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    tooltip: {
         trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
        }
    },
    // 区域缩放--滚轮
    dataZoom: [
      {
        // maxSpan: 0,
        // minSpan: 0,
        show: true,
        type: 'slider', // 滑动条型数据区域缩放组件
        yAxisIndex: [0,1],
        zoomLock: true,
        width: 10,
        right: 10,
        top: 70,
        bottom: 20,
        start: 0,
        end: 70,
        handleSize: 0,
        showDetail: false,
        borderColor: 'rgba(255,255,255,0)',
        backgroundColor : 'rgba(255,255,255,0)',
        fillerColor: 'rgba(255,255,255,0)',
        showDataShadow: false
      },
      {
        type: 'inside', // 内置型数据区域缩放组件
        yAxisIndex: [0,1],
        start: 0,
        end: 100,
        zoomOnMouseWheel: false,
        moveOnMouseMove: false,
        moveOnMouseWheel: true
      }
    ],
    xAxis: {
        show: false
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        //坐标轴
        axisLine: {
            show: false,
        },
        //坐标值标注
        axisLabel: {
          show: true,
          textStyle: { 
            color: '#70A9D4',
            fontSize: 14
          },
          verticalAlign: 'bottom',
          lineHeight: 20
        },
        // 坐标刻度
        axisTick: {
          show: false
        },
        // data:salvProName,
      },{
        // data: salvProValue,
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            verticalAlign: 'top',
            lineHeight: -14,
            textStyle: {
                color: '#1ACCFF',
                fontSize: '14'
            },
            formatter: function(value) {
                if (value >= 10000) {
                    return (value / 10000).toLocaleString() + '万';
                } else {
                    return value.toLocaleString();
                }
            },
        },
    }],
    series: [
        {
             encode: {
                x: 'value',      // 表示维度 3、1、5 映射到 x 轴。
                y: 'name',              // 表示维度 2 映射到 y 轴。
                // tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。
            },
            // barCategoryGap: '1%' ,
            name: '2011年',
            type: 'bar',
            barWidth: 20,
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 2,
                color: function(params) {
                    return colors[params.dataIndex % 7];
                }
              }
            },
            barGap: 0,
            // data: salvProValue
        },
        {
            encode: {
                x: 'value',      // 表示维度 3、1、5 映射到 x 轴。
                y: 'name',              // 表示维度 2 映射到 y 轴。
                // tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。
            },
            // data: salvProValue,
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap:0,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,0)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};
// myChart.on('click', function (params) {
//     console.log('params:',params);
// });
// myChart.on('click', 'series.line', function (params) {
//     console.log('params:',params);
// });
// console.log(myChart)