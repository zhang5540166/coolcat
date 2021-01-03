<template>
    <div>
        <div class="employ" id="join">
            <div class="banner">
                <div class="words">
                    <p>PARTNER</p>
                    <p>WORK MORE THAN WORK</p>
                    <p class="border">不只是工作，也可以是合作</p>
                </div>
            </div>
            <div class="title">
                <p>看看有没有适合你的岗位</p>
                <div class="red-border"></div>
                <p class="red-word">最新招聘信息</p>
            </div>
            <div class="jd">
                <div class="job" v-bind:class="{'show-more':isMore[0]}">
                    <p class="job-name">资深文案</p>
                    <p class="job-english">Senior Copywriter</p>
                    <p class="job-num"><span class="department">部门：品牌策划部</span><span>招聘人数:
                        <span class="num">1人</span></span>
                    </p>
                    <div class="more" v-bind:class="{'block': isMore[0]}">
                        <p>职位描述</p>
                        <ul>
                            <li>撰写品牌营销策划案、形象定位案、新产品上市案、促销案、广告口号、主题、及软文内容创意,
                                确保所撰写方案符合整体创意思路，切合品牌和活动，并满足独特、新颖、突破和可执行的要求。
                            </li>
                            <li>负责项目创意力提升工作，不断汲取和丰富策划创意的方法，积极提升自我的文案撰写水平。</li>
                            <li>不断收集非视觉创意类素材和资源，定时提交。</li>
                            <li>热爱广告，责任心强，积极向上，有较强的沟通表达能力及团队合作精神！</li>
                            <li>有新媒体运营经验1年以上。</li>
                        </ul>
                        <p>任职资格：</p>
                        <ul>
                            <li>优秀的文案撰写功底，能胜任任何类型的文案撰写工作；</li>
                            <li>具备一定活动策划的能力，能在上司指引下完成活动策划方案的撰写和美化；</li>
                            <li>良好的心理素质、责任心强、有团队精神及合作意识，能承受一定的工作压力与挑战；</li>
                            <li>熟悉广告运作流程，把握策略能力强;</li>
                            <li>熟悉 Powerpoint、word、 Excel 等办公软件的操作应用；</li>
                            <li>2年以上广告公司经验者优先；</li>
                            <li>能够独立与客户沟通，参与创作讨论，确保文案与设计不脱节。</li>
                        </ul>
                    </div>
                    <div class="expand" v-bind:class="{'reverse': isMore[0]}" v-on:click="showMore(0)">
                        <img src="../assets/expand@2x.png" alt="" width="100%">
                    </div>
                </div>
                <div class="job" v-bind:class="{'show-more':isMore[1]}">
                    <p class="job-name">视觉设计师</p>
                    <p class="job-english">Visual Designer</p>
                    <p class="job-num"><span class="department">部门：设计部</span><span>招聘人数:
                        <span class="num">1人</span></span></p>
                    <div class="more" v-bind:class="{'block': isMore[1]}">
                        <p>职位描述</p>
                        <ul>
                            <li>有手绘美术功底，有敏锐的创意思维能力，能绘制多种风格主题图；</li>
                            <li>构图能力强、色彩感觉好；</li>
                            <li>具有个性原创设计能力，能独立负责项目相关绘图制作相关工作；</li>
                            <li>负责进行方案的插画制作，独立完成插画图案设计，针对不同主题制作相应的设计；</li>
                            <li>较强的学习能力，具有良好的团队协作精神和工作热情，能承受较强的工作压力；</li>
                        </ul>
                        <p>任职资格：</p>
                        <ul>
                            <li>动漫设计、美术、艺术设计相关专业；</li>
                            <li>具备优秀的的美术功底，热爱绘画，精通设计绘画软件，熟悉像素和矢量美术,具有人物、UI及动画设计能力；</li>
                            <li>熟悉运用设计软件和手绘板,擅长绘本插画；</li>
                            <li>有较强的绘画功底，擅长插画、动漫、卡通的绘制，具有独特的原创能力；</li>
                            <li>有较强的领悟能力和设计表现力，能准确把握设计需求；</li>
                            <li>热爱本职工作，工作细心,责任心强，能承受工作压力，良好的沟通表达能力，有团队合作精神；</li>
                            <li>善于观察、捕捉生活，并且能够用画面表现出充沛、丰富的情感；</li>
                            <li>责任心强，对自己的作品追求完美。</li>
                        </ul>
                    </div>
                    <div class="expand" v-bind:class="{'reverse': isMore[1]}" v-on:click="showMore(1)">
                        <img src="../assets/expand@2x.png" alt="" width="100%">
                    </div>
                </div>
                <div class="job" v-bind:class="{'show-more':isMore[2]}">
                    <p class="job-name">营销策划</p>
                    <p class="job-english">Marketing Planning</p>
                    <p class="job-num"><span class="department">部门：策划部</span><span>招聘人数:
                        <span class="num">2人</span></span></p>
                    <div class="more" v-bind:class="{'block': isMore[2]}">
                        <p>职位描述</p>
                        <ul>
                            <li>负责项目推广的内容策划及活动宣传。</li>
                            <li>负责项目宣传图、项目网站文案拟定。</li>
                            <li>粉丝社群管理。</li>
                            <li>与设计合作，把文案转变成图片创意，引到用户。</li>
                            <li>与技术合作，沟通网站、平台问题，以及协助产品上线内测。</li>
                            <li>负责与客户对接。</li>
                            <li>参与项目活动策划以及执行。</li>
                        </ul>
                        <p>任职资格：</p>
                        <ul>
                            <li>广告学、市场营销、中文等专业本科及以上学历，中文文字功底深厚；</li>
                            <li>2年以上广告、设计、媒介、咨询或品牌建设相关行业工作经验，有甲方品牌管理部门工作背景；</li>
                            <li>熟练操作PPT、word、excel等办公软件；</li>
                            <li>有为大型客户提供品牌咨询、品牌建设相关服务的经验；</li>
                            <li>对企业战略管理和品牌战略有深刻的认识和理解并形成有效的知识体系与方法；</li>
                            <li>善于沟通，具备良好的分析问题和解决问题的能力；</li>
                            <li>具有良好的学习意识和能力，诚实勤奋乐观，成熟稳重，具有团队精神，适应多任务处理的工作压力。</li>
                        </ul>
                    </div>
                    <div class="expand" v-bind:class="{'reverse': isMore[2]}" v-on:click="showMore(2)">
                        <img src="../assets/expand@2x.png" alt="" width="100%">
                    </div>
                </div>
                <div class="job" v-bind:class="{'show-more':isMore[3]}">
                    <p class="job-name">实习生</p>
                    <p class="job-english">Intern</p>
                    <p class="job-num"><span class="department">部门：执行部</span><span>招聘人数:
                        <span class="num">2人</span></span></p>
                    <div class="more" v-bind:class="{'block': isMore[3]}">
                        <p>职位描述</p>
                        <ul>
                            <li>负责项目推广的内容策划及活动宣传。</li>
                            <li>负责项目宣传图、项目网站文案拟定。</li>
                            <li>粉丝社群管理。</li>
                            <li>与设计合作，把文案转变成图片创意，引到用户。</li>
                            <li>与技术合作，沟通网站、平台问题，以及协助产品上线内测。</li>
                            <li>负责与客户对接。</li>
                            <li>参与项目活动策划以及执行。</li>
                        </ul>
                        <p>任职资格：</p>
                        <ul>
                            <li>本科及以上学历；</li>
                            <li>对策划执行工作有浓厚的兴趣，抗压能力强，灵活应变；</li>
                            <li>熟练操作PPT、word、excel等办公软件；</li>
                            <li>有一定的文字功底和沟通能力；</li>
                            <li>吃苦耐劳，有团队协作意识；</li>
                            <li>善于沟通，具备良好的分析问题和解决问题的能力；</li>
                            <li>具有良好的学习意识和能力，诚实勤奋乐观，成熟稳重，具有团队精神，适应多任务处理的工作压力。</li>
                        </ul>
                    </div>
                    <div class="expand" v-bind:class="{'reverse': isMore[3]}" v-on:click="showMore(3)">
                        <img src="../assets/expand@2x.png" alt="" width="100%">
                    </div>
                </div>
                <div class="notice">
                    <h3>应聘流程及须知：</h3>
                    <p class="flow">首先请留意上面的招聘信息是否有合适你的职位。详细阅读职位要求并向我们发送你的个人简历以及相关作品，
                        我们将安排专人评审您的应聘邮件，通过对简历进行筛选进入以下流程》面试/复试》确认入职时间》报到》试用》入职。</p>
                    <p class="money">薪金要求：请于邮件内写明或面议（试用期工资80%）。</p>
                    <p class="time">
                        试用期：3个月
                        <br>
                        上班时间：周一至周五，早上9:00-12:00，下午13:30-17:00
                        <br>
                        有意者请发简历、作品和近照至 Hr@redwind.cn合则约见
                    </p>
                </div>
            </div>
        </div>
        <Interest/>
    </div>
