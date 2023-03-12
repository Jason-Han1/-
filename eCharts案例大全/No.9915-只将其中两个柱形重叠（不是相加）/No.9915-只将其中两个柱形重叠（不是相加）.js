option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                data:['所有苹果','红苹果','梨']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水果',
                    interval: 100,
                }
                
            ],
            color: ["#2983E8", "#FD772C", "#14A379", "#35D1CE", '#917A29', '#39ECAB'],
            series: [

                {
                    name:'所有苹果',
                    type:'bar',
                    barWidth: 10,
                    data:[120,220,250,320,322,220]
                },
                {
                    name:'红苹果',
                    type:'bar',
                    barWidth: 10,
                    data:[110,120,50,300,320,210]
                },
                {
                    name:'梨',
                    type:'bar',
                    barWidth: 10,
                    data:[100,120,50,300,320,210]
                }
            ]
        };
