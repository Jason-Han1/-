var _dataList=[
    {name:'支付宝',value:'8799'},
    {name:'微信',value:'5455.2'},
    {name:'基金',value:'10201.05'},
    {name:'现金',value:'120'}];
    
var option = {
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}"
    },
    legend: {
        orient: 'vertical',
        y:'bottom',
        right: '7%',
        data: ['支付宝','微信','基金','现金'],
        padding: [0, 10, 0, 0],
        selectedMode: false,
        itemWidth: 10,
        itemHeight: 10,
        icon: 'circle',
        textStyle: {
            width: 340,
            rich: {
                a: {
                    align: 'left',
                    color: '#77899c',
                    padding: [0, 0, 0, 10],
                    fontSize:36
                },
                b: {
                    align: 'right',
                    color: '#eb3a53',
                    fontSize:36
                },
                c: {
                    align: 'right',
                    color: '#4ed139',
                    fontSize:36
                },
            }
        },
        tooltip: {
            show: true
        },
        formatter: function(name) {
            let _index = 0;
            //console.log(_dataList)
            _dataList.forEach((item, i) => {
                //console.log(item.value,name)
                if (item.name == name) {
                    _index = i;
                }
            });
            let arr;
            if (name == '支付宝') {
                arr = [
                    '{a|' + name + '}',
                    '{b|￥' + _dataList[_index].value + '}'
                ]
            } else {
                arr = [
                    '{a|' + name + '}',
                    '{c|￥' + _dataList[_index].value + '}'
                ]
            }
            //console.log(_index)
            //console.log(_data1[_index].value)
            // 注意，换行仍是使用 '\n'。
            return arr.join('');
        }
    },
    graphic: {
        type: 'text',
        left: 'center',
        top: '23%',
        z: 2,
        zlevel: 100,
        style: {
            text: '1244',
            x: 100,
            y: 100,
            textAlign: 'center',
            fill: '#77899c',
        }
    },
    series: [{
        // name:'访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        // 绝对位置，相对于容器左侧 10px, 上侧 10 px
        // position: [0, -50],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        legendHoverLink: false,
        silent: false,
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: (params) => {
                    //var _total=0;
                    // _total+=params.data.value;
                    // dataTextArry.forEach((item,i)=>{
                    // _total+=item.value
                    // console.log(_total)
                    // });
                    //console.log(1);
                    // console.log(set)
                    return '1111';
                },
            },
            textStyle: {
                fontSize: 36,
                color: 'green'
            },
            emphasis: {
                show: false,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            color: function(params) {
                //console.log('1',params)
                var colorList = ['#4ed139', '#289cf4', '#fdca57', '#ff9e48', '#2c3f58']
                return colorList[params.dataIndex];
            }
        },
        data: _dataList
    }]
};