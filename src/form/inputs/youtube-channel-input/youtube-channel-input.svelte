<script lang="ts">
    import isURL from 'validator/es/lib/isURL'
    import {
        getYouTubeChannelId,
        isYouTubeChannelUrl,
        isYouTubeUrl,
        isYouTubeVideoUrl,
        createYouTubeChannelUrl,
    } from '@nick-mazuk/lib/esm/youtube'

    import YouTube from '../../../elements/icon/youtube.svelte'
    import type { FormItemSize } from '../../form-sizes'
    import type { TextInputAutocomplete } from '../text-input'
    import TextInput from '../text-input/text-input.svelte'

    export let label = 'YouTube Channel'
    export let name = ''
    export let defaultValue = ''
    export let placeholder = ''
    export let helpText = ''
    export let size: FormItemSize = 'default'
    export let optional = false
    export let hideOptionalLabel = false
    export let readonly = false
    export let disabled = false

    export let hideIcon = false
    export let requiredMessage = 'Enter a YouTube channel url'
    export let autocomplete: TextInputAutocomplete = undefined
    export let autofocus = false

    $: shownIcon = hideIcon ? undefined : YouTube
</script>

<TextInput
    type="url"
    label="{label}"
    name="{name}"
    defaultValue="{defaultValue ? createYouTubeChannelUrl(defaultValue) : undefined}"
    placeholder="{placeholder}"
    helpText="{helpText}"
    size="{size}"
    optional="{optional}"
    hideOptionalLabel="{hideOptionalLabel}"
    readonly="{readonly}"
    disabled="{disabled}"
    requiredMessage="{requiredMessage}"
    autocomplete="{autocomplete}"
    prefix="{shownIcon}"
    keyboard="url"
    autofocus="{autofocus}"
    parser="{getYouTubeChannelId}"
    validationRules="{[
        {
            assert: (value) => isURL(value, { protocols: ['http', 'https'] }),
            error: `Enter a valid url`,
        },
        {
            assert: (value) => isYouTubeUrl(value),
            error: 'Must be a YouTube url',
        },
        {
            assert: (value) => !isYouTubeVideoUrl(value),
            error: 'Cannot be a video url',
        },
        {
            assert: (value) => isYouTubeChannelUrl(value),
            error: 'Enter a valid channel url',
        },
    ]}"
    on:change
/>
