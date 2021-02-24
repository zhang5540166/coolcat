<template>
    <div class="menu" id="menu">
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="0" class="logo"></mt-tab-item>
            <mt-tab-item id="1">
                <router-link to="/">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="2">
                <router-link to="/#case">案例</router-link>
            </mt-tab-item>
            <mt-tab-item id="3">
                <router-link to="/#partner">合作伙伴</router-link>
            </mt-tab-item>
            <mt-tab-item id="4">
                <router-link to="/#join">加入</router-link>
            </mt-tab-item>
            <mt-tab-item id="5">
                <router-link to="employ">
                    <i class="right-btn">
                        <img src="../assets/icon.png" width="100%" slot="icon">
                    </i>
                </router-link>
            </mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
    }
</script>

<style scoped lang="scss">
    .menu {
        position: relative;
        height: 45px;
        padding: 0 60px;
        background: url("../assets/logo.png") 15px center no-repeat;
        background-size: 30px;
        z-index: 3;

        .logo {
            background: url("../assets/logo.png") 15px center no-repeat;
            background-size: 30px;
        }

        a {
            text-decoration: none;
            color: inherit;

            &:link {
                color: inherit;
            }
        }
    }

    .right-btn {
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -7px;
        width: 24px;
    }
</style>