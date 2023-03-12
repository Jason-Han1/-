var dataset = [
    {
        "date":"2020-07-09",
        "top1":2291224,
        "top1_name":"cloud.generic",
        "top2":1046600,
        "top2_name":"heartbeat",
        "top3":848230,
        "top3_name":"/10a/v1/device/devicedetail",
        "top4":760854,
        "top4_name":"/SmartBulb/v1/device/devicedetail",
        "top5":253607,
        "top5_name":"/15a/v1/device/devicedetail",
        "top6":173738,
        "top6_name":"/inwallswitch/v1/device/devicedetail",
        "top7":152912,
        "top7_name":"/outdoorsocket15a/v1/device/devicedetail",
        "top8":143896,
        "top8_name":"getFirmwareUpdateInfoList",
        "top9":99133,
        "top9_name":"/131airPurifier/v1/device/deviceDetail",
        "top10":69172,
        "top10_name":"bypass",
        "totalSum":4866539,
        "otherSum":809356
    },
    {
        "date":"2020-07-10",
        "top1":1762486,
        "top1_name":"cloud.generic",
        "top2":799123,
        "top2_name":"heartbeat",
        "top3":684676,
        "top3_name":"/10a/v1/device/devicedetail",
        "top4":624948,
        "top4_name":"/SmartBulb/v1/device/devicedetail",
        "top5":198458,
        "top5_name":"/15a/v1/device/devicedetail",
        "top6":126074,
        "top6_name":"/inwallswitch/v1/device/devicedetail",
        "top7":120893,
        "top7_name":"/outdoorsocket15a/v1/device/devicedetail",
        "top8":105994,
        "top8_name":"getFirmwareUpdateInfoList",
        "top9":79785,
        "top9_name":"/131airPurifier/v1/device/deviceDetail",
        "top10":64998,
        "top10_name":"bypass",
        "totalSum":3821454,
        "otherSum":622452
    }]

option = {
    "color":[
        "#e95464",
        "#E87C25",
        "#FCCE10",
        "#69b076",
        "#B5C334",
        "#a69425",
        "#bf783a",
        "#cc7eb1",
        "#758a99",
        "#a0d8ef"],
    "tooltip":{
        "trigger":"axis",
        "axisPointer":{
            "type":"shadow"
        },
        "formatter":(param) => {
            // console.log(param)
            let data = param[0].data
            let date = param[0].name
            let str = `<span style='font-weight:bold; font-size: 18px;'>${date}</span><br />总访问量：${data.totalSum}<br />`

            for (let i = 0; i < param.length; i++) {
                // let bar = param[i]
                str += `${data['top' + (i + 1) + '_name']}：${data['top' + (i + 1)]}<br />`
            }

            str += `其他：${data.otherSum}`
            return str
        }
    },
    "grid":{
        "containLabel":true,
        "left":40,
        "right":60,
        "bottom":40,
        "top":40
    },
    "xAxis":{
        "type":"value",
        "name":"访问量"
    },
    "yAxis":{
        "type":"category"
    },
    "dataset":{
        "dimensions":["date"],
        "source": dataset
    },
    "series":[]
}

for (let i = 0; i < 10; i++) {
    option.dataset.dimensions.push(`top${(i + 1)}`)
    option.series.push({
        type: 'bar',
        cursor: 'default',
        label: {
            normal: {
                show: true,
                position: 'insideLeft',
                color: '#000',
                fontSize: 14,
                textBorderColor: '#333',
                textBorderWidth: 0,
                formatter: (data) => {
                    return `${data.value['top' + (i + 1) + '_name']}：${data.value['top' + (i + 1)]}`
                }
            }
        },
        itemStyle: {
            barBorderRadius: [0, 50, 50, 0]
        }
    })
}
