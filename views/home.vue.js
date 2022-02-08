const Home = {
  template:
    /*html*/
    `
    <section>
        <h2>Cases</h2>

        <div class="casesWrapper">
          <router-link to="/case">
          <div
            v-for="caseItem in caseList"
            :key="caseItem.id"
            class="caseItem"
          >
            <img :src="caseItem.preview" :alt="caseItem.title" />
            <p class="subtitle">{{ caseItem.title }}</p>
            <p class="subtitle-2">{{ caseItem.role }}</p>
          </div>
          </router-link>
        </div>
    </section>
    `,
  data() {
    return {
      caseOpened: false,
      activeCase: 0,
      caseList: [
        {
          id: 1,
          title: "Customer service app for Lindex",
          role: "UX & UI",
          preview: "./resources/preview.png",
        },
        {
          id: 2,
          title: "Store return app for Lindex",
          role: "UX & UI",
          preview: "./resources/preview.png",
        },
      ],
    };
  },
};