app.title = 'Top 10';
option = {
    //color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
    }, 
    toolbox: {
            'show': true,
           // orient: 'vertical',
            //x: 'right',
            //y: 'center',
            'feature': {
                'magicType': {
                    'show': true,
                    'type': ['', 'line']
                },
                'restore': {
                    'show': true
                },
                'saveAsImage': {
                    'show': true
                }
            }
        },
    grid: {
        top: '50',
        left: '3%',
        right: '4%',
        bottom: '50',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['种类1','种类2','种类3','种类4','种类5','种类6','种类7','种类8','种类9','种类10','种类11','种类12','种类13','种类14','种类15','种类16','种类17','种类18'],
        axisTick: {
            alignWithLabel: true,
        },
         axisLabel: {
            margin: 8,
            rotate:-45, 
            textStyle: {
                color:'#666'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
         },
        
    }],
    yAxis: [{
        type: 'value',
         axisLabel: {
            margin: 10,
            textStyle: {
                color:'#666'
                }
        },
         axisLine: {
            lineStyle: {
                color: '#fff'
            }
         },
         splitLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        }
    }],
    backgroundColor: '#fff',
    series: [{
        name: 'Top 10',
        type: 'bar',
        data: [1020, 1149, 1270, 1332, 1556, 1767, 1856, 1922, 2106, 2130, 2264, 2303, 2106, 2130, 2264, 2303,1856, 1922],
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#666' //color of value
                }
            }
        },
        itemStyle:{
                normal: {
                    show: true,
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = ['#229aff','#fdb94e','#30d6a9','#13bfe8','#fedb42','#86d560','#72d4ec','#ff9d35','#31ca5f','#ff999a','#3dccc7','#ffad8c','#4bb6de','#fe8042','#5fa5f5','#07bcbe','#f36365','#30addc'];
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#666',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
    }]
};
