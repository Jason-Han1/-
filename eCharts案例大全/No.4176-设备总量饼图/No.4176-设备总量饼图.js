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
       show: false
    },
    title: {
        text: '{val|22}\n{name|设备总量}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#333333',
                }
            }
        }
    },
    series: [{
        type: 'pie',
        radius: ['30%', '40%'],
        center: ['50%', '50%'],
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