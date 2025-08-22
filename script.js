    function calculateGrade() {
      let mid = parseFloat(document.getElementById("mid").value) || 0;
      let final = parseFloat(document.getElementById("final").value) || 0;
      let work = parseFloat(document.getElementById("work").value) || 0;

      let total = mid + final + work;
      let grade = "";

            if((total >= 80)){
                grade = "A";
                Swal.fire({
                        title: 'บันทึกสำเร็จ!',
                         html: `รวมคะแนนทั้งหมด: <b>${total}</b> คะแนน <br> ได้เกรด: <b>${grade}</b>`,
                        icon: 'success',
                        confirmButtonText: 'ตกลง'
                        });
            }else if((total >= 70)){
                grade = "B"
                                Swal.fire({
                        title: 'บันทึกสำเร็จ!',
                         html: `รวมคะแนนทั้งหมด: <b>${total}</b> คะแนน <br> ได้เกรด: <b>${grade}</b>`,
                        icon: 'success',
                        confirmButtonText: 'ตกลง'
                        });
            }else if((total >= 60)){
                grade = "B"
                                Swal.fire({
                        title: 'บันทึกสำเร็จ!',
                         html: `รวมคะแนนทั้งหมด: <b>${total}</b> คะแนน <br> ได้เกรด: <b>${grade}</b>`,
                        icon: 'success',
                        confirmButtonText: 'ตกลง'
                        });
            }else if((total >= 50)){
                grade = "B"
                                Swal.fire({
                        title: 'บันทึกสำเร็จ!',
                         html: `รวมคะแนนทั้งหมด: <b>${total}</b> คะแนน <br> ได้เกรด: <b>${grade}</b>`,
                        icon: 'success',
                        confirmButtonText: 'ตกลง'
                        });
            }else{
                grade = "F"
                                Swal.fire({
                        title: 'ปรับปรุง!',
                         html: `รวมคะแนนทั้งหมด: <b>${total}</b> คะแนน <br> ได้เกรด: <b>${grade}</b>`,
                        icon: 'error',
                        confirmButtonText: 'ตกลง'
                        });
            }
              document.getElementById("result").innerHTML = `รวมคะแนนทั้งหมด: ${total} คะแนน <br> ได้เกรด: ${grade}`;
    }