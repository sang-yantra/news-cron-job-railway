import cron from 'node-cron';
import logger from './logging/index.js';
import NewsImport from './infrastructure/news-import.js';

async function main() {
  try {
    logger.info('app started...');
    const newsImport = new NewsImport();
    await newsImport.start();
    logger.info('app completed...');
  } catch (error) {
    console.log(error);
  }
}

// cron job running every 2 hour
cron.schedule('*/2 * * * *', function () {
  main();
});
