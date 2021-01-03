<template>
    <div class="contact">
        <Title english-title="ABOUT NEW MORE" chinese-title="关于凉猫"/>
        <p class="company">从业九年、建队五年的专业活动策划公司</p>
        <p class="people">凉猫文化主创人员于2011年开始从事活动策划行业，致力于为优质企业、知名品牌、政府机关等量身定制专业、完善、创新、高效的公关活动方案。</p>
        <div class="good-parts">
            <div class="part">
                <p class="part-title">丰富的</p>
                <span class="part-info">演艺资源</span>
            </div>
            <div class="part">
                <p class="part-title">活力十足的</p>
                <span class="part-info">创业团队</span>
            </div>
            <div class="part">
                <p class="part-title">炙手可热的</p>
                <span class="part-info">宣传渠道</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from './Title'

    export default {
        name: "Contact",
        components: {
            Title
        }
    }
</script>

<style scoped>
    .contact {
        padding: 30px;
        border-bottom: 1px solid #ddd;
    }

    .company {
        padding: 0 20px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }

    .people {
        padding: 0 18px;
        text-align: center;
        font-size: 7px;
    }

    .good-parts{
        display: flex;
    }

    .part {
        flex-grow: 1;
    }

    .part-title {
        font-size: 17px;
        font-weight: bold;
        margin: 12px 0 8px;
    }

    .part-info {
        font-size: 10px;
    }
</style>