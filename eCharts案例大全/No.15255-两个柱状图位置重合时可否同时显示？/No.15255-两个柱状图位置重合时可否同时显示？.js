option = {
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            legendHoverLink: false,
            silent: true,
            barWidth: 30,
          
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle: {
                normal: {
                    color: '#d7e7fd',
                    opacity: 1
                },
                emphasis: {
                    color: '#d7e7fd',
                    opacity: 1
                }
            },
            //blendMode: 'lighter'
        },
        {
            name:'降水量',
            type:'bar',
            barGap: '-100%',
            legendHoverLink: false,
            silent: true,
            barWidth: 30,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],

            itemStyle: {
                normal: {
                    color: '#d5f2e2',
                    opacity: 1
                },
                emphasis: {
                    color: '#d5f2e2',
                    opacity: 1
                }
            },
            //blendMode: 'lighter'
        }
    ]
};
