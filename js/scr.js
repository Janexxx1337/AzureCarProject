const callBody = () => {
    const changer = document.querySelector('.log-changer')
    const trigger = document.querySelector('.login');
    const emailBody = document.querySelector('.email-body')
    trigger.addEventListener('click', () => {
        changer.classList.add('block')
        emailBody.classList.add('hide')
        
    })
    }
    
    callBody()


/*     const callCars = (url) => {
        const getData = fetch(url)
        const res = getData.json();
        const {name} = res
    }

    callCars('someURL') */ // Вставить в ЮРЛ API сервера с которого будете колить данные
    
  