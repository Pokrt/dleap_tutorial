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
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Jan Kadlec',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Jan Valdman',
    title: 'Supervisor',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/jan_valdman' },
      { icon: { svg: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"/></svg> '}, link: 'https://support.hcltechsw.com/community?id=community_user_profile&user=46620e8e1ba2ffc4c1f9759d1e4bcbee' }
    ]
  },
  
]
</script>

# Our Team

This site was created by Jan Kadlec (honza.kadlec.cb@gmail.com) as a part of bachelors thesis at University of West
Bohemia and supervised by Jan Valdman (jan.valdman@whitesoft.eu) form Whitesoft.
<VPTeamMembers size="small" :members="members" />

