const myPackage = require('@codertocat/hello-world-npm');
myPackage.helloWorld();
function helloWorld() {
  console.log('Hello World!');
}

module.exports = {
  helloWorld: helloWorld
}
const core = ต้องการ ('@ actions / core');
const github = ต้องการ ('@ actions / github');

ลอง {
  // อินพุต `who-to-greet` ถูกกำหนดในไฟล์ข้อมูลเมตาของแอ็คชัน
  const nameToGreet = core.getInput ('who-to-greet');
  console.log (`สวัสดี $ {nameToGreet}! ');
  เวลา const = (ใหม่วันที่ ()) toTimeString ();
  core.setOutput ("เวลา" เวลา)
  // รับ JSON webhook payload สำหรับเหตุการณ์ที่เรียกใช้เวิร์กโฟลว์
  const payload = JSON.stringify (github.context.payload, ไม่ได้กำหนด, 2)
  console.log (`ส่วนของเหตุการณ์: $ {payload}`);
} catch (ข้อผิดพลาด) {
  core.setFailed (error.message);
}
