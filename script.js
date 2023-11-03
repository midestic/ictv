var number = document.getElementById('number')
var email = document.getElementById('email')
var contactUs = document.getElementById('contact-us')
var FAQ = document.getElementById('faq')

var menuBtn = document.getElementById('dropdown')
var toggleBtn = document.getElementById('toggle')

var qOne = document.getElementById('question1')
var qTwo = document.getElementById('question2')
var qThree = document.getElementById('question3')
var qFour = document.getElementById('question4')
var qFive = document.getElementById('question5')
var qSix = document.getElementById('question6')
var qSeven = document.getElementById('question7')
var qEight = document.getElementById('question8')
var qNine = document.getElementById('question9')
var qTen = document.getElementById('question10')



var aOne = document.getElementById('answer1')
var aTwo = document.getElementById('answer2')
var aThree = document.getElementById('answer3')
var aFour = document.getElementById('answer4')
var aFive = document.getElementById('answer5')
var aSix = document.getElementById('answer6')
var aSeven = document.getElementById('answer7')
var aEight = document.getElementById('answer8')
var aNine = document.getElementById('answer9')
var aTen = document.getElementById('answer10')










var lap = document.getElementById('laptop')





var pOne = document.getElementById('p-1')
var pTwo = document.getElementById('p-2')
var pThree = document.getElementById('p-3')
var pFour = document.getElementById('p-4')
var pFive = document.getElementById('p-5')
var pSix = document.getElementById('p-6')


var sOne = document.getElementById('s1')
var sTwo = document.getElementById('s2')
var sThree = document.getElementById('s3')
var sFour = document.getElementById('s4')
var sFive = document.getElementById('s5')
var sSix = document.getElementById('s6')
var sSeven = document.getElementById('s7')
var sEight = document.getElementById('s8')




var dropOne = document.getElementById('drop1')
var dropTwo = document.getElementById('drop2')
var dropThree = document.getElementById('drop3')
var dropFour = document.getElementById('drop4')
var dropFive = document.getElementById('drop5')
var dropSix = document.getElementById('drop6')
var dropSeven = document.getElementById('drop7')
var dropEight = document.getElementById('drop8')


// dropOne.style.display = 'none'







var svgContainer = document.getElementById('svg-container')



function changeColor() {
    number.style.color = 'red'

}

function originalColor() {
    number.style.color = 'gray'
}

number.addEventListener('mouseenter',changeColor)
number.addEventListener('mouseleave',originalColor)


function change() {
    email.style.color = 'red'
}

function original() {
    email.style.color = 'gray'
}

email.addEventListener('mouseenter',change)
email.addEventListener('mouseleave',original)

function color() {
    contactUs.style.color = 'red'

}

function orig() {
    contactUs.style.color = 'gray'
}

contactUs.addEventListener('mouseenter',color)
contactUs.addEventListener('mouseleave',orig )


function col() {
    FAQ.style.color = 'red'

}

function ori() {
    FAQ.style.color = 'gray'
}

FAQ.addEventListener('mouseenter',col)
FAQ.addEventListener('mouseleave',ori )



function illustration() {
   var newElement = document.createElement('img');
   newElement.src = 'illustration.svg'
newElement.style.height = 100+'%'
newElement.style.width = 100+'%'



svgContainer.appendChild(newElement)
newElement


}

illustration()



function portfolio() {
  var sms =  document.createElement('img');
  sms.src = 'sms.avif'
  sms.style.width = 100 + '%'
  sms.style.height = 100 + '%'

  pOne.appendChild(sms)
  sms

  var whatsapp =  document.createElement('img');
  whatsapp.src = 'whatsapp.avif'
  whatsapp.style.width = 100 + '%'
  whatsapp.style.height = 100 + '%'

  pTwo.appendChild(whatsapp)
  whatsapp

  var social =  document.createElement('img');
  social.src = 'socialmedia.avif'
 social.style.width = 100 + '%'
  social.style.height = 100 + '%'

  pThree.appendChild(social)
  social

  var web =  document.createElement('img');
  web.src = 'webdesign.avif'
 web.style.width = 100 + '%'
  web.style.height = 100 + '%'

  pFour.appendChild(web)
  web


  var cms =  document.createElement('img');
  cms.src = 'cms.avif'
  cms.style.width = 100 + '%'
 cms.style.height = 100 + '%'

  pFive.appendChild(cms)
  cms

  var animation =  document.createElement('img');
  animation.src = 'animation.avif'
  animation.style.width = 100 + '%'
 animation.style.height = 100 + '%'
//  animation.style.opacity = 70 + '%'

  pSix.appendChild(animation)
  animation



}

portfolio()




function dOne() {

    if (dropOne.classList.contains('show')) {

        dropOne.classList.remove('show')
        dropOne.classList.add('hide')
        } else {
            dropOne.classList.remove('hide')
        dropOne.classList.add('show')
        }

}

sOne.addEventListener('click', dOne)


function dTwo() {
    if (dropTwo.classList.contains('show')) {

        dropTwo.classList.remove('show')
        dropTwo.classList.add('hide')
        } else {
            dropTwo.classList.remove('hide')
        dropTwo.classList.add('show')
        }
}

sTwo.addEventListener('click', dTwo)

function dThree() {
    if (dropThree.classList.contains('show')) {

        dropThree.classList.remove('show')
        dropThree.classList.add('hide')
        } else {
            dropThree.classList.remove('hide')
            dropThree.classList.add('show')
        }
}

sThree.addEventListener('click', dThree)

function dFour() {
    if (dropFour.classList.contains('show')) {

        dropFour.classList.remove('show')
        dropFour.classList.add('hide')
        } else {
            dropFour.classList.remove('hide')
            dropFour.classList.add('show')
        }
}

sFour.addEventListener('click', dFour)

function dFive() {
    if (dropFive.classList.contains('show')) {

        dropFive.classList.remove('show')
        dropFive.classList.add('hide')
        } else {
            dropFive.classList.remove('hide')
            dropFive.classList.add('show')
        }
}

sFive.addEventListener('click', dFive)

function dSix() {
    if (dropSix.classList.contains('show')) {

        dropSix.classList.remove('show')
        dropSix.classList.add('hide')
        } else {
            dropSix.classList.remove('hide')
            dropSix.classList.add('show')
        }
}

sSix.addEventListener('click', dSix)

function dSeven() {
    if (dropSeven.classList.contains('show')) {

        dropSeven.classList.remove('show')
        dropSeven.classList.add('hide')
        } else {
            dropSeven.classList.remove('hide')
            dropSeven.classList.add('show')
        }
}

sSeven.addEventListener('click', dSeven)

function dEight() {
    if (dropEight.classList.contains('show')) {

        dropEight.classList.remove('show')
        dropEight.classList.add('hide')
        } else {
            dropEight.classList.remove('hide')
            dropEight.classList.add('show')
        }
}

sEight.addEventListener('click', dEight)


function addPics() {
var laptop = document.createElement('img')
laptop.src = 'laptop.svg'
laptop.style.width = 100 +'%'
laptop.style.height = 100 +'%'



lap.appendChild(laptop)
laptop

}

addPics()


 qOne.addEventListener('click', function() {
            if (aOne.classList.contains('show')) {

                aOne.classList.remove('show')
                aOne.classList.add('hide')
            } else {
                aOne.classList.remove('hide')
                aOne.classList.add('show')

            }
        })


 qTwo.addEventListener('click', function() {
            if (aTwo.classList.contains('show')) {

                aTwo.classList.remove('show')
                aTwo.classList.add('hide')
            } else {
                aTwo.classList.remove('hide')
                aTwo.classList.add('show')

            }
        })



 qThree.addEventListener('click', function() {
            if (aThree.classList.contains('show')) {

                aThree.classList.remove('show')
                aThree.classList.add('hide')
            } else {
                aThree.classList.remove('hide')
                aThree.classList.add('show')

            }
        })


 qFour.addEventListener('click', function() {
            if (aFour.classList.contains('show')) {

                aFour.classList.remove('show')
                aFour.classList.add('hide')
            } else {
                aFour.classList.remove('hide')
                aFour.classList.add('show')

            }
        })

qFive.addEventListener('click', function() {
            if (aFive.classList.contains('show')) {

                aFive.classList.remove('show')
                aFive.classList.add('hide')
            } else {
                aFive.classList.remove('hide')
                aFive.classList.add('show')

            }
        })


qSix.addEventListener('click', function() {
            if (aSix.classList.contains('show')) {

                aSix.classList.remove('show')
                aSix.classList.add('hide')
            } else {
                aSix.classList.remove('hide')
                aSix.classList.add('show')

            }
        })


qSeven.addEventListener('click', function() {
            if (aSeven.classList.contains('show')) {

                aSeven.classList.remove('show')
                aSeven.classList.add('hide')
            } else {
                aSeven.classList.remove('hide')
                aSeven.classList.add('show')

            }
        })


qEight.addEventListener('click', function() {
            if (aEight.classList.contains('show')) {

                aEight.classList.remove('show')
                aEight.classList.add('hide')
            } else {
                aEight.classList.remove('hide')
                aEight.classList.add('show')

            }
        })




qNine.addEventListener('click', function() {
            if (aNine.classList.contains('show')) {

                aNine.classList.remove('show')
                aNine.classList.add('hide')
            } else {
                aNine.classList.remove('hide')
                aNine.classList.add('show')

            }
        })
   
qTen.addEventListener('click', function() {
            if (aTen.classList.contains('show')) {

                aTen.classList.remove('show')
                aTen.classList.add('hide')
            } else {
                aTen.classList.remove('hide')
               aTen.classList.add('show')

            }
        })
   


        toggleBtn.addEventListener('click', function() {
            if (menuBtn.classList.contains('show')) {

                menuBtn.classList.remove('show')
                menuBtn.classList.add('hide')
            } else {
                menuBtn.classList.remove('hide')
               menuBtn.classList.add('show')

            }
        })