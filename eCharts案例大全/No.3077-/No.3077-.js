



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

                color: '#ffb540',

                // color: 'red'

            },

            {

                offset: 0.5,

                color: '#ffb540',

                // color: 'red'

            },

            {

                offset: 0.5,

                color: '#f09c16',

                // color: 'yellow'

            },

            {

                offset: 1,

                color: '#f09c16',

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

                color: '#f16e40',

            },

            {

                offset: 0.5,

                color: '#f16e40',

            },

            {

                offset: 0.5,

                color: '#df5828',

            },

            {

                offset: 1,

                color: '#df5828',

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

                color: '#ea345b',

            },

            {

                offset: 0.5,

                color: '#ea345b',

            },

            {

                offset: 0.5,

                color: '#db1b45',

            },

            {

                offset: 1,

                color: '#db1b45',

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

                color: '#aa68ec',

            },

            {

                offset: 0.5,

                color: '#aa68ec',

            },

            {

                offset: 0.5,

                color: '#9957de',

            },

            {

                offset: 1,

                color: '#9957de',

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

colors2 = ['#ffb540', '#f16e40', '#ea345b', '#aa68ec'];

var collegename = ['体育教研部', '马克思主义学院', '文化基础教研部', '金融学院', '会计学院'];

var student = [98.1, 98.3, 98, 96, 95];

var supervision = [98.3, 98.5, 98.4, 98.2, 98.1];

var department = [99, 98.7, 99, 99.1, 98.9];

var total = [99.8, 99.5, 99.4, 99.2, 99.1];



option = {

    tooltip: {

        trigger: 'axis',

        triggerOn: "mousemove",

          show: true,

          axisPointer: {

            type: "line",

          },

          // formatter: "{b}月份：{c}%",
          formatter(params) {

             console.log(params);

            for (let x in params) {

              return (

                params[x].name +

                "<br/>" +

                params[x].data.value +

                "%" +

                "<br/>" +

                "总数：" +

                params[x].data.data

              );

            }

          },

    },

    legend: {

        left: '5%',



        top: '0%',



        textStyle: {

            color: '#90979c',

        },

        padding:5,

        itemGap: 20,

        itemHeight: 15,

        itemWidth: 15,



        icon: 'circle',



        data: [

            {

                name: '学生均值',

                type: 'scroll',

                icon: 'roundRect',

                itemStyle: {

                    color: colors2[0],

                },

            },

            {

                name: '学生',

                type: 'scroll',

                icon: 'roundRect',

                itemStyle: {

                    color: colors2[0],

                },

            },



            {

                name: '督导',

                type: 'scroll',

                icon: 'roundRect',

                itemStyle: {

                    color: colors2[1],

                },

            },

            {

                name: '部门',

                type: 'scroll',

                icon: 'roundRect',

                itemStyle: {

                    color: colors2[2],

                },

            },

            {

                name: '总分',

                type: 'scroll',

                icon: 'roundRect',

                itemStyle: {

                    color: colors2[3],

                },

            },

        ],

    },

    toolbox: {

        show: true,

        feature: {

            // dataView: { show: true, readOnly: false },

            magicType: { show: true, type: ['bar', 'line'] },

            // restore: { show: true },

            // saveAsImage: { show: true },

        },

    },

    calculable: true,

    xAxis: [

        {

            type: 'category',

            data: collegename,

        },

    ],

    yAxis: [

        {

            // 纵轴标尺固定

            type: 'value',

            scale: true,

            max: 100,

            min: 92,

            splitNumber: 5,

            boundaryGap: [0.2, 0.2],

            	axisLabel: {

						color: '#E1C7A2' //坐标轴字颜色

					},

        },

    ],

          "dataZoom": [{

          "show": true,

          "height": 18,

          "xAxisIndex": [

            0

          ],

          bottom:'1%',

          "start": 10,

          "end": 15,

          zoomLock:true,

          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',

          handleSize: '100%',

          handleStyle:{

            color:"#d3dee5",



          },

          textStyle:false,

          borderColor:"#90979c"

        }, {

          "type": "inside",

          "show": true,

          "height": 15,

          "start": 1,

          "end": 35

        }],

        

        

    series: [

        {

            name: '学生',

            type: 'bar',

            barWidth : 25,//柱图宽度

            data: student,

            itemStyle: {

                normal: {

                    // color: function (params) {

                    //     return colors[params.dataIndex % 7];

                    // },

                    color: colors[0],

                },

            },

            markLine: {

                symbol: ['none', 'none'],

                lineStyle: {

                    color: colors2[0],

                },

                data: [{ type: 'average', name: '学生均值' }],

            },

        },

        {

            name: '督导',

            type: 'bar',

            barWidth : 25,//柱图宽度

            data: supervision,

            itemStyle: {

                normal: {

                    color: colors[1],

                },

            },

            markLine: {

                symbol: ['none', 'none'],

                lineStyle: {

                    color: colors2[1],

                },

                data: [{ type: 'average', name: '监督均值' }],

            },

        },

        {

            name: '部门',

            type: 'bar',

            barWidth : 25,//柱图宽度

            data: department,

            itemStyle: {

                normal: {

                    color: colors[2],

                },

            },

            markLine: {

                symbol: ['none', 'none'],

                lineStyle: {

                    color: colors2[2],

                },

                data: [{ type: 'average', name: '监督均值' }],

            },

        },

        {

            name: '总分',

            type: 'bar',

            barWidth : 25,//柱图宽度

            data: total,

            itemStyle: {

                normal: {

                    color: colors[3],

                },

            },

            markLine: {

                symbol: ['none', 'none'],

                lineStyle: {

                    color: colors2[3],

                },

                data: [{ type: 'average', name: '监督均值' }],

            },

        },

    ],

};

