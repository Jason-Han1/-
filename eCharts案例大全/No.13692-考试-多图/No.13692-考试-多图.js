//多联动饼状图
option = {backgroundColor:'#fff',
        legend: {
            right: '20%',
            data: ['未导入班级', '已导入班级'],
            top: '200',
            textStyle: {
                color: ['#777']
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        title: [{
            // left: 'center',
            left: '69.5%',
            top: '47%',
            textAlign: 'center',
            text: '期末考试',
            textStyle: {
                fontSize: 14,
            },
            subtext: '1,200',
            subtextStyle: {
                fontSize: 15,
                color: ['#ff9d19']
            },
        }, {
            left: '35.4%',
            top: '47%',
            textAlign: 'center',
            text: '体育测试',
            textStyle: {
                fontSize: 14,
            },
            subtext: '1,200',
            subtextStyle: {
                fontSize: 15,
                color: ['#ff9d19']
            },
        }],
        series: [
            {
                name: '期末考试',
                type: 'pie',
                radius: ['15%', '25%'],
                center: ['70%', '50%'],
                data: [
                    {
                        value: 1050,
                        name: '已导入班级'
                    },
                    {
                        value: 110,
                        name: '未导入班级'
                    }
                ],
            },
            {
                name: '体育测试',
                type: 'pie',
                radius: ['15%', '25%'],
                center: ['36%', '50%'],
                data: [
                    {
                        value: 1050,
                        name: '已导入班级'
                    },
                    {
                        value: 130,
                        name: '未导入班级'
                    }
                ],
            }
            
        ],
        color: [
            '#71b5dd',
            
            '#fb9b9b',
            
        ]
    };
    