option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}人 ({d}%)"
    },
    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
    series: [

        {
            name: '在职干部年龄',
            type: 'pie',
            radius: '25%',
            label: {
                normal: {
                    formatter: function(e) {
                        if (e.percent === 0) {
                            return ''
                        } else {
                            return '' + e.name + '\n\n'+ e.value+'人，' + e.percent+'%';
                        }
                    }
                }
            },
            data: [{
                value: 35,
                name: '30岁以下'
            }, {
                value: 25,
                name: '31至40岁'
            }, {
                value: 18,
                name: '41至50岁'
            }, {
                value: 29,
                name: '51至60岁'
            }, {
                value: 24,
                name: '61至70岁'
            }, {
                value: 20,
                name: '71岁以上'
            }, ],
        }
    ]
};