app.title = '嵌套环形图';

option = {
    backgroundColor:'#072151',
    angleAxis: {
        type: 'category',
        z: 3,
        axisLine: {
            lineStyle: {
                width: 1,
                color: '#344d61',
            }
        },
    },
    color: ['#65c0aa', '#68be80', '#e7a86a', '#cd6d58', '#458bd2', '#49a5bf', '#27aae2', '#3d7ee9', '#4765ca', '#40369c', '#6646c0', '#8b64db', '#ae61b3'],
    // center: ['50%', '40%'],
    polar: {
        center: ['50%', '50%'],
        radius: '60%',
    },
    radiusAxis: {
        splitLine: {
            color: '#000',
            lineStyle: {
                type: 'dotted',
                color: 'rgba(170,170,170,.5)',
            }
        },

    },
    series: [
        {
            data:[
                {value:335, name:'直达'},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ],
            label: {
                normal: {
                    position: 'inner',
                    fontSize: 14,
                }
            },
            name:'金融机构',
            radius: [0, '35%'],
            type:'pie',
        },
        {
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ],
            label: {
                normal: {
                    formatter: '{b|{b}：}{c|{c}}  {per|{d}%} ',
                    backgroundColor: '#1d3462',
                    borderColor: '#323f8f',
                    borderRadius: 4,
                    borderWidth: 1,
                    padding: [20, 20],
                    rich: {
                        b: {
                            color: '#97b9f8',
                            fontSize: 12,
                        },
                        c: {
                            color: '#cdc8ff',
                        },
                        per: {
                            color: '#8daeec',
                            backgroundColor: '#2d4e84',
                            padding: [4, 6],
                            borderRadius: 2
                        }
                    }
                }
            },
            labelLine: {
              length: 30,
              length2: 40,
            },
            name:'账户类型',
            radius: ['40%', '55%'],
            type:'pie',
        }
    ],
    tooltip: {
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        trigger: 'item',
    },
};