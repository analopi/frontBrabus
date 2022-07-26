import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { postModuleEazy, postModuleHard } from "./http/clientAPI";
import Fade from 'react-reveal/Fade';
import { Modal } from "./components/Modal/Modal";

function App(props) {
  const [style, setStyle] = useState(true)
  const [welcome, setWelcome] = useState([true, false, false, false])
  const [mobile, setMobile] = useState("")
  const [other, setOther] = useState("")
  const [gosNumber, setGosNumber] = useState("")
  const [value, setValue] = useState("В ватсапе")
  const [mobileHard, setMobileHard] = useState("")

  const [errorMobile, setErrorMobile] = useState(false)

  const [errorMobileHard, setErrorMobileHard] = useState(false)

  const [errorOther, setErrorOther] = useState(false)

  const [isPostMobile, setIsPostMobile] = useState(false)

  const [isPostMobileHard, setIsPostMobileHard] = useState(false)

  const [errorGosNumber, setErrorGosNumber] = useState(false)

  const [viewModal, setViewModal] = useState(false)

  const [animForModal, setAnimForModal] = useState(false)


  const addInfo = async () => {
    const response = await postModuleEazy(mobile, other).then(() => {
      debugger;
      setMobile('')
      setOther('')
      setIsPostMobile(false)
      setViewModal(true)
      setTimeout(() => {setAnimForModal(true)}, 1000)
      
    })

  }

  const addInfoGosNumber = async () => {
    const response = await postModuleHard(mobileHard, other, gosNumber, value).then(() => {
      debugger;
      setMobileHard('')
      setOther('')
      setGosNumber('')
      setValue('')
      setIsPostMobileHard(false)
      setViewModal(true)
      setTimeout(() => {setAnimForModal(true)}, 1000)
      setWelcome([false, false, true, false])
    })
  }

  const otherHandler = (data) => {
    if (data.target.value == "") {

    }
  }

  const mobileHandler = (data) => {
    const regex = /^[0-9]*$/
    if (regex.test(data.target.value) && data.target.value.length <= 11) {
      data.target.name == "mobile" ? setMobile(data.target.value) : setMobileHard(data.target.value)
      data.target.name == "mobile" ? setErrorMobile(false) : setErrorMobileHard(false)
      setErrorOther(false)
      const re = /^((\+7|7|8)+([0-9]){10})$/
      if (re.test(data.target.value)) {
        data.target.name == "mobile" ? setIsPostMobile(true) : setIsPostMobileHard(true)
      }
      else {
        data.target.name == "mobile" ? setIsPostMobile(false) : setIsPostMobileHard(false)
      }
    }
    else if (data.target.value == "") {
      data.target.name == "mobile" ? setMobile(data.target.value) : setMobileHard(data.target.value)
    }
  }
  const animHandler = () => {

    
  }


  return (
    <div onClick={animHandler}>
      <Modal viewModal={viewModal} animForModal={animForModal} setViewModal={setViewModal} setAnimForModal={setAnimForModal}></Modal>
      <header>
        <div class="back__blur__header"></div>
        <div class="header__wrapper">
          <div class="text__logo">
            <h1>Скупка машин в Екатеринбурге и Свердловской области</h1>
          </div>
          <div class="header__form" id="form_1">
            <div class="col-3">
              {(errorMobile) && <Fade><span className="header__error">* Некорректный ввод</span></Fade>}
              <input autocomplete="off" onChange={mobileHandler} name="mobile" class="effect-4" value={mobile} type="text" placeholder="Телефон" />
              <span class="focus-border"></span>
              <i></i>
            </div>
            <div class="col-3">
              {(errorOther) && <Fade><span className="header__error2">* Некорректный ввод</span></Fade>}
              <input autocomplete="off" onChange={data => { setOther(data.target.value); setErrorOther(false); setErrorMobile(false) }} name="other" class="effect-4" value={other} type="text" placeholder="Марка, модель, год" />
              <span class="focus-border"></span>
              <i></i>
            </div>
            <Button text={"Отправить"} onClick={() => {
              if (isPostMobile && other.length > 0) { addInfo() }
              else if (!isPostMobile && other.length == 0) { setErrorOther(true); setErrorMobile(true) }
              else if (!isPostMobile) setErrorMobile(true)
              else if (other.length == 0) setErrorOther(true)
            }} />
          </div>
          <h2>ВЫКУПАЕМ ЛЮБЫЕ АВТОМОБИЛИ, В ТОМ ЧИСЛЕ БИТЫЕ, НЕИСПРАВНЫЕ, КРЕДИТНЫЕ, В ЗАЛОГЕ, С ЗАПРЕТАМИ, БЕЗ ДОКУМЕНТОВ И ПТС, ПРОБЛЕМНЫЕ И Т.Д.</h2>
        </div>
      </header>
      <main>
        <div class="back__blur__main"></div>
        <div class="main_wrapper">
          {console.log(welcome)}
          
          {welcome[0] &&
            <Fade big>
              <div>
                <h2 class={style ? "content" : "content-back"}>Узнай стоимость своего автомобиля</h2>
                <Button text={"Узнать"} class={style ? "content" : "content-back"} onClick={() => { setWelcome([false, true, false, false]); setStyle(true) }} />
              </div>
            </Fade>
          }
          {welcome[1] &&
            <div>
              <h2 class={style ? "content" : "content-back"}>Напишите марку своей машины</h2>
              <div>
                <input autocomplete="off" onChange={data => setOther(data.target.value)} name="other" class={style ? "effect-4 content" : "effect-4 content-back"} type="text" placeholder="Марка, модель, год" value={other} />
              </div>
              <Button text={"Назад"} class={style ? "content" : "content-back"} onClick={() => { setWelcome([true, false, false, false]); setStyle(false) }} />
              <Button text={"Далее"} class={style ? "content" : "content-back"} onClick={() => { setWelcome([false, false, true, false]); setStyle(true) }} />
            </div>
          }
          {welcome[2] &&
          //d[а-я]\d{3}[а-я]{2}\d{2,3}
            <div>
              <h2 class={style ? "content" : "content-back"}>Укажите гос номер &#40;Так мы сможем сделать оценку автомобиля быстрее&#41;</h2>
              <div className="gosNumber__wrapper">
                {errorGosNumber && <span className="gosNumber__error">* Поле обязательное</span>}
                <input autocomplete="off" onChange={data => { setGosNumber(data.target.value); setErrorGosNumber(false) }} name="gosNumber" class={style ? "effect-4 content" : "effect-4 content-back"} type="text" placeholder="Госномер" value={gosNumber} />
              </div>
              <Button text={"Назад"} class={style ? "content" : "content-back"} onClick={() => { setWelcome([false, true, false, false]); setStyle(false); setErrorGosNumber(false) }} />
              <Button text={"Далее"} class={style ? "content" : "content-back"} onClick={() => { if (gosNumber != "") { setWelcome([false, false, false, true]); setStyle(true) } else { setErrorGosNumber(true) } }} />
            </div>
          }
          {welcome[3] &&
            <div>
              <h2 class={style ? "content" : "content-back"}>Выберите способ связи с вами</h2>
              <div class="radio-buttons content">
                <input type="radio" value="В ватсапе"
                  checked={value == 'В ватсапе' ? true : false}
                  onChange={(data) => { setValue(data.target.value) }} name="select" id="option-1" />
                <input type="radio" value="СМС"
                  checked={value == 'СМС' ? true : false}
                  onChange={(data) => { setValue(data.target.value) }} name="select" id="option-2" />
                <input type="radio" value="Позвонить"
                  checked={value == 'Позвонить' ? true : false}
                  onChange={(data) => { setValue(data.target.value) }} name="select" id="option-3" />
                <label for="option-1" class="option option-1">
                  <div class="dot"></div>
                  <span>В ватсапе</span>
                </label>
                <label for="option-2" class="option option-2">
                  <div class="dot"></div>
                  <span>Смс</span>
                </label>
                <label for="option-3" class="option option-3">
                  <div class="dot"></div>
                  <span>Позвонить</span>
                </label>
              </div>
              <div className="mobileHard__wrapper">
                {(errorMobileHard) && <Fade top><span className="header__error">* Некорректный ввод</span></Fade>}
                <input autocomplete="off" onChange={mobileHandler} name="mobiles" class={"effect-4 content"} type="text" placeholder="Мобила" value={mobileHard} />
              </div>
              <Button text={"Назад"} class={style ? "content" : "content-back"} onClick={() => { setWelcome([false, false, true, false]); setStyle(false) }} />
              <Button text={"Отправить"} class={"content"} onClick={() => { if (isPostMobileHard) { addInfoGosNumber() } else setErrorMobileHard(true) }} />
            </div>
          }
        </div>
      </main>
      <footer>
        <div class="back__blur__footer"></div>
        <div class={"footer__wrapper"}>
        <Fade top>
          <h2>Контакты</h2><br/>
        </Fade>
          <Fade top cascade>
            <div>
              <h3>Мы находимся:<br /><br /></h3>
              <h3>Город Екатеринбург.<br /><br /></h3>
              <h3>Район Верхняя Пышма,Петрова 59Б<br /><br /></h3>
              <h3>89222264559 Александр.</h3>
            </div>
          </Fade>
        </div>

      </footer>
    </div>
  );

}

export default App;
