var liftPosition = 1;
var lift = document.querySelector('.lift');
var liftButtonQueue = [];
var liftMovingFunctions = [];
var liftMoving = false;

setLift = e => {
    let id = Number(e.id);
    liftButtonQueue.push(id);
    // liftButtonQueue = liftButtonQueue.sort();
    moveLift(e);
}

removeFromQueue = i => {
    liftButtonQueue.splice(i - 1, 1);
}

moveLift = e => {
    // console.log(liftButtonQueue);
    if (liftButtonQueue[0] !== undefined) {
        switch (liftButtonQueue[0]) {
            case 1:
                moveLiftToOne(e);
                break;
            case 2:
                moveLiftToSecond(e);
                break;
            case 3:
                moveLiftToThird(e);
                break;
            case 4:
                moveLiftToFourth(e);
                break;
        }
    } else {
        return false
    }
}

moveLiftToOne = e => {
    let id = Number(e.id);
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            e.blur();
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 500);
            break;
        case 2:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            setTimeout(_ => {
                e.blur();
            }, 1000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 1500);
            break;
        case 3:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            setTimeout(_ => {
                e.blur();
            }, 2000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 2500);
            break;
        case 4:
            lift.style.transform = 'translateY(0)';
            liftPosition = 1;
            setTimeout(_ => {
                e.blur();
            }, 3000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 3500);
            break;
    }
}

moveLiftToSecond = e => {
    let id = Number(e.id);
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            setTimeout(_ => {
                e.blur();
            }, 1000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 1500);
            break;
        case 2:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            e.blur();
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 500);
            break;
        case 3:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            setTimeout(_ => {
                e.blur();
            }, 1000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 1500);
            break;
        case 4:
            lift.style.transform = 'translateY(150%)';
            liftPosition = 2;
            setTimeout(_ => {
                e.blur();
            }, 2000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 2500);
            break;
    }
}

moveLiftToThird = e => {
    let id = Number(e.id);
    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            setTimeout(_ => {
                e.blur();
            }, 2000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                console.log(liftButtonQueue);
                moveLift(e);
            }, 2500);
            break;

        case 2:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            setTimeout(_ => {
                e.blur();
            }, 1000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 1500);
            break;

        case 3:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            e.blur();
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 500);
            break;

        case 4:
            lift.style.transform = 'translateY(300%)';
            liftPosition = 3;
            setTimeout(_ => {
                e.blur();
            }, 1000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 1500);
            break;
    }
}

moveLiftToFourth = e => {
    let id = Number(e.id);

    switch (liftPosition) {
        case 1:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            setTimeout(_ => {
                e.blur();
            }, 3000);
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 3500);
            break;
        case 2:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            setTimeout(_ => {
                e.blur();
            }, 2000)
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 2500);
            break;
        case 3:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            setTimeout(_ => {
                e.blur();
            }, 1000)
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 1500);
            break;
        case 4:
            lift.style.transform = 'translateY(400%)';
            liftPosition = 4;
            e.blur();
            setTimeout(_ => {
                let index = liftButtonQueue.indexOf(id);
                removeFromQueue(index);
                moveLift(e);
            }, 500);
            break;
    }
}