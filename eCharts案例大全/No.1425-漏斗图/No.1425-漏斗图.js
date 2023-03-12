option = {
    color: ['rgb(41,182,203)', 'rgb(52,195,242)', 'rgb(52,146,242)', 'rgb(86,111,206)'],
    series: [
        {
            name: '占比',
            type: 'funnel',
            left: 'center',
            y: 100,
            y2: 100,
            width: '50%',
            min: 100,
            max: 0,
            minSize: '0%',
            maxSize: '100%',
            gap: 15,
            data: [
                { value: 100, name: '5%' },
                { value: 75, name: '14%' },
                { value: 50, name: '21%' },
                { value: 25, name: '60%' },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            label: {
                normal: {
                    formatter: function (params) {
                        return params.name;
                    },
                    position: 'center',
                    textStyle: {
                        color: '#fff',
                        fontSize: 18,
                    },
                },
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },

        {
            name: '数值',
            type: 'funnel',
            left: 'center',
            y: 100,
            y2: 100,
            width: '50%',
            min: 100,
            max: 0,
            minSize: '0%',
            maxSize: '100%',
            gap: 15,
            data: [
                { value: 100, name: 100 },
                { value: 75, name: 75 },
                { value: 50, name: 50 },
                { value: 25, name: 25 },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            label: {
                normal: {
                    formatter: function (params) {
                        return params.name;
                    },
                    backgroundColor: 'rgb(192,219,246)',
                    color: '#fff',
                    padding: [5, 30, 1, 30],
                    shadowBlur: 0,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#fff',
                    textStyle: {
                        color: 'rgb(82,123,172)',
                        fontSize: 30,
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 80,
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',
                    },
                },
            },

            itemStyle: {
                normal: {
                    opacity: 0,
                    borderWidth: 0,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },

        {
            name: '标签',
            type: 'funnel',
            left: 'center',
            y: 100,
            y2: 100,
            width: '50%',
            min: 100,
            max: 0,
            minSize: '0%',
            maxSize: '100%',
            gap: 15,
            data: [
                { value: 100, name: '国' },
                { value: 75, name: '省' },
                { value: 50, name: '市' },
                { value: 25, name: '县' },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            label: {
                normal: {
                    formatter: function (params) {
                        return params.name;
                    },
                    backgroundColor: 'rgb(86,111,206)',
                    color: '#fff',
                    borderRadius: 10,
                    padding: [10, 10, 10, 10],
                    shadowBlur: 0,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#fff',
                    textStyle: {
                        color: '#fff',
                        fontSize: 30,
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',
                    },
                },
            },

            itemStyle: {
                normal: {
                    opacity: 0,
                    borderWidth: 0,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
