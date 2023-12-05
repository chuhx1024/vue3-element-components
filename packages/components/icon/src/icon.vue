<template>
    <div :class="bem.b()" :style="style">
        icon
    </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { createNamespace } from '@chu-plus/utils/bem.ts'
import {iconProps} from './icon'

defineOptions({
    name: 'chu-icon'
})

const bem = createNamespace('icon')

const props = defineProps(iconProps)

const style = computed(() => {
    return {
        'font-size': props.size + 'px',
        'color': props.color
    }
})

</script>

