option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%',
    },
    grid: {
        width: 380,
        height: 197,
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        // containLabel: true
    },
     legend: [{
        itemWidth: 10,
        itemHeight: 10,
        data:['居民','商业','工业'],
        left: '80%',
        top: 'center',
        align: 'left',
        padding:[40,10],
        textStyle: {
          color: "#fff"
        },
        itemGap: 15
    }],
    series: [
        {
            type: 'pie',
            radius: ['55', '70'],
            center: ['50%', '50%'],
            color: ['rgb(230,224,60)', 'rgb(43,196,255)', 'rgb(255,78,45)'],
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    borderColor: 'rgb(15,23,78)',
                },
            },

            data: [
                {
                    value: 4,
                    name: '居民',
                },
                {
                    value: 3,
                    name: '商业',
                },
                {
                    value:3,
                    name: '工业',
                },
            ],
            labelLine: {
            normal: {
                show: false,
                length: 50,
                length2: 10,
                lineStyle: {
                    color: '#CCCCCC',
                    width: 2,
                    type:'dashed'
                    
                }
            }
        },
        label: {
            normal: {
                show:false,
            }
        }
        },
    ],
};
