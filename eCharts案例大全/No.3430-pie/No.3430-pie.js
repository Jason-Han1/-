option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '40%',
        left: '80%',
        orient: 'vertical',
        icon: 'circle',
        itemWidth: 15,
        itemHeight: 15,
        data: ['罚款', '责令整改', '责令停产停业', '罚没', '警告'],
        formatter: function (name) {
            let index = 0;
            let clientlabels = ['罚款', '责令整改', '责令停产停业', '罚没', '警告'];
            let clientcounts = [9, 1, 10, 11, 222];
            let sum = 0;
            //求和
            clientcounts.forEach((number) => (sum += number));

            clientlabels.forEach(function (value, i) {
                if (value == name) {
                    index = i;
                }
            });
            let percents = Math.round((clientcounts[index] / sum) * 10000) / 100 + '%';
            return name + ' --- ' + percents + ' --- ' + clientcounts[index];
        },
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['45%', '47%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: '罚款' },
                { value: 735, name: '责令整改' },
                { value: 580, name: '责令停产停业' },
                { value: 484, name: '罚没' },
                { value: 300, name: '警告' },
            ],
        },
    ],
};
