const app = Vue.createApp({
    data() {
        return {
            casesHeader: "Cases",
            caseOpened: false,
            activeCase: 0,
            caseList: [
                { id: 1, title: "Customer service app for Lindex", role: "UX & UI", image: './resources/preview.png'},
                { id: 2, title: "Store return app for Lindex", role: "UX & UI", image: './resources/preview.png' }
            ]
        }
    },
    methods: {
        openCase(caseId) {
            this.caseOpened = true;
            this.activeCase = caseId - 1;
        },
        resetView() {
            this.caseOpened = this.caseOpened = false;
        }
    }
})