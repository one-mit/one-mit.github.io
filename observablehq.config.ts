// See https://observablehq.com/framework/config for documentation.
export default {
  title: "One.MIT",
  theme: "light",
  root: "src",
  pager: false,
  footer: "",
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
		  name: "See One.MIT in person",
		  path: "see-onemit",
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
