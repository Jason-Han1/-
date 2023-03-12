var uploadedDataURL = "/asset/get/s/data-1583493052309-plTj5wGE.xlsx";

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: [
            '大型企业',
'金融',
'央企',
'互联网',
'其它',
'政府',
'传统媒体',
'制造业',
'民营上市公司',
'房地产',
'其它3',
'外资企业',
'银行',
'证券',
'保险',
'基金',
'军工',
'运营商',
'科技',
'电商',
'平台',
'工具',
'社区',
'其它1',
'科技1',
'政府',
'广电系',
'报业']
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
{value: 27, name: '大型企业', selected: true},
{value: 26, name: '金融'},
{value: 18, name: '央企'},
{value: 14, name: '互联网'},
{value: 11, name: '其它'},
{value: 8, name: '政府'},
{value: 4, name: '传统媒体'},
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
{value: 10, name: '制造业'},
{value: 7, name: '民营上市公司'},
{value: 6, name: '房地产'},
{value: 2, name: '其它3'},
{value: 2, name: '外资企业'},
{value: 14, name: '银行'},
{value: 7, name: '证券'},
{value: 4, name: '保险'},
{value: 1, name: '基金'},
{value: 14, name: '军工'},
{value: 4, name: '运营商'},
{value: 8, name: '科技'},
{value: 2, name: '电商'},
{value: 2, name: '平台'},
{value: 1, name: '工具'},
{value: 1, name: '社区'},
{value: 10, name: '其它1'},
{value: 1, name: '科技1'},
{value: 8, name: '政府'},
{value: 3, name: '广电系'},
{value: 1, name: '报业'}
            ]
        }
    ]
};