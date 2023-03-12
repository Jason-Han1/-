option = {
            title: {
                text: '漏斗图'
                },
            tooltip: {
                trigger: 'item',//数据项图形触发
                    //{a}: 系列名称，就是 series 中的 name
                    //{b}: 类目值， 就是 x 轴的分类名
                    //{c}: 数值， 当前分类对应的数值
                    //<br/>换行
                formatter: '{a} <br/>{b} : {c}%'//回调函数
                },
            toolbox: {//工具栏
                feature: {
                    dataView: { //数据视图工具
                        readOnly: false //不可编辑（只读）
                    },
                    restore: {},//配置项还原
                    saveAsImage: {},//保存图片
                    }
                },
            legend: {//图例
                type:'scroll',//可滚动的图例
                left:'5%',//图例组件离容器左侧的距离：靠左
                orient:'vertical',//图例列表的布局朝向：垂直
                top:'center',//图例组件离容器左侧的距离：居中
                data: ['展示', '点击', '访问', '咨询', '订单']
            },
            series: [{
                name: '漏斗图',
                type: 'funnel',//类型：漏斗图
                left: '10%',//漏斗图组件离容器左侧的距离
                top:50,//漏斗图组件离容器上侧的距离
                bottom: 60,//漏斗图组件离容器下侧的距离
                width: '80%',//漏斗图组件的宽度
                min: 0,//指定的数据最小值
                max: 100,//指定的数据最大值
                minSize: '0%',//数据最小值 min 映射的宽度
                maxSize: '100%',//数据最大值 max 映射的宽度
                sort: 'descending',////漏斗数据降序排列
                gap: 2,//数据图形间距
                label: {//漏斗图图形上的文本标签
                    show: true,//显示文本标签
                    position: 'inside'//标签的位置：漏斗图梯形内部
                },
                labelLine: {//标签的视觉引导线样式
                    length: 10,//视觉引导线的长度
                    lineStyle: {//线的样式
                        width: 1,//宽度
                        type: 'solid'
                        }
                    },
                itemStyle: {//图形样式
                    borderColor: '#fff',//图形的描边颜色
                    borderWidth: 1//图形描边宽度
                    },
                emphasis: {//高亮的标签和图形样式
                    label: {
                        fontSize: 20//当鼠标悬停在漏斗某部分上，重点突出文字大小
                    }
                },
                data: [
                    { value: 50, name: '访问',itemStyle:{color:'#FDD56A'}}, //数据、名称以及颜色
                    { value: 30, name: '咨询',itemStyle:{color:'#FDB36A'}}, //数据、名称以及颜色
                    { value: 10, name: '订单',itemStyle:{color:'pink'}},    //数据、名称以及颜色
                    { value: 70, name: '点击',itemStyle:{color:'#73ACFF'}}, //数据、名称以及颜色
                    { value: 90, name: '展示',itemStyle:{color:'#FD866A'}}  //数据、名称以及颜色
                ]
             }
         ]
    };
