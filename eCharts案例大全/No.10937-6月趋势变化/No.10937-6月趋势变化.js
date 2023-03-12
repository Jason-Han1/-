option = {
    title : {
        text: 'Error 变化趋势',
        subtext: '2019.06.01-2019.06.30'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Error']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
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
            boundaryGap : false,
            data : ['2019-06-01','2019-06-02','2019-06-03','2019-06-04','2019-06-05','2019-06-06','2019-06-07', '2019-06-08', '2019-06-09', '2019-06-10', '2019-06-11', '2019-06-12', '2019-06-13', '2019-06-14', '2019-06-15', '2019-06-16', '2019-06-17', '2019-06-18', '2019-06-19', '2019-06-20', '2019-06-21', '2019-06-22', '2019-06-23', '2019-06-24', '2019-06-25', '2019-06-26', '2019-06-27', '2019-06-28', '2019-06-28', '2019-06-29', '2019-06-30']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    series : [
        {
            name:'Error',
            type:'line',
            data:[13147, 11239, 11825, 16661, 12624, 10067, 11524, 11263, 12312, 14441, 11207, 9409, 16529, 11088, 15434, 11221, 10878, 10216, 7883, 5207, 5214, 6013, 4772, 7764, 14458, 13802, 11813, 23633, 22668, 8104],
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
                    