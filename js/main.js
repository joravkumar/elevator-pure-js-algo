var liftPosition = 1;
var lift = document.querySelector('.lift');
var liftButtonQueue = [];
var liftMovingFunctions = [];
var isMoving = false;

setLift = e => {
    let id = Number(e.id);
    liftButtonQueue.push(id);
    moveLift();
}

moveLift = _ => {
    if (liftButtonQueue[0] !== undefined) {
        switch (liftButtonQueue[0]) {
            case 1:
                if (!isMoving) {
                    moveLiftToOne();
                } else {
                    setTimeout(_ => {
                        moveLiftToOne();
                    }, 3000)
                }
                break;
            case 2:
                if (!isMoving) {
                    moveLiftToSecond();
                } else {
                    setTimeout(_ => {
                        moveLiftToSecond();
                    }, 3000)
                }
                break;
            case 3:
                if (!isMoving) {
                    moveLiftToThird();
                } else {
                    setTimeout(_ => {
                        moveLiftToThird();
                    }, 3000);
                }
                break;
            case 4:
                if (!isMoving) {
                    moveLiftToFourth();
                } else {
                    setTimeout(_ => {
                        moveLiftToFourth();
                    }, 3000);
                }
                break;
        }
    } else
        isMoving = false;
}

moveLiftToOne = _ => {
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 500);
            break;
        case 2:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 1500);
            break;
        case 3:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 2500);
            break;
        case 4:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 3500);
            break;
    }
}

moveLiftToSecond = e => {
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 1500);
            break;
        case 2:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 500);
            break;
        case 3:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 1500);
            break;
        case 4:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 2500);
            break;
    }
}

moveLiftToThird = e => {
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                console.log(liftButtonQueue);
                moveLift();
            }, 2500);
            break;

        case 2:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 1500);
            break;

        case 3:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 500);
            break;

        case 4:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 1500);
            break;
    }
}

moveLiftToFourth = e => {
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 3500);
            break;
        case 2:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 2500);
            break;
        case 3:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 1500);
            break;
        case 4:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            isMoving = true;
            setTimeout(_ => {
                liftButtonQueue.shift();
                moveLift();
            }, 500);
            break;
    }
}