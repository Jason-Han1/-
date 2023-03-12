option = {
    
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            magicType : {show: true, type: ['line', 'bar']},
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['北美洲','亚洲','欧洲','非洲','大洋洲','南美洲']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'变化率 (%)',
            nameTextStyle: {
                //color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#c050',
                }
            },
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[5.38, 6.41, 1.8, 12.3, 5.06, 4.12],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            }
        },
    ]
};   