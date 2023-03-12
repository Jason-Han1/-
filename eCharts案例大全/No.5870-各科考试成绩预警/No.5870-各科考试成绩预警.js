option = {
    title: {
        text: '各科考试成绩预警'
    },
    'legend': {
            'show': true,
            top: 15,
            right: 26,
            data: ['及格线', '开展课堂趣味竞赛后的成绩']
            // textStyle: {
            //   color: 'RGB(193,223,255)'
            // }
          },
    xAxis: {
        data: ['语文', '数学', '英语', '生物', '物理', '化学', '地理','历史','政治']
    },
    yAxis: {},
    series: [{
        type: 'line',
         name: '及格线',
        data:[90, 90, 90, 60, 60, 60, 60,60,60]
    },
    {
        type: 'scatter',
        data:[98, 130, 78, 87, 90, 67, 78,47,83],
        symbolSize: 15,
        itemStyle:{
            normal:{
                color:'#C1B1E1',
               
               
            }
        },

    }]
};