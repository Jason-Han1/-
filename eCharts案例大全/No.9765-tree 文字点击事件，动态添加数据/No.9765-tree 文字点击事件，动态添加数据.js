  var data2 = {
        "name": "防恐怖袭击应急预案",
        "children": [
            {
                "name": "应急指挥中心",
                "children": [
                    {"name": "接警核警，视频跟踪"}
                ]
            },
            {
                "name": "应急指挥中心",
                "children": [
                    {"name": "启动应急预案，立即通知驻院派出所"},
                    {"name": "立即启动应急广播"}
                ]
            },
            {
                "name": "保卫处",
                "children": [
                    {"name": "组织机动力量"}
                ]
            },
            {
                "name": "警卫队",
                "children": [
                    {"name": "各出入口加强警戒控制"}
                ]
            },
            {
                "name": "开放管理处",
                "children": [
                    {"name": "及时疏散观众"}
                ]
            },
            {
                "name": "防控中心科",
                "children": [
                    {"name": "及时对现场进行视频跟踪"}
                ]
            }
        ]
    };
option = {
        tooltip: {
            show:false,
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        legend: {
            top: '2%',
            left: '30%',
            orient: 'vertical',
            data: [{
                name: 'tree1',
                icon: 'rectangle'
            } ,
                {
                    name: 'tree2',
                    icon: 'rectangle'
                }],
            borderColor: '#c23531'
        },
        series:[
            {
                type: 'tree',
                name: '',
                data: [data2],

                top: '5%',
                left: '20%',
                bottom: '2%',
                right: '40%',
                itemStyle: {
                    borderColor: '#99512F',
                    borderWidth: 2,
                    backgroundColor: '#ffffff'
                },
                lineStyle: {
                    color: '#99512F',
                    width: 2,
                    curveness: 0.3
                },
                symbolSize: 7,
                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        borderColor: '#000000',
                        borderWidth: 0,
                        borderRadius: 6,
                        padding: [5, 10, 5, 10],
                        backgroundColor: '#ff5e63',
                        color: '#ffffff',
                        distance: 10
                    }
                },
                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left',
                            fontSize: 10,
                            fontWeight: 400,
                            show: true,
                            borderColor: '#99512F',
                            borderWidth: 1,
                            borderRadius: 6,
                            padding: [5, 10, 5, 10],
                            backgroundColor: '#ffffff',
                            color: '#777070',
                            distance: 10

                        }
                    }
                },
                expandAndCollapse: false,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }
     myChart.on("click", clickFun);
      function clickFun(param) {
          console.log(param)
        pushMsg(param.data.id);
    }