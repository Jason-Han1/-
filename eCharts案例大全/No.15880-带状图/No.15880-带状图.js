app.title = '堆叠条形图';

option = {
    xAxis:  {
        type: 'time',
    },
    yAxis: {
        type: 'category',
        data: ['站点A', '站点B', '站点C', '站点D'],
        splitLine: {
          show:true,
          lineStyle: {
            color: ['#fff'],
            width: 5,
            type: 'solid'
          }
        },
        splitArea: {
         show: true,
         areaStyle: {
          color: ['#39ceff']
         }
      }
    },
    series: [
        {
            name: '站点A',
            type: 'line',
            showSymbol: false,
            lineStyle: {normal: { width: 40 }},
            data: [[1477967640087, '站点A'], [1477967650087, '站点A']]
        },
        {
            name: '站点A',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {normal: { width: 40 }},
            data: [[1477967680087, '站点A'], [1477967690087, '站点A']]
        },
        {
            name: '站点A',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {normal: { width: 40 }},
            data: [[1477967780087, '站点B'], [1477967790087, '站点B']]
        },
        {
            name: '站点B',
            type: 'scatter',
            symbol: 'rect',
            symbolSize: [10, 80],
            hoverAnimation: false,
            itemStyle: {normal: {color: 'rgba(255, 0, 0, 0.86)'}, emphasis: {}},
            data: [
                [1477967640087, '站点B'], 
                [1477967641000, '站点B'], 
                [1477967642000, '站点B'],
                [1477967643000, '站点B'],
                [1477967644000, '站点B'],
                [1477967645000, '站点B'],
                [1477967646000, '站点B'],
                [1477967647087, '站点B'], 
                [1477967648000, '站点B'], 
                [1477967649000, '站点B'],
                [1477967650000, '站点B'],
                [1477967651000, '站点B'],
                [1477967652000, '站点B'],
                [1477967653000, '站点B'],
            ]
        },
        {
            name: '站点C',
            type: 'scatter',
            symbol: 'rect',
            symbolSize: [10, 80],
            hoverAnimation: false,
            itemStyle: {normal: {color: 'rgba(255, 0, 0, 0.86)'}, emphasis: {}},
            data: [[1477967640087, '站点C']]
        },
        {
            name: '站点D',
            type: 'scatter',
            symbol: 'rect',
            symbolSize: [10, 80],
            hoverAnimation: false,
            itemStyle: {normal: {color: 'rgba(255, 0, 0, 0.86)'}, emphasis: {}},
            data: [[1477967640087, '站点D']]
        }
    ]
};