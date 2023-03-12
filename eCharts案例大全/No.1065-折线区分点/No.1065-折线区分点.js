let dataList = [
    {
        date: '2022-01-22',
        type: 0,
    },
    {
        date: '2022-01-23',
        type: -1,
    },
    {
        date: '2022-01-24',
        type: 2,
    },
    {
        date: '2022-01-25',
        type: 2,
    },
    {
        date: '2022-01-26',
        type: 0,
    },
    {
        date: '2022-01-27',
        type: -1,
    },
    {
        date: '2022-01-28',
        type: 2,
    },
    {
        date: '2022-01-29',
        type: -1,
    } 
];
let datapush = [
    {
        date: '2022-01-13',
        type: -1,
    },
    {
        date: '2022-01-14',
        type: -1,
    },
    {
        date: '2022-01-15',
        type: -1,
    },
    {
        date: '2022-01-16',
        type: 1,
    },
    {
        date: '2022-01-17',
        type: -1,
    },
    {
        date: '2022-01-18',
        type: -1,
    },
    {
        date: '2022-01-19',
        type: -1,
    },
    {
        date: '2022-01-20',
        type: -1,
    },
    {
        date: '2022-01-21',
        type: -1,
    },
];
let arrdate = [];
let arrtype = [];

dataList.map((item) => {
    arrdate.push(item.date);
    arrtype.push(item.type);
});
option = {
    xAxis: {
        type: 'category',
        data: arrdate,
        show:false,
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1],
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1],
        },
    ],
    yAxis: {
        type: 'value',
          show:false,
    },
    series: [
        {
            data: arrtype,
             smooth: true,
            type: 'line',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        color: '#999', //文字颜色
                        fontStyle: 'normal', //italic斜体  oblique倾斜
                        fontWeight: 'normal', //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                        fontSize: 10, //字体大小
                    },
                    lineStyle: {
                        // 属性lineStyle控制线条样式
                        color: '#989898',
                        width: 1,
                        type: 'solid',
                    },
                    color: (num) => {
                        //圆点颜色
                        if (-1 === arrtype[num.dataIndex]) {
                            return 'red';
                        } else if (0 === arrtype[num.dataIndex]) {
                            return 'pink';
                        }else if (1 === arrtype[num.dataIndex]) {
                            return '#000';
                        } else if (2 === arrtype[num.dataIndex]) {
                            return 'green';
                        }
                    },
                },
            },
        },
    ],
};
myChart.on('datazoom', function (params) {
    // console.log(params);
    // 监听到有平移动作，就请求接口，数组增加
    // alert(1);
});
