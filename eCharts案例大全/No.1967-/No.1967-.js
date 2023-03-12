var data = 308; //数值大小
var max = 500; //满刻度大小

option = {
    backgroundColor: '#23bd5d',
    color: ['rgba(90, 216, 255, 1)', 'rgba(90, 216, 255, 0.5)', 'rgba(90, 216, 255, 0.2)'],
    series: [
        {
            type: 'pie',
           // center: ['50%', '50%'],
            radius: ['95%', '100%'],
            hoverAnimation: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: data,
                },
                {
                    //画中间的图标
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: 'rgba(90, 216, 255, 1)',
                        borderRadius: 100,
                        padding: 50,
                    },
                },
                {
                    //画剩余的刻度圆环
                    value: max - data,
                },
            ],
        },
    ],
};
