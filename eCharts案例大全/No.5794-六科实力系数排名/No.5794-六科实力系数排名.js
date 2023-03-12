option = {
    title: {
            text: '六科实力系数排名',
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
            data:['实力系数','近5次考试总排名']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['物理','历史','生物','化学','政治','地理']
            }
        ],
        yAxis : [
            {
                type: 'value',
                name:"实\n力\n系\n数",
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
                name:"排\n名",
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                 min: 0,
                 max: 150,
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
                name:'实力系数',
                type:'bar',
                yAxisIndex: 0,
                data:[89,73,79,68,92,78],
                // itemStyle : { normal: {label : {show: true}}},
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // }
            },{
                name:'近5次考试总排名',
                type:'bar',
                yAxisIndex: 1,
                data:[68,123,56,87,90,56],
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