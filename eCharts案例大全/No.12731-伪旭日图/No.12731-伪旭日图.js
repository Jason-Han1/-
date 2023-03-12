/**
 * @author liang
 * 近期开发旭日图发现有好多官方bug，使用不是很爽，
 * 于是用饼+环做了一个伪旭日图
 * 有需要3级或以上的可以模仿哦，也是类似的
 * tooltip和label一做了处理，一二级展示不同，二级会展示具体的一级大类
 */
 
let pieData = [{
            name: '一般隐患',
            value: 1584,
            children: [{
                name: '企业自查',
                value: 1420
            }, 
            {
                name: '监督检查',
                value: 164
            }]
        },
        {
            name: '重大隐患',
            value: 268,
            children: [{
             name: '企业自查',
                value: 50
            }, {
                name: '监督检查',
                value: 218
            }]
        }, 
       
    ],
    colorList = ['#4169E1', '#EE82EE', '#DB7093', '#6495ED', '#44aff0']
    
let sInner
let sOuter = []
sInner = pieData.map(d => {
    if (d.children) {
        d.children.forEach(r => {
            sOuter.push({
                name: r.name,
                value: r.value,
                type: d.name.replace(/中国|定电/g, '')
            })
        })
    }
    return {
        name: d.name.replace(/中国|定电/g, ''),
        value: d.value
    }
})
option = {
    backgroundColor: 'rgba(0,51,102, 1)',
    color: colorList,
    tooltip: {
        formatter(data) {
            let d = data.data
            if (d.type) {
                return d.type + '</br>' + d.name + '：' + d.value
            }
            return d.name + '：' + d.value
        }
    },
    legend: {
        show: false
    },
    series: [{
            name: '运营商',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '25%'],
    
            label: {
                normal: {
                    position: 'inner',
                      fontSize: 20,
                    formatter(d) {
                        return d.name + d.value
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: sInner
        },
        {
            name: '通联行为',
            type: 'pie',
            radius: ['30%', '40%'],
            label: {
                normal: {
                    color: '#fff',
                    fontSize: 20,
                    formatter(d) {
                        return d.data.type + d.name + d.value
                    }
                }
            },
            data: sOuter
        }
    ]
};