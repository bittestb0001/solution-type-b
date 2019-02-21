console.log('Problem 02')
// 계산기
let getInstance = (st) => {
  let nst = st.replace(/ /gi, "").split('');
  return getInstance.cal[nst[1]](nst[0],nst[2])
}

getInstance.cal = {
  '+':(a,b)=>+a + +b,
  '-':(a,b)=>+a - +b,
  '/':(a,b)=>+a / +b,
  '*':(a,b)=>+a * +b,
}

// 한번에 다 넣으라는건가..?

getInstance('3 + 4')
getInstance('12 * 4')
getInstance('8 / 2')
getInstance('10 - 2')

console.log(
  getInstance('3 * 4')
)
