<template>
    <div class="client" id="partner">
        <Title english-title="OUR CLIENTS" chinese-title="我们的客户"/>
        <el-carousel class="client-swipe" indicator-position="none" arrow="always">
            <el-carousel-item>
                <img src="../assets/clients/client1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/clients/client2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/clients/client3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/clients/client4.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/clients/client5.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/clients/client6.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/clients/client7.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import Title from './Title';

    export default {
        name: "Client",
        components: {
            Title
        }
    }
</script>

<style lang="scss">
    .client {
        padding: 30px 0;
        border-bottom: 1px solid #ddd;

        .client-swipe {
            /*margin: 30px auto 0;*/
            /*height: 84px;*/

            .el-carousel__container {
                height: 22vw;
                max-height: 220px;

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