</template>

<script>
    import Interest from '../components/Interest';

    export default {
        name: "Employ",
        components: {
            Interest
        },
        data: function () {
            return {
                isMore: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                }
            };
        },
        selected: function () {

        },
        methods: {
            showMore: function (index) {
                this.isMore = {
                    ...this.isMore,
                    [index]: !this.isMore[index]
                };
                console.log(this.isMore)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .employ {
        border-bottom: 1px solid #ddd;
        text-align: left;

        .banner {
            position: relative;
            background: url("../assets/banner2.png");
            background-size: 100% 100%;
            height: 168px;

            .words {
                position: absolute;
                top: 40px;
                width: 100%;
                text-align: center;
                color: white;

                > p {
                    font-size: 20px;
                    line-height: 20px;
                    margin: 0 0 10px;
                    font-weight: lighter;

                    &.border {
                        display: inline-block;
                        margin: 2px auto 0;
                        border: 1px solid white;
                        padding: 4px 12px;
                        font-size: 14px;
                        font-weight: normal;
                    }
                }
            }
        }

        .title {
            text-align: center;
            padding: 15px 30px;
            border-bottom: 1px solid #ddd;

            > p {
                margin: 0;
                font-size: 14px;
                letter-spacing: 2px;
            }

            .red-border {
                margin: 12px auto;
                width: 75px;
                height: 1px;
                background-color: #c30d23;
            }

            .red-word {
                color: #c30d23;
            }
        }

        .jd {

            .job {
                position: relative;
                padding: 16px 32px;
                /*height: 54px;*/
                border-bottom: 1px solid #ddd;
                overflow: hidden;

                &.show-more {
                    height: auto;
                }


                .job-name {
                    font-size: 15px;
                    color: #727171;
                    margin: 0 0 4px;
                }

                .job-english {
                    font-size: 14px;
                    color: #3e3a39;
                    margin: 0 0 4px;
                }

                .job-num {
                    font-size: 8px;
                    margin: 0 0 4px;

                    .num {
                        color: #c20606;
                    }

                    .department {
                        margin-right: 4px;
                        border-right: 1px solid #ddd;
                        padding-right: 4px;
                    }
                }

                .more {
                    font-size: 7px;
                    display: none;

                    &.block {
                        display: block;
                    }

                    > p {
                        margin: 16px 0 0;
                    }

                    ul {
                        margin: 0;
                        padding: 0 0 0 6px;

                        li {
                            list-style: decimal;
                        }
                    }
                }

                .expand {
                    width: 36px;
                    position: absolute;
                    top: 28px;
                    right: 30px;

                    &.reverse {
                        transform: rotate(180deg);
                    }
                }
            }

            .notice {
                padding: 15px 30px;

                h3 {
                    color: #c30d23;
                    font-size: 12px;
                    font-weight: normal;
                    margin: 0 0 6px;
                }

                .flow {
                    margin: 0 0 6px;
                    font-size: 7px;
                    color: #727171;
                }

                .money {
                    margin: 0 0 6px;
                    font-size: 8px;
                    font-weight: bold;
                }

                .time {
                    margin: 0;
                    font-size: 6px;
                    line-height: 10px;
                }
            }
        }
    }
</style>