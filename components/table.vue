<template>
  <table class=" full text-left border-collapse">

    <template v-for="(item, index) in tocItems" :key="index">
      <template v-if="item.nodeName === 'H2'">
        <h3 :class="item.type">
          {{ item.text }}
        </h3>
        <p v-if="tocItems[index + 1] && tocItems[index + 1].nodeName === 'H2'">
          There are no items in this section.
        </p>
      </template>
      <template v-else>

        <tr>
          <td v-if="item.text" class="py-2 pr-2 font-mono font-medium text-xs leading-6  whitespace-nowrap "
              :class="item.type">
            {{ item.text }}
          </td>

          <td v-if="item.children.includes('Badge')" :class="item.type" v-html="item.children">
          </td>
          <td v-if="item.id" :class="item.type">
            <a :href="`#${item.id}`">detail</a>
          </td>
        </tr>
      </template>
    </template>

  </table>
</template>

<script>
export default {
  name: 'TableOfContents',
  data() {
    return {
      tocItems: [],
    };
  },
  mounted() {
    this.generateTOC();
  },
  methods: {
    generateTOC() {
      this.tocItems = []; // Clear current TOC items
      const selectors = 'h2, h3'; // Define which elements to include
      const mainContent = document.getElementById("VPContent");
      const elements = mainContent.querySelectorAll(selectors);

      elements.forEach((element) => {
        // Ensure each element has an ID for linking
        if (!element.id) {
          element.id = this.generateId(element.textContent);
        }

        let type = element.nodeName;

        let childernHTML = '';
        if (element.children.length > 0) {
          for (let i = 0; i < element.children.length; i++) {
            childernHTML += element.children[i].outerHTML;
          }
        }


        this.tocItems.push({
          id: element.id,
          children: childernHTML,
          text: this.getTextWithoutChildren(element),
          nodeName: element.nodeName,
          type: type === 'H2' ? 'h2' : 'h3',
        });
      });
    },
    generateId(text) {
      return text.trim().toLowerCase().replace(/\s+/g, '-');
    },
    getTextWithoutChildren(element) {
      var text = '';
      // Iterate over all child nodes of the element
      for (var i = 0; i < element.childNodes.length; i++) {
        var childNode = element.childNodes[i];
        // Check if the child node is a text node
        if (childNode.nodeType === Node.TEXT_NODE) {
          text += childNode.nodeValue;
        }
      }
      return text;
    }
  },
}
;
</script>
