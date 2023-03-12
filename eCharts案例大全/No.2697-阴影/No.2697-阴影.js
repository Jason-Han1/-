var getname = ['房屋及结构物', '专用设备'];

var getvalue = ['1', '2'];

var data = [];

for (var i = 0; i < getname.length; i++) {
    data.push({ name: getname[i], value: getvalue[i] });
}

//var colorList = ['#4785FF','#FDC57B','#01CBB3','#5FD5F3','#FF78E7','#9991F5'];

//var colorList = ['#51A3FC','#36C78B','#FEC279','#968AF5','#E790E8','#D2D2D2'];

var colorList = ['#3E6DFF', '#00FCFD'];

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> {c}%',
    },

    series: [
        {
            type: 'pie',

            radius: ['70', '120'],

            center: ['50%', '50%'],
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color:'rgba(96, 148, 234, 0.5)',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: [0],
        },
        {
            type: 'pie',

            radius: ['70', '102'],

            center: ['50%', '50%'],
            roseType: 'radius',

            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            // myChart.setOption(data) // data伟echarts所需要传入的参数，就是配置参数最多的那个玩意

            //myChart.dispatchAction({ type: 'highlight', dataIndex: 0 }); // dataIndex属性伟data传入的索引值

            //myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, position: [120, 220], dataIndex: 0 }); // 点击生成detip工具条位置

            // myChart.on('mouseover', (e) => {

            //   if (e.dataIndex !== 0) { // 当鼠标移除的时候 使默认的索引值去除默认选中

            //    myChart.dispatchAction({ type: 'downplay', dataIndex: 0 });

            //   }

            //  });

            label: {
                normal: {
                    show: false,
                },
            },

            labelLine: {
                normal: {
                    show: false,
                },
            },

            data: data,
        },
    ],
};
