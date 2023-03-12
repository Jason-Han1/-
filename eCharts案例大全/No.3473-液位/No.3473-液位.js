
    option = {
        series: [{
            // 液位图
            type: 'liquidFill',
            //显示文字
                label: {
            formatter: function(param){
                return param.value*100
            },
            fontSize: 23,
            position :["50%","10%"]
        },
        //鼠标放上显示
         tooltip: {
                show: true
            },
            backgroundStyle: {
                //边框宽度
                borderWidth: 1,
                borderColor: '#ced4da',
                //背景色
                color: '#fff'
            },
            data: [0.8],
            // 液位图类型 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow',svg路径
            shape: 'rect',
            name: '名称',
            outline: {
                //边框
                show: false
            },
            //初始动画加载时间，毫秒
            animationDuration: 0,
            //数据更改加载时间，毫秒
            animationDurationUpdate: 2000,
            //数据更改样式
            animationEasingUpdate: "cubicOut",
            //波浪坡度
            amplitude:20,
            //液体滚动速度
            period: function (value, index) {
                // 滚动毫秒
                return 2000;
            }
        }]
    };