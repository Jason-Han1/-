let data1 = [{name: '北京', value: Math.round(Math.random() * 1000) }, {name: '天津', value: Math.round(Math.random() * 1000) }, {name: '上海', value: Math.round(Math.random() * 1000) }, {name: '重庆', value: Math.round(Math.random() * 1000) }, {name: '河北', value: Math.round(Math.random() * 1000) }, {name: '河南', value: Math.round(Math.random() * 1000) }, {name: '云南', value: Math.round(Math.random() * 1000) }, {name: '辽宁', value: Math.round(Math.random() * 1000) }, {name: '黑龙江', value: Math.round(Math.random() * 1000) }, {name: '湖南', value: Math.round(Math.random() * 1000) }, {name: '安徽', value: Math.round(Math.random() * 1000) }, {name: '山东', value: Math.round(Math.random() * 1000) }, {name: '新疆', value: Math.round(Math.random() * 1000) }, {name: '江苏', value: Math.round(Math.random() * 1000) }, {name: '浙江', value: Math.round(Math.random() * 1000) }, {name: '江西', value: Math.round(Math.random() * 1000) }, {name: '湖北', value: Math.round(Math.random() * 1000) }, {name: '广西', value: Math.round(Math.random() * 1000) }, {name: '甘肃', value: Math.round(Math.random() * 1000) }, {name: '山西', value: Math.round(Math.random() * 1000) }, {name: '内蒙古', value: Math.round(Math.random() * 1000) }, {name: '陕西', value: Math.round(Math.random() * 1000) }, {name: '吉林', value: Math.round(Math.random() * 1000) }, {name: '福建', value: Math.round(Math.random() * 1000) }, {name: '贵州', value: Math.round(Math.random() * 1000) }, {name: '广东', value: Math.round(Math.random() * 1000) }, {name: '青海', value: Math.round(Math.random() * 1000) }, {name: '西藏', value: Math.round(Math.random() * 1000) }, {name: '四川', value: Math.round(Math.random() * 1000) }, {name: '宁夏', value: Math.round(Math.random() * 1000) }, {name: '海南', value: Math.round(Math.random() * 1000) }, {name: '台湾', value: Math.round(Math.random() * 1000) }, {name: '香港', value: Math.round(Math.random() * 1000) }, {name: '澳门', value: Math.round(Math.random() * 1000) }];
option = {
    backgroundColor:'rgba(1, 20, 57, 1)',
    visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1000,
        right: '50',
        top: 'bottom',
        orient: 'vertical',
        color: '#fff',
        itemGap: 0,
        align: 'left',
        pieces: [
            {gt: 400, label: '400万以上'},
            {gt: 300, lte: 400, label: '300万以上'},
            {gt: 200, lte: 300, label: '200万以上'},
            {gt: 100, lte: 200, label: '100万以上'},
            {gt: 0, lte: 100, label: '100万以内'}, 
        ],
        inRange: {
            color: ['#79bfff', '#1db4ff', '#253efc'],
            symbol: 'rect'
        },
        textStyle: {
            color: '#fff',
            fontSize: '12',
        }
    },
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        position: 'top',
        formatter: function (params) {
            console.log(params)
            var tipHtml = '';
            tipHtml =
                '<div style="height:360px;width:400px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
                '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
                '        <span style="line-height:50px;margin-left:18px">'+ params.data.value+'</div>';

            return tipHtml;
        },
    },
    series: [
        {
            name: 'iphone4',
            type: 'map',
            mapType: 'china',
            top: '40%',
            label: {
            normal: {
              show: false,
              color: '#ffffff',
              fontSize: 10
            },
            emphasis: {
              show: true,
              color: '#ffffff',
              fontSize: 10
            }
          },
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    borderWidth:2,
                    borderColor: '#5c97ff'
                },
                emphasis: {
                    label: {
                        show: true,
                    },
                    areaColor: "#18cdfe",
                    color: "#fff"
                },
            },
            data: data1,
        },
    ],
};
