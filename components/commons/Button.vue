<template>
    <button :class="computedClasses" @click="$emit('click')">
      <slot></slot>
    </button>
</template>

<script setup lang="ts">

    type ButtonVariant = 'primary' | 'default' | 'outline';
    
    const buttonProps = defineProps({
        variant: {
            type: String as PropType<ButtonVariant>,
            default: 'primary'
        }
    })

    const computedClasses = computed(() => {
        return [
            'py-5 px-10 rounded-[10px]',
            {
                'bg-[#0BD88F] text-[#212435] font-medium text-base leading-[18.96px]': buttonProps.variant === 'primary',
                'bg-gray-300 hover:bg-gray-400 text-[#0BD88F]': buttonProps.variant === 'default',
                'outline-border text-[#0BD88F]': buttonProps.variant === 'outline',
            },
        ];
    });

</script>

<style scoped>
.outline-border {
    border-image: linear-gradient(95.39deg, #0BD88F 0%, #00C2FF 100%) 10;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
}
</style>
  