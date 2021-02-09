// setTimeout(function, time)

const sentence = "hello there from lighthouse labs";
let startTime = 0

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    }, startTime);
      startTime += 50
  };

// starts after the loop above finishes
setTimeout(() => {
  process.stdout.write("\n");
}, startTime);