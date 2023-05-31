/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
  const pajak1 = (gaji1 * 2) / 100;
  const pajak2 = (gaji2 * 5) / 100;
  const pajak3 = (gaji3 * 10) / 100;

  const totalGaji = gaji1 + pajak1 + gaji2 + pajak2 + gaji3 + pajak3;

  return `Total gaji yang harus dibayar:\nEmp1: Rp.${gaji1} + Pajak(2%) = Rp.${
    gaji1 + pajak1
  }\nEmp2: Rp.${gaji2} + Pajak(5%) = Rp.${
    gaji2 + pajak2
  }\nEmp3: Rp.${gaji3} + Pajak(10%) = Rp.${
    gaji3 + pajak3
  }\nTotal: Rp.${totalGaji}`;
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */
