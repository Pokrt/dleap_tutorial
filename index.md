---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HCL Domino Leap Tutorial"
  text: "From zero to hero in few days."
  tagline: "This tutorial will help you learn how to develop workflow applications in HCL Domino Leap using no-code and low-code (JavaScript) skills. Note: Work in progress. This is not an official HCL Software documentation."
  actions:
    - theme: brand
      text: Tutorial
      link: /basics/introduction
    - theme: alt
      text: Reference
      link: /object_reference/application

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://substore.app/api/v1/image/73020972_2185618261737529_5187416862513692672_n.webp',
    name: 'Jan Kadlec',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Pokrt' },
      { icon: 'twitter', link: 'https://twitter.com/cb_honza' }
    ]
  },  {
    avatar: 'https://avatars.githubusercontent.com/u/25040063?v=4',
    name: 'Jan Valdman',
    title: 'Supervisor',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/jan_valdman' },
      { icon: { svg: ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/></svg>'}, link: 'https://support.hcltechsw.com/community?id=community_user_profile&user=46620e8e1ba2ffc4c1f9759d1e4bcbee' }
    ]
  },
  
]
</script>

# Our Team

This site was created by Jan Kadlec (honza.kadlec.cb@gmail.com) as a part of bachelors thesis at University of West
Bohemia and supervised by Jan Valdman (jan.valdman@whitesoft.eu) form Whitesoft.
<VPTeamMembers size="small" :members="members" />

