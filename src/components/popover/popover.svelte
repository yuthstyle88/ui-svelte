<script lang="ts">
    import Portal from '../../utilities/portal/portal.svelte'
    import { createEventDispatcher, getContext, setContext } from 'svelte'
    import type { Writable } from 'svelte/store'
    import { writable } from 'svelte/store'

    type Placement =
        | 'top'
        | 'right'
        | 'bottom'
        | 'left'
        | 'top-start'
        | 'top-end'
        | 'right-start'
        | 'right-end'
        | 'left-start'
        | 'left-end'
        | 'bottom-start'
        | 'bottom-end'

    export let overlay = false
    export let disabled = false
    export let placement: Placement = 'right-start'
    export let open = false

    type GetPlacement = () => number
    let PLACEMENT_MAP: Record<Placement, { x: GetPlacement; y: GetPlacement }>

    let triggerWidth = 0
    let triggerHeight = 0
    let popoverWidth = 0
    let popoverHeight = 0
    let spanElement: HTMLSpanElement

    const dispatch = createEventDispatcher()

    const outerDisabledStore = getContext<Writable<boolean> | undefined>('disabled')
    const disabledStore = outerDisabledStore || writable(disabled)

    if (typeof outerDisabledStore === 'undefined') setContext('disabled', disabledStore)

    const closePopover = () => {
        if (isDisabled) return
        open = false
        dispatch('close', true)
    }
    const openPopover = () => {
        if (isDisabled) return
        open = true
        dispatch('open', true)
    }
    $: togglePopover = () => {
        if (open) closePopover()
        else openPopover()
    }

    $: PLACEMENT_MAP = {
        top: {
            x: () => boundingRect.x + triggerWidth / 2 - popoverWidth / 2 + window.scrollX,
            y: () => boundingRect.y - popoverHeight + window.scrollY,
        },
        right: {
            x: () => boundingRect.x + triggerWidth + window.scrollX,
            y: () => boundingRect.y + triggerHeight / 2 - popoverHeight / 2 + window.scrollY,
        },
        bottom: {
            x: () => boundingRect.x + triggerWidth / 2 - popoverWidth / 2 + window.scrollX,
            y: () => boundingRect.y + triggerHeight + window.scrollY,
        },
        left: {
            x: () => boundingRect.x - popoverWidth + window.scrollX,
            y: () => boundingRect.y + triggerHeight / 2 - popoverHeight / 2 + window.scrollY,
        },
        'top-start': {
            x: () => boundingRect.x + window.scrollX,
            y: () => boundingRect.y - popoverHeight + window.scrollY,
        },
        'top-end': {
            x: () => boundingRect.x + triggerWidth - popoverWidth + window.scrollX,
            y: () => boundingRect.y - popoverHeight + window.scrollY,
        },
        'right-start': {
            x: () => boundingRect.x + triggerWidth + window.scrollX,
            y: () => boundingRect.y + window.scrollY,
        },
        'right-end': {
            x: () => boundingRect.x + triggerWidth + window.scrollX,
            y: () => boundingRect.y + triggerHeight - popoverHeight + window.scrollY,
        },
        'bottom-start': {
            x: () => boundingRect.x + window.scrollX,
            y: () => boundingRect.y + triggerHeight + window.scrollY,
        },
        'bottom-end': {
            x: () => boundingRect.x + triggerWidth - popoverWidth + window.scrollX,
            y: () => boundingRect.y + triggerHeight + window.scrollY,
        },
        'left-start': {
            x: () => boundingRect.x - popoverWidth + window.scrollX,
            y: () => boundingRect.y + window.scrollY,
        },
        'left-end': {
            x: () => boundingRect.x - popoverWidth + window.scrollX,
            y: () => boundingRect.y + triggerHeight - popoverHeight + window.scrollY,
        },
    }
    let boundingRect: DOMRect
    $: {
        const trigger = spanElement?.children?.[0]
        if (trigger && open) {
            boundingRect = trigger.getBoundingClientRect()
            triggerWidth = trigger.clientWidth
            triggerHeight = trigger.clientHeight
        }
    }
    $: if (typeof outerDisabledStore === 'undefined') disabledStore.set(disabled)
    $: x = boundingRect && open ? PLACEMENT_MAP[placement].x() : 0
    $: y = boundingRect && open ? PLACEMENT_MAP[placement].y() : 0
    $: isDisabled = typeof outerDisabledStore === 'undefined' ? disabled : $outerDisabledStore
</script>

<svelte:window
    on:keydown="{(event) => {
        if (event.key === 'Escape') open = false
    }}"
/>

<span
    class="contents"
    on:click="{togglePopover}"
    bind:this="{spanElement}"
    aria-haspopup="true"
    aria-expanded="{open && !disabled}"
>
    <slot name="trigger" />
</span>
{#if open && !disabled}
    <Portal
        on:close="{closePopover}"
        overlay="{overlay ? 'color' : true}"
        x="{x}"
        y="{y}"
        overlayAriaLabel="close"
    >
        <div
            class="inline-flex"
            bind:offsetHeight="{popoverHeight}"
            bind:offsetWidth="{popoverWidth}"
            data-test="popover"
        >
            <slot />
        </div>
    </Portal>
{/if}
