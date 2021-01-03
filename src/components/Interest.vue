<template>
    <div class="interest">
        <div class="title">
            <p class="english">Are you interested in ?</p>
            <p class="chinese">感兴趣吗?</p>
            <div class="red-line"></div>
        </div>
        <p class="info">有关我们服务的更多信息，请联系</p>
        <p class="info">15382389927王先生/18814884226席先生</p>
    </div>
</template>

<script>
    export default {
        name: "Interest"
    }
</script>

<style lang="scss" scoped>
    .interest {
        padding: 30px;

        .title {
            .english {
                font-size: 30px;
                line-height: 30px;
                margin: 0 0 16px;
            }

            .chinese {
                margin: 0 0 8px;
                line-height: 20px;
                font-size: 20px;
                font-weight: bold;
            }

            .red-line {
                margin: 8px auto;
                background-color: #c30d23;
                height: 2px;
                width: 32px;
            }
        }

        .info {
            margin: 0 0 4px;
            font-size: 7px;
        }
    }
</style>