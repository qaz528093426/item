<template>
    <div class="m-relation-plans">
        <el-row :gutter="20" v-if="relation_plans.length">
            <el-col :span="12" v-for="(plan, key) in relation_plans" :key="key">
                <div class="u-plan">
                    <span v-if="plan.type == 1" class="u-type" :class="'u-type-' + plan.type">
                        <img :src="plan_1_icon" />
                    </span>
                    <span v-if="plan.type == 2" class="u-type" :class="'u-type-' + plan.type">
                        <img :src="plan_2_icon" />
                    </span>
                    <router-link
                        class="u-name"
                        v-text="plan.title"
                        :to="{ name: 'plan_view', params: { plan_id: plan.id } }"
                    ></router-link>
                    <span class="u-desc" v-text="plan.description"></span>
                </div>
            </el-col>
        </el-row>
        <div v-else style="text-align:center">🐖 暂无记录</div>
    </div>
</template>

<script>
const { JX3BOX } = require("@jx3box/jx3box-common");
import { get_item_relation_plans } from "../service/item";

export default {
    name: "RelationPlans",
    props: ["item_id"],
    data() {
        return {
            relation_plans: [],
            plan_2_icon: JX3BOX.__iconPath + "icon/2410.png",
            plan_1_icon: JX3BOX.__iconPath + "icon/3089.png",
        };
    },
    watch: {
        item_id: {
            immediate: true,
            handler() {
                if (this.item_id) {
                    get_item_relation_plans(this.item_id, { limit: 6 }).then(
                        (data) => {
                            data = data.data;
                            if (data.code === 200)
                                this.relation_plans = data.data.data;
                        },
                        (err) => {
                            this.relation_plans = [];
                        }
                    );
                }
            },
        },
    },
};
</script>

<style lang="less">
@import "../assets/css/components/relation_plans.less";
</style>
