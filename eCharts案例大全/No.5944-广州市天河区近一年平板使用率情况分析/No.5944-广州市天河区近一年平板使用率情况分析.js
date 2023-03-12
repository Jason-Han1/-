option = {
    title: {
            text: '广州市天河区近一年平板使用率情况分析',
            top:10,
            left:10
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        toolbox: {
            show : true,
            top:10,
            right:10,
            feature : {
                mark : {show: true},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        grid:{
            top:60,
            right:70,
            bottom:30,
            left:60
        },
        legend: {
            top:32,
            left:'center',
            data:['使用频率', '平板派发总量']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1月', '2月','3月', '4月','5月', '6月','7月', '8月','9月', '10月','11月', '12月']
            }
        ],
        yAxis : [
            {
                type: 'value',
                name:"使\n用\n频\n率\n",
                nameLocation:"center",
                nameGap:35,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                 min: 0,
                 max: 100,
                //默认以千分位显示，不想用的可以在这加一段
                axisLabel : {   //调整左侧Y轴刻度， 直接按对应数据显示
                    show:true,
                    showMinLabel:true,
                    showMaxLabel:true,
                    formatter: function (value) {
                        return value;
                    }
                }
            },
            {
                type: 'value',
                name:"平\n板\n派\n发\n总\n量\n︵\n台\n︶",
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                 min: 0,
                 max: 1500,
                //默认以千分位显示，不想用的可以在这加一段
                axisLabel : {   //调整左侧Y轴刻度， 直接按对应数据显示
                    show:true,
                    showMinLabel:true,
                    showMaxLabel:true,
                    formatter: function (value) {
                        return value;
                    }
                }
            }
        ],
        "dataZoom": [{
         "show": true,
         "height": 12,
         "xAxisIndex": [
             0
         ],
         bottom: '0%',
         "start": 10,
         "end": 90,
         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
         handleSize: '110%',
         handleStyle: {
             color: "#d3dee5",

         },
         textStyle: {
             color: "#fff"
         },
         borderColor: "#90979c"
     }, {
         "type": "inside",
         "show": true,
         "height": 15,
         "start": 1,
         "end": 35
     }],
        series : [
            {
                name:'使用频率',
                type:'bar',
                yAxisIndex: 0,
                data:[12,25,27,34,41,45,50,52,58,63,72,86],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },
            {
                name:'平板派发总量',
                type:'bar',
                yAxisIndex: 1,
                data:[500,680,750,820,930,981,1020,1030,1072,1145,1351,1421],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            }
        ]
};