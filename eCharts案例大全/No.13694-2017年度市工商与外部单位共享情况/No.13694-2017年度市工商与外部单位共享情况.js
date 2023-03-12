var echartData = [{
    value: 1986,
    name: '市科委'
}, {
    value: 2148,
    name: '公共信用信息平台'
}, {
    value: 5659,
    name: '国资委'
}, {
    value: 1476,
    name: '人保局'
}, {
    value: 144,
    name: '安全局'
}, {
    value: 3941,
    name: '市保监会'
}, {
    value: 1583,
    name: '市商务委'
}, {
    value: 4356,
    name: '市社工委'
}, {
    value: 4335,
    name: '市审计局'
}, {
    value: 7878,
    name: '审计署上海办事处'
}, {
    value: 878,
    name: '市促进中小企业发展办公室'
}, {
    value: 8535,
    name: '市反恐工作办公室'
}, {
    value: 9899,
    name: '市小微企业发展研究办公室'
}, {
    value: 5432,
    name: '市税务局'
}, {
    value: 2357,
    name: '张江高新区园区'
}, {
    value: 9865,
    name: '中国电信上海分公司'
}, {
    value: 4332,
    name: '中国建设银行上海分公司'
}, {
    value: 4667,
    name: '市法制办'
}, {
    value: 2354,
    name: '市合作交流办'
}, {
    value: 5648,
    name: '市人口办'
}, {
    value: 5787,
    name: '市出入境管理局'
}, {
    value: 8795,
    name: '市民政局'
}, {
    value: 8795,
    name: '中国人民银行'
}, {
    value: 7454,
    name: '通管局'
}, {
    value: 6745,
    name: '人保局'
}];

var rich = {
    total: {
        color: "#ffc72b",
        fontSize: 40,
        align: 'center'
    }
};

option = {
    backgroundColor: '#031f2d',
    title: [{
        text: '市工商局',
        left: 'center',
        top: '53%',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 18,
            align: 'center'
        }
    },{
        text: '2017年度市工商与外部单位共享情况',
        left: 'left',
        textStyle: {
            color: '#fff',
            fontSize: 18,
            align: 'center'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        selectedMode: false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            echartData.forEach(function(value, index, array) {
                //total += value.value;
               total = array.length;
            });
            return '共计{total|' + total + '}家单位';
        },
        data: [echartData[0].name],
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 16,
            rich: rich
        },
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
            normal: {
                //formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                formatter: '{b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
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
            }
        },
        data: echartData
    }]
};