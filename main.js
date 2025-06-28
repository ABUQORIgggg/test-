const info = useSelector((state) => state.companyInfo.info)
console.log(info)
console: info = {
      telegram: "@sardor_xojimurodov"
 }

  if(info?.telegram.includes("@")) {
    info.telegram = info?.telegram.replace("@", "");
  }

console.log(info.telegram)