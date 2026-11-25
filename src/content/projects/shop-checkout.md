---
# DRAFT: stand-in project. Replace every field and the text below with your own.
title: Online shop product search
summary: Search that finds a product as you type, even with a typo, across a shop's 1,800 items.
date: 2026-07-12
role: Front end and API, in a team of two
stack: [Next.js, TypeScript, Node.js]
timeline: 2 months
visual: search
order: 2
---

The shop's search only matched whole product names, so "linen shrt" found nothing and customers left.

I built a search box that suggests products as you type, forgives small typos and groups results by category. The index rebuilds each night from the shop's product feed.

The hardest part was keeping it quick on a phone; I moved the matching to the server and kept each response under 20 KB.
