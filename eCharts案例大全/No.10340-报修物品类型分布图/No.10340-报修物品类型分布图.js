option = {
        title: {
            text: '报修物品类型分布图',
            subtext: '',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        color: ['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1', '#7DA6FF', '#4AC312', '#FB8F14', '#F148E7'],
        tooltip: {
            trigger: 'item',
            //百分比精确到保留一位
            formatter:function (data) {
                var percent = data.percent.toFixed(1);
                if (percent.split('.')[1] === '0')
                    percent = percent.split('.')[0];
                return data.seriesName + "<br/>" + data.name + " : " + data.value + " (" + percent + "%)";
            }
            // formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            icon: "circle",
            itemWidth: 8,  // 设置宽度
            itemHeight: 8, // 设置高度
            itemGap: 24, // 设置间距
            type:'scroll',//超出支持切换
            data: ['音乐厅消防设施','门卫防卫设施',,'校园大屏-北门','大堂桌椅','A楼','B楼','C楼','D楼','A楼1','B楼1','C楼1','D楼1','要超出了','其他'],
            y: 'bottom',
            selectedMode: false,
            tooltip:{
                show:true,
                formatter: function (params, ticket, callback) {
                    return 'xuyang';
                }
            }
        },
        toolbox: {
            show: false
        },
        series: [
            {
                 label:{
                     position:'outside'
                    },
                name: '报修物品类型',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [{name:'音乐厅消防设施',value:0},
                {name:'门卫防卫设施',value:0},
                {name:'校园大屏-北门',value:0},
                {name:'大堂桌椅',value:22},
                {name:'A楼',value:8},
                {name:'B楼',value:8},
                {name:'C楼',value:8},
                {name:'D楼',value:8},
                {name:'A楼1',value:10},
                {name:'B楼1',value:2},
                {name:'C楼1',value:4},
                {name:'D楼1',value:6},
                {name:'要超出了',value:19},
                {name:'其他',value:17}],
            }
        ]
    };