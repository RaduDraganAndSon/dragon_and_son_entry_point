<script setup>
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useShopStore } from '../stores/shopStore'

const props = defineProps({
  limit: {
    type: Number,
    default: 4,
  },
  showAllButton: {
    type: Boolean,
    default: true,
  },
  initialShowAll: {
    type: Boolean,
    default: false,
  },
})

const shopStore = useShopStore()
const { storeDetails } = storeToRefs(shopStore)
const showAll = ref(props.initialShowAll)

const socialPlatforms = [
  { name: 'Instagram', icon: 'bi-instagram', domains: ['instagram.com'] },
  { name: 'Facebook', icon: 'bi-facebook', domains: ['facebook.com'] },
  { name: 'TikTok', icon: 'bi-tiktok', domains: ['tiktok.com'] },
  { name: 'YouTube', icon: 'bi-youtube', domains: ['youtube.com', 'youtu.be'] },
  { name: 'Strava', icon: 'bi-bicycle', domains: ['strava.com'] },
  { name: 'X', icon: 'bi-twitter-x', domains: ['x.com', 'twitter.com'] },
  { name: 'LinkedIn', icon: 'bi-linkedin', domains: ['linkedin.com'] },
  { name: 'Pinterest', icon: 'bi-pinterest', domains: ['pinterest.com'] },
  { name: 'Snapchat', icon: 'bi-snapchat', domains: ['snapchat.com'] },
  { name: 'Twitch', icon: 'bi-twitch', domains: ['twitch.tv'] },
  { name: 'Discord', icon: 'bi-discord', domains: ['discord.com', 'discord.gg'] },
  { name: 'WhatsApp', icon: 'bi-whatsapp', domains: ['whatsapp.com', 'wa.me'] },
  { name: 'Telegram', icon: 'bi-telegram', domains: ['telegram.org', 't.me'] },
  { name: 'Reddit', icon: 'bi-reddit', domains: ['reddit.com'] },
  { name: 'GitHub', icon: 'bi-github', domains: ['github.com'] },
]

function getSocialDetailsFromUrl(url) {
  if (typeof url !== 'string' || !url.trim()) {
    console.warn('Unable to infer social media details without a URL.')
    return { name: 'Social media', icon: 'bi-link-45deg' }
  }

  let hostname
  try {
    const value = url.trim()
    const parsedUrl = new URL(
      /^[a-z][a-z\d+.-]*:/i.test(value) ? value : `https://${value.replace(/^\/\//, '')}`,
    )
    hostname = parsedUrl.hostname.toLowerCase().replace(/^www\./, '')
  } catch {
    console.warn('Unable to infer social media details from an invalid URL.')
    return { name: 'Social media', icon: 'bi-link-45deg' }
  }

  const platform = socialPlatforms.find(({ domains }) =>
    domains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`)),
  )
  if (platform) {
    return { name: platform.name, icon: platform.icon }
  }

  const domainName = hostname.split('.')[0].replace(/[-_]+/g, ' ')
  const name = domainName.replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Social media'
  return { name, icon: 'bi-link-45deg' }
}

const socialMedia = computed(() =>
  [...(storeDetails.value.socialMedia || [])]
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const aHasRank = a.item.rank != null
      const bHasRank = b.item.rank != null

      if (aHasRank !== bHasRank) {
        return aHasRank ? -1 : 1
      }

      if (aHasRank) {
        return (a.item.rank - b.item.rank) || (a.index - b.index)
      }

      return a.index - b.index
    })
    .map(({ item }) => {
      const name = typeof item.name === 'string' && item.name.trim() ? item.name : undefined
      const icon = typeof item.icon === 'string' && item.icon.trim() ? item.icon : undefined
      const details = name && icon ? { name, icon } : getSocialDetailsFromUrl(item.url)
      return {
        ...item,
        name: name || details.name,
        icon: icon || details.icon,
      }
    })
)

const visibleLinks = computed(() => {
  if (showAll.value || props.limit <= 0) {
    return socialMedia.value
  }

  return socialMedia.value.slice(0, props.limit)
})

watch(
  () => props.initialShowAll,
  (nextValue) => {
    showAll.value = nextValue
  },
)
</script>

<template>
  <div class="social-media-links">
    <div class="social-list" v-if="socialMedia.length">
      <a
        v-for="item in visibleLinks"
        :key="item.url"
        :href="item.url"
        :aria-label="`Visit our ${item.name}`"
        class="social-link"
        target="_blank"
        rel="noopener noreferrer"
        :title="item.name"
      >
        <i :class="item.icon"></i>
      </a>
    </div>

    <button
      v-if="props.showAllButton && socialMedia.length > props.limit"
      type="button"
      class="btn btn-link btn-sm social-toggle"
      @click="showAll = !showAll"
    >
      {{ showAll ? 'Show less' : 'Show all' }}
    </button>
  </div>
</template>

<style scoped>
.social-media-links {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1rem;
}

.social-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.social-link {
  background: transparent!important;
  color: inherit!important;
}

.social-link:hover,
.social-link:focus {
  color: red!important;
}

.social-link i {
  font-size: 1.15rem;
}

.social-toggle {
  padding: 0;
  text-decoration: none;
  align-self: flex-start;
}

</style>
