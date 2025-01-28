import { createBdd } from 'playwright-bdd';

const { BeforeAll, AfterAll } = createBdd();

BeforeAll(async function ({ $workerInfo, browser }) {
  console.log('Run Before Each Test');
});

AfterAll(async function ({ $workerInfo, browser }) {
    console.log('Run After Each Test');
});