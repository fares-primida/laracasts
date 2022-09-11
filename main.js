let CartsContainer = document.querySelector('.carts-container')


function GetData() {
    let myRequest = new XMLHttpRequest

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let Data = JSON.parse(this.responseText)
            CreateCarts(Data[0])
        }
    }

    myRequest.open("Get" , "./cars.json" , true)
    myRequest.send()
}

function CreateCarts(obj) {
    for (let i = 0; i <= 6; i++) {
        // create the card div
        let Cart = document.createElement('div')
        Cart.classList.add('cart')
        Cart.classList.add('position-relative')
        Cart.classList.add('d-flex')
        Cart.classList.add('flex-row')
        Cart.classList.add('p-3')

        // create the image div
        let ImageDiv = document.createElement('div')
        ImageDiv.classList.add('image')
        ImageDiv.classList.add('position-absolute')

        // create the element tag
        let img = document.createElement('img')
        let imgsrc = obj[`image_${i}`]
        img.src = imgsrc

        // append img to image div
        ImageDiv.appendChild(img)

        // append the imagediv to the cart div
        Cart.appendChild(ImageDiv)

        // create the info div
        let Info = document.createElement('div')
        Info.classList.add('info')
        Info.classList.add('p-2')
        Info.classList.add('position-absolute')
        Info.classList.add('text-capitalize')

        // create h5 element
        let H4 = document.createElement('h4')
        H4.innerHTML = obj[`title_${i}`]

        // append the h4 to info div
        Info.appendChild(H4)

        // create the h2 element
        let H2 = document.createElement('h2')
        H2.innerHTML = obj[`info_${i}`]

        // append the h2 element to info div
        Info.appendChild(H2)

        // create p element
        let P = document.createElement('p')
        P.innerHTML = obj[`category_${i}`]

        // append p to info div
        Info.appendChild(P)

        // append info to cart
        Cart.appendChild(Info)

        // append cart to carts container
        CartsContainer.appendChild(Cart)
    }
}