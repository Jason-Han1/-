var data = [
    {"value": 26, "name": "论 坛"}, {"value": 16.7, "name": "博 览 会"}, {
        "value": 12.4,
        "name": "研 讨 会"
    }, {"value": 12.2, "name": "峰 会"}, {"value": 8.4, "name": "座 谈 会"}, {
        "value": 7.6,
        "name": "展 览"
    }, {"value": 5.9, "name": "洽 谈 会"}, {"value": 3.6, "name": "交 易 会"}, {
        "value": 2.9,
        "name": "交 流 会"
    }, {"value": 2.2, "name": "圆桌会议"}, {"value": 1.7, "name": "学术会议"}, {"value": 0.4, "name": "恳 谈 会"}
];
data_name = [];
for (var n  in data){
    data[n]['name'] = data[n]['name'] + ' '+data[n]['value'] +'%';
    data_name.push(data[n]['name'])
}

option = {
    backgroundColor: "#000",
    title: {
        text: '“一带一路”沿线省区市活动参与',
        subtext:'纯属虚构',
        left: '50%',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight:'normal',
            fontFamily:'宋体'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 60,
        data:data_name,
        textStyle: {
            color: "#fff",
            fontWeight:'normal',
            fontFamily:'宋体'
        }
    },
    series: [

        {
            name:'',
            type:'pie',
            radius: ['40%', '55%'],
            data:data,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
            normal: {
                // position: 'inner',
                // formatter: '{d}%',
                show:false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        }
    ]
};