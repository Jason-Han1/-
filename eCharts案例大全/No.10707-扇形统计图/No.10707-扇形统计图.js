option = {
    tooltip: {},
    color: ['#0696ff', '#ccc', 'transparent'],
        series: [{
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 210,
            center: ['50%', '50%'],
            label: {
                show:false,
            },
            data: [{
                    value: 120,
                    tooltip: {
                        formatter: function(a) {
                             return a.marker+"value: "+a.value;
                        }
                    }
                },
                {
                    value: 120,
                    tooltip: {
                        formatter: function(a) {
                             return ''
                        }
                    }
                },
                {
                    value: 120,
                    name: '',
                    tooltip: {
                        formatter: function(a) {
                            return ''
                        }
                    }
                }
            ]
        },

    ]
};