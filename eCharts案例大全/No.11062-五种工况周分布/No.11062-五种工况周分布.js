const data = [{
    "status": "正常运行",
    "duration": "109"
}, {
    "status": "计划停机",
    "duration": "59"
}, {
    "status": "工况警告",
    "duration": "46"
}, {
    "status": "意外停机",
    "duration": "0"
}, {
    "status": "设备离线",
    "duration": "20"
}]

option = {
    backgroundColor: '#fff',
    color: ['#74D2A0', '#6AA0E4', '#E87C47', '#CB4B53', '#EAEAEA'],
    legend: {
        orient: 'vertical',
        right: 'right',
        top: 'center',
        itemGap: 60,
        borderRadius: 20,
        itemWidth: 12,
        itemHeight: 8,
        formatter: function(params) {
            let time;
            data.map((item) => {
                if (params == item.status) {
                    time = item.duration
                }
            })
            return params + ': ' + time + '小时'
        },
        selectedMode:false
    },
    series: [{
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#fff'
            },
            emphasis: {
                borderWidth: 0
            }
        },
        hoverAnimation: false,
        encode: {
            itemName: 'status',
            value: 'duration',
        }
    }],
    dataset: {
        source: data
    }
};