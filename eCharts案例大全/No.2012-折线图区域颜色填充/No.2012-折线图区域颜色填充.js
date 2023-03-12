texts = [2004,2006,2008,2010,2012,2014,2016,2018,2020,2022];
bottoms = [53.01,49.31,44.6,43.45,40.45,39.97,38.08,34.22,32.7,31.09];
tops = [56.95,52.82,49.81,47.51,44.53,43.61,41.21,39.22,38.12,37.32];
center = [55,50,46,44,42,40,42,36,33,32];


option = {

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {
                onZero: false
            },
            data : texts
        }
    ],
    yAxis: {
	        type: 'value',
	        splitLine: {
                show: false
            }
	    },
    series : [
        {
            name:'上界',
            type:'line',
            symbol: 'none',
            smooth: true,
            areaStyle: {
                color: '#11ffff',
                origin: 'start',
                opacity: 0.3
            },
            color: '#11ffff',
            data:tops.reverse()
        },
         {
            name:'预测值',
            type:'line',
            smooth: true,
            symbolSize:8,
            color: '#0096ff',
            data:center.reverse()
        },
        {
            name:'下界',
            type:'line',
            symbol: 'none',
            smooth: true,
            areaStyle: {
                color: '#fff',
                origin: 'start',
                shadowColor: '#F3F3F3',
                shadowOffsetX: 1
            },
            color: '#11ffff',
            data:bottoms.reverse()
        },
       
    ]
};
