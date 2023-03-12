var uploadedDataURL = "/asset/get/s/data-1583493052309-plTj5wGE.xlsx";

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 50,
        data: ['传统', '法律', '房地产', '互联网', '金融', '军工','媒体', '其它', '通信', '政企', '咨询','制造业', '法律', '房地产商', '电商', '工具', '科技', '平台', '其它', '社区', '视频', '阅读', '直播', '制造商', '资讯', '自媒体', '综合', '保险', '基金', '审计', '银行', '证券', '军工', '广电', '日报', '服务', '其它', '医疗', '制药', '运营商', '制造商', '大型企业', '服务商', '政府', '咨询']
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
{value: 161, name: '互联网', selected: true},
{value: 33, name: '大型企业'},
{value: 30, name: '金融'},
{value: 25, name: '其它'},
{value: 20, name: '央企'},
{value: 13, name: '政府'},
{value: 9, name: '传统媒体'}
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
{value: 34, name: '资讯'},
{value: 24, name: '阅读'},
{value: 23, name: '电商'},
{value: 15, name: '视频'},
{value: 12, name: '自媒体'},
{value: 12, name: '其它2'},
{value: 11, name: '科技'},
{value: 8, name: '社区'},
{value: 8, name: '平台'},
{value: 6, name: '综合'},
{value: 6, name: '直播'},
{value: 2, name: '工具'},
{value: 16, name: '制造业'},
{value: 7, name: '民营上市公司'},
{value: 6, name: '房地产'},
{value: 2, name: '外资企业'},
{value: 2, name: '其它3'},
{value: 16, name: '银行'},
{value: 7, name: '证券'},
{value: 6, name: '保险'},
{value: 1, name: '基金'},
{value: 24, name: '其它1'},
{value: 1, name: '科技1'},
{value: 14, name: '军工'},
{value: 5, name: '运营商'},
{value: 1, name: '建筑'},
{value: 13, name: '政府'},
{value: 5, name: '报业'},
{value: 4, name: '广电系'}

            ]
        }
    ]
};