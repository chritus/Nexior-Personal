<template>
  <div class="status">
    <el-dialog v-model="visible" class="custom-dialog overflow-hidden" :width="dialogWidth" align-center>
      <div class="p-2 md:p-4 font-sans text-zinc-900 dark:text-zinc-100">
        <!-- Header Section -->
        <div class="text-center mb-8">
          <p class="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-1">Real Cost Breakdown</p>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight">Subscriptions vs Ace Data Cloud</h2>
        </div>

        <!-- Comparison Section -->
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <!-- Old Way Card -->
          <div class="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between shadow-2xl">
            <div>
              <p class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-6">Old Way — Monthly Subs</p>
              <ul class="space-y-4">
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-400 font-medium">ChatGPT Plus</span>
                  <span class="font-bold text-zinc-100">$19.99/mo</span>
                </li>
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-400 font-medium">Suno Pro</span>
                  <span class="font-bold text-zinc-100">$9.99/mo</span>
                </li>
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-400 font-medium">Midjourney Basic</span>
                  <span class="font-bold text-zinc-100">$9.99/mo</span>
                </li>
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-400 font-medium">Video AI tools</span>
                  <span class="font-bold text-zinc-100">$14.99/mo</span>
                </li>
              </ul>
            </div>
            <div class="mt-8 pt-4 border-t border-zinc-800 flex justify-between items-end">
              <span class="text-xs text-zinc-500 uppercase font-bold">Per month</span>
              <span class="text-2xl font-black text-zinc-100 tracking-tighter">$54.96/mo</span>
            </div>
          </div>

          <!-- Ace Way Card -->
          <div class="flex-1 bg-white border-2 border-zinc-900 rounded-2xl p-5 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-zinc-900 text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter">Recommended</div>
            <div>
              <p class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6 italic">Ace Data Cloud — Pay Per Use</p>
              <ul class="space-y-4">
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-600 font-medium font-sans">GPT-4o (actual usage)</span>
                  <span class="font-bold text-zinc-900">~$0.18</span>
                </li>
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-600 font-medium">Suno song x2</span>
                  <span class="font-bold text-zinc-900">~$0.28</span>
                </li>
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-600 font-medium">Image generation</span>
                  <span class="font-bold text-zinc-900">~$0.12</span>
                </li>
                <li class="flex justify-between items-center text-sm">
                  <span class="text-zinc-600 font-medium">Nexior deployment</span>
                  <span class="font-bold text-zinc-900 flex items-center gap-1">
                    Free
                    <font-awesome-icon icon="fa-solid fa-check-circle" class="text-[10px]" />
                  </span>
                </li>
              </ul>
            </div>
            <div class="mt-8 pt-4 border-t border-zinc-100 flex justify-between items-end">
              <span class="text-xs text-zinc-400 uppercase font-bold">Total spent</span>
              <span class="text-2xl font-black text-zinc-900 tracking-tighter">~$0.58</span>
            </div>
          </div>
        </div>

        <!-- Savings Banner -->
        <div class="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="text-center sm:text-left">
            <p class="text-sm font-bold text-zinc-900 dark:text-zinc-100">Total savings this session</p>
            <p class="text-[11px] text-zinc-500">vs paying for all subscriptions</p>
          </div>
          <div class="text-center sm:text-right">
            <p class="text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter">98.9% saved</p>
            <p class="text-[11px] font-bold text-zinc-500 italic">$54.38 kept in pocket</p>
          </div>
        </div>

        <!-- Incentive Footer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div class="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center">
            <p class="text-[10px] text-zinc-500 uppercase font-bold mb-1">x402 payment discount</p>
            <p class="text-lg font-black text-zinc-900 dark:text-zinc-100">5% off</p>
            <p class="text-[10px] text-zinc-400">Pay via Solana or Base USDC</p>
          </div>
          <div class="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center">
            <p class="text-[10px] text-zinc-500 uppercase font-bold mb-1">$ACE token holder discount</p>
            <p class="text-lg font-black text-zinc-900 dark:text-zinc-100">Extra tiers</p>
            <p class="text-[10px] text-zinc-400">Hold $ACE for more savings</p>
          </div>
        </div>

        <!-- Meta Footer -->
        <div class="text-center">
          <p class="text-[11px] font-mono text-zinc-400 tracking-tighter font-bold">
            #BuildWithAce — acedata.cloud
          </p>
        </div>
      </div>
    </el-dialog>
    <el-button circle class="entry" @click="visible = true">
      <font-awesome-icon icon="fa-solid fa-bolt" class="icon" />
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton, ElDialog, ElCard } from 'element-plus';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'SavingsStatus',
  components: {
    ElButton,
    ElDialog,
    ElCard,
    FontAwesomeIcon
  },
  data() {
    return {
      visible: false,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    dialogWidth() {
      return this.windowWidth < 768 ? '95%' : '720px';
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
});
</script>

<style lang="scss" scoped>
.status {
  .entry {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--el-border-color);
    background-color: var(--el-bg-color-overlay);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    &:hover {
      transform: scale(1.1);
      border-color: var(--el-color-primary);
    }

    .icon {
      font-size: 16px;
      color: var(--el-text-color-primary);
    }
  }
}

:deep(.custom-dialog) {
  border-radius: 24px;
  background: var(--el-bg-color);
  border: 1px solid var(--app-border-subtle);
  
  .el-dialog__header {
    display: none;
  }
  
  .el-dialog__body {
    padding: 0;
  }
}
</style>
