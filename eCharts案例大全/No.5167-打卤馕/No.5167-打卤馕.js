
//请不要点击上方保存按钮。备用

var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
var Department = [{
            'name': '行政部',
            'value': 70
        }, {
            'name': '运营部',
            'value': 80
        }, {
            'name': '测试部',
            'value': 70
        }, {
            'name': '开发部',
            'value': 60
        }, {
            'name': '产品部',
            'value': 50
        }, {
            'name': '美术部',
            'value': 50
        }]
option = {
    legend: {
        bottom: 10,
        left: 'center',
        data: [
            {
              name: '行政部',
              icon: 'circle',
            },
            {
              name: '运营部',
              icon: 'circle',
            },
            {
              name: '测试部',
              icon: 'circle',
            },
            {
              name: '开发部',
              icon: 'circle',
            },
            {
              name: '产品部',
              icon: 'circle',
            },
            {
              name: '美术部',
              icon: 'circle',
            },
          ],
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1,
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                a: {
                    color:'#000',
                }
            }
        },
        data: Department,
    }]
};