var uploadedDataURL = "/asset/get/s/data-1583493052309-plTj5wGE.xlsx";

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['互联网',
'大型企业',
'金融',
'其它',
'央企',
'政府',
'传统媒体',
'资讯',
'阅读',
'电商',
'视频',
'自媒体',
'其它2',
'科技',
'社区',
'平台',
'综合',
'直播',
'工具',
'制造业',
'民营上市公司',
'房地产',
'外资企业',
'其它3',
'银行',
'证券',
'保险',
'基金',
'其它1',
'科技1',
'军工',
'运营商',
'建筑',
'政府',
'报业',
'广电系']
    },
    series: [
        {
            name: '一级行业',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
{value: 147, name: '互联网', selected: true},
{value: 29, name: '金融'},
{value: 22, name: '政企'},
{value: 14, name: '传统'},
{value: 11, name: '军工'},
{value: 9, name: '媒体'},
{value: 8, name: '咨询'},
{value: 6, name: '其它'},
{value: 8, name: '通信'},
{value: 2, name: '法律'},
{value: 2, name: '房地产'}
            ]
        },
        {
            name: '二级行业',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
{value: 31, name: '资讯'},
{value: 19, name: '电商'},
{value: 19, name: '阅读'},
{value: 15, name: '视频'},
{value: 13, name: '其它'},
{value: 10, name: '科技'},
{value: 10, name: '自媒体'},
{value: 8, name: '平台'},
{value: 7, name: '社区'},
{value: 7, name: '综合'},
{value: 6, name: '直播'},
{value: 2, name: '工具'},
{value: 15, name: '银行'},
{value: 6, name: '保险'},
{value: 6, name: '证券'},
{value: 1, name: '基金'},
{value: 1, name: '审计'},
{value: 10, name: '政府'},
{value: 8, name: '大型企业'},
{value: 4, name: '服务商'},
{value: 14, name: '制造业'},
{value: 11, name: '军工'},
{value: 5, name: '日报'},
{value: 4, name: '广电'},
{value: 8, name: '咨询'},
{value: 3, name: '其它'},
{value: 1, name: '服务'},
{value: 1, name: '医疗'},
{value: 1, name: '制药'},
{value: 4, name: '运营商'},
{value: 4, name: '制造商'},
{value: 2, name: '法律'},
{value: 2, name: '房地产商'}

            ]
        }
    ]
};