option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['13年发病数','13年死亡数','14年发病数','14年死亡数','15年发病数','15年死亡数']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'13年发病数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2407, 1838, 4295, 3806, 3913, 4122, 4085,3878,4037,3284,4422,4404]
        },
        {
            name:'13年死亡数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[703, 566, 989, 923, 1098, 966, 991,1102,1084,915,1055,1336]
        },
        {
            name:'14年发病数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2245, 2289, 4221, 3369, 3823,4432,4354,3997,4611,3999,4464,5411]
        },
        {
            name:'14年死亡数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[739, 814, 1011, 883, 1035, 1004, 979,943,1136,1148,1215,1410]
        },
         {
            name:'15年发病数',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[2597, 2294, 4238, 4299,4401,5089,4701,4268,4967,3955,5040,5707]
        },
        {
            name:'15年死亡数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[886, 624, 1166, 921, 1117, 1190,989,1085,1172,1006,1352,1500]
        }
    ]
};
