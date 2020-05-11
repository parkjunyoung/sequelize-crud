const wait1seconds = new Promise(
    (resolve, reject) => {
        console.log("시작한다")
        //1초 뒤에 콘솔에 찍습니다.
        setTimeout(
            () => {
                resolve(console.log("1초뒤에 찍는다"))
            },1000 );
    }
);

wait1seconds.then(() =>{
    console.log("찍고난후");
});

