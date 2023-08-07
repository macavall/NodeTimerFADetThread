function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function exampleFunction() {
    console.log('Start');
  
    // Sleep for 10 seconds
    await sleep(10000);
  
    console.log('End');
  }

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    await exampleFunction();

    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};