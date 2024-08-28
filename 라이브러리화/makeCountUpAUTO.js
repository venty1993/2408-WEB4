// readme

// 카운트업으로 만들 html 개체에 quokka-unt-up 이라는 클래스를 추가해주세요

const quokka = document.getElementsByClassName('quokka-unt-up');

for(let i = 0 ; i < quokka.length ; i++) {
    makeCountUp(quokka[i], Number(quokka[i].innerText),2)
}

// 위 작성과 비슷한 목적으로 사용 가능하지만, 인덱스 사용이 조금 난해할수 있다.
// for (const element of quokka) {
//     console.log(element)
// }


function makeCountUp(target, goal, duration, accFunc = 'ease', frame = 60){
    const totalFrame = duration * frame;

    let progressFunc;

    try {
        if(isNaN(goal)){
            throw new Error("목표값이 숫자가 아닙니다.");  
        }

        if(accFunc === 'ease') {
            progressFunc = easeInOutCubic;
        }else if(typeof accFunc === 'function'){
            progressFunc = accFunc;
        }else if(accFunc === 'linear') {
            progressFunc = (x)=>{
                return x
            };
        }else {
            throw new Error("잘못된 가속도 함수 입니다.");
        }

        for(let i = 0 ; i <= totalFrame ; i ++) {
        const 진행도 = i/totalFrame;
        setTimeout(()=>{
            target.innerText = parseInt(goal * progressFunc(진행도)).toLocaleString();
        },i/frame * 1000)
    }

    } catch (e) {
        console.error(e);
    }

    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
}