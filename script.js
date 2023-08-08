// (function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0;
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img1/${img}.jpg`
        let customer = new Customer(Img,name,text)

        customers.push(customer)
    }

    createCustomer( 0,'Balvant', 'There is something that South Africa does so right in hosting multi-team tournaments. Be it the facilities, the colour, the entertainment' )

    createCustomer( 1,'Vikram','There is something that South Africa does so right in hosting multi-team tournaments. Be it the facilities, the colour, the entertainment')

    createCustomer( 2,'Aditya','There is something that South Africa does so right in hosting multi-team tournaments. Be it the facilities, the colour, the entertainment' )
    
    createCustomer( 3,'Ayush','There is something that South Africa does so right in hosting multi-team tournaments. Be it the facilities, the colour, the entertainment' )

    createCustomer( 4,'Gaurav','There is something that South Africa does so right in hosting multi-team tournaments. Be it the facilities, the colour, the entertainment' )

    createCustomer( 5,'Vikash','There is something that South Africa does so right in hosting multi-team tournaments. Be it the facilities, the colour, the entertainment' )

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('prevBtn')){
                if(index===0) {
                    index=customers.length
                }
                index--
                customerImage.src=customers[index].img
                customerName.textContent=customers[index].name
                customerText.textContent=customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index===customers.length) {
                    index=0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

// }) ()

