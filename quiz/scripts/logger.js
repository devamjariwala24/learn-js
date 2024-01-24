function logMsg() {
    console.log(`Error Message: ${this.errMsg}`);
}

const o1 = {
    val: [1, 2, 3],
    errMsg: "Error from o1"
};

logMsg.call(o1);
