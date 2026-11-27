import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const CONFIGS_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../configs'
)

const TARGETS = [
  { dir: 'featured-networks', env: 'NEXT_PUBLIC_FEATURED_NETWORKS' },
  { dir: 'marketplace', env: 'NEXT_PUBLIC_MARKETPLACE_CONFIG_URL' },
  {
    dir: 'marketplace-categories',
    env: 'NEXT_PUBLIC_MARKETPLACE_CATEGORIES_URL',
  },
  {
    dir: 'marketplace-subgraph-links',
    env: 'NEXT_PUBLIC_MARKETPLACE_GRAPH_LINKS_URL',
  },
  { dir: 'footer-links', env: 'NEXT_PUBLIC_FOOTER_LINKS' },
  { dir: 'widgets', env: 'NEXT_PUBLIC_ADDRESS_3RD_PARTY_WIDGETS_CONFIG_URL' },
  { dir: 'homepage-highlights', env: 'NEXT_PUBLIC_HOMEPAGE_HIGHLIGHTS_CONFIG' },
  { dir: 'hero-banner', env: 'NEXT_PUBLIC_HOMEPAGE_HERO_BANNER_CONFIG' },
  { dir: 'color-themes', env: 'NEXT_PUBLIC_COLOR_THEME_OVERRIDES' },
]

const validatorPath = process.argv[2]

if (!validatorPath || !fs.existsSync(validatorPath)) {
  console.error(
    'Usage: node ./tools/config-validator/index.js <path to json-configs-cli.js of blockscout/frontend>'
  )
  process.exit(2)
}

let hasFailures = false

for (const { dir, env } of TARGETS) {
  const files = fs
    .readdirSync(path.join(CONFIGS_DIR, dir))
    .filter((name) => name.endsWith('.json'))
    .map((name) => path.join('configs', dir, name))

  if (files.length === 0) {
    continue
  }

  const { status } = spawnSync('node', [validatorPath, env, ...files], {
    cwd: path.resolve(CONFIGS_DIR, '..'),
    stdio: 'inherit',
  })
  hasFailures = hasFailures || status !== 0
}

process.exit(hasFailures ? 1 : 0)
