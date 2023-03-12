// 内圈
var img = `data:image/png;base64,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`;
var trafficWay = [{
        name: "生产",
        value: 123,
    },
    {
        name: "流通",
        value: 234,
    },
    {
        name: "餐饮",
        value: 345,
    },
];

var data = [];
var color = ["#11D9A1", "#FDBE00", "#0291FD"];
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 0,
                borderColor: color[i],
                shadowColor: color[i],
            },
        },
    }, {
        //间隙
        value: 0,
        name: "",
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
            },
        },
    });
}
var seriesOption = [{
    name: "",
    type: "pie",
    roseType: "radius",
    clockWise: true,
    // radius: [36, 39],
    // center: ["100", "50%"],
    center: ["50%", "50%"],
    radius: ["45%", "75%"],
    hoverAnimation: true,
    itemStyle: {
        normal: {
            label: {
                show: false,
            },
            labelLine: {
                length: 0,
                length2: 1,
                show: false,
                color: "#00ffff",
            },
        },
    },
    data: data,
}, ];
var option = {
    backgroundColor: "",
    color: color,
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: img,
                width: 350,
                height: 350,
            },
            // left: "70",
            left: "385",
            top: "center",
            position: [100, 100],
        }, ],
    },
    tooltip: {
        confine: true,
        show: false,
    },
    legend: {
        icon: "circle",
        orient: "vertical",
        data: [{
                name: "生产",
                // 强制设置图形为圆。
                icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAjBJREFUSA3tVTtrFFEUPmczyeBu4+wkFvEBhqQIBlJssJAs4g9Y0pnGB4jWEtKkSxqLdAGxVcLEFBYW5g8kpLARLFQUdibrmjXgMyLM7mzYucczLndynZ1Jdt2QQjwwnOf9vjvnzL0DcAyCR8mRoxe9pffvcqj1bX87e/WjxE5J4yh0yXn7hhriufC8immv3JSYmjS60QO2NSyAZgngJQKeAKRt1q8lZkhyassa9wXk9fTJhzuDhaosOEgbzuqkhj76AbCAKSIojg+fOb+OVxrqurBdDaAJQXS/5u5+yDrW/OnKU1MtjLMR/FxDwAb4Yjqt62O7I9cvRwmCdSGJAmKSoIVazS1nbWvJcJ6cU3KtJhFym265dW+pNdmMxJH8zhBQhojugvBsw7aWs8XVC0kgQZxn0J+UTyRRFvQC0Q1C/5VRtJ7x211Scm2Z4eAPrea2cE2Bh1vgN9vkrS/y/jnGzTpE2idRgYjyjJ3nkKuGk+x22pW0lnkoEyaJzMGdtXToK0ZXJApO0LSLNfdH2Sw+nlLjgR1Pgljmfn9FxE/81VT4+cl+iZ8/DlkUjOfTL1DcicZjSTK6Poo9NJdCvN2naXke8iM+aEMMwuQHC38JPdGKWJJoUbf+f5KOOvjvtCv2Wql69Xt8LY0KENU9n75wbyb4d7rIvhmcuk4lloSvi5l9sCYqx3Kdgsv6cCYIqboMdqN5My04fECbskCUeuCsDEn/b7Vv4Ofv5jW+hvblF12eu8hHEIpbAAAAAElFTkSuQmCC",
                // 设置文本为红色
                textStyle: {
                    color: color[0],
                },
            },
            {
                name: "流通",
                // 强制设置图形为圆。
                icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAi9JREFUSA3tVc1r1FAQn3lN4qZZpC2WHvWoLNhepEopZoWC4l2KZ696EDyIouDZQ9W/QaQHoT0qlGgr0lJBe/ADUelJcUVQaBPNJhlnEt7DbHvY7KKnDuzOezO/md+beR8B2JMKHcBusNFT93xG6T0GO93gcwzhT8uyzjrT2xtWN0FMMAMEI9QN2GCo3k6SEzzdUMb2Dwe7VkKvG078ffNwktG+gjs9AFxKr7KDJA68iaj1YYGADvaatDOuRCIEbWwvSf87gf3MzZ7EK964IUB8q1CdspR9FBXO9UMgsaaSdpo8kAoQ8Z1r2z5ObbUEED5xvojuR/JKaLk+CkRHJJEiuKIJ+kn8d2xeSagyG9LCnCJcCgNnVoP4TDX0uFdt2mUSEM2UDmtpYlCVBmbjK0VVBP8/EkzTqxUXVwmuiAiJwGy0jub7cZtP+DE+0pvatptm/zPbsicQ8GGnXyFui401EgwMnFYI13h8VwMxU4teM3zB81diY997peC6/gHCD7ET4LI856TwcYGDjHPdYNKLtfpITlz6nlDgWyE+b3HkMCf9zBW+5DWcYa048Kbrx7ckkQhf0nm2n0OEiJfwiN86n+OGOOHaYDM+XqCK/xJJHhy4s4DpfUlsgIhvBmn/JDa/bWlbFNQOZUjrfIn5hS5ECAmsk54frmub6B0kYgxX3ElKswvsHONK1mpDw3M4/jXvr/i10Ko3Fv1KLvOCGkzwSdlwpzb1+6P27+meOvAH7Z61Ks71AIAAAAAASUVORK5CYII=", // 设置文本为红色
                textStyle: {
                    color: color[1],
                },
            },
            {
                name: "餐饮",
                // 强制设置图形为圆。
                icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAA+xJREFUSA3VlV1oXEUUx89/7t3dpO22Vqk0iFihIForit/UaA1R04j4lRYKUluqWfvhpuiLLy1VfPClD7nbVd/al4JWVKQgsWmxtaVQtIKoqOAX+I2hRFO1ye7M3zOb3I9NstEnwXm4d86Z/5nfnDNz54r8X9pu0pgKnwgrXDXbmhE7gwo3i3NdgTEvTDyJj2P/P71XHGT+8595gGQfgOO2bFZPj2lA/Eqei/irCC8UwZgJ8GB9O45OF0+3l1S54Kzlmwro1rgJGDxAJ1eGRoazCzU+sPqizJsEeItFZ3lIU+/yVqu2bB/bFDDUAABWARuELIm4PZbcmY1rQFZcJecFqKUDbHdUUMQ7Ul/a85l/N9Yo0SqNo5appID1CrxfMxoNQjxvIu4KIq73UemeRO6kipo3DjinpVtT34aTKUIkjOygo5QbPpgBCLsaAGDcAL2kK5GyThdwzpVNsZGJFxuDsjptdjJd3QJX59vhXt4a+8Mqb4sBBrInAQiclmyjwrY0AD6AeMa/EkhtOz7UxHZ5Z3PTPXIcykW8yfudlQToiK2TJdIB4Gmx7FO7z+u0RC+7AVSn+v6VtmDQ7qfIo6kn7mmtBd1BICMTlnrEWUxGjFR01Zco4CHv0z063LkS9x67E3VvJ5l4w7fOa8xjKnpr0so+eYEFhy1lia7yo6YRoj8BCN5fJFgbA7wu2fhs0PKIhW/INyjszfon+3CaxYzF+TEIThcXomd0E0azcbNCvGDtQQav/yKPC+ViA5d3Dk/p5O3ZYD0tO0B3BYkNegAOdHSYHd+vw19NGjVaQrLC9iovHa/zPYUsS/34Iwhwuz8wWiqtMHQrZ2+zpp2VFqpcPm55ohngFZxvHY/kBnn9XACvnBOSf4lX1zyAvMyLfdMJj+tzrGGQi60oqMobG3aLR0tIrsIb6jUeU8DSONYDOpZijd4CDytt6hrSU2c5HH9HsTb7nhWid1anXnJHFXBRLFbAB4vn4z6/sXpDD+tJ6o/HVLdIMzqc28ubE1+mMwOigLv1cnxHAxcmOuDTeQY9I5unyqQDtoz9GvxsovEgp6CItyS+qU7T6dIfl/4P+Kpuaj4RAl+1FdD5Zwk/Jb5MJ4jsPr2rNqYu/R8JeuoDOBX7kkx8iRTwWhNA8EM+h+5WAD/JtQXTr6U8Ek+o8UUnHMpXuDL2JRC9nh9RQRgP6AkaCUPcdX4Lvk19M3tnSqjpNeIPQuaXzaKlS/YshcB8nUwB/KYf2j0T2/BZ4pujc7aM3wuCXgX9GMsI82XcT/Zk9bsMT3wivfrZXpcL5JXxrfgiFv3bd1uFl9ed20QxZ3aW5dBu+HvuP2p/A9rqtJW0v4XrAAAAAElFTkSuQmCC", // 设置文本为红色
                textStyle: {
                    color: color[2],
                },
            },
        ],
        itemWidth: "20",
        itemHeight: "21",
        x: "right", //可设定图例在左、右、居中
        y: "center", //可设定图例在上、下、居中
        symbolKeepAspect: true,
        align: "right",
        itemGap: 10,
        formatter: function(name) {
            var target = 0;
            if (name == trafficWay[0].name) {
                target = trafficWay[0].value;
            } else if (name == trafficWay[1].name) {
                target = trafficWay[1].value;
            } else if (name == trafficWay[2].name) {
                target = trafficWay[2].value;
            }
            var arr = [name + " \n" + target];
            return arr.join("\n");
        },
        // textStyle: {
        //   rich: {
        //     a: {
        //       width: 90,
        //     },
        //   },
        // },
    },
    toolbox: {
        show: false,
    },
    series: seriesOption,
};