var dataname = [
    '教师系列',
    '教师（辅导员）系列',
    '其他系列',
    '社会研究系列',
    '工程技术系列',
    '图书资料系列',
    '会计系列',
    '经济系列',
    '档案系列',
    '实验技术系列',
    '农业系列',
    '卫生系列',
    '医学',
    '审计系列',
    '出版系列',
];
var datvalue = [2545, 1599, 1000, 950, 500, 260, 240, 130, 120, 110, 100, 50, 456, 885, 542];
var color = ['#4B96F3', '#10C6A6', '#F2AF4B', '#FF4D4F', '#AA7AF1'];
var colorList = [];
for (var i = 0; i < dataname.length; i++) {
    if (i <= 4) {
        colorList[i] = color[i];
    } else {
        colorList[i] = color[i % 5];
    }
}

var data = [];
for (var i = 0; i < dataname.length; i++) {
    data.push({
        value: datvalue[i],
        name: dataname[i],
        itemStyle: {
            color: colorList[i],
        },
    });
}

option = {
    legend: {
        show: true,
        data: dataname,
        // selectedMode: 'single',
        itemGap: 5,
        borderRadius: 5,
        symbolSize: 'auto',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}',
    },
    series: [
        {
            type: 'treemap',
            width: '100%',
            height: '100%',
            breadcrumb: {
                show: false,
            },
            
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                formatter: function (params) {
                     return params.data.name+'\n'+params.data.value
                }
                },
  
            //   formatter: function (params) {
            //         return '11';
            //           if (params.data.y == 0) {
            //          return (
            //          '{a|' +
            //           params.data.name +
            //              '\\n\\n' +
            //             '(' +
            //             params.data.shijian +
            //     ')' +
            //     '\\n\\n' +
            //     '}' +
            //     '{d|' +
            //     params.data.jianjie +
            //     '}'
            //   );
            // }
        //   }
            },
            itemStyle: {
                normal: {
                    show: true,
                    borderWidth: 1,
                    borderColor: '#fff',
                },
                emphasis: {
                    label: {
                        show: true,
                    },
                },
            },
            data: data,
        },
    ],
};

