option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        bottom: 5,
        data: ['移动', '联通', '电信'],
        selectedMode: false,
        textStyle: {
            color: '#666'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        radius: ['40%', '80%'],
        center: ['50%', '43%'],
        avoidLabelOverlap: false,
        silent: true,
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: '#FFFFCC',
                    borderColor: '#FFFF99',
                    borderType: 'solid',
                    borderWidth: 1,
                    shadowBlur: 50,
                    shadowColor: '#CCCC99'
                }
            }
        }]
    }, {
        type: 'pie',
        name: '',
        center: ['50%', '43%'],
        radius: ['18%', '40%'],
        silent: true,
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#CCCC99',
                    shadowBlur: 30,
                    borderColor: '#CCCC99',
                    borderType: 'dashed',
                    borderWidth: 1,
                    shadowColor: 'rgba(21,41,185,.75)'
                }
            }
        }]
    }, {
        type: 'pie',
        name: '',
        color: ['#d74e67', '#0092ff', '#eba954'],
        center: ['50%', '43%'],
        radius: ['50%', '68%'],
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{c}'
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        hoverAnimation: false,
        data: [{
            value: 68,
            name: "移动"
        }, {
            value: 42.3,
            name: "联通"
        }, {
            value: 36.8,
            name: "电信"
        }]
    }]
};