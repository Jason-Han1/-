option = {
    title: {
            text: '学生累积出勤率、近一月的出勤率、病假、事假次数、无故缺勤次数',
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
            data:['累积出勤率','近一月的出勤率', '病假','事假次数','无故缺勤次数']
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
                name:"出\n勤\n率\n",
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
                name:"次\n数",
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                 min: 0,
                 max: 50,
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
                name:'累积出勤率',
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
            },{
                name:'近一月的出勤率',
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
            },{
                name:'病假',
                type:'bar',
                yAxisIndex: 1,
                data:[12,25,27,34,41,45,35,46,48,33,34,26],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最y小值'}
                //     ]
                // }
            },
            {
                name:'事假次数',
                type:'bar',
                yAxisIndex: 1,
                data:[2,12,33,12,22,14,13,16,31,45,33,23],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },
            {
                name:'无故缺勤次数',
                type:'bar',
                yAxisIndex: 1,
                data:[12,23,34,45,43,32,21,13,14,15,16,25],
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