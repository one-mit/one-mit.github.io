// See https://observablehq.com/framework/config for documentation.

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

export default {
  title: "One.MIT",
  theme: "light",
  root: "src",
  pager: false,
  footer: footer,
  header: header,
  pages: [
	  {
		  name: "One.MIT 2018",
		  path: "onemit2018",
	  },
	  {
		  name: "One.MIT 2020",
		  path: "onemit2020",
	  },
	  {
		  name: "One.MIT 2024",
		  path: "onemit2024",
	  },
	  {
		  name: "FAQ & Search Tips",
		  path: "faq",
	  },
	  {
		  name: "About",
		  open: true,
		  pages: [
			  {name:"One.MIT Inception",path:"inception"},
			  {name:"Gathering the Names",path:"gathering-names"},
			  {name:"Design Process",path:"design-process"},
			  {name:"Design Features",path:"special-features"},
			  {name:"Fabricating the Wafer",path:"wafer-fabrication"},
			  {name:"Name Search Implementation",path:"name-search"},
			  {name:"Team",path:"team"},
		  ]
	  },
  ]
};
