// See https://observablehq.com/framework/config for documentation.

import MarkdownItContainer from "markdown-it-container";

const footer: string = `
  © ${new Date().getUTCFullYear()} One.MIT is a project of <a href="https://mitnano.mit.edu/" target="_blank">MIT.nano</a> | 77 Massachusetts Avenue &ndash; Building 12 | Cambridge, MA 02139 | <a href="mailto:mitnano@mit.edu?subject=Inquiry about One.MIT">Contact</a> | <a href="https://accessibility.mit.edu/" target="_blank">Accesibility</a>
`;

const header: string = `
<div style="display: flex; align-items: center; gap: 0.5rem; height: 2.2rem; margin: -1.5rem -2rem 2rem -2rem; padding: 0.5rem 2rem; border-bottom: solid 1px var(--theme-foreground-faintest);">
  <a href="https://web.mit.edu/" target="_blank" rel="" style="display: flex; align-items: center;">
    <svg height="2.2rem" viewBox="0 0 1680 1040">
      <path
        d="M880,880h160V400H880V880z M1120,320h400V160h-400V320z M880,160.00003h160v160H880V160.00003z M640,880h160V160H640V880z M400,720h160V160H400V720z M160,880h160V160H160V880z M1120,880h160V400h-160V880z">
      </path>
    </svg>
  </a>
</div>
`;

const head: string = `
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/assets/site.webmanifest">
`;

export default {
  title: "One.MIT",
  theme: "light",
  root: "src",
  pager: true,
  footer: footer,
  header: header,
  head: head,
  typographer: true,
  pages: [
    {
      name: "Mosaics",
      open: true,
      collapsible: false,
      pages: [
        { name: "One.MIT 2018", path: "onemit2018" },
        { name: "One.MIT 2020", path: "onemit2020" },
        { name: "One.MIT 2024", path: "onemit2024" },
        { name: "FAQ & Search Tips", path: "faq" },
      ],
    },
    {
      name: "About",
      open: true,
      collapsible: true,
      pages: [
        { name: "One.MIT Inception", path: "inception" },
        { name: "Gathering the Names", path: "gathering-names" },
        { name: "Design Process", path: "design-process" },
        { name: "Design Features", path: "special-features" },
        { name: "Fabricating the Wafer", path: "wafer-fabrication" },
        { name: "Name Search Implementation", path: "name-search" },
        { name: "Team", path: "team" },
      ],
    },
  ],
  markdownIt: (md) =>
    md
      .use(MarkdownItContainer, "card") // ::: card
      .use(MarkdownItContainer, "hero"), // ::: hero
};
