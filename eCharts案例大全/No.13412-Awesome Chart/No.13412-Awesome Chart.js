app.title = '堆叠条形图';



option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['常规项目', '第一批中央预算项目', '第一批中央预算项目', '第一批中央预算项目', '农网改造升级项目']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['常规项目', '第一批中央预算项目', '第二批中央预算项目', '第三批中央预算项目',
            '农网改造升级项目'
        ]
    },
    series: [{
            name: '签订合同金额',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    formatter: function(param) {
                        return (param.data.flag*100).toFixed(0)+'%';
                    }
                }
            },
            data: [{
                id: 'nongwang',
                name: '农网改造升级项目',
                all: '1800',
                flag: 1422/1800,
                value: '1422',
            }, {
                id: 'diyi',
                name: '第一批中央预算项目',
                all: '8150',
                flag: 6112/8150,
                value: '6112',
            }, {
                id: 'dier',
                name: '第二批中央预算项目',
                all: '1800',
                flag: 1422/1800,
                value: '1422',
            }, {
                id: 'disan',
                name: '第三批中央预算项目',
                all: '5700',
                flag: 4674/5700,
                value: '4674',
            }, {
                id: 'changgui',
                name: '常规项目',
                all: '6300',
                flag: 4252/6300,
                value: '4252',
            }]
        }, {
            name: '投资额',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function(param) {
                        return " " + param.data.all + "\n/" + param.data.value;
                    }
                }
            },
            data: [{

                id: 'nongwang',
                name: '农网改造升级项目',
                all: '1800',
                flag: '1422/1800',
                value: '1422',
            }, {
                id: 'diyi',
                name: '第一批中央预算项目',
                all: '8150',
                flag: '6112/8150',
                value: '6112',
            }, {
                id: 'dier',
                name: '第二批中央预算项目',
                all: '1800',
                flag: '1422/1800',
                value: '1422',
            }, {
                id: 'disan',
                name: '第三批中央预算项目',
                all: '5700',
                flag: '4674/5700',
                value: '4674',
            }, {
                id: 'changgui',
                name: '常规项目',
                all: '6300',
                flag: '4252/6300',
                value: '4252',
            }]
        }

    ]
};