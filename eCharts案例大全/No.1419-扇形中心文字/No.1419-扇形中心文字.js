 option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: 'bottom',
        selectedMode: false,
        textStyle: {
            //图例文字的样式

            fontSize: 14,
        },
        formatter: function (name) {
            if (name == '工业企业') {
                return name + ':' + 1;
            } else if (name == '其他企业') {
                return name + ':' + 2;
            } else if (name == '科研院校') {
                return name + ':' + 3;
            } else if (name == '高校') {
                return name + ':' + 4;
            } else {
                return name;
            }
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                //扇形中心文字
                show: true,
                position: 'center',
                formatter: '经费\n结构',
                fontSize: 40,
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1, name: '工业企业', itemStyle: { color: '#008000' } },
                { value: 2, name: '其他企业', itemStyle: { color: '#FACC14' } },
                { value: 3, name: '科研院校', itemStyle: { color: '#FF0000' } },
                { value: 4, name: '高校', itemStyle: { color: '#008FE0' } },
            ],
        },
    ],
};
