//职称结构取数
var getsjjg = ['原因1', '原因2', '原因3', '原因4'];
var getsjjgrs = [270, 76.8, 86.8, 180];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i],
    });
}
//职称结构图表
var colorList = ['rgb(0,178,79)', 'rgb(252,144,3)', 'rgb(249,250,35)', 'rgb(228,14,2)'];
option = {
    backgroundColor: '#051F54',
    title: {
        text: '周不良数量统计',
        left: 'center',
        top: 20,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#fff',
        },
    },
    legend: {
        show: true,
        top: 'center',
        left: '15%',
        itemWidth: 30,
        itemHeight: 20,
        width: 50,
        itemGap: 40,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: '#fff',
        },
    },
    series: [
        {
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            type: 'pie',
            radius: ['0%', '50%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    position: 'inner',
                    formatter: function (params) {
                        return params.value;
                    },
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '24',
                        color: '#000',
                    },
                },
            },
            data: syjgdata,
        },
    ],
};
