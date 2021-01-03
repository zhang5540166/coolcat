<template>
    <div class="employ" id="join">
        <Title english-title="再不加入 我们就不带你玩了" chinese-title="快到碗里来"/>
        <p class="info">如果你是对品牌有出色的见地，对设计有独特的品味，对活动有可靠的执行，如果认同凉猫的理念，想要加入一个足够优秀的团队，那么不要犹豫，快来加入吧。</p>
        <div class="jd">
            <div class="job">
                <p class="job-name">资深文案</p>
                <p class="job-english">Senior Copywriter</p>
                <div class="divider"></div>
                <p class="job-num">招聘人数: 1人</p>
            </div>
            <div class="job">
                <p class="job-name">视觉设计师</p>
                <p class="job-english">Visual Designer</p>
                <div class="divider"></div>
                <p class="job-num">招聘人数: 1人</p>
            </div>
            <div class="job">
                <p class="job-name">营销策划</p>
                <p class="job-english">Marketing Planning</p>
                <div class="divider"></div>
                <p class="job-num">招聘人数: 2人</p>
            </div>
            <div class="job">
                <p class="job-name">实习生</p>
                <p class="job-english">Intern</p>
                <div class="divider"></div>
                <p class="job-num">招聘人数: 2人</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from './Title';

    export default {
        name: "Employ",
        components: {
            Title
        }
    }
</script>

<style lang="scss" scoped>
    .employ {
        padding: 30px;
        border-bottom: 1px solid #ddd;

        .info {
            margin: 7px 0;
            font-size: 7px;
            color: #231815;
        }

        .jd {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;

            .job {
                position: relative;
                width: 56px;
                height: 100px;
                border: 1px solid gray;

                .job-name {
                    font-size: 8px;
                    margin: 10px 0 5px;
                }

                .job-english {
                    font-size: 6px;
                    margin: 0;
                }

                .job-num {
                    position: absolute;
                    bottom: 12px;
                    width: 100%;
                    font-size: 6px;
                    margin: 0;
                }

                .divider {
                    position: absolute;
                    bottom: 27px;
                    left: 50%;
                    margin-left: -11px;
                    width: 22px;
                    height: 1px;
                    background-color: #c30d23;
                }
            }
        }
    }
</style>