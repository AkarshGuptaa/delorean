let arr = [
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
    'G7', 'G8', 'G9', 'LT-1', 'LT-2', 'LT-3', 'PRINT-SHOP','UNIFORM-SHOP','HSS-DEPARTMENT','LANGUAGE-LAB','HOUSE-KEEPING','WASHROOM-G1',
    'WASHROOM-LT3','WASHROOM-LT2','WASHROOM-LT1','WASHROOM-LL','RECEPTION','STAIRS-G6','STAIRS-PS','STAIRS-LT2','STAIRS-R','ENG-DEPT','GROUND',
    //FIRST FLOOR
    'FF1', 'FF2', 'FF3', 'FF4', 'FF5', 'FF6',
    'FF7', 'FF8', 'FF9', 'BIOTECH-LAB-1', 'BIOTECH-LAB-2','BIOTECH-DEPARTMENT-1', 'TELEPHONE-EXCHANGE', 'MATHS-DEPARTMENT-1', 'ELECTRICAL-AND-MACHINE', 'TECHNOLOGY-SOLUTION-FOR-SOIL-AND-WATER','WASHROOM-BD','WASHROOM-MF','WASHROOM-BT1','WASHROOM-BT2','WASHROOM-BT3','WASHROOM-BT4','STAIRS-S1','STAIRS-S2','STAIRS-S3','STAIRS-S4','STAIRS-S5','STAIRS-S6',
    //SECOND FLOOR
    'TS1', 'TS2', 'TS3', 'TS4',
    'TS5', 'TS6', 'TS7', 'TS8', 'TS9', 'TS10', 'TS11', 'TS12', 'CS-1', 'CS-2', 'CS-3',
    'CS-4', 'PHYSICS-LAB', 'EDGER_F_CODD_HALL', 'PHD', 'WASHROOM-2', 'HSS-DEPARTMENT-2', 'COMMUNCATION-LAB', 'TNP-DEPARTMENT', 'SAMADHAN-SAMBHAG', 'WASHROOM-TS2','WASHROOM-TP','WASHROOM-H','WASHROOM-P1','WASHROOM-P2','WASHROOM-PL1','WASHROOM-PL2','WASHROOM-W','STAIR-F1','STAIR-F2','STAIR-F3'
];


let sroomObj = {
    //GROUND-FLOOR
    'G1':11, 'G2':12, 'G3':13, 'G4':14, 'G5':15, 'G6':16,
    'G7':17, 'G8':18, 'G9':19, 'LT-1':20, 'LT-2':21, 'LT-3':22, 'PRINT-SHOP':23,'UNIFORM-SHOP':24,'HSS-DEPARTMENT':25,'LANGUAGE-LAB':26,'HOUSE-KEEPING':27,'WASHROOM-G1':28,
    'WASHROOM-LT3':29,'WASHROOM-LT2':30,'WASHROOM-LT1':31,'WASHROOM-LL':32,'RECEPTION':33,'STAIRS-G6':34,'STAIRS-PS':35,'STAIRS-LT2':36,'STAIRS-R':37,'ENG-DEPT':38,'GROUND':39,
    //FIRST FLOOR
    'FF1':101, 'FF2':102, 'FF3':103, 'FF4':104, 'FF5':105, 'FF6':106,
    'FF7':107, 'FF8':108, 'FF9':109, 'BIOTECH-LAB-1':110, 'BIOTECH-LAB-2':112, 'WASHROOM':113, 'BIOTECH-DEPARTMENT-1':114, 'TELEPHONE-EXCHANGE':115, 'MATHS-DEPARTMENT-1':116, 'ELECTRICAL-AND-MACHINE':117, 'TECHNOLOGY-SOLUTION-FOR-SOIL-AND-WATER':118,'WASHROOM-BD':119,'WASHROOM-MF':120,'WASHROOM-BT1':121,'WASHROOM-BT2':122,'WASHROOM-BT3':123,'WASHROOM-BT4':124,'STAIRS-S1':125,'STAIRS-S2':126,'STAIRS-S3':127,'STAIRS-S4':128,'STAIRS-S5':129,'STAIRS-S6':130,
    //SECOND FLOOR
    'TS1':201, 'TS2':202,
    'TS5':205, 'TS6':206, 'TS7':207, 'TS8':208, 'TS9':209, 'TS10':210, 'TS11':211, 'TS12':212, 'CS-1':213, 'CS-2':214, 'CS-3':215,
    'CS-4':216, 'PHYSICS-LAB':217, 'EDGER_F_CODD_HALL':218, 'PHD':219, 'WASHROOM-TS2':220, 'HSS-DEPARTMENT-2':221, 'COMMUNCATION-LAB':222, 'TNP-DEPARTMENT':223, 'SAMADHAN-SAMBHAG':224,'WASHROOM-TP':225,'WASHROOM-H':226,'WASHROOM-P1':227,'WASHROOM-P2':228,'WASHROOM-PL1':229,'WASHROOM-PL2':230,'WASHROOM-W':231,'STAIR-F1':232,'STAIR-F2':233,'STAIR-F3':234,
}


for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = sroomObj[arr[i]];
    start.add(option);
}

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.text = arr[i];
    option.value = sroomObj[arr[i]];
    end.add(option);
}

let list = document.getElementById('myUL');
for (let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.innerText = arr[i];
    item.id = `class${arr[i]}`;
    list.append(item);
}

function handleSearch() {
    let value = document.getElementById('cls').value;
    let list = document.getElementById('myUL');
    let filter, a, txtValue;
    if (value != '') {
        list.classList.remove('none');
    } else {
        list.classList.add('none');
    }
    filter = value.toUpperCase();
    let li = list.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++){
        a = li[i].innerText;
        txtValue = a;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}

// Managing Pages
function handlePages(container) {
    let box = document.querySelector(`.${container}`);
    let buttonContainer = document.querySelector('.choices');
    box.classList.remove('none');
    buttonContainer.classList.add('none');
}