<template>
    <div class="banner2">
        <div class="left">
            <p class="first-line">客户说</p>
            <p class="last-line">随便搞搞...</p>
            <p class="last-line">我找凉猫干嘛?</p>
        </div>
        <div class="divider">

        </div>
        <div class="right">
            <p class="first-line">Sorry</p>
            <p class="last-line">If you are casual?</p>
            <p class="last-line">Not need your help!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner2"
    }
</script>

<style lang="scss" scoped>

    .banner2 {
        padding: 24px;
        display: flex;
        justify-content: space-between;
        background-color: #c30d23;
        color: white;
        text-align: left;

        .left {
            .first-line {
                font-size: 10px;
                margin: 12px 0;
            }

            .last-line {
                font-size: 14px;
                margin: 10px 0;
            }
        }

        .right {
            .first-line {
                font-size: 10px;
                margin: 12px 0;
            }

            .last-line {
                font-size: 14px;
                margin: 13px 0;
            }
        }

        .divider {
            height: 100px;
            width: 1px;
            background-color: white;
            transform: rotate(15deg);
        }
    }


</style>