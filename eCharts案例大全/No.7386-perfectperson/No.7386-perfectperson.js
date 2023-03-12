option = {
    backgroundColor: "#ffffff",
    title: {
        text: '时间管理',
        subtext: '自律使我快乐！',
        left: 'center'
    },
    series: [{
        name: 'test',
        type: 'gauge',
        radius: '100%',
        center: ['50%', '50%'],
        min: 0,
        max: 120,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 24,
        animation: 0,
        pointer: {
            show: true,
            length: '95%',
            width: 4,
        },
        itemStyle: {
            normal: {
                color: '#000000',
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 10,
                shadowOffsetX: 4,
                shadowOffsetY: 4
            }
        },
        axisLine: { //仪表盘轴线样式
            lineStyle: {
                color: [
                    [1, '#000000']
                ],
                width: 5
            }

        },
        splitLine: { //分割线样式长刻度
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 5
            }
        },
        axisTick: { //仪表盘刻度小标记样式
            show: 1,
            splitNumber: 5,
            length: 10,
            lineStyle: {
                color: ['#000']
            }
        },
        axisLabel: { //刻度盘标签
            show: 1,
            distance: 1, //标签与刻度线的距离,
            textStyle: {
                fontWeight: 'bold',
                fontSize: 12
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '';
                    case '5':
                        return '1';
                    case '10':
                        return '2';
                    case '15':
                        return '3';
                    case '20':
                        return '4';
                    case '25':
                        return '5';
                    case '30':
                        return '6';
                    case '35':
                        return '7';
                    case '40':
                        return '8';
                    case '45':
                        return '9';
                    case '50':
                        return '10';
                    case '55':
                        return '11';
                    case '60':
                        return '12';
                    case '65':
                        return '13';
                    case '70':
                        return '14';
                    case '75':
                        return '15';
                    case '80':
                        return '16';
                    case '85':
                        return '17';
                    case '90':
                        return '18';
                    case '95':
                        return '19';
                    case '100':
                        return '20';
                    case '105':
                        return '21';
                    case '110':
                        return '22';
                    case '115':
                        return '23';
                    case '120':
                        return '24';

                }
            }
        },
        title: {
            show: 0
        },
        detail: {
            show: 0,
            formatter: '{value}',
            offsetCenter: [0, '60%'],
        },
        data: [{}]
    }, {
        type: 'pie',
        hoverAnimation: false,
        startAngle: getPlanData().startAngle,
        center: ['50%', '50%'],
        radius: ['0', '85%'],
        label: {
            show: true,
            formatter: '{b} ',
            position: 'inside'
        },

        data: getPlanData().planData
    }]
};


function getPlanData() {
    var startSleep = 23; //开始睡觉时间
    var startAngle = (360 - 23 * 15) + 90; //每小时15度。计算角度顺时针，但是pie开始角度是按照逆时针运算
    var planData = [{
            value: 7,
            name: "睡觉",
            sort: 1
        },
        {
            value: 1,
            name: '早餐上班',
            sort: 2
        }, {
            value: 0.5,
            name: '早会',
            sort: 3
        }, {
            value: 2.5,
            name: '新技术',
            sort: 4,
            label: {
                rotate: -75
            }
        }, {
            value: 3,
            name: 'coding',
            sort: 5,
            label: {
                rotate: 0
            }
        }, {
            value: 1.5,
            name: '午休',
            sort: 6
        },
        {
            value: 3,
            name: 'work',
            sort: 7
        }, {
            value: 0.5,
            name: '休息',
            sort: 8
        }, {
            value: 1,
            name: '工作总结',
            sort: 9
        }, {
            value: 1.5,
            name: '晚餐',
            sort: 10
        }, {
            value: 1,
            name: '运动',
            sort: 11
        }, {
            value: 1,
            name: '带娃、学习',
            sort: 12
        }, {
            value: 0.5,
            name: '洗澡刷牙，准备睡觉',
            sort: 13
        }
    ];
    var lastData;
    //先排序，再计算角度
    /**/
    for (var i = 0; i < planData.length; i++) {
        var curData = planData[i];
        var rotate = 0;
        if (curData.sort == 1) {
            rotate = startAngle - curData.value * 15;
        } else {
            rotate = -curData.value * 15;
        }
        if (lastData) rotate += lastData.rotate
        
        if(rotate < -90)continue;
        curData.label = {
            "rotate": rotate
        };
        
        lastData = curData;
    }
    
    return {
        planData: planData,
        startAngle: startAngle
    };
}