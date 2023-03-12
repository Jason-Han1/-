var dataArr = [{
                value: 3400,
                name: '未达标',
            },
            {
                value: 6400,
                name: '已达标'
            }
        ];
option = {
    backgroundColor: 'black',
    title: {
        text: '达标',
        y: 'center',
        x: 'center',
        textStyle: {
            color: '#fff',
            fontSize:40,
            fontWeight:'normal'
        }
    },

    tooltip: {
        trigger: 'item',
        // formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        radius: '50%',
        selectedMode: 'single',
        selectedOffset: 10,
        clockwise: false,
        center: ['50%', '50%'],
        color: ['#00C0FF', '#165DAD'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data:dataArr,
        roseType: 'radius',
        itemStyle: {
            borderWidth: '20',
            color: 'pink',
            borderColor: '#FFF',
            normal: {
                // borderWidth: '10',
                // borderColor: 'rgba(0,0,0,2)',
            },
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
    }]
};