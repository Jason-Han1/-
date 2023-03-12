option = {
    title : {
        text: '各学院新生男女人数对比',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['女生','男生']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['传媒','体育','信息','化','历史','外语','政法','教科','数','文','旅地','物理','环境','生科','管理','经济','美术','计算机','音乐']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'女',
            type:'bar',
            data:[394, 33, 95, 128,96, 298,145, 346, 151, 176,172, 108,114,127,257,183,258,153,90],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'男',
            type:'bar',
            data:[122, 171, 80, 28, 18, 37, 31, 35, 29, 24, 38, 48,49,18,52,51,117,103,30],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};