option = {
    title: {
            text: '各班级某次考试成绩情况分析',
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
            data:['高分率','低分率','及格率', '总人数']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['一班', '二班','三班', '四班','五班']
            }
        ],
        yAxis : [
            {
                type: 'value',
                name:"得\n分\n率\n",
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
                name:"总\n人\n数\n︵\n人\n︶",
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                 min: 0,
                 max: 500,
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
       
        series : [
            {
                name:'高分率',
                type:'bar',
                yAxisIndex: 0,
                data:[78,65,56,81,82],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },
             {
                name:'低分率',
                type:'bar',
                yAxisIndex: 0,
                data:[12,25,27,34,21],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },
             {
                name:'及格率',
                type:'bar',
                yAxisIndex: 0,
                data:[76,82,84,91,75],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },
            {
                name:'总人数',
                type:'bar',
                yAxisIndex: 1,
                data:[460,480,450,320,430],
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