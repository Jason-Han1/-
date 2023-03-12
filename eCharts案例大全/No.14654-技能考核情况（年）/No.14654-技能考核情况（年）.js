app.title = '环形图';

option = {
    legend: {
        orient: 'vertical',
        x: 'left',
        show:false,
        data:['优秀','良好','不及格','及格']
    },
    color:['rgb(255,148,153)', 'rgb(111,215,84)','rgb(182,136,217)','rgb(62,176,247)'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: "{b}:{c}人",
                    textStyle: {
                        fontSize: '20'
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:52, name:'优秀'},
                {value:9, name:'良好'},
                {value:3, name:'不及格'},
                {value:2, name:'及格'}
            ]
        }
    ]
};
