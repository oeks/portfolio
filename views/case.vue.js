const Case = {
    template:
    /*html*/
    `
      <!-- Specific case -->
      <section key="item">
        <div class="caseOverline">
          <img src="resources/arrow-left.svg" />
          <p class="overline">{{ caseList[activeCase].title }}</p>
        </div>

        <h2>Brief</h2>
        <p>{{ caseList[activeCase].brief }}</p>
        <p class="muted">Role: {{ caseList[activeCase].roleLong }}</p>

        <ul class="caseImages">
          <li v-for="(image, index) in caseList[activeCase].images" :key="index"><img :src="image.source"></li>
        </ul>

        <h2>Process</h2>
        <div v-for="processStep in caseList[activeCase].process" class="textSection">
          <h3>{{ processStep.title }}</h3>
          <p>{{ processStep.content }}</p>
        </div>
        
      </section>
        `,
};
