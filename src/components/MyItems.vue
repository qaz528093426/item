<template>
    <div class="m-items-my">
        <div class="m-items-hotItems">
            <h3 class="c-sidebar-right-title">
                <i class="u-icon u-icon-mycollection">
                    <img svg-inline src="../assets/img/my.svg" />
                </i>
                <span>热门物品</span>
            </h3>
            <div class="m-items-my-list">
                <div class="u-list" v-if="hotitems && hotitems.length">
                    <router-link
                        class="u-item"
                        v-for="(item, key) in hotitems"
                        :key="key"
                        :to="{ name: 'view', params: { item_id: item.id } }"
                    >
                        <ItemIcon :item="item" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="m-items-myFav" v-if="isLogin">
            <h3 class="c-sidebar-right-title">
                <i class="u-icon u-icon-mycollection">
                    <img svg-inline src="../assets/img/my.svg" />
                </i>
                <span>收藏物品</span>
            </h3>
            <div class="m-items-my-list">
                <div class="u-list" v-if="data && data.length">
                    <router-link
                        class="u-item"
                        v-for="(item, key) in data"
                        :key="key"
                        :to="{ name: 'view', params: { item_id: item.id } }"
                    >
                        <ItemIcon :item="item" />
                    </router-link>
                </div>
                <a class="u-more" href="/dashboard/#/fav/item" target="_blank">查看更多 &raquo;</a>
            </div>
            <div v-if="isLogin && !data.length" class="u-tip">
                <i class="el-icon-warning-outline"></i> 暂无收藏物品
            </div>
        </div>
    </div>
</template>

<script>
import User from "@jx3box/jx3box-common/js/user";
import ItemIcon from "@/components/ItemIcon";
import { getStatRank } from "@jx3box/jx3box-common/js/stat";
import { get_items, getMyFavItems } from "@/service/item.js";
export default {
    name: "",
    props: [],
    data: function () {
        return {
            isLogin: User.isLogin(),
            // isLogin: true,
            data: [],
            hotitems: [],
            length: 24,
        };
    },
    computed: {},
    methods: {
        loadItems: function (ids, limit) {
            return get_items({ ids: ids, limit: limit });
        },
    },
    mounted: function () {
        if (this.isLogin) {
            // 我收藏的物品
            getMyFavItems({ type: "item", limit: 15 }).then((res) => {
                let list = res.data.data.data;
                let ids = [];
                if (list) {
                    list.forEach((item) => {
                        ids.push(item.post_id);
                    });
                }

                this.loadItems(ids, this.length).then((res) => {
                    this.data = res.data.data.data;
                });
            });
        }
        // 获取热门物品
        getStatRank("item").then((data) => {
            data = data.data;

            let ranks = [],
                item_ids = [];
            for (let i in data) {
                let name = this.$_.get(data, `${i}.name`, "-");
                let item_id = this.$_.get(name.split("-"), 1, "");
                if (item_id) {
                    item_ids.push(item_id);
                    ranks[item_id] = this.$_.get(data, `${i}.value`, {});
                }
            }

            this.loadItems(item_ids, this.length).then((res) => {
                this.hotitems = res.data.data.data;
                // this.data = res.data.data.data;
            });
        });
    },
    components: {
        ItemIcon,
    },
};
</script>
