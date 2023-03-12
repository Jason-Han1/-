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
var color = ['#4B96F3', '#10C6A6', '#F2AF4B', '#FF4D4F', '#AA7AF1','#ff7d3d','#ff977b','#36c78b','#e8a2f1','#fec279','#f97e7b','#2ed3cd','#6faaff','#b355ef','#10d8b0'];
var colorList = [];
for (var i = 0; i < dataname.length; i++) {
    if (i <= 15) {
        colorList[i] = color[i];
    } else {
        colorList[i] = color[i % 5];
    }
}

var data = [];
var sum = 0;
var datapercent = [];
for (var i = 0; i < datvalue.length; i++) {
        sum+= datvalue[i];
}
for (var i = 0; i < dataname.length; i++) {
    data.push({
        value: datvalue[i],
        name: dataname[i],
        itemStyle: {
            color: colorList[i],
        },
    });
}
// console.log(data);

option = {
    title: [{
        text: "总数：789人",
        left:0,
        textStyle: {
          fontSize: 20,
        },
        
    },{
        text: "单位：人",
        right:10,
        textStyle: {
          fontSize: 20
        }
    }],
    legend: {
        show: true,
        data: dataname,
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
            height: '60%',
            breadcrumb: {
                show: false,
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideTopLeft',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    // formatter:'{b}:'+'/n'+ '{c}'
                    formatter: function (param) {
                        // var str ='';
                        // return str.concat(param.name + '\n\n' + '车辆数：' + param.percent.toFixed(0) + '\n\n' + param.value);
                        // return str.concat(param.name + '\n\n' + '车辆数：' + '\n\n' + param.value);
                        return (param.name + '\n\n' + ((param.value/sum)*100).toFixed(0) + '%' + '\n\n' + param.value);
                    },
                },
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
