export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}

const promisic = function<T> (func: Function) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res: T) => {
          resolve(res);
        },
        fail: (error: any) => {
          reject(error);
        }
      });
      func(args);
    });
  };
};


const combination = function (arr: string[], size: number) {
  var r: string[][] = []; 

  function _(t: string[], a: string[], n: number) { 
      if (n === 0) {
          r[r.length] = t;
          return;
      }
      for (var i = 0, l = a.length - n; i <= l; i++) {
          var b = t.slice();
          b.push(a[i]);
          _(b, a.slice(i + 1), n - 1);
      }
  }

  _([], arr, size);

  return r;
}



export {
  combination,
  promisic,
};