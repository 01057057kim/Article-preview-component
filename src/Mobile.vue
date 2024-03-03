<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
    <main class="m-0 p-0 box-border min-w-[375px] max-w-full min-h-screen bg-l-g-blue">
        <section class="grid place-content-center h-screen">
            <img class="w-[400px] rounded-t-xl object-cover object-top h-[260px]" src="./assets/images/drawers.jpg" alt="">
            <article class="text-[14px] font-manrope bg-white w-[400px] h-[332px] rounded-b-xl p-10 flex flex-col gap-5">
                <h1 class="font-bold text-xl">
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p class="w-[320px] mb-4">
                    Ever been in a room and felt like something was missing? Perhaps
                    it felt slightly bare and uninviting. I’ve got some simple tips
                    to help you make any room feel complete.
                </p>
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <img class="w-[50px] rounded-full" src="./assets/images/avatar-michelle.jpg" alt="profile michelle">
                        <div class="ml-5">
                            <p class="font-semibold mb-1">Michelle Appleton</p>
                            <p>28 Jun 2020</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <transition name="fade">
                            <div v-if="show" class="absolute flex items-center justify-between bg-v-d-g-blue h-[80px] w-[400px] px-5 rounded-b-xl gap-4 -translate-x-[320px] translate-y-[3px] z-20">
                                <div class="flex items-center ml-5 gap-5">
                                    <h2 class="font-extralight uppercase tracking-[6px] text-white mr-2 select-none">Share</h2>
                                    <a href="#"><img class="transform hover:duration-150 hover:ease-in-out hover:scale-125" src="./assets/images/icon-facebook.svg" alt="facebook"></a>
                                    <a href="#"><img class="transform hover:duration-150 hover:ease-in-out hover:scale-125" src="./assets/images/icon-twitter.svg" alt="twitter"></a>
                                    <a href="#"><img class="transform hover:duration-150 hover:ease-in-out hover:scale-125" src="./assets/images/icon-pinterest.svg" alt="pinterest"></a>
                                </div>
                                <div class="-translate-x-5 ">
                                    <button @click="show = !show" class="transform hover:duration-150 hover:ease-in-out hover:scale-125">
                                        <img class="rounded-full bg-l-g-blue p-3" src="./assets/images/icon-share.svg"
                                            alt="share">
                                    </button>
                                </div>
                            </div>
                        </transition>
                        <button @click="show = !show" class="transform hover:duration-150 hover:ease-in-out hover:scale-125">
                            <img class="rounded-full bg-l-g-blue p-3" src="./assets/images/icon-share.svg" alt="share">
                        </button>
                    </div>
                </div>
            </article>
        </section>
    </main>
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