function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("2 seconds passed"));