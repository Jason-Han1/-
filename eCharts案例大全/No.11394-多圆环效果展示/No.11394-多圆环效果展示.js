  //此单位是为了根据屏幕尺寸做的粗暴适配
   var unitVH = document.body.clientHeight / 100;
    var data = [
        {
            value: 335,
            name: '直接访问'
        },
        {
            value: 310,
            name: '邮件营销'
        },
        {
            value: 234,
            name: '联盟广告'
        },
        {
            value: 135,
            name: '视频广告'
        },
        {
            value: 335,
            name: '访问'
        },
        {
            value: 310,
            name: '营销'
        },
        {
            value: 234,
            name: '广告'
        },
        {
            value: 135,
            name: '广告'
        },
    ];
    var colors = ['#9b92fe', '#7ba5c6', '#1f62ea', '#1990e9', '#49ddfc', '#6bdafe', '#39f381', '#e9e37c'];
    var radiusList = [['15%', '20%'], ['25%', '30%'], ['35%', '40%'], ['45%', '50%'], ['55%', '60%'], ['65%', '70%'], ['75%', '80%'], ['85%', '90%']];
    var dataNew = [];
    data.map((item, index) => {
        var obj = {
            type: 'pie',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            color: 'red',
            data: [
                {
                    value: '967',
                    name: '物理',

                },
                {
                    value: '2800',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: '#22406d'
                        }
                    }
                }
            ]
        };
        obj.name = item.name;
        obj.radius = radiusList[index];
        obj.color = colors[index];
        obj.data[0].value = item.value;
        obj.data[0].name = item.name;
        dataNew.push(obj)
    })
    option = {
        title: {
            text: '总金额',
            subtext: '45876',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
           right:'10%'
        },
        series: dataNew
    };