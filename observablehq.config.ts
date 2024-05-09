// See https://observablehq.com/framework/config for documentation.

const footer: string = `
  <div>
    One.MIT is a project of <a href="https://mitnano.mit.edu/" target="_blank">MIT.nano</a> <br>
    Massachusetts Institute of Technology | 77 Massachusetts Avenue &ndash; Building 12 | Cambridge, MA 02139 | <a href="mailto:mitnano@mit.edu?subject=Inquiry about One.MIT">mitnano@mit.edu</a>
  </div>
`;

export default {
  title: "One.MIT",
  theme: "light",
  root: "src",
  pager: false,
  footer: footer,
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
			  {name:"Fabricating the Wafer",path:"wafer-fabrication"},
			  {name:"Name Search Implementation",path:"name-search"},
			  {name:"Team",path:"team"},
		  ]
	  },
  ]
};
