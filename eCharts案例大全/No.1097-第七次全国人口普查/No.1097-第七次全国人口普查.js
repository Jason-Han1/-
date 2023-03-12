
    var option = {
        title : {
            text: '第七次全国人口普查',
            subtext: '2021年',
            x:'center'
        },
        tooltip : {//提示框组件。
            trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        },
        legend: {
            orient: 'horizontal',//图例的排列方向
            x:'left',//图例的位置
            data:['人口数量']
        },
//提示框
        tooltip: {
            show: true,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] + '万人&nbsp;&nbsp;';
                } else {
                    return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '万人&nbsp;&nbsp;';
                }
            },

        },
        visualMap: {//颜色的设置  dataRange
            x: 'left',
            y: 'center',
            splitList: [
                {start: 8000, end: 12000},
                {start: 5000, end: 8000},
                {start: 4000, end: 5000},
                {start: 3500, end: 4000},
                {start: 2500, end: 3500},
                {start: 800, end: 2500},
                {start: 50, end: 800},
            ],
//            min: 0,
//            max: 2500,
        //    calculable : true,//颜色呈条状
            text:['高','低'],// 文本，默认为数值文本
            color: ['#E0022B', '#E09107', '#A3E00B']
        },
        toolbox: {//工具栏
            show: true,
            orient : 'vertical',//工具栏 icon 的布局朝向
            x: 'right',
            y: 'center',
            feature : {//各工具配置项。
                mark : {show: true},
                dataView : {show: true, readOnly: false},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                restore : {show: true},//配置项还原。
                saveAsImage : {show: true}//保存为图片。
            }
        },
        roamController: {//控制地图的上下左右放大缩小 图上没有显示
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: '人口数量',
                type: 'map',
                mapType: 'china',
                roam: false,//是否开启鼠标缩放和平移漫游
                itemStyle:{//地图区域的多边形 图形样式
                    normal:{//是图形在默认状态下的样式
                        label:{
                            show:true,//是否显示标签
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    },
                    emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label:{show:true}
                    }
                },
                top:"3%",//组件距离容器的距离
                data:[
                    {name: '北京',value: 2154},
                    {name: '天津',value: 1560},
                    {name: '上海',value: 2424},
                    {name: '重庆',value: 3102},
                    {name: '河北',value: 7556},
                    {name: '河南',value:9605},
                    {name: '云南',value: 4830},
                    {name: '辽宁',value: 4359},
                    {name: '黑龙江',value: 3773},
                    {name: '湖南',value: 6899},
                    {name: '安徽',value: 6324},
                    {name: '山东',value: 10047},
                    {name: '新疆',value: 2487},
                    {name: '江苏',value: 8051},
                    {name: '浙江',value: 5737},
                    {name: '江西',value: 4648},
                    {name: '湖北',value: 5971},
                    {name: '广西',value: 4926},
                    {name: '甘肃',value: 2637},
                    {name: '山西',value: 3718},
                    {name: '内蒙古',value: 2491},
                    {name: '陕西',value: 3864},
                    {name: '吉林',value: 2704},
                    {name: '福建',value: 3941},
                    {name: '贵州',value: 3600},
                    {name: '广东',value:11346},
                    {name: '青海',value: 603},
                    {name: '西藏',value: 335},
                    {name: '四川',value:8341},
                    {name: '宁夏',value: 688},
                    {name: '海南',value: 934},
                    {name: '台湾',value: 2359},
                    {name: '香港',value: 745},
                    {name: '澳门',value: 63}
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.on('mouseover', function (params) {
        var dataIndex = params.dataIndex;
        console.log(params);
    });