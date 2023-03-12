var uploadedDataURL = "/asset/get/s/data-1607996641366-ChGC6sTe-.js";

option = {
    width: 'auto',
    height: 'auto',
    title: [{
        "textStyle": {
            "color": "#000",
            "fontSize": 18
        },
        "subtext": "",
        "top": "auto",
        "subtextStyle": {
            "color": "#aaa",
            "fontSize": 12
        },
        "left": "auto"
    }],
    toolbox: { //可视化的工具箱
        show: true,
        feature: {
            restore: { //重置
                show: true,
                icon: 'path://M12,0L12,0A12,12 0,0 1,24 12L24,12A12,12 0,0 1,12 24L12,24A12,12 0,0 1,0 12L0,12A12,12 0,0 1,12 0z,M12,12m-7,0a7,7 0,1 1,14 0a7,7 0,1 1,-14 0,M15.5,12L19,12,M5,12L8.5,12,M12,5L12,8.5,M12,15.5L12,19'
            },
        },
        showTitle: false,
        itemSize: 20,
    },
    tooltip: {
        axisPointer: {
            type: 'item'
        },
        backgroundColor: 'rgba(255,255,255,1)',
        trigger: 'item',
        confine: true,
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function(params) {
            var res = "";
            var name = params.name;
            var value = params.value;
            if (isNaN(value)) {
                value = 0;
            }
            res = `<span style="display: inline-block;height: 5px;width:5px; opacity: 0.95;border: 3px solid #ff6c3e;box-shadow: 0px 0px 6px 0px rgba(128,128,128,0.2);border-radius: 25px;"></span>` +
                params.name + '<br>&nbsp;&nbsp;&nbsp;' + value + '%';
            return res;
        },
        textStyle: {
            color: "rgba(0, 0, 0, 1)"
        }
    },
    visualMap: {
        symbol: 'circle',
        itemWidth: '10%',
        itemHeight: '10%',
        x: 'left',
        y: 'bottom',
        inverse: true,
        splitList: [{
                start: 0,
                end: 0.2,
                label: '0-20%',
                color: '#ECE4F5',
                symbol: 'circle',
            },
            {
                start: 20,
                end: 40,
                label: '20-40%',
                color: '#CCAEED',
                symbol: 'circle',
            },
            {
                start: 40,
                end: 60,
                label: '40-60%',
                color: '#B573FF',
                symbol: 'circle',
            },
            {
                start: 60,
                end: 80,
                label: '60-80%',
                color: '#7429C9',
                symbol: 'circle',
            },
            {
                start: 80,
                label: '80%-100%',
                color: '#3C0080',
                symbol: 'circle',
            },




        ],
        textStyle: {
            color: '#3899FF' // 值域文字颜色
        },

        selectedMode: false,
        color: ['#E0022B', '#E09107', '#A3E00B'],
    },

    backgroundColor: "#FAFAFA",
    geo: {
        map: '印度尼西亚, 印尼',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                areaColor: '#ECE4F5', //地图背景色//color
                borderColor: '#FAFAFA', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                areaColor: '#FF4E17' //悬浮背景//color
            }
        },
    },
    series: [{
        'type': "map",
        'geoIndex': 0,
        data: [{
                name: "Aceh",
                value: 80
            },
            {
                name: "Bali",
                value: 70
            },
            {
                name: "Maluku",
                value: 30
            }
        ],
    }, ]
};