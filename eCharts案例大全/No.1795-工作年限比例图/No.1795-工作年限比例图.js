var img1 = {
    a: '/asset/get/s/data-1631847686568-abXyKpXxl.png',
    b: '/asset/get/s/data-1631847713215-7LUuJDWaY.png',
};
var peoples = [
    {
        value: 206533,
        symbol: 'image://' + img1.a,
    },
    {
        value: 36277,
        symbol: 'image://' + img1.a,
    },
    {
        value: 9204,
        symbol: 'image://' + img1.a,
    },
    {
        value: 650,
        symbol: 'image://' + img1.a,
    },
];
option = {
    backgroundColor: '#181b22',
    grid: {
        left: '5%',
        top: '40%',
        bottom: '30%',
        right: '20%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: false,
            data: ['博洋家纺旗舰店', '拉芙菲尔旗舰店', 'sidanda旗舰店', '格兰贝恩家纺旗舰店'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#8e5139',
                },
            },
            axisLabel: {
                margin: 35,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
            },
        },
    ],
    series: [
        {
            tooltip: {
                show: false,
            },
            z: 4,
            type: 'pictorialBar',
            symbolSize: ['30', '30'],
            symbolRepeat: 'fixed',
            data: [
                {
                    value: 811723,
                    symbol: 'image://' + img1.b,
                },
                {
                    value: 280148,
                    symbol: 'image://' + img1.b,
                },
                {
                    value: 100600,
                    symbol: 'image://' + img1.b,
                },
                {
                    value: 4963,
                    symbol: 'image://' + img1.b,
                },
            ],
        },
  
        {
            z: 6,
            type: 'pictorialBar',

            symbolSize: ['30', '30'],

            animation: true,
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: peoples,
            label: {
                normal: {
                    show: true,

                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    formatter: function (data) {
                        console.log(data);
                        return data.value ;
                    },
                    position: 'right',
                    offset: [35, 0],
                },
            },
        },
        {
            type: 'bar'
        },
         {
            data:[0.3447,0.1316,0.0985,0.1333]
        }
    ],
};
