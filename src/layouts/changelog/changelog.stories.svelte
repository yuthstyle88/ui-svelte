<script lang="ts">
    import { Meta, Story } from '@storybook/addon-svelte-csf'

    import Changelog from './changelog.svelte'

    const meta = {
        title: 'Layouts/Changelog',
        component: Changelog,
        parameters: {
            docs: {
                description: {
                    component: '',
                },
            },
        },
        argTypes: {
            title: {
                control: 'text',
                defaultValue: 'Changelog',
            },
            description: {
                control: 'text',
            },
            showLoadMore: {
                control: 'boolean',
            },
            isLoading: {
                control: 'boolean',
            },
            showReachedEnd: {
                control: 'boolean',
            },
            items: {
                control: 'object',
                defaultValue: [],
            },
        },
    }

    const contents = `<p>There are some great updates to the site:</p>

                    <ul>
                        <li>Update 1</li>
                        <li>Update 2</li>
                        <li>Update 3</li>
                    </ul>
                    <p>
                        To view these updates, make sure to go visit the appropriate page that's
                        definitely linked right here.
                    </p>`
    const image = {
        src: 'http://placeimg.com/800/450/technics',
    }

    const items = [
        {
            title: 'New feature',
            variant: 'feature',
            publishedAt: new Date('may 28, 2021'),
            contents,
            image,
        },
        {
            title: 'Bug fix',
            variant: 'bug',
            publishedAt: new Date('may 27, 2021'),
            contents,
            image,
        },
        {
            title: 'Announcement',
            variant: 'announcement',
            publishedAt: new Date('may 26, 2021'),
            contents,
            image,
        },
        {
            title: 'Improvement',
            variant: 'improvement',
            publishedAt: new Date('may 25, 2021'),
            contents,
            image,
        },
    ]

</script>

<Meta {...meta} />

<Story name="Default" args="{{ items }}" let:args>
    <Changelog {...args} />
</Story>
<Story name="With subscribe" args="{{ items }}" let:args>
    <Changelog {...args}>
        <svelte:fragment slot="subscribe">
            <a sveltekit:prefetch href="./" class="link">Subscribe</a> to hear about changes first.
        </svelte:fragment>
    </Changelog>
</Story>
