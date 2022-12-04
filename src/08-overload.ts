function parseStr(input: string): string[];
function parseStr(input: string[]): string;

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(' ');
  } else if (typeof input === 'string') {
    return input.split('');
  }
}

const rtaArray = parseStr('Nico');
rtaArray.reverse();
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N', 'I', 'C', 'O']);
console.log('rtaStr', "['N', 'I', 'C', 'O'] =>", rtaStr.toLowerCase());
