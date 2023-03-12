option = {
        color: [ '#334B5C','#E98F6F'],
        title: {
            text: '隐患级别',
            textStyle: {
                color: '#28FF28',
                fontSize: 15,
                fontFamily: '宋体'
            }
        },
        tooltip: {
            trigger: 'axis',
            //formatter: "{b} <br> 合格率: {c}%"
        },
        legend: {
            data: ['一般隐患', '重要隐患'],
            textStyle: {
                color: '#28FF28',
                fontSize: 15,
                fontFamily: '宋体'
            },
            axisLabel: {

            },

        },


        xAxis: {
            type: 'category',
            name: '矿井',
            axisLabel: {
                textStyle: {
                    color: '#28FF28',
                    fontSize: 15,
                    fontFamily: '宋体'
                }
            },
            //boundaryGap: false,
            data: ["许厂", "岱庄", "亭南", "唐口", "新河", "双欣", "巴彦高勒", "高家堡"],
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#28FF28',
                    fontSize: 15,
                    fontFamily: '宋体'
                }
            },
        },
        series: [{
            name: '一般隐患',
            type: 'bar',
            smooth: true,
            textStyle: {
                color: '#28FF28',
                fontSize: 15,
                fontFamily: '宋体'
            },
            stack:true,
            data: [46, 50, 67, 50, 61, 60, 49, 54]
        },
            
            {
                name: '重要隐患',
                type: 'bar',
                smooth: true,
                stack:true,
                data: [5, 3, 5, 6, 7, 3, 6, 7]
            }
            
        ]
    };