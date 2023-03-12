const data = [{
        name: "机机构机构机构机构1",
        value: 32
    },
    {
        name: "机机构机构机构机构2",
        value: 20
    },
    {
        name: "机机构机构机构机构3",
        value: 35
    },
    {
        name: "机机构机构机构机构4",
        value: 40
    },
    {
        name: "机机构机构机构机构5",
        value: 50
    },
    {
        name: "机机构机构机构机构6",
        value: 55
    },
    {
        name: "机机构机构机构机构7",
        value: 40
    },
    {
        name: "机机构机构机构机构8",
        value: 30
    },
    {
        name: "机机构机构机构机构9",
        value: 50
    },
    {
        name: "机机构机构机构机构10",
        value: 20
    }

]
option = {

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    color: "#359CE3",
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
    },
    xAxis: {
        type: "value",
        axisLabel: {
            color: "#fff",
            formatter: (value) => {
                return value;
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "solid",
                color: "rgba(199, 209, 219, 0.4)"
            }
        },

        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: "category",
        name: "次数",
        nameTextStyle: {
            color: "#fff"
        },
        data: data.map(item => item.name),
        axisLabel: {
            color: "#fff"
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
            name: "机构登录次数",
            type: "bar",
            barWidth: 14,
            data: data.map(item => item.value)
        }

    ]
}