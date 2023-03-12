option ={
            grid:{
                top:'20%',
                bottom:0,
                right:'5%',
                left:'0',
                containLabel:true,
            },
            tooltip: {
                trigger: 'axis',
                confine:true,
            },
            xAxis: {
                type: 'category',
            },
            yAxis:{
                name:'元/吨',
                min:'dataMin',
            },
            dataset:{
                dimensions:['日期','采购价'],
                source:[
                    {'日期':'2019-01-02','采购价':100},
                    {'日期':'2019-01-05','采购价':400}
                ]
            },
            series: {
                type:'line',
                smooth:true,
                symbol: 'circle',
                symbolSize:2,
                sampling: 'average',
                connectNulls:true,
                label:{
                  // show:true
                },
                itemStyle: {
                    color: '#ffc858'
                },
                lineStyle:{
                    width:1
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#ffc858'},
                            {offset: 1, color: 'rgba(255,200,88,0)'}
                        ]
                    )
                }
            },
        }