var option = {
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
            data:['加分','减分'],
            align: 'right',
            right: '2%',
            top:0,
        },
        xAxis: [
            {
                type: 'category',
                data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三', ],
                axisPointer: {
                    type: 'shadow'
                },
                axisLabel:{
                    interval:0,//横轴信息全部显示
                    rotate:30,//度角倾斜显示
                }
            }
        ],
        yAxis:[
            {
                name: '单位：分数',
            },

        ],
        series: [
            {
                name:'加分',
                color: '#81d0d7',
                type:'bar',
                barWidth:'20%',
                data:[97,109,124,134,157,135,154,156,142,135,122,102]
            },
            {
                name:'减分',
                color: '#f29365',
                type:'bar',
                barWidth:'20%',
                data:[17,89,64,34,57,35,54,56,42,35,42,42]
            },
        ]
    };