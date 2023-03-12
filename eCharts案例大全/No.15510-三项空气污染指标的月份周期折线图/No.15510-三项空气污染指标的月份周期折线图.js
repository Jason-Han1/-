        var option = {
                title: {
                    text: '月份周期折线图'
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: [
                '#c23531','#2f4554', '#61a0a8','#c23531','#2f4554', '#61a0a8','#c23531','#2f4554', '#61a0a8'
                ],
                legend: {
                    data:['2014-PM2.5','2014-AQI','2014-PM10','2015-PM2.5','2015-AQI','2015-PM10','2016-PM2.5','2016-AQI','2016-PM10']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {   name:'2014-PM2.5',
                        type:'line',
                        stack: '总量',
                        data:[92,130,83,55,54,48,75,56,59,103,86,58]
                    },
                    {
                        name:'2014-AQI',
                        type:'line',
                        stack: '总量',
                        data:[118,158,115,90,85,74,105,83,84,132,116,87]
                    },
                    {
                        name:'2014-PM10',
                        type:'line',
                        stack: '总量',
                        data:[104,115,121,89,82,27,33,31,35,68,102,81]
                    },
                    {   name:'2015-PM2.5',
                        type:'line',
                        stack: '总量',
                        data:[89,83,78,63,50,52,52,40,41,60,100,134]
                    },
                    {
                        name:'2015-AQI',
                        type:'line',
                        stack: '总量',
                        data:[118,116,112,93,80,81,77,64,63,87,121,167]
                    },
                    {
                        name:'2015-PM10',
                        type:'line',
                        stack: '总量',
                        data:[70,65,122,83,73,45,44,47,43,54,39,68]
                    },
                    {   name:'2016-PM2.5',
                        type:'line',
                        stack: '总量',
                        data:[60,46,84,58,49,53,59,40,47,70,90,105]
                    },
                    {
                        name:'2016-AQI',
                        type:'line',
                        stack: '总量',
                        data:[88,68,116,90,80,80,84,62,69,102,121,133]
                    },
                    {
                        name:'2016-PM10',
                        type:'line',
                        stack: '总量',
                        data:[50,45,93,87,66,42,33,37,40,49,94,66]
                    },
                ]
            };