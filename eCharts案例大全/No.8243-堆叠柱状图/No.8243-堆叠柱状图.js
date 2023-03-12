option = {
     legend: {
        data: ['A系统', 'B系统','C系统',  'D系统']
    },
    xAxis: {
        type: 'category',
        data: ['注册申请-注册成功', '认证-成功','权限-成功']
    },
    yAxis: {
        type: 'value'
    },
    series: [
         {
            name: 'A系统',
            type: 'bar',
            stack:"申请",
            label: {
                show: true,
                position: 'inside'
            },
            data: [10, 10, 10]
        },
         {
            name: 'B系统',
            type: 'bar',
            stack:"申请",
            label: {
                show: true,
                position: 'inside'
            },
            data: [10, 20,15]
        },
        {
            name: 'C系统',
            type: 'bar',
             stack:"申请",
            label: {
                show: true,
                position: 'inside'
            },
            data: [15, 15, 15]
        },
         {
            name: 'D系统',
            type: 'bar',
             stack:"申请",
            label: {
                show: true,
                position: 'inside'
            },
            data: [15, 20,25]
        },
         {
            name: 'A系统',
            type: 'bar',
               stack:"申请成功",
            label: {
                show: true,
                position: 'inside'
            },
            data: [8,8,8]
        },
        {
            name: 'B系统',
            type: 'bar',
               stack:"申请成功",
            label: {
                show: true,
                // position: 'inside'
            },
            data: [9,9,9,]
        },
        {
             name: 'C系统',
            type: 'bar',
             stack:"申请成功",
            label: {
                show: true,
                position: 'inside'
            },
            data: [8,8,8]
        },
         {
            name: 'D系统',
            type: 'bar',
             stack:"申请成功",
            label: {
                show: true,
                position: 'inside'
            },
            data: [15, 10,10]
        },
       ]
};
