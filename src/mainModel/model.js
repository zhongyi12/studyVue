const mainModel = {};
const self = mainModel;
self.initLang = () => {
  const navigatorLang = navigator.language || navigator.userLanguage;
  self.setLang = navigatorLang.substring(0, 2) === 'zh' ? 'cn' : 'en';
};
self.changeLang = () => {
  let country =  self.setLang;
  let nextCountry = country==='en' ? 'cn':'en';
  let tempLang = country;
  self.setLang = nextCountry;
  nextCountry = tempLang;
  // console.log('self.setLang', self.setLang)
};
self.initLang();
export default mainModel;
