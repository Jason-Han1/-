option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a}：{b} {d}% ({c})"
    },
    title: {
            left: 0,
            top: "4%",
            text:['{c|}' + '{d|受威胁类型分布}'],
            // text:[],
            textStyle: {
                rich: {
                    c: {
                        color: '#2196f3',
                        fontSize: 20,
                        fontWeight: 'bold',
                        width: 4,
                        height: 15,
                        backgroundColor: '#2196f3',

                    },
                    d: {
                        color: '#3e4956',
                        fontWeight:'bold',
                        fontSize: 14,
                        padding: [0, 0, 0, 10],
                    },
                }
            },
        },
    series: [
        {
            color:['#55a2f2','#0065ba','#35a2ff','#12cbf6'],
            name:'攻击类型',
            type:'pie',
            // selectedMode: 'single',
            center:['50%','55%'],
            radius: [0, '45%'],
            label: {
                normal: {show:false,}
            },
            labelLine: {
                normal: {show: false}
            },
            data:[
                {value:1500, name:'异常信息'},
                {value:300, name:'弱口令'},
                {value:200, name:'蠕虫'},
                {value:100, name:'病毒'}
            ]
        },
        {
            color:['#badcff','#a3d0ff','#8dc5ff','#73b8ff','#4aa3ff','#1e8dff','#007eff'
            ,'#1678dc','#246eba','#4172a5','#5582b0','#d2f7ff','#daecff'],
            name:'攻击子类',
            type:'pie',
            center:['50%','55%'],
            radius: ['58%', '75%'],
            label: {
                normal: {show:false,}
            },
            data:[
                {value:200, name:'邮件1'},
                {value:200, name:'潜在利用1'},
                {value:200, name:'FTP异常1'},
                {value:200, name:'邮件2'},
                {value:200, name:'潜在利用2'},
                {value:200, name:'FTP异常2'},
                {value:200, name:'邮件3'},
                {value:130, name:'潜在利用3'},
                {value:200, name:'FTP异常3'},
                {value:200, name:'邮件4'},
                {value:200, name:'潜在利用4'},
                {value:1000, name:'FTP异常4'},
                {value:500, name:'邮件5'},
            ]
        }
    ]
};