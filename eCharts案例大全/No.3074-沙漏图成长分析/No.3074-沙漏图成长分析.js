option = {
    color: ['#F31E67', '#EBEB04', '#04C689', '#2FE1E5', '#5C78FF'],
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.6)', //设置背景图片 rgba格式
        color: '#fff',
        borderWidth: '1', //边框宽度设置1
        borderColor: 'rgba(0,0,0,0.6)', //设置边框颜色
        textStyle: {
            color: '#fff', //设置文字颜色
        },
    },
    series: [
        {
            type: 'funnel',
            left: '5%',
            right: '30%',
            top: '10%',
            bottom: '10%',
            minSize: '0%',
            maxSize: '100%',
            width: '70%',
            gap: 5,
            sort: 'ascending',
            label: {
                show: true,
                position: 'inside',
                // formatter: "{b}  ({c}万)",
                formatter: function (params) {
                    return params.name + params.percent + '%';
                },
                color: '#8F919B',
                fontSize: 13,
                position: 'right',
            },
            labelLine: {
                length: 20,
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color: '#8F919B',
                },
            },
            data: [
                { value: 10, name: '硕果' },
                { value: 20, name: '成熟' },
                { value: 30, name: '成果' },
                { value: 20, name: '成长' },
                { value: 20, name: '萌芽' },
            ],
            hoverAnimation: false,
        },

        {
            type: 'funnel',
            left: '5%',
            right: '30%',
            top: '10%',
            bottom: '10%',
            minSize: '0%',
            maxSize: '100%',
            width: '70%',
            gap: 5,
            sort: 'ascending',
            label: {
                show: true,

                formatter: function (params) {
                    return params.percent + '%';
                },
                color: '#fff',
                fontSize: 13 ,
                position: 'center',
            },
            data: [
                { value: 10, name: '硕果' },
                { value: 20, name: '成熟' },
                { value: 30, name: '成果' },
                { value: 20, name: '成长' },
                { value: 20, name: '萌芽' },
            ],
            hoverAnimation: false,
        },
    ],
};
