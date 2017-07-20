'use strict'
const readlineSync = require('readline-sync');
//const readlineSync1 = require('readline-sync');
function mainMenu()
{
    let mainMenu=readlineSync.question(`1. 添加学生
    2. 生成成绩单
    3. 退出
    请输入你的选择（1～3）：`);
    return mainMenu;
}
function inputStudentInfo(){
    console.log("    请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    let StudentInfo=[{}];
    StudentInfo.name.push(readlineSync.question(`姓名: `));
    StudentInfo.ID.push(readlineSync.question(`学号: `));
    StudentInfo.nation.push(readlineSync.question(`民族: `));
    StudentInfo.klass.push(readlineSync.question(`班级: `));
    StudentInfo.mathSubject.push(readlineSync.question(`数学成绩: `));
    StudentInfo.chineseSubject.push(readlineSync.question(`语文成绩: `));
    StudentInfo.englishSubject.push(readlineSync.question(`英语成绩: `));
    StudentInfo.programsubject.push(readlineSync.question(`编程成绩: `));
    return `StudentInfo`
}
function printfMenu(StudentInfo){
   // let StudentInfo=inputStudentInfo();
   // console.log("        请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
    for(var i=0;i<StudentInfo.length;i++){
        let Sum=[],Average=[];
        Sum=StudentInfo[i].chineseSubject+StudentInfo[i].mathSubject+
            StudentInfo[i].englishSubject+StudentInfo[i].programSubject;
        Average=Sum/StudentInfo.length;
    }
    let Avg=0;
    let Tol=0;
    for(var i=0;i<Average.length;i++){
        Avg+=Average[i];
    }
    for(var i=0;i<Sum.length;i++){
        Tol+=Sum[i];
    }
    console.log("成绩单");
    console.log("姓名|语文|数学|英语|编程|平均分|总分");
    console.log("=============================================");
    for(var i=0;i<StudentInfo.length;i++)
    {
        console.log("     "+StudentInfo[i].name+"    ");
        console.log("    |    ");
        console.log(StudentInfo[i].chineseSubject+"    ");
        console.log("    |    ");
        console.log(StudentInfo[i].mathSubject+"    ");
        console.log("    |    ");
        console.log(StudentInfo[i].englishSubject+"    ");
        console.log("    |    ");
        console.log(StudentInfo[i].programSubject+"    ");
        console.log("    |    ");
        console.log(Average[i]);
        console.log("    |    ");
        console.log(Sum[i]);
        console.log("\n");
    }
    console.log("============================================="+"\n");
    console.log("全班总平均分："+Avg.toFixed(2)+"\n");
    console.log("全班总分中位数："+Tol.toFixed(2)+"\n");
}
function Exit(){
    return 0;
}
while(!Exit()){
    let mainMenu=mainMenu();
    if(mainMenu===1){
        inputStudentInfo();
    }
    if(mainMenu===2){
        printfMenu();
    }
    if(mianMenu===3){
        Exit();
    }

}

//module.exports.mainMenu=mainMenu;
//module.exports.inputStudentInfo=inputStudentInfo;
//module.exports.printfMenu=printfMenu;
//module.exports.Exit=Exit;

