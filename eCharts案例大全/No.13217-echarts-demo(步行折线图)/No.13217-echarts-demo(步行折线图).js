 myChart.setOption({
            backgroundColor:'rgba(35,43,46)',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['步行1', '步行2', '步行3'],
                textStyle:{color:'#fff'},
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,
                    },
                },
            },
            yAxis: {
                type: 'value',
                splitLine:{
                    show:false,
                },
                axisLine:{
                    lineStyle:{
                        color:'#ccc',
                        width:1,
                    },
                },
            },
            color:['rgba(0, 193, 255, 0.8)','rgba(255, 245, 0, 0.8)','rgba(0, 255, 137, 0.8)',],
            series: [
                {
                    name:'步行1',
                    type:'line',
                    step: 'start',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'步行2',
                    type:'line',
                    step: 'middle',
                    data:[220, 282, 201, 234, 290, 430, 410]
                },
                {
                    name:'步行3',
                    type:'line',
                    step: 'end',
                    data:[450, 432, 401, 454, 590, 530, 510]
                },
            ]
        });