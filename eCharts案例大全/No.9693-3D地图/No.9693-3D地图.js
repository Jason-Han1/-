var uploadedDataURL = "/asset/get/s/data-1572925107729-GooiUCiJ.png";

option = {
    series: [{
            type: 'map3D',
            name: "婚姻登记",
            map: 'china',
            shading: 'realistic',
            realisticMaterial: {
                detailTexture: uploadedDataURL,
                textureTiling: 256,
            },
            itemStyle: {
                color: '#69a2da',//1f2b49#69a2da
                opacity: 1,
                borderWidth: 1,
                // borderColor: '#a08543',
                borderColor: '#92714d',
            },
            emphasis: {
                itemStyle: {
                    color: '#f95247'
                }
            },
            label: {
                show: false,
                distance: 10,
                formatter: '{b}',
                textStyle:{
                    color: '#ffffff',
                    fontFamily: 'FZFSJW',
                    // fontSize: font_size_30,
                    fontSize: 24,
                    backgroundColor: 'rgba(0,0,0,0)'
                    /*backgroundColor: {
                        image: '../images/hydj/locate.png'
                    },*/
                },
            },
            light: {
                main: {
                    // color: '#0090ff',
                    // color: '#ffffff',
                    intensity: 0.8,
                    shadow: true,
                    alpha: 40,
                    beta: 180
                }
            },
            postEffect:{
                enable: false,
            },
            viewControl: {
                // projection: 'orthographic',
                // 取消鼠标旋转，移动，缩放
                rotateSensitivity: 0,
                panSensitivity: 0,
                zoomSensitivity: 0,
                // panMouseButton: 'left',
                // rotateMouseButton: 'right',
                distance: 90,
                alpha: 40,
            },
            left: '0',
            top: '-3%',
            right: '-10%',
            data: [{name: '北京',value: 110315 },{name: '天津',value: 137230 },
                {name: '上海',value: 186744 },{name: '重庆',value: 1059842 },
                {name: '河北',value: 1691389 },{name: '河南',value: 3522907 },
                {name: '云南',value: 3119071 },{name: '辽宁',value: 1158607 },
                {name: '黑龙江',value: 1713166 },{name: '湖南',value: 2237202 },
                {name: '安徽',value: 2594202 },{name: '山东',value: 1513374 },
                {name: '新疆',value: 2335451 },{name: '江苏',value: 1088721 },
                {name: '浙江',value: 736222 },{name: '江西',value: 2482263 },
                {name: '湖北',value: 1842810 },{name: '广西',value: 2006641},
                {name: '甘肃',value: 2580305 },{name: '山西',value: 1459696 },
                {name: '内蒙古',value: 1716182 },{name: '陕西',value: 1142621 },
                {name: '吉林',value: 1173454 },{name: '福建',value: 505363 },
                {name: '贵州',value: 2701372 },{name: '广东',value: 1631834 },
                {name: '青海',value: 380818 },{name: '西藏',value: 181071 },
                {name: '四川',value: 4574758 },{name: '宁夏',value: 473060 },
                {name: '海南',value: 218466 },{name: '台湾',value: 0 },
                {name: '香港',value: 0 },{name: '澳门',value: 0 }
            ],
        }],
}; 

// 循环显示各个省数据
var i = 0;
setInterval(function () {
    if(i!=0){ // 删除前一个样式
        delete chartMapOption.series[0].data[i-1].itemStyle;
        delete chartMapOption.series[0].data[i-1].label;
    }
    i = i % 34;
    chartMapOption.series[0].data[i].itemStyle={color: '#f95247'};
    chartMapOption.series[0].data[i].label={show: true,formatter: '{b}', distance: 10,
        textStyle:{
            color: '#ffffff',
            fontFamily: 'FZFSJW',
            fontSize: 24,
            backgroundColor: 'rgba(0,0,0,0)'
            /*backgroundColor: {
                image: '../images/hydj/locate.png'
            },*/
        }};
    // option = chartMapOption;   
    i++;
},2000);
     