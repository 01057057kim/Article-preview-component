<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
    <article class="text-[14px] font-manrope bg-white w-[450px] h-[320px] rounded-r-xl p-10 flex flex-col gap-5">
        <h1 class="font-bold text-xl">
            Shift the overall look and feel by adding these wonderful
            touches to furniture in your home
        </h1>
        <p class="w-[400px] mb-3">
            Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.
        </p>
        <div class="flex justify-between">
            <div class="flex items-center">
                <img class="w-[50px] rounded-full" src="../assets/images/avatar-michelle.jpg" alt="profile michelle">
                <div class="ml-5">
                    <p class="font-semibold mb-1">Michelle Appleton</p>
                    <p>28 Jun 2020</p>
                </div>
            </div>
            <div class="flex items-center">
                <transition name="fade">
                    <div v-if="show" class="absolute flex items-center justify-center bg-v-d-g-blue p-4 w-[250px] rounded-xl gap-4 -translate-x-[104px] -translate-y-[70px] z-20">
                        <h2 class="font-extralight uppercase tracking-[6px] text-white mr-2">Share</h2>
                        <a href="#"><img class="transform hover:duration-150 hover:ease-in-out hover:scale-125" src="../assets/images/icon-facebook.svg" alt="facebook"></a>
                        <a href="#"><img class="transform hover:duration-150 hover:ease-in-out hover:scale-125" src="../assets/images/icon-twitter.svg" alt="twitter"></a>
                        <a href="#"><img class="transform hover:duration-150 hover:ease-in-out hover:scale-125" src="../assets/images/icon-pinterest.svg" alt="pinterest"></a>
                        <div v-if="show" class="absolute flex bg-v-d-g-blue w-5 h-5 z-15 rotate-45  translate-y-[25px]"></div>
                    </div>
                </transition>
                <button @click="show = !show" class="transform hover:duration-150 hover:ease-in-out hover:scale-125">
                    <img class="rounded-full bg-l-g-blue p-3" src="../assets/images/icon-share.svg" alt="share">
                </button>
            </div>
        </div>
    </article>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active 
{
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to 
{
    opacity: 0;
}
</style>