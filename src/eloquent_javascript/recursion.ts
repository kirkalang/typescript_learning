const HeaderLength = 35;

function log(header: string, target: number, current: number, history: string) {
  console.log(`${header}${' '.repeat(HeaderLength - header.length)}. target: ${target}. current: ${('   ' + current).slice(3)}. history: ${history}`);
}

function findSolution(target: number) {
    function find(current: number, history: string): string | null {
      log('find. before if', target, current, history);

      if (current == target) {
        log('find. current == target', target, current, history);
        return history;
      } else if (current > target) {
        log('find. return null', target, current, history);
        return null;
      } else {
        log('find. else', target, current, history);

        const current5 = find(current + 5, `(${history} + 5)`);
        const current3 = find(current * 3, `(${history} * 3)`);
        if (current5 && current3) {
          return current5.length < current3.length ? current5 : current3;
        }
        return current5 || current3;
      }
    }
    return find(1, "1");
}

console.log(findSolution(24));