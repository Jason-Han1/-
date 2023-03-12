option = {
    title: {
        text: '重点人员职业分布',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['人数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position: 'top',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        name: '职业',
        nameTextStyle: {
            padding: [0, 0, 10, 0] // 四个数字分别为上右下左与原位置距离
        },
        data: [
            '渔(船)民',
            '海员及长途驾驶员',
            '保育员及保姆',
            '民工',
            '幼托儿童',
            '餐饮食品业',
            '教师',
            '散居儿童',
            '学生',
            '工人',
            '其他',
            '农民',
            '干部职员',
            '医务人员',
            '商业服务',
            '家务及待业',
            '不详',
            '离退人员'
        ]
    },
    series: [{
        name: '',
        type: 'bar',
        //柱体的样式
        itemStyle: {
            normal: {
                //柱体的颜色
                //右，下，左，上（0，1，0，0）
                color: function(params) {
                    var colorList = [
                        ['#B5DAFF', '#B5DAFF'],
                        ['#9DCEFF', '#9DCEFF'],
                        ['#8AC5FF', '#8AC5FF'],
                        ['#7BBDFF', '#7BBDFF'],
                        ['#5EAEFF', '#5EAEFF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#48A4FF', '#48A4FF'],
                        ['#3399FF', '#3399FF'],
                        ['#2894FF', '#2894FF'],
                        ['#158AFF', '#158AFF'],
                        ['#0071E1', '#0071E1'],
                        ['#0069D2', '#0069D2'],
                        ['#0058B0', '#0067CE'],
                        ['#0058B0', '#0058B0'],
                        ['#0052A4', '#00509F'],
                    ];
                    var colorItem = colorList[params.dataIndex];
                    return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: colorItem[0]
                        },
                        {
                            offset: 1,
                            color: colorItem[1]
                        }
                    ], false);
                }
            }
        },
        data: [
            3,
            16,
            30,
            55,
            55,
            163,
            277,
            290,
            530,
            1281,
            1659,
            2051,
            2099,
            2503,
            2696,
            10142,
            10521,
            15593
        ]
    }]
};