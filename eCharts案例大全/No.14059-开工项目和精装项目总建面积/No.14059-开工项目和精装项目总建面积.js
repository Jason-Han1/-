option = {
    title : {
        text: '开工项目和精装项目总建面积',
        subtext: '优采大数据'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['开工项目','精装项目']
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
            data : ['北京','成都','东莞','杭州','合肥','昆明','南宁','青岛','沈阳','天津','武汉','西安','郑州','重庆']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'开工项目',
            type:'bar',
            data:[480610.7, 3283511.83, 3895446.84, 2126720.78, 1094246.16, 1508865.44, 2426009.44, 3368458.6, 1190701.41, 1646738.49, 3456362.458, 3677962.65, 16576521.62, 7522785],
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
            name:'精装项目',
            type:'bar',
            data:[178074.7, 647478, 3181404.35,  1148054.98,0, 228497.85, 1884041.45, 446880.6, 893566.04, 0, 193500, 670000, 1464342.17, 0],
            markPoint : {
                data : [
                    {name : '年最高', value : 3895446.84, xAxis: 2, yAxis: 3300000},
                    {name : '年最低', value : 0, xAxis: 13, yAxis: 200000}
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