<template>
    <div>
        <p class="english">{{englishTitle}}</p>
        <div class="red-line"></div>
        <p class="chinese">{{chineseTitle}}</p>
        <div class="gray-line"></div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            englishTitle: String,
            chineseTitle: String
        }
    }
</script>

<style lang="scss" scoped>
    .english {
        margin: 0;
        line-height: 14px;
        font-size: 14px;
        text-align: center;
    }

    .chinese {
        margin: 0;
        line-height: 14px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
    }

    .red-line {
        margin: 8px auto;
        background-color: #c30d23;
        height: 2px;
        width: 32px;
    }

    .gray-line {
        margin: 8px auto;
        background-color: gray;
        height: 1px;
        width: 48px
    }
</style>