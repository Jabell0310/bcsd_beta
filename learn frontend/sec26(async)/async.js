/*const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRecTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};
console.log("start");
isRecTriangle(3, 4, 5);
console.log("finish");*/
// callstack 함수는 실행 컨텍스트를 저장한 자료구조이다.
// 즉, 함수를 호출하면 실행 컨텍스트가 생성되고, 이를 콜스택에 추가한 다음 다음 함수를 실행한다.
// 숫자코드 왼쪽을 클릭하면 빨간 점 표시가 나타나는데 코드 실행을 멈추고 콣스택 요소를 조회하는 역할을 한다.
// 이를 디버깅이라 하며 코드 실행이 잘못된 부분을 찾을 때 많이 사용된다.
// Javascript가 코드와 함수를 호출하여 위치를 찾아주는 구조화 도구이다.

console.log("Sending request to server!");
setTimeout(() => {
  console.log("Here is your data from this server...");
}, 3000);
console.log("I am at the end of the file");
// 이코드는 맨위에 있는 문자열이 출력된 후 맨 아래 있는 문자열이 출력되고 setTimeOut 함수내에 있는 문자열을 출력한다.
// setTimeOut에 있는 문자열이 가장 늦게 출력되는 이유는 javascript에서 처리할 수 없을 때
// 콜 스택이 Web API를 인식하고 브라우저에 전달하여 브라우저가 이를 작업을 마치자마자 javascript 콜스택에 추가된다.
// 이때 javascript는 콜스택을 브라우저에 전달하는 동시에 다음 일을 처리하므로 맨 마지막에 출력되는 문자열이 setTimeOut 내부의 문자열이다.
// loupe 사이트에서 이 처리과정을 자세히 확인할 수 있다.

/*setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.body.style.backgroundColor = "green";
        setTimeout(() => {
          document.body.style.backgroundColor = "blue";
          setTimeout(() => {
            document.body.style.backgroundColor = "violet";
            setTimeout(() => {
              document.body.style.backgroundColor = "purple";
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);*/
// ()=>{}형태인 함수를 콜백함수라고 하는데 이것을 여러번 중첩하다보면 콜백지옥이라는 악명높은 문제에 빠질 수 있다.

/*const delayedColorChange = (color, time, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext();
  }, time);
};8/
// 이번에는 에로우함수를 만든 뒤 매개변수를 이용하여 콜백지옥을 만들어보았다.
/*delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000, () => {
          delayedColorChange("purple", 1000, () => {});
        });
      });
    });
  });
});*/

/*const fakeRequestCallBack = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :c");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
fakeRequestCallBack(
  "books.com/page1",
  function (response) {
    console.log("It worked!!");
    console.log(response);
    fakeRequestCallBack(
      "books.com/page2",
      function (response) {
        console.log("It worked (2)!!");
        console.log(response);
        fakeRequestCallBack(
          "books.com/page3",
          function (response) {
            console.log("It worked (3)!!");
            console.log(response);
          },
          function (err) {
            console.log("Error (3)", err);
          }
        );
      },
      function (err) {
        console.log("Error (2)", err);
      }
    );
  },
  function (err) {
    console.log("Error", err);
  }
);*/
// 특히 API요청을 많이 하는 request구조에서 콜백 지옥이 많이 발생한다. 참고로 request구조는 url success failure구조로 나뉘어져 있다.
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :c");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};
// promise 함수는 3가지 상태를 나타내는데 pending은 비동기 로직 처리의 미완료 상태이고 resolve는 비동기 로직 처리가 완료되어 promise의 결과가 반환된 상태 reject는 비동기 로직 처리가 실패된 상태를 의미한다.
// promise의 핵심은 로직 처리가 성공하거나 실패했을 때 코드가 실행되는 것으로 promise 객체 자체에 콜백을 첨부해야한다.
// promise함수는 두가지 매개변수가 많이 쓰이는데 then에서 매개변수를 통해 정보를 가져오는 resolve와 catch에서 매개변수를 통해 정보를 가져오는 reject 2가지가 있다.

/*fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("Promise resolved");
    console.log("It worked!!!");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("Promise resolved (2)");
        console.log("It worked!!!");
        fakeRequestPromise("yelp.com/api/coffee/page3")
          .then(() => {
            console.log("Promise resolved (3)");
            console.log("It worked!!!");
          })
          .catch(() => {
            console.log("Promise rejected (3)");
            console.log("Oh no error!!!");
          });
      })
      .catch(() => {
        console.log("Promise rejected (2)");
        console.log("Oh no error!!!");
      });
  })
  .catch(() => {
    console.log("Promise rejected");
    console.log("Oh no error!!!");
  });*/
// 이번에는 함수를 request문에 중첩시킨 것이 아니라 then, catch매서드를 이용하여 나타낸 request문이다.
// 그럼에도 여전히 콜백지옥이 발생한다.
/*fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("It worked!!! (page1)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("It worked!!! (page2)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("It worked!!! (page3)");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no a request failed");
    console.log(err);
  });*/
// promise함수의 장점은 반환값인 return을 then과 catch매서드와 같이 쓰면 중첩할 필요가 없어지므로 콜백지옥이 발생하지 않는다.
// then매서드는 콜백처리가 성공한 즉, resolve 상태일 때 코드가 시행되고 catch매서드는 콜백처리가 실패한 즉, reject 상태일 때 코드가 시행된다.

/*const login = async (username, password) => {
  if (!username || !password) throw "Missing credentials";
  if (password === "computer") return "Welcome";
  throw "Invalid Password";
};
login("jabell", "computer")
  .then((msg) => {
    console.log("Logged In!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });*/
// 비동기 함수는 promise 함수가 내장된 함수로 resolve값이 나오면 return으로 reject값이 나오면 throw로 쓸 수 있다!
// 비동기 함수를 사용했을 때는 promise 객체를 사용했을 때보다 더 깔끔한 코드가 사용이 가능하다.
// 마찬가지로 매개변수를 이용해서 기존에 만들었던 함수의 정보를 가져오는 것도 역시 가능하다.
/*const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("purple", 1000);
  return "Finally Done";
}

async function printRainbow() {
  await rainbow();
  console.log("End of rainbow");
}

printRainbow();*/
// 비동기 함수의 resolve 케이스에서는 await가 많이 사용되고 기본 promise객체의 then catch매서드로 간결해진 코드를 한 층 더 간결하게 만드는 역할을 한다.

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection timeout :c");
      } else {
        resolve(`Here is the fake data from ${url}`);
      }
    }, delay);
  });
};

async function takeFakeRequest() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("Catch an Error!");
    console.log("Error is :", e);
  }
}

// 비동기 함수의 reject 케이스에서는 try문에 오류가 난 코드를 입력하고 catch문에 오류가 난 코드가 존재한다면 시행할 것을 입력받는다.
// 그렇게 오류가 생기면 catch문에 있는 코드가 시행된다.
