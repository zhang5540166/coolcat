<template>
    <div class="footer">
        <div class="left">
            <p class="line"><span class="bold">NEW MORE</span>杭州凉猫文化创意有限公司</p>
            <p class="line">Add:浙江省杭州市江干区下沙万豪国际1幢1205室 P.C: 310000</p>
            <p class="line">E-mail: 854786234@qq.com</p>
            <p class="line">Copyright © 2016-2021 凉猫文化版权所有</p>
            <p class="line">
                <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2020044531号</a>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011802002200" target="_blank"
                   class="police">浙公网安备33011802002200号</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>

    .footer {
        display: flex;
        justify-content: space-between;
        padding: 24px 32px;
        background-color: #c30d23;
        color: white;

        .left {
            flex-basis: 48%;
            margin-left: 4px;
        }

        .right {
            flex-basis: 48%;

            .contact {
                margin-top: 10px;
                width: 80px;
            }
        }

        .line {
            text-align: left;
            font-size: 6px;
            margin: 0 0 6px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            &.double-margin {
                margin-bottom: 14px;
            }

            .bold {
                font-size: 8px;
                font-weight: bold;
                margin-right: 4px;
            }

            > a {
                color: white;
                text-decoration: none;
                margin-right: 8px;

                &.police {
                    background: url("../assets/police.png") left no-repeat;
                    background-size: 8px;
                    padding-left: 12px;
                }
            }
        }
    }
</style>