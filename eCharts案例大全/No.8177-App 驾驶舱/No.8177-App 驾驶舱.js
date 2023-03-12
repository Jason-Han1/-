option = {

    title: {
        text: 'App 驾驶舱'
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: {
        type: 'sankey',
        data: data.nodes,
        links: data.links,
        focusNodeAdjacency: 'allEdges',
        itemStyle: {
            borderWidth: 1,
            borderColor: '#aaa'
        },
        lineStyle: {
            color: 'source',
            curveness: 0.5
        }

        ,
        data: [{
                "name": "KPI中心"
            },
            {
                "name": "业绩细分"
            },
            {
                "name": "车商数据"
            },
            {
                "name": "人效指标"
            },
            {
                "name": "金融产品"
            },
            {
                "name": "客户体验"
            },
            {
                "name": "增值业务"
            },
            {
                "name": "贷后抵押"
            },
            {
                "name": "销售体检表"
            },
            {
                "name": "车商体检表"
            },

            {
                "name": "rpt_app_sale_health_info_sum"
            },
            {
                "name": "rpt_app_sale_health_info"
            },
            {
                "name": "rpt_app_sale_health_info_car_sum"
            },
            {
                "name": "rpt_app_sale_health_info_car"
            },

            {
                "name": "rpt_app_sale_health_visit_dealer_info"
            },
            {
                "name": "riskyy_top"
            },

            {
                "name": "ed_sale_risk_vip"
            },
            {
                "name": "ed_sale_month_kpi_info"
            },


            {
                "name": "rpt_app_dealer_health_info_sum"
            },
            {
                "name": "rpt_app_dealer_health_info"
            },
            {
                "name": "rpt_app_dealer_health_card"
            },
            {
                "name": "riskyy_dealer_top"
            },
            {
                "name": "crm_dm_market​"
            },

            {
                "name": "rpt_app_achievement_daily"
            },
            {
                "name": "rpt_app_achievement_funnel_cnt"
            },

            {
                "name": "rpt_app_dealer"
            },
            {
                "name": "rpt_app_dealer_loan"
            },
            {
                "name": "rpt_app_dealer_visit"
            },
            {
                "name": "rpt_app_dealer_detail_info"
            },
            {
                "name": "rpt_app_dealer_status_info"
            },

            {
                "name": "rpt_app_health_employee_info_daily"
            },
            {
                "name": "rpt_app_health_employee_cnt_daily"
            },
            {
                "name": "report_eliminate_saler_detail_daily"
            },

            {
                "name": "rpt_app_product_app_info"
            },
            {
                "name": "rpt_app_product_loan_info"
            },

            {
                "name": "rpt_app_health_cus_exp"
            },

            {
                "name": "rpt_app_value_added"
            },


            {
                "name": "ods_order_base_detail_all_in_out"
            },
            {
                "name": "riskyy_feidan"
            },
            {
                "name": "ods_order_value_added_detail"
            },
            {
                "name": "rpt_eliminate_saler_detail_daily"
            },
            {
                "name": "ods_employee_org_struct_info_daily"
            },
            {
                "name": "ods_employee_org_struct_info"
            },
            {
                "name": "eb_sale_health"
            },


            {
                "name": "dim_dealer_info"
            },
            {
                "name": "eb_dealer_health"
            },
            {
                "name": "crm_dm_visit"
            },
            {
                "name": "crm_dm_dealer"
            },

            {
                "name": "sy_kpi_config_all_dept"
            },
            {
                "name": "sy_kpi_type"
            },
            {
                "name": "sy_kpi_config"
            },
            {
                "name": "ods_loan_mortgage_base_detail_info"
            },
            {
                "name": "rpt_app_mortgage_overdue_detail_info"
            },
            {
                "name": "rpt_app_mortgage_info"
            }
        ],
        links: [{
                "source": "rpt_app_achievement_daily",
                "target": "KPI中心",
                "value": 1
            },
            {
                "source": "sy_kpi_config_all_dept",
                "target": "KPI中心",
                "value": 1
            },
            {
                "source": "sy_kpi_type",
                "target": "KPI中心",
                "value": 1
            },
            {
                "source": "sy_kpi_config",
                "target": "KPI中心",
                "value": 1
            },


            {
                "source": "rpt_app_achievement_daily",
                "target": "业绩细分",
                "value": 1
            },
            {
                "source": "rpt_app_achievement_funnel_cnt",
                "target": "业绩细分",
                "value": 1
            },

            {
                "source": "rpt_app_dealer",
                "target": "车商数据",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_loan",
                "target": "车商数据",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_visit",
                "target": "车商数据",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_detail_info",
                "target": "车商数据",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_status_info",
                "target": "车商数据",
                "value": 1
            },


            {
                "source": "rpt_app_health_employee_info_daily",
                "target": "人效指标",
                "value": 1
            },
            {
                "source": "rpt_app_health_employee_cnt_daily",
                "target": "人效指标",
                "value": 1
            },
            {
                "source": "report_eliminate_saler_detail_daily",
                "target": "人效指标",
                "value": 1
            },

            {
                "source": "rpt_app_product_app_info",
                "target": "金融产品",
                "value": 1
            },
            {
                "source": "rpt_app_product_loan_info",
                "target": "金融产品",
                "value": 1
            },


            {
                "source": "rpt_app_health_cus_exp",
                "target": "客户体验",
                "value": 1
            },

            {
                "source": "rpt_app_value_added",
                "target": "增值业务",
                "value": 1
            },

            {
                "source": "rpt_app_mortgage_info",
                "target": "贷后抵押",
                "value": 1
            },
            {
                "source": "rpt_app_mortgage_overdue_detail_info",
                "target": "贷后抵押",
                "value": 1
            },

            {
                "source": "rpt_app_dealer_health_info_sum",
                "target": "车商体检表",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_health_card",
                "target": "车商体检表",
                "value": 1
            },
            {
                "source": "riskyy_dealer_top",
                "target": "车商体检表",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_health_info",
                "target": "rpt_app_dealer_health_info_sum",
                "value": 1
            },
            {
                "source": "crm_dm_visit",
                "target": "rpt_app_dealer_health_info_sum",
                "value": 1
            },
            {
                "source": "eb_dealer_health",
                "target": "rpt_app_dealer_health_info_sum",
                "value": 1
            },


            {
                "source": "crm_dm_dealer",
                "target": "rpt_app_dealer_health_card",
                "value": 1
            },
            {
                "source": "crm_dm_market​",
                "target": "rpt_app_dealer_health_card",
                "value": 1
            },

            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_dealer_health_info",
                "value": 1
            },
            {
                "source": "riskyy_feidan",
                "target": "rpt_app_dealer_health_info",
                "value": 1
            },
            {
                "source": "dim_dealer_info",
                "target": "rpt_app_dealer_health_info",
                "value": 1
            },
            {
                "source": "ods_order_value_added_detail",
                "target": "rpt_app_dealer_health_info",
                "value": 1
            },


            {
                "source": "ods_employee_org_struct_info",
                "target": "销售体检表",
                "value": 1
            },
            {
                "source": "rpt_app_sale_health_info_sum",
                "target": "销售体检表",
                "value": 1
            },
            {
                "source": "rpt_app_sale_health_info_car_sum",
                "target": "销售体检表",
                "value": 1
            },
            {
                "source": "rpt_app_sale_health_visit_dealer_info",
                "target": "销售体检表",
                "value": 1
            },
            {
                "source": "riskyy_top",
                "target": "销售体检表",
                "value": 1
            },
            {
                "source": "crm_dm_visit",
                "target": "rpt_app_sale_health_visit_dealer_info",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_loan",
                "target": "rpt_app_sale_health_visit_dealer_info",
                "value": 1
            },
            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_sale_health_visit_dealer_info",
                "value": 1
            },
            {
                "source": "crm_dm_dealer",
                "target": "rpt_app_sale_health_visit_dealer_info",
                "value": 1
            },


            {
                "source": "crm_dm_visit",
                "target": "rpt_app_sale_health_info_car_sum",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_loan",
                "target": "rpt_app_sale_health_info_car_sum",
                "value": 1
            },
            {
                "source": "rpt_app_sale_health_info_car",
                "target": "rpt_app_sale_health_info_car_sum",
                "value": 1
            },
            {
                "source": "ods_employee_org_struct_info",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },
            {
                "source": "ods_employee_org_struct_info_daily",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },
            {
                "source": "crm_dm_dealer",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },
            {
                "source": "rpt_app_achievement_daily",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },
            {
                "source": "rpt_app_dealer_loan",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },
            {
                "source": "rpt_app_dealer",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },
            {
                "source": "crm_dm_visit",
                "target": "rpt_app_sale_health_info_car",
                "value": 1
            },

            {
                "source": "rpt_app_sale_health_info",
                "target": "rpt_app_sale_health_info_sum",
                "value": 1
            },
            {
                "source": "ed_sale_month_kpi_info",
                "target": "rpt_app_sale_health_info_sum",
                "value": 1
            },
            {
                "source": "eb_sale_health",
                "target": "rpt_app_sale_health_info_sum",
                "value": 1
            },
            {
                "source": "ods_employee_org_struct_info",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "ods_employee_org_struct_info_daily",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "rpt_eliminate_saler_detail_daily",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "eb_sale_health",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "ed_sale_risk_vip",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "rpt_app_achievement_daily",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "rpt_app_health_cus_exp",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "rpt_app_product_loan_info",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },
            {
                "source": "rpt_app_value_added",
                "target": "rpt_app_sale_health_info",
                "value": 1
            },


            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_achievement_daily",
                "value": 1
            },
            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_achievement_funnel_cnt",
                "value": 1
            },
            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_product_app_info",
                "value": 1
            },
            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_product_loan_info",
                "value": 1
            },
            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_health_cus_exp",
                "value": 1
            },
            {
                "source": "rpt_app_achievement_daily",
                "target": "人效指标",
                "value": 1
            },

            {
                "source": "ods_order_value_added_detail",
                "target": "rpt_app_value_added",
                "value": 1
            },

            {
                "source": "rpt_eliminate_saler_detail_daily",
                "target": "report_eliminate_saler_detail_daily",
                "value": 1
            },
            {
                "source": "rpt_app_health_employee_info_daily",
                "target": "rpt_app_health_employee_cnt_daily",
                "value": 1
            },
            {
                "source": "ods_employee_org_struct_info_daily",
                "target": "rpt_app_health_employee_info_daily",
                "value": 1
            },
            {
                "source": "ods_employee_org_struct_info",
                "target": "rpt_app_health_employee_info_daily",
                "value": 1
            },
            {
                "source": "eb_sale_health",
                "target": "rpt_app_health_employee_info_daily",
                "value": 1
            },
            {
                "source": "rpt_app_achievement_daily",
                "target": "rpt_app_health_employee_info_daily",
                "value": 1
            },


            {
                "source": "dim_dealer_info",
                "target": "rpt_app_dealer",
                "value": 1
            },
            {
                "source": "eb_dealer_health",
                "target": "rpt_app_dealer",
                "value": 1
            },

            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_dealer_loan",
                "value": 1
            },
            {
                "source": "riskyy_feidan",
                "target": "rpt_app_dealer_loan",
                "value": 1
            },
            {
                "source": "eb_dealer_health",
                "target": "rpt_app_dealer_loan",
                "value": 1
            },
            {
                "source": "dim_dealer_info",
                "target": "rpt_app_dealer_loan",
                "value": 1
            },

            {
                "source": "crm_dm_visit",
                "target": "rpt_app_dealer_visit",
                "value": 1
            },
            {
                "source": "dim_dealer_info",
                "target": "rpt_app_dealer_visit",
                "value": 1
            },
            {
                "source": "eb_dealer_health",
                "target": "rpt_app_dealer_visit",
                "value": 1
            },

            {
                "source": "dim_dealer_info",
                "target": "rpt_app_dealer_detail_info",
                "value": 1
            },
            {
                "source": "ods_order_base_detail_all_in_out",
                "target": "rpt_app_dealer_detail_info",
                "value": 1
            },
            {
                "source": "crm_dm_visit",
                "target": "rpt_app_dealer_detail_info",
                "value": 1
            },
            {
                "source": "riskyy_feidan",
                "target": "rpt_app_dealer_detail_info",
                "value": 1
            },
            {
                "source": "eb_dealer_health",
                "target": "rpt_app_dealer_detail_info",
                "value": 1
            },
            {
                "source": "crm_dm_dealer",
                "target": "rpt_app_dealer_status_info",
                "value": 1
            },


            {
                "source": "ods_loan_mortgage_base_detail_info",
                "target": "rpt_app_mortgage_info",
                "value": 1
            },
            {
                "source": "ods_loan_mortgage_base_detail_info",
                "target": "rpt_app_mortgage_overdue_detail_info",
                "value": 1
            },

            {
                "source": "riskyy_feidan",
                "target": "rpt_app_achievement_daily",
                "value": 1
            },
            {
                "source": "riskyy_feidan",
                "target": "rpt_app_product_loan_info",
                "value": 1
            }
        ]
    }
};