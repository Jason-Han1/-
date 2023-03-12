  var dataList=[
            {name:"南海诸岛",value:0,label:"-"},
            {name: '北京', value: 1,label:"不在范围"},
            {name: '天津', value: 1,label:"不在范围"},
            {name: '上海', value: 30,label:"定向选调",date:'2020年10月14日',url:"http://career.sufe.edu.cn/2020/10/14/2010141721299561914355834410310.html"},
            {name: '重庆', value: 30,label:"定向选调",date:"2020年10月10日",url:"http://career.sufe.edu.cn/2020/10/14/2010141641590081914355834410310.html"},
            {name: '河北', value: 10,label:"未公布"},
            {name: '河南', value: 1,label:"不在范围"},
            {name: '云南', value:30,label:"定向选调",date:"2020年11月30日",url:"http://career.sufe.edu.cn/2020/11/30/2011301011262391914355834410310.html"},
            {name: '辽宁', value: 30,label:"定向选调",date:"2020年11月3日",url:"http://career.sufe.edu.cn/2020/11/03/2011031845260941914355834410310.html"},
            {name: '黑龙江', value: 30,label:"定向选调",date:"2020年10月12日",url:"http://career.sufe.edu.cn/2020/11/02/2011021825182581914355834410310.html"},
            {name: '湖南', value: 20,label:"选调生",date:" 2020年11月26日",url:"http://career.sufe.edu.cn/2020/11/26/20112619133671514.html"},
            {name: '安徽', value: 10,label:"未公布"},
            {name: '山东', value: 30,label:"定向选调",date:"2020年11月16日",url:"http://career.sufe.edu.cn/2020/11/16/2011161750215722914355834410310.html"},
            {name: '新疆', value: 10,label:"未公布"},
            {name: '江苏', value: 20,label:"选调生",date:"2020年10月30日",url:"http://career.sufe.edu.cn/2020/11/02/2011021846140111914355834410310.html"},
            {name: '浙江', value: 1,label:"不在范围"},
            {name: '江西', value: 20,label:"选调生",date:"2020年10月26日",url:"http://career.sufe.edu.cn/2020/10/26/2010261539199691914355834410310.html"},
            {name: '湖北', value: 10,label:"未公布"},
            {name: '广西', value: 30,label:"定向选调",date:"2020年10月30日",url:"http://career.sufe.edu.cn/2020/10/29/2010291755298601914355834410310.html"},
            {name: '甘肃', value: 20,label:"选调生",date:"2020年10月23日",url:"http://career.sufe.edu.cn/2020/10/28/2010282115376321914355834410310.html"},
            {name: '山西', value: 10,label:"未公布"},
            {name: '内蒙古', value: 10,label:"未公布"},
            {name: '陕西', value: 1,label:"不在范围"},
            {name: '吉林', value: 1,label:"不在范围"},
            {name: '福建', value: 30,label:"定向选调",date:"2020年11月18日",url:"http://career.sufe.edu.cn/2020/11/20/2011201123287371914355834410310.html"},
            {name: '贵州', value: 1,label:"不在范围"},
            {name: '广东', value:10,label:"未公布"},
            {name: '青海', value: 30,label:"定向选调",date:"2020年11月27日",url:"http://career.sufe.edu.cn/2020/11/30/2011300958101991914355834410310.html"},
            {name: '西藏', value: 10,label:"未公布"},
            {name: '四川', value: 20,label:"选调生",date:"2020年11月5日",url:"http://career.sufe.edu.cn/2020/11/04/2011041923309271914355834410310.html"},
            {name: '宁夏', value: 20,label:"选调生",date:"2020年11月23日",url:"http://www.offcn.com/xds/2020/1123/41885.html"},
            {name: '海南', value: 10,label:"未公布"},
            {name: '台湾', value: 0,label:"-"},
            {name: '香港', value: 0,label:"-"},
            {name: '澳门', value: 0,label:"-"}
        ]
 option = {
            tooltip: {
                    formatter:function(params,ticket, callback){
                        if (params.value>15){
                        return params.seriesName+'<br />'+params.name+'：'+params.data.label+'<br />'+"公布时间："+params.data.date
                    }
                    else return params.seriesName+'<br />'+params.name+'：'+params.data.label;}
                    //数据格式化
                },
            visualMap: {
                min: 0,
                max: 1500,
                left: 'left',
                top: 'bottom',
               type:'piecewise',//设置渐变类型
               pieces: [{
                        gt: 29,
                        lte:40,
                        label: "定向选调",
                        color: 'darkred'
                        // color: "#215096"
                    }, {
                        gt: 19,
                        lte: 29,
                        label: "选调生",
                        color: 'red'
                        // color: "#FDE102"
                    }, {
                        gte: 10,
                        lte: 19,
                        label: "未公布",
                        color: 'salmon'
                        // color: "#2EFF88"
                    }, {
                        gt: 0,
                        lt: 9,
                        label: "不在范围",
                        // color: '#f0f8ff'
                        color: "grey"
                    }],
                    //show: true
              // categories:['不在范围','未公布','选调生','定向选调'],
               /* calculable:true,
                    //splitNumber:4,//设置间断个数
                inRange: {
                    color: ['#f0f8ff','#e0ffff', '#6495ed','#006edd']//取值范围的颜色
                },*/
                show:true//图注
            },
            geo: {
                map: 'china',
                roam: false,//不开启缩放和平移
                zoom:1.23,//视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '详细信息',
                    type: 'map',
                    geoIndex: 0,
                    data:dataList
                }
            ]
        };
         myChart.setOption(option);
        myChart.on('click', function (params) {
            console.log(params);
            if(params.value>15)
            window.location.href = params.data.url;
        });