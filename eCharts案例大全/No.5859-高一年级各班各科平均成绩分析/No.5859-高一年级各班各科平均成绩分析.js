option = {
    title: {
        text: '高一年级各班各科平均成绩分析'
    },
    'legend': {
            'show': true,
            top: 15,
            right: 26,
            data: ['一班', '二班','三班','四班','五班']
            // textStyle: {
            //   color: 'RGB(193,223,255)'
            // }
          },
    xAxis: {
        data: ['语文', '数学', '英语', '生物', '物理', '化学', '地理','历史','政治']
    },
    yAxis: {
         name: '阅读率',
    },
    series: [
    {
        type: 'scatter',
        name: '一班',
        data:[98, 90, 78, 87, 90, 67, 78,47,83],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'scatter',
        name: '二班',
        data:[75,64,79,72,73,93,82,83,67],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'scatter',
        name: '三班',
        data:[89,96,80,72,99,68,94,81,75],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'scatter',
        name: '四班',
        data:[61,75,81,90,95,74,99,91,66],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'scatter',
        name: '五班',
        data:[67,96,77,97,73,80,93,81,78],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    }]
};