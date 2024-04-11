---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DLeap Tutorial"
  text: "Tutorial for HCL Domino Leap"
  tagline: Work in progress. This is not an official HCL Documentation. This site was created by Jan Kadlec (honza.kadlec.cb@gmail.com) as a part of bachelors thesis at University of West Bohemia and supervised by Jan Valdman (jan.valdman@whitesoft.eu) form Whitesoft.
  actions:
    - theme: brand
      text: Tutorial
      link: /basics/hello_world
    - theme: alt
      text: Reference
      link: /object_reference/application

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

