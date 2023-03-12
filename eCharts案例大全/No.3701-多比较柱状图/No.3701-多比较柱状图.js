option = {
    calculable: true,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    //toolbox: {
    //    feature: {
    //        dataView: {show: true, readOnly: false},
    //        magicType: {show: true, type: ['line', 'bar']},
    //        restore: {show: true},
    //        saveAsImage: {show: true}
    //    }
    //},
    legend: {
        show: true,
        data: ['岗位标杆','服务中心工作','公益服务','团结员工','其他'],
        textStyle: {
            fontSize: 26
        }
        
    },
    xAxis: [
        {
            type: 'category',
            data: ['7日', '8日', '9日', '10日', '11日', '12日', '13日'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                fontSize: 20
            }
            
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 150,
            interval: 50,
            axisLabel: {
                formatter: '{value}',
                fontSize: 20
            }
        },
        {
            type: 'value',
            min: 0,
            max: 150,
            interval: 50,
            axisLabel: {
                formatter: '{value}',
                fontSize: 20
            }
        }
    ],
    series: [
        {
            name: '公益服务',
            type: 'bar',
            data: [110, 90, 70, 95, 90, 90, 135, 70],
            //markPoint: {
            //    data: [
            //        {type: 'max', name: '最大值'},
            //        {type: 'min', name: '最小值'}
            //    ]
            //},
            //markLine: {
            //    data: [
            //        {type: 'average', name: '平均值'}
            //    ]
            //}
        },
        {
            name: '服务中心工作',
            type: 'bar',
            data: [100, 80, 65, 80,  135,75,89],
            //markPoint: {
            //    data: [
            //        {type: 'max', name: '最大值'},
            //        {type: 'min', name: '最小值'}
            //    ]
            //},
           //markLine: {
           //    data: [
           //        {type: 'average', name: '平均值'}
           //    ]
           //}
        },
        {
            name: '团结员工',
            type: 'bar',
            data: [120, 70, 85, 90, 100, 75,85],
            //markPoint: {
            //    data: [
            //        {type: 'max', name: '最大值'},
            //        {type: 'min', name: '最小值'}
            //    ]
            //},
           //markLine: {
           //    data: [
           //        {type: 'average', name: '平均值'}
           //    ]
           //}
        },
        {
            name: '岗位标杆',
            type: 'bar',
            data: [120, 70, 85, 90, 100, 75,85],
            //markPoint: {
            //    data: [
            //        {type: 'max', name: '最大值'},
            //        {type: 'min', name: '最小值'}
            //    ]
            //},
           //markLine: {
           //    data: [
           //        {type: 'average', name: '平均值'}
           //    ]
           //}
        },
        {
            name: '其他',
            type: 'bar',
            data: [120, 70, 85, 90, 100, 75,85],
            //markPoint: {
            //    data: [
            //        {type: 'max', name: '最大值'},
            //        {type: 'min', name: '最小值'}
            //    ]
            //},
           //markLine: {
           //    data: [
           //        {type: 'average', name: '平均值'}
           //    ]
           //}
        }
    ]
};