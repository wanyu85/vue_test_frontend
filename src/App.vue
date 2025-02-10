<template>
  <div class="bg-customPrimary w-full h-dvh max-h-dvh overflow-hidden">
    <div class="grid grid-cols-12 border-b-2 border-zinc-600">
      <p class="col-start-1 col-end-11 bg-customGreen text-center text-white">
        Change Color
      </p>

      <!-- theme -->
      <button
        class="col-span-1 border-x-2 border-zinc-600 bg-customDark"
        @click="changeTheme('theme-black')"
      ></button>

      <button
        class="col-span-1 bg-customBlue"
        @click="changeTheme('theme-blue')"
      ></button>
    </div>

    <div
      class="flex justify-between bg-customMenuGray border-b-2 border-zinc-600 relative"
    >
      <!-- menu content -->
      <div
        class="transition-all duration-500"
        :class="menuVariantStyle.menuContent"
        style="box-shadow: inset -2px 0 2px 0 rgba(0, 0, 0, 0.2)"
      >
        <button
          v-if="isMenuOpen"
          class="pr-2 pt-2 absolute top-1 right-20"
          @click="isMenuOpen = !isMenuOpen"
        >
          <img :src="ClosureIcon" alt="ClosureIcon" class="w-5 h-5 ml-auto" />
        </button>

        <div class="flex flex-col gap-2 mx-5 mt-12">
          <div class="flex items-center gap-2 text-white">
            <img :src="HomeIcon" alt="HomeIcon" class="w-8 h-8" />
            <strong>Home</strong>
          </div>

          <div class="flex items-center gap-2 text-white">
            <img :src="ErrorCircleIcon" alt="ErrorCircleIcon" class="w-8 h-8" />
            <strong>Abort</strong>
          </div>

          <div
            v-for="postItem in 3"
            :key="postItem"
            class="flex items-center gap-2 text-white mx-1"
          >
            <img
              :src="PostIcon"
              alt="PostIcon"
              class="w-7 h-7 border-2 border-white rounded-full p-0.5"
            />
            <strong>Post {{ postItem }}</strong>
          </div>
        </div>
      </div>

      <div
        class="bg-customPrimary transition-all duration-500"
        :class="menuVariantStyle.container"
      >
        <div class="w-auto h-full col-span-6">
          <!-- menu icon -->
          <button @click="isMenuOpen = !isMenuOpen">
            <img
              :src="MenuIcon"
              alt="MenuIcon"
              class="bg-customPrimaryBg px-2 w-auto w-8 h-7 py-1 m-2 mt-3 rounded-sm"
            />
          </button>

          <!-- tab -->
          <div class="bg-customDark w-full h-auto flex gap-2 items-center py-3">
            <!-- left btn -->
            <button @click="setScroll('left')">
              <svg
                fill="none"
                height="30"
                viewBox="0 0 20 20"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3544 15.8527C12.1594 16.0484 11.8429 16.0489 11.6472 15.854L6.16276 10.389C5.94705 10.1741 5.94705 9.82477 6.16276 9.60982L11.6472 4.14484C11.8429 3.94993 12.1594 3.95049 12.3544 4.1461C12.5493 4.34171 12.5487 4.65829 12.3531 4.85321L7.18851 9.99942L12.3531 15.1456C12.5487 15.3406 12.5493 15.6571 12.3544 15.8527Z"
                  fill="white"
                />
              </svg>
            </button>

            <!-- search icon -->
            <button class="bg-customFocusBg max-w-14 h-7 px-2 py-1 rounded-md">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-customFocusColor"
              >
                <path
                  d="M11.7425 10.3432C12.7107 9.02177 13.1444 7.3834 12.9567 5.75589C12.769 4.12838 11.9739 2.63176 10.7303 1.56544C9.48666 0.49912 7.88635 -0.0582551 6.2495 0.00482458C4.61265 0.0679042 3.05997 0.746787 1.90209 1.90565C0.744221 3.06452 0.0665459 4.6179 0.00464636 6.25503C-0.0572531 7.89215 0.501188 9.49229 1.56825 10.7353C2.63531 11.9783 4.13229 12.7725 5.7597 12.9591C7.38711 13.1456 9.02494 12.7107 10.3455 11.7414H10.3445C10.3745 11.7814 10.4065 11.8194 10.4425 11.8564L14.2924 15.7068C14.4799 15.8944 14.7342 15.9999 14.9995 16C15.2647 16.0001 15.5192 15.8948 15.7068 15.7073C15.8944 15.5197 15.9999 15.2653 16 15C16.0001 14.7348 15.8948 14.4803 15.7073 14.2926L11.8575 10.4422C11.8217 10.406 11.7833 10.3736 11.7425 10.3432ZM12.0004 6.49882C12.0004 7.22116 11.8582 7.93643 11.5818 8.60379C11.3054 9.27115 10.9003 9.87753 10.3896 10.3883C9.87889 10.8991 9.2726 11.3043 8.60533 11.5807C7.93807 11.8571 7.2229 11.9994 6.50065 11.9994C5.77841 11.9994 5.06324 11.8571 4.39597 11.5807C3.72871 11.3043 3.12242 10.8991 2.61171 10.3883C2.10101 9.87753 1.6959 9.27115 1.41951 8.60379C1.14312 7.93643 1.00086 7.22116 1.00086 6.49882C1.00086 5.03998 1.5803 3.64089 2.61171 2.60933C3.64312 1.57777 5.04202 0.998251 6.50065 0.998251C7.95929 0.998251 9.35818 1.57777 10.3896 2.60933C11.421 3.64089 12.0004 5.03998 12.0004 6.49882Z"
                />
              </svg>
            </button>

            <div
              ref="scrollContainer"
              class="whitespace-nowrap flex gap-2 overflow-x-scroll text-xs font-bold"
            >
              <button
                class="px-3 py-2 rounded-md flex-shrink-0"
                :class="{
                  'bg-customFocusBg text-customFocusColor':
                    focusColor === 'all',
                  'bg-customBtnBg text-white': focusColor !== 'all',
                }"
                @click="focusColor = 'all'"
              >
                ALL
              </button>

              <button
                v-for="i in 9"
                :key="i"
                class="px-3 py-2 rounded-md max-w-full h-fit"
                :class="{
                  'bg-customFocusBg text-customFocusColor':
                    focusColor === 'tab' + i,
                  'bg-customBtnBg text-white': focusColor !== 'tab' + i,
                }"
                @click="focusColor = 'tab' + i"
              >
                TYPE {{ i }}
              </button>
            </div>

            <!-- right btn -->
            <button @click="setScroll('right')">
              <svg
                fill="white"
                height="30"
                viewBox="0 0 20 20"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <!-- content -->
          <div
            class="w-full p-5 max-h-[75vh] grid grid-cols-2 bg-customGray overflow-y-scroll"
            :style="menuVariantStyle.content"
          >
            <div
              v-for="n in array"
              :key="n"
              class="col-span-1 w-full h-24 border border-zinc-600 grid place-items-center text-white"
            >
              {{ n }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import MenuIcon from "./assets/icons/menu-icon.svg";
import ArrowLeftIcon from "./assets/icons/arrow-left.svg";
import ArrowRightIcon from "./assets/icons/arrow-right.svg";
import SearchIcon from "./assets/icons/search.svg";
import HomeIcon from "./assets/icons/home-icon.svg";
import ClosureIcon from "./assets/icons/closure.svg";
import ErrorCircleIcon from "./assets/icons/error-circle-icon.svg";
import PostIcon from "./assets/icons/post-icon.svg";

const array = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const focusColor = ref("all");

const isMenuOpen = ref(false);

// menu 樣式
const menuClass = {
  open: {
    container: "w-20",
    menuContent: "w-80 sm:w-full opacity-100 overflow-hidden",
    content: "grid-template-columns: repeat(2, minmax(200px, 1fr))",
  },
  hidden: {
    container: "w-full",
    menuContent: "w-0 opacity-0",
    content: "w-1/2",
  },
};

const menuVariantStyle = computed(() =>
  isMenuOpen.value ? menuClass["open"] : menuClass["hidden"]
);

// 預設主題
document.documentElement.classList.add("theme-black");

// 切換主題
const changeTheme = (theme) => {
  document.documentElement.setAttribute("class", theme);
};

const scrollContainer = ref(null);

const setScroll = (direction) => {
  if (!scrollContainer.value) return;

  // 滾動距離
  const distance = 200;

  if (direction === "left") {
    scrollContainer.value.scrollBy({
      left: -distance,
      behavior: "smooth",
    });
  } else {
    scrollContainer.value.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
/* 調整滾輪的寬度 */
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}

/* 調整滾輪軌道（背景） */
::-webkit-scrollbar-track {
  background: #141414;
}

/* 調整滾輪滑塊 */
::-webkit-scrollbar-thumb {
  background: #141414;
}
</style>