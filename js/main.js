const routes = [
  { path: "/", component: Home },
  { path: "/case", component: Case },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
    data() {
        return {
          activeCase: 0,
          caseList: [
            {
              id: 1,
              title: "Customer service app for Lindex",
              role: "UX & UI"
            },
          ],
        };
    }
})

/*
const app = Vue.createApp({
  data() {
    return {
      caseOpened: false,
      activeCase: 0,
      caseList: [
        {
          id: 1,
          title: "Customer service app for Lindex",
          role: "UX & UI",
          roleLong: "User Experience and User Interface design",
          brief:
            "The retailer Lindex wanted to improve the customer experience in stores and make the life easier for store employees by developing an iPad app allowing for placing orders online, looking up product details, and managing customer information.",
          images: [
            {
              source: "./resources/preview.png",
            },
            {
              source: "./resources/preview.png",
            },
            {
              source: "./resources/preview.png",
            },
          ],
          process: [
            {
              title: "Research",
              content:
                "To ground project requirements in the actual needs of users and consumers I visited three nearby Lindex stores to talk to store employees and observe them work with established processes and tools. Contextual inquries such as theese are a common research method in UX with a great upside of catching any information that is not articulated directly by the users.",
            },
            {
              title: "Analysis",
              content:
                "Research data was grouped by recurring themes (also know as affinity mapping) to map out the goals of both employees and customers. Insights were shared with the project group so that all team members were on board with the requirements.",
            },
            {
              title: "Design",
              content:
                "The synthetisation of established requirements proceeded first by visulalizing and evaluating user flows and wireframes that were critically evaluated within the project group. As the design matured user tests were also carried out with store employees.",
            },
            {
              title: "Hand-off and development",
              content: "Developers was given access to the final prototype...",
            },
            {
              title: "Follow-up",
              content:
                "Close contact with “super users” who could feedback when the app was released to selected stores.",
            },
          ],
        },
        {
          id: 2,
          title: "Store return app for Lindex",
          role: "UX & UI",
          roleLong: "User Experience and User Interface design",
          brief: "asdasdsada",
          images: [
            {
              source: "./resources/preview.png",
            },
            {
              source: "./resources/preview.png",
            },
            {
              source: "./resources/preview.png",
            },
          ],
          process: [
            {
              title: "Title 1",
              content: "Content 1",
            },
            {
              title: "Title 2",
              content: "Content 2",
            },
            {
              title: "Title 3",
              content: "Content 2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    openCase(caseId) {
      this.caseOpened = true;
      this.activeCase = caseId - 1;
    },
    resetView() {
      this.caseOpened = this.caseOpened = false;
    }
    },
});
*/

app.use(router);
app.mount("#app");