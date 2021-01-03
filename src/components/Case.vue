<template>
    <div class="case" id="case">
        <Title english-title="ABOUT CASE" chinese-title="关于案例(部分)"/>
        <el-carousel class="case-swipe" indicator-position="none" arrow="always">
            <el-carousel-item>
                <img src="../assets/cases/case1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case4.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case5.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case6.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case7.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case8.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case9.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case10.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case11.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case12.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case13.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/cases/case14.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import Title from './Title';

    export default {
        name: "Case",
        components: {
            Title
        }
    }
</script>

<style lang="scss">
    .case {
        padding: 30px 0;
        border-bottom: 1px solid #ddd;

        .case-swipe {
            /*margin-top: 20px;*/
            /*height: 150px;*/

            .el-carousel__container {
                height: 54vw;
                max-height: 540px;

                .el-carousel__arrow--left {
                    left: 20px;
                    top: 40%;
                    background-color: rgba(31,45,61,.41);
                }

                .el-carousel__arrow--right {
                    right: 20px;
                    top: 40%;
                    background-color: rgba(31,45,61,.41);
                }
            }

            img {
                /*height: 100%;*/
                width: 100%;
            }
        }
    }
</style>