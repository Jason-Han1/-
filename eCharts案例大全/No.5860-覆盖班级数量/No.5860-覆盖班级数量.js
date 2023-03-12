option = {
    title: {
            text: '覆盖班级数量',
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
            data:['班级数','使用率']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['高一', '高二','高三']
            }
        ],
        yAxis : [
            {
                type: 'value',
                name:"班\n级\n数",
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
                name:"使\n用\n率\n",
                nameLocation:"center",
                nameGap:50,
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
            }
        ],
       
        series : [
            {
                name:'班级数',
                type:'bar',
                yAxisIndex: 0,
                data:[28,25,36,21,30],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },
             {
                name:'使用率',
                type:'bar',
                yAxisIndex: 1,
                data:[89,92,87],
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