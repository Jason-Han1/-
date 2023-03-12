var color = ['#49478D', '#7270A6', '#9A99C0', '#C2C2D9', '#EBEBF2'];

var legend = ['<2年', '≥15年', '10-14年', '2-4年', '5-9年'];

var seriesData = [
    {
        name: '<2年',
        value: 44.2,
    },
    {
        name: '≥15年',
        value: 18,
    },
    {
        name: '10-14年',
        value: 29,
    },
    {
        name: '2-4年',
        value: 17,
    },
    {
        name: '5-9年',
        value: 16,
    },
];

var option = {
    color: color,

    grid: {
        top: '15%',
        left: 0,
        right: '1%',
        bottom: 5,
        containLabel: true,
    },
    legend: {
        itemWidth: 12, // 设置宽度
        itemHeight: 12, // 设置高度
        itemGap: 25, // 设置间距
        orient: 'horizontal',
        bottom: 20,
        icon: 'circle',
        textStyle: {
            align: 'left',
            verticalAlign: 'middle',

            rich: {
                name: {
                    color: '#353280',
                    fontSize: 12,
                    fontFamily: 'OPPOSans-M',
                },
            },
        },
        data: legend,
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                return `{name|${name}}`;
            }
        },
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        borderColor:'#EBEBF2',
         
        borderWidth:1,
        textStyle: {
            color: '#353280',
            fontSize: 14,
        },
        formatter: (params) => {
            dataStr = `<div>
          <div style="margin: 0 8px;">
            <span style="display:inline-block;width: 12px;height: 12px;vertical-align: middle;background-color:${params.color};"></span>
            <span style="font-size: 12px;font-family: OPPOSans-R;width: 12px;height: 12px;vertical-align: middle;color: #7270A6;">${params.name}</span>
            <span style="font-size: 14px;font-family: Roboto-M;font-weight: 400;color: #353280;line-height: 16px;vertical-align: middle;margin-left:20px;">${params.value}%</span>
          </div>
        </div>`;
            return dataStr;
        },
    },

    series: [
        {
            name: '需求类型占比',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['45%', '65%'],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{label|{b}}\n{value|{c}}',
                    rich: {
                        value: {
                            padding: 5,
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 32,
                            fontFamily: 'OPPOSans-M',
                        },
                        label: {
                            align: 'center',
                            verticalAlign: 'middle',
                            fontSize: 16,
                            fontFamily: 'OPPOSans-M',
                        },
                    },
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                    },
                },
            },
            labelLine: {
                show: false,
                length: 0,
                length2: 0,
            },
            data: seriesData,
        },
    ],
};

myChart.setOption(option);

getDefaultSelected(myChart);

function getDefaultSelected(myChart) {
    let index = 0;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
    });
    myChart.on('mouseover', (e) => {
        if (e.dataIndex !== index) {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index,
            });
        }
    });
    myChart.on('mouseout', (e) => {
        index = e.dataIndex;
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });
    });
}
