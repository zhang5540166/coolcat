<template>
    <div class="banner">
        <img src="../assets/banner.png" width="100%" alt="">
        <p class="company-info">
            凉猫文化成立于2016年，是一家集活动策划、品牌设计、视频拍摄、广告策划、舞台演绎为一体的营销策划活动公司。我们对自我的追求是--“开拓”、“靠谱”、“情怀”。
            <br>
            Founded in 2016, cool cat culture is a marketing planning activity company integrating event planning, brand
            design, video shooting, advertising planning and stage performance.Our pursuit of self is "development",
            "reliability", "feelings".
        </p>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    .banner {
        position: relative;
    }
    .company-info {
        position: absolute;
        bottom: 27px;
        margin: 0 15px;
        color: white;
        font-size: 7px;
        line-height: 14px;
        text-align: left;
    }
</style>