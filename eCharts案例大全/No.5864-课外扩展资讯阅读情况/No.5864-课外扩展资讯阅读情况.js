option = {
    title: {
        text: '课外扩展资讯阅读情况'
    },
    'legend': {
            'show': true,
            top: 15,
            right: 26,
            data: ['高一', '高二','高三']
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
        name: '高一',
        data:[98, 90, 78, 87, 90, 67, 78,47,83],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'scatter',
        name: '高二',
        data:[75,64,79,72,73,93,82,83,67],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    },{
        type: 'scatter',
        name: '高三',
        data:[89,96,80,72,99,68,94,81,75],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    }]
